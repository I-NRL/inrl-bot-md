const {
    inrl,
    getBuffer,
    lang,
    config
} = require('../lib');
inrl({
    pattern: "ttp",
    type: "misc",
    desc: lang.TTP.DESC
}, async (message, match) => {
    match = match || message.reply_message.text;
    if (!match) return await message.send(lang.BASE.TEXT);
    const res = `${config.BASE_URL}api/ttp?text=${match}`
    return await message.send({url: res}, {},'image');
});
inrl({
    pattern: "attp",
    type: "misc",
    desc: lang.TTP.DESC
}, async (message, match) => {
    match = match || message.reply_message.text;
    if (!match) return await message.send(lang.BASE.TEXT);
    const res = await getBuffer(`${config.BASE_URL}api/attp?text=${match}`);
    return await message.send(res,{},'sticker');
});
