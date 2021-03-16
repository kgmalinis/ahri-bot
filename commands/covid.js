// const fetch = require('node-fetch');

// exports.run = async(client, message, args) =>
// {
//     const params = args.join(" ");
//     if (params.length < 1) return message.reply('enter a state to get data from!');

//     let msg = await message.channel.send('*fetching information from covidtracking*');

//     try
//     {
//         const { data } = await fetch.fetch('state');
//         const returnMessage = collected.first();
//         await returnMessage.delete();
//     }
// }

// module.exports = 
// {
//     name: 'covid',
//     description: 'pandemmy stuff',
//     execute(message, args)
//     {
//         message.channel.send("current covid update for texas (that's where we're at!)");
//     }
// }