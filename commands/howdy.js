module.exports = 
{
    name: 'howdy',
    description: 'this is a howdy command!',
    execute(message, args)
    {
        message.channel.send('howdy partner');
    }
}