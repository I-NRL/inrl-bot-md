const {
    inrl,
    extractUrlsFromString
} = require('../lib/');
const axios = require('axios');
const {
    BASE_URL
} = require('../config');

inrl({
    pattern: 'fb ? (.*)',
    desc: 'download medias frok Facebook',
    react: "⬇️",
    type: "downloader"
}, async (message, match) => {
match = match || message.quoted.text;
    if (!match)  return await message.reply("*_give me a url_*");
    const urls = extractUrlsFromString(match);
    if(!urls[0]) return await message.send("*_Give me a valid url_*");
        let {data} = await axios(`${BASE_URL}api/fb?url=${urls[0]}`);
        const {status, description, url } = data;
        if(!status) return await message.send("*Not Found*");
        return await message.sendReply(url, {caption:description}, "video");
});
