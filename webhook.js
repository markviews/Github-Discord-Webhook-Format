var fs = require('fs');
const axios = require('axios')
var express = require('express');
var https = require('https');
var app = express();
var options = {
  cert: fs.readFileSync('cert.pem'),
  key: fs.readFileSync('key.pem')
};

app.post('/git', function (req, res) {
    var body = '';
    req.on('data', function (data) {
        body += data;
    });
    req.on('end', function () {
        const json = JSON.parse(body);

        if (json.commits != undefined) {
          json.commits.forEach(commit => {
            var args = commit.message.split("\n\n")
            var title = args[0];
            var msg = commit.message.slice(args[0].length + 2);
            if (msg == "") msg = " ";

            axios.post('https://discord.com/api/webhooks/WEBHOOK_LINK_HERE', {
                embeds: [
                  {
                    author: {
                      name: commit.author.name + " commited to " + json.repository.name,
                      icon_url: json.sender.avatar_url
                    },
                    title: title,
                    url: commit.url,
                    description: msg,
                    color: "5763719"
                  }
                ]
              }).then(res => {
                if (res.status >= 200 && res.status <= 299) console.log("Successfully sent to discord!")
                else console.log(`Failed to send.. status code: ${res.status}`)
              }).catch(error => console.error(error))

          });
        }


    });

    res.writeHead(200);
    res.end();
});

https.createServer(options, app).listen(2020);
console.log("Started server on port 2020");
