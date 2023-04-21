const {
    inrl,
    fetchJson,
    getBuffer,
    sendUrl,
    tinyUrl,
    webSs,
    pdfGen,
    BufferToFile,
    AudioMetaData
} = require('../lib')
const {
    getVar
} = require('../lib/database/variable');
const fs = require('fs');
const {
    readFile,
    writeFile
} = require('fs/promises')
inrl({
    pattern: 'url',
    desc: 'to convert image/sticker/video/audio to url',
    sucReact: "⛰️",
    category: ["all"],
    type: "converter"
}, async (message, client, match) => {
    if (!message.client.isMedia) return message.reply('reply to image/sticker/video/audio');
    return await sendUrl(message, client);
});
inrl({
    pattern: 'tinyurl',
    desc: "to convert url as small",
    sucReact: "😛",
    category: ['all'],
    type: "converter"
}, async (message, client, match) => {
    if (!match) return message.reply('need url, Example : tinyurl https://github.com/inrl-official');
    return await tinyUrl(message, client);
});
inrl({
    pattern: 'webss',
    desc: "to get web screenshot",
    sucReact: "⚒️",
    category: ["all"],
    type: "misc"
}, async (message, client, match) => {
    if (!match) return message.reply('need url, Example : webss https://github.com/inrl-official');
    return await webSs(message, client);
});
inrl({
    pattern: 'pdf',
    desc: "to get pdf of a webpage",
    sucReact: "⚒️",
    category: ["all"],
    type: "converter"
}, (async (message, client, match) => {
    if (!match) return message.reply('need url, Example : pdf https://github.com/inrl-official');
    return await pdfGen(message, client);
}))
inrl({
    pattern: 'take',
    desc: "to change aduio metadata as image/title/description",
    sucReact: "⚒️",
    category: ["all"],
    type: "utility"
}, async (message, client, match) => {
    let data = await getVar();
    let {
        AUDIO_DATA,
        STICKER_DATA
    } = data.data[0];
    try {
        if (message.quoted == undefined || null) return message.reply('reply to a sticker/audio');
        if (message.quoted.stickerMessage) {
            let pack, auth;
            if (match.includes(',')) {
                let i = match.split(',');
                pack = i[0] ? i[0] : STICKER_DATA.split(',')[0];
                auth = i[1] ? i[1] : STICKER_DATA.split(',')[1];
            } else {
                pack = match || STICKER_DATA.split(',')[0];
                auth = STICKER_DATA.split(',')[1];
            }
            let media = await message.quoted.download();
            return await client.sendFile(message.from, media, "", message, {
                asSticker: true,
                author: auth,
                packname: pack,
                categories: ["😄"],
            });
        } else if (message.quoted.audioMessage) {
            let text = message.client.text;
            if (text.includes(' ')) {
                text = text.trim()
            }
            let img = AUDIO_DATA.split(',')[2];
            if (img.includes(' ')) {
                img = img.trim()
            }
            img = text.split(',')[2] ? text.split(',')[2] : img;
            let imgForaUdio = await getBuffer(img);
            return await AudioMetaData(imgForaUdio, await message.quoted.download(), message, client);
        }
    } catch (e) {
        return await message.reply(e.toString());
    }
})
inrl({
    pattern: 'emojimix',
    desc: "two emojis to single sticker",
    sucReact: "🤌",
    category: ["all"],
    type: "create"
}, async (message, client, match) => {
    let data = await getVar();
    let {
        STICKER_DATA
    } = data.data[0];
    if (!match) return message.send('send to emojis \n\n _ex_:❣️+🥵');
    if (!match.includes('+')) return message.send('need two emojis, Example emojimix 🥺+😹');
    let emoji1, emoji2;
    if (match.includes('+')) {
        let split = match.split('+');
        emoji1 = split[0];
        emoji2 = split[1];
    }
    let md = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
    for (let res of md.results) {
        let encmedia = await client.sendImageAsSticker(message.from, res.url, message, {
            packname: STICKER_DATA.split(',')[0],
            author: STICKER_DATA.split(',')[1],
            categories: res.tags
        })
        return await fs.unlinkSync(encmedia)
    }
})
//get Labs
