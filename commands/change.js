module.exports = 
{
    name: 'change',
    description: 'update',
    execute(message, args)
    {
        if (message.content.includes('change')) {
            if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!');
            message.member.setNickname('');
        }
    }
}