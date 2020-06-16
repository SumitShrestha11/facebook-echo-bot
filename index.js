const login = require("facebook-chat-api");
 
// Create simple echo bot
login({email: "<email>", password: "<password>"}, (err, api) => {
    if(err) return console.error(err);
 
    api.listenMqtt((err, message) => {
        console.log(message.body);
        api.sendMessage(message.body, message.threadID);
    });
});