# Github-Discord-Webhook-Format
A server that can receive GitHub webhooks and forward them to discord in a different format.

### Setup
1. Install [Node.js](https://nodejs.org/en/download/) and packages `npm i fs axios express https`
2. Get a SSL certificate and put `key.pem` and `cert.pem` in the same directory as this script OR comment out lines 7 and 8 to disable SSL
3. Create a discord webhook and paste it on line 25 of the script
4. Run the server `node webhook.js`
5. On GitHub add your server as a webhook ex: `https://markstuff.net:2020/git` with the content type `application/json`

### Notes
* You need to port forward port `2020` or whatever port you change it to
* You can change the name and profile picture of your webhook in discord settings
* View a full list of stuff you can print out by adding `console.log(json);` to line 18
* [Discord webhook format](https://discord.com/developers/docs/resources/webhook#edit-webhook-message-jsonform-params)

![](https://i.ibb.co/r4xgkS0/2021-07-12-16-03-26.png)
