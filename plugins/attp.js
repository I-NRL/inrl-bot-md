const {
    inrl,
    getBuffer,
    getLang
} = require('../lib');
let lang = getLang()
const {
    BASE_URL
} = require('../config');
inrl({
    pattern: "ttp",
    type: "misc",
    desc: lang.TTP.DESC
}, async (message, match) => {
    match = match || message.reply_message.text;
    if (!match) return await message.send(lang.BASE.TEXT);
    const res = `${BASE_URL}api/ttp?text=${match}`
    return await message.client.sendMessage(message.jid, {
        image: {
            url: res
        }
    });
});
inrl({
    pattern: "attp",
    type: "misc",
    desc: lang.TTP.DESC
}, async (message, match) => {
    match = match || message.reply_message.text;
    if (!match) return await message.send(lang.BASE.TEXT);
    const res = await getBuffer(`${BASE_URL}api/attp?text=${match}`);
    return await message.client.sendFile(message.chat, res, "", message, {
        asSticker: true,
        categories: ["😑"],
    });
});
