const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!';

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
        message.channel.send('howdy partner');
    }
    else if (command == 'check')
    {
        message.channel.send('drink ya water fix ya posture take ya vitamins');
    }
    else if (command == 'bitsplease')
    {
        message.channel.send('every saturday @ 7 cst 8) https://www.twitch.tv/gnarlolita_');
    }
});

// put token here
client.login('');
