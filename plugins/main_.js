const {
    inrl,
    fetchJson,
    getBuffer,
    sendUrl,
    AudioMetaData,
    lang,
    toAudio,
    config
} = require('../lib');
const fs = require('fs');

inrl({
    pattern: 'url',
    desc: lang.GENERAL.URL_DESC,
    react: "⛰️",
    type: "converter"
}, async (message, match) => {
    if (!message.client.isMedia) return message.reply(lang.BASE.NEED.format('image/sticker/video/audio'));
    return await sendUrl(message, message.client);
});

inrl({
    pattern: 'take',
    desc: lang.GENERAL.TAKE_DESC,
    react: "⚒️",
    type: "utility"
}, async (message, match) => {
        if (!message.reply_message.sticker && !message.reply_message.audio && !message.reply_message.image && !message.reply_message.video) return message.reply('reply to a sticker/audio');
        if (message.reply_message.sticker || message.reply_message.image || message.reply_message.video) {
            match = match || config.STICKER_DATA;
            let media = await message.reply_message.download();
            return await message.sendSticker(message.jid, media, {
                packname: match.split(/[|,;]/)[0] || match,
                author: match.split(/[|,;]/)[1]
            });
        } else if (message.reply_message.audio) {
            const opt = {
                title: match ? match.split(/[|,;]/) ? match.split(/[|,;]/)[0] : match : config.AUDIO_DATA.split(/[|,;]/)[0] ? config.AUDIO_DATA.split(/[|,;]/)[0] : config.AUDIO_DATA,
                body: match ? match.split(/[|,;]/)[1] : config.AUDIO_DATA.split(/[|,;]/)[1],
                image: (match && match.split(/[|,;]/)[2]) ? match.split(/[|,;]/)[2] : config.AUDIO_DATA.split(/[|,;]/)[2]
            }
            const AudioMeta = await AudioMetaData(await toAudio(await message.reply_message.download()), opt);
            return await message.client.sendMessage(message.jid, {
                audio: AudioMeta,
                mimetype: 'audio/mpeg'
            }, {
                quoted: message
            });
        }
    })
inrl({
    pattern: 'emix',
    desc: lang.GENERAL.EMIX_DESC,
    react: "🤌",
    type: "create"
}, async (message, match) => {
    if (!match) return message.send(lang.GENERAL.NEED_EMOJI.format("emix"));
    if (!match.includes(/[|,;]/)) return message.send(lang.GENERAL.NEED_EMOJI.format("emix"));
    let emoji1, emoji2;
    if (match.includes(/[|,;]/)) {
        let split = match.split(/[|,;]/);
        emoji1 = split[0];
        emoji2 = split[1];
    }
    let md = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
    for (let res of md.results) {
        return await message.sendSticker(message.jid, res.url, {
                packname: config.STICKER_DATA.split(/[|,;]/)[0] || config.STICKER_DATA,
                author: config.STICKER_DATA.split(/[|,;]/)[1]
        });
    }
})
