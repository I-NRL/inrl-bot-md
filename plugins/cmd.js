const {
    inrl,
    setCmd,
    DeleteCmd,
    getCmd,
    lang
} = require("../lib")

inrl({
    pattern: 'setcmd',
    desc: lang.MEDIA_CMD.SET_DESC,
    react: "😛",
    type: "action",
    fromMe :true,
    media: "sticker"//you can get this type of active action from 'eval'=>() return lib.commands[0]
}, async (message, match) => {
    if (!message.reply_message.msg?.fileSha256) return message.send(lang.MEDIA_CMD.CMD_ERROR)
    if (!match) return await message.send(lang.MEDIA_CMD.NO_CMD)
    await setCmd(message.reply_message.msg.fileSha256.join(""), match)
    return await message.reply(lang.BASE.SUCCESS)
});
inrl({
    pattern: 'dltcmd',
    desc: lang.MEDIA_CMD.DEL_DESC,
    react: "💥",
    type: "action",
    fromMe :true
}, async (message, match) => {
    if (!match) return await message.send(lang.MEDIA_CMD.NO_CMD)
    await DeleteCmd(match)
    return await message.reply(lang.BASE.SUCCESS)
});
inrl({
    pattern: 'getcmd',
    desc: lang.MEDIA_CMD.GET_DESC,
    react: "💥",
    type: "action",
    fromMe :true
}, async (message, match) => {
    let data = await getCmd(),
        cmds = lang.MEDIA_CMD.CMD_LIST;
    if (!data) return message.send(lang.MEDIA_CMD.NOT_FOUND)
    let n = 1;
    data.map((b) => {
        cmds += '```'+`${n++}  ${b}`+'```'+`\n`;
    })
    return await message.reply(cmds)
});
