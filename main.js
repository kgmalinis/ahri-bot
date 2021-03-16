require("dotenv").config()

const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!';
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles)
{
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
 
client.once('ready', () => 
{
    console.log('we live on the web');
});

client.on('message', message => 
{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'howdy')
    {
        client.commands.get('howdy').execute(message, args);
    }
    else if (command == 'check')
    {
        client.commands.get('check').execute(message, args);
    }
    else if (command == 'bitsplease')
    {
        client.commands.get('bitsplease').execute(message, args);
    }
    // else if (command == 'change')
    // {
    //     client.commands.get('change').execute(message, args);
    // }
    // else if (command == 'covid')
    // {
    //     client.commands.get('covid').execute(message, args);
    // }
});

//token
client.login(process.env.BOT_TOKEN);