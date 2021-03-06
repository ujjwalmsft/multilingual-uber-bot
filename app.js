"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const builder = require("botbuilder");
const uberBot = require('./uber-bot');
const config = require('./config');
const server = restify.createServer();
server.use(restify.queryParser());
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});
const connector = new builder.ChatConnector({
    appId: config.get('BOT_MicrosoftAppId'),
    appPassword: config.get('BOT_MicrosoftAppPassword')
});
const bot = uberBot.create(connector);
server.post('/api/messages', connector.listen());
//# sourceMappingURL=app.js.map