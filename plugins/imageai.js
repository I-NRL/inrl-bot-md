const {
        inrl,
        badWordDetect,
        config,
        getJson 
} = require('../lib/');

inrl({
        pattern: '$imageai',
        desc: 'generate image with ai',
        react: "🤩",
        type: "eva"
}, async (message, match) => {
        match = match || message.reply_message.text;
        if (!match) return await message.reply('*_give me a text to generate ai image!_*');
        if (badWordDetect(match.toLowerCase())) return await message.send("_*Your request cannot be fulfilled due to the presence of obscene content in your message*_")
        return await message.sendReply(config.BASE_URL + 'api/imgai?text=' + (match.replace(/[^A-Za-z0-9 ]/g,'')||"no image logo"), {
                caption: "*result for* ```" + match + "```"
        }, "image");
});
