const {
    inrl
} = require("../lib")
const {
    setCmd,
    DeleteCmd,
    getCmd
} = require('../lib/database/cmddb');
inrl({
    pattern: 'setcmd',
    desc: 'To set media as a cmd',
    sucReact: "😛",
    category: ["system", "all"],
    type: "action"
}, async (message, client, match, cmd) => {
    if (!message.client.isCreator) return message.reply('only for owner!')
    if (!message.quoted) return message.send("replay to a media")
    if (!message.quoted.msg.fileSha256) return message.send("you replayed not for a media")
    if (!match) return await message.send("for which cmd!")
    await setCmd(message.quoted.msg.fileSha256.join(""), match)
    return await message.reply("successfull")
});
inrl({
    pattern: 'dltcmd',
    desc: 'To dlt media d as alrdy set',
    sucReact: "💥",
    category: ["system", "all"],
    type: "action"
}, async (message, client, match, cmd) => {
    if (!message.client.isCreator) return message.reply('only for owner!')
    if (!match) return await message.send("which cmd!")
    await DeleteCmd(match)
    return await message.reply("successfull")
});
inrl({
    pattern: 'getcmd',
    desc: 'To dlt media d as alrdy set',
    sucReact: "💥",
    category: ["system", "all"],
    type: "action"
}, async (message, client, match, cmd) => {
    if (!message.client.isCreator) return message.reply('only for owner!')
    let data = await getCmd(),
        cmds = "";
    if (data == "no data") return message.send('no sticker cmd in your db!')
    let n = 1;
    data.map((b) => {
        cmds += `${n++}  ${b.cmd}\n`;
    })
    return await message.reply(cmds)
});
