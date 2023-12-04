const {
    inrl,
    extractUrlsFromString
} = require('../lib/');
const axios = require('axios');
const {
    BASE_URL
} = require('../config');

inrl({
    pattern: 'tiktok ? (.*)',
    desc: 'download medias frok Facebook',
    react: "⬇️",
    type: "downloader"
}, async (message, match) => {
try{
match = match || message.quoted.text;
    if (!match)  return await message.reply("*_give me a url_*");
    const urls = extractUrlsFromString(match);
    if(!urls[0]) return await message.send("*_Give me a valid url_*");
        let {data} = await axios(`${BASE_URL}api/tiktok?url=${urls[0]}`);
        const {status, description, video, comment, share, like } = data;
        if(!status) return await message.send("*Not Found*");
        return await message.sendReply(video, {caption:description+`\n\n*like* : ${like}\n*comment* : ${comment}\n*share* : ${share}`}, "video");
}catch(e){
return message.send(e)
}
});
