//created by @inrl
const {
    inrl,
    sendPhoto,
    sendVoice,
    sendGif,
    sendBassAudio,
    sendSlowAudio,
    sendBlownAudio,
    sendDeepAudio,
    sendErrapeAudio,
    sendFastAudio,
    sendFatAudio,
    sendNightcoreAudio,
    sendReverseAudio,
    sendSquirrelAudio,
    toAudio,
    toPTT,
    toVideo,
    getLang
} = require('../lib');
let lang = getLang()
const {
    BASE_URL
} = require('../config');
inrl({
    pattern: 'photo',
    desc: lang.CONVERTER.PHOTO_DESC,
    sucReact: "⚒️",
    type: "converter"
}, async (message) => {
    if (!message.quoted.stickerMessage) return  await message.reply(lang.BASE.NEED.format("non animated sticker message"));
    if(message.reply_message.isAnimatedSticker) return  await message.reply(lang.BASE.NEED.format("please reply to a non animated sticker"));
    return await sendPhoto(message);
});
inrl({
    pattern: 'video',
    desc: lang.CONVERTER.VIDEO_DESC,
    sucReact: "⚒️",
    type: "converter"
}, async (message, match) => {
    if (!message.quoted.stickerMessage && !message.reply_message.text && !match) return message.reply(lang.BASE.NEED.format("animated sticker message"));
    if(!message.quoted.stickerMessage) return;
    if(!message.reply_message.isAnimatedSticker) return  await message.reply(lang.BASE.NEED.format("please reply to an animated sticker"));
    let media = await toVideo(await message.quoted.download())
    return await message.client.sendMessage(message.from, {
        video: media,
        mimetype: 'video/mp4',
    }, {
        quoted: message
    })
});
inrl({
    pattern: 'voice',
    desc: lang.CONVERTER.AUDIO_DESC,
    sucReact: "⚒️",
    type: "converter"
}, async (message) => {
    if (!message.quoted.audioMessage) return message.reply(lang.BASE.NEED.format("video/audio message"));
    let media = await toPTT(await message.quoted.download())
    return await message.client.sendMessage(message.from, {
        audio: media,
        mimetype: 'audio/mpeg',
        ptt: true
    }, {
        quoted: message
    })
});
inrl({
    pattern: 'gif',
    desc: lang.CONVERTER.GIF_DESC,
    sucReact: "⚒️",
    type: "converter"
}, async (message) => {
    if (!message.quoted) return;
    if (!message.quoted.stickerMessage || message.quoted.videoMessage) return message.reply(lang.BASE.NEED.format("animated sticker/video message"));
    return await sendGif(message)
});
inrl({
    pattern: 'bass',
    desc: lang.CONVERTER.AUDIO_EDIT_DESC,
    sucReact: "⚒️",
    type: "audio-edit"
}, async (message) => {
    if (!message.quoted.audio) return message.reply(lang.BASE.NEED.format("audio message"));
    return await sendBassAudio(message)
});
inrl({
    pattern: 'slow',
    desc: lang.CONVERTER.AUDIO_EDIT_DESC,
    sucReact: "⚒️",
    type: "audio-edit"
}, async (message) => {
    if (!message.quoted.audioMessage) return message.reply(lang.BASE.NEED.format("audio message"));
    
    try {
        // هنا يمكنك تنفيذ تحسينات لدالة sendSlowAudio
        await sendSlowAudio(message);

        // إذا كانت العملية ناجحة، يمكنك إرسال رد ناجح أو رمز إشارة بنجاح
        // message.reply("تم معالجة الصوت بنجاح: ✅");
    } catch (error) {
        // إذا حدث خطأ، يمكنك التعامل معه وإرسال رسالة خطأ إذا كان ذلك ضروريًا
        console.error("حدث خطأ: ", error);
        message.reply("حدث خطأ أثناء معالجة الصوت. يرجى المحاولة مرة أخرى.");
    }
});
inrl({
    pattern: 'blown',
    desc: lang.CONVERTER.AUDIO_EDIT_DESC,
    sucReact: "⚒️",
    type: "audio-edit"
}, async (message) => {
    if (!message.quoted.audioMessage) return message.reply(lang.BASE.NEED.format("audio message"));
    return await sendBlownAudio(message)
});
inrl({
    pattern: 'deep',
    desc: lang.CONVERTER.AUDIO_EDIT_DESC,
    sucReact: "⚒️",
    type: "audio-edit"
}, async (message) => {
    if (!message.quoted.audioMessage) return message.reply(lang.BASE.NEED.format("audio message"));
    return await sendDeepAudio(message);
});
inrl({
    pattern: 'earrape',
    desc: lang.CONVERTER.AUDIO_EDIT_DESC,
    sucReact: "⚒️",
    type: "audio-edit"
}, async (message) => {
    if (!message.quoted.audioMessage) return message.reply(lang.BASE.NEED.format("audio message"));
    return await sendErrapeAudio(message)
});
inrl({
    pattern: 'fast',
    desc: lang.CONVERTER.AUDIO_EDIT_DESC,
    sucReact: "⚒️",
    type: "audio-edit"
}, async (message) => {
    if (!message.quoted.audioMessage) return message.reply(lang.BASE.NEED.format("audio message"));
    return await sendFastAudio(message)
});
inrl({
    pattern: 'fat',
    desc: lang.CONVERTER.AUDIO_EDIT_DESC,
    sucReact: "⚒️",
    type: "audio-edit"
}, async (message) => {
    if (!message.quoted.audioMessage) return message.reply(lang.BASE.NEED.format("audio message"));
    return await sendFatAudio(message);
});
inrl({
    pattern: 'nightcore',
    desc: lang.CONVERTER.AUDIO_EDIT_DESC,
    sucReact: "⚒️",
    type: "audio-edit"
}, async (message) => {
    if (!message.quoted.audioMessage) return message.reply(lang.BASE.NEED.format("audio message"));
    return await sendNightcoreAudio(message);
});
inrl({
    pattern: 'reverse',
    desc: lang.CONVERTER.AUDIO_EDIT_DESC,
    sucReact: "⚒️",
    type: "audio-edit"
}, async (message) => {
    if (!message.quoted.audioMessage) return message.reply(lang.BASE.NEED.format("audio message"));
    return await sendReverseAudio(message);
});
inrl({
    pattern: 'squirrel',
    desc: lang.CONVERTER.AUDIO_EDIT_DESC,
    sucReact: "⚒️",
    type: "audio-edit"
}, async (message) => {
    if (!message.quoted.audioMessage) return message.reply(lang.BASE.NEED.format("audio message"));
    return await sendSquirrelAudio(message);
});

inrl({
    pattern: 'mp3',
    desc: lang.CONVERTER.MP3_DESC,
    sucReact: "💥",
    type: "converter"
}, (async (message) => {
    if (!message.quoted.audioMessage && !message.quoted.videoMessage) return message.reply(lang.BASE.NEED.format("video message"));
    let media = await toAudio(await message.quoted.download())
    return await message.client.sendMessage(message.from, {
        audio: media,
        mimetype: 'audio/mpeg'
    }, {
        quoted: message
    })
}));
