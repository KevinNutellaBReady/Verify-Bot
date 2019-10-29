const Discord = require('discord.js');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

var client = new Discord.Client();

client.on('ready', () => {

    console.log(`Logged in as ${client.user.username}`);
    client.user.setActivity('Use ' + config.prefix + config.command);

});

client.on('message', (msg) => {

    const cont = msg.content,
          author = msg.member

    if(cont == config.prefix + config.command) {
        var role = msg.guild.roles.find(role => role.name === config.role);

        author.addRole(role);
        msg.reply(config.message);
    }

});


client.login(config.token);