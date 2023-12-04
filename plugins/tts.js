const {
    inrl, TTS,
    lang
} = require('../lib');

inrl({
    pattern: 'tts',
    desc: lang.TTS_DESC,
    react: "💔",
    type: "converter"
}, async (message, match) => {
        match = match || message.reply_message.text;
        if (!match) return await message.send(lang.BASE.TEXT);
        let slang = match.match('\\{([a-z]+)\\}');
        let lang = "en";
        if (slang) {
            lang = slang[1];
            match = match.replace(slang[0], '');
        }
        return await message.client.sendMessage(message.from, {
            audio: await TTS(match,lang),
            mimetype: 'audio/ogg; codecs=opus',
            ptt: false
        });
});
