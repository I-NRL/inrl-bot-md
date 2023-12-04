const {
    inrl,
    remove,
    lang,
    badWordDetect,
    getJson,
    config
} = require('../lib');
const fs = require('fs');

inrl({
    pattern: "rmbg",
    desc: lang.IMG.RMBG_DESC,
    react: "😉",
    type: "converter",
    usage: "give png image without background for your img request"
}, async (message, match) => {
    if (!message.reply_message.image) return message.reply('*_reply to a img msg!_*')
    let img = await message.client.downloadAndSaveMediaMessage(message.quoted.imageMessage)
    let rmbgimg = await remove(fs.readFileSync(img))
    // let rmbg = await fs.writeFile('./media/rmbg/isexit.jpg', rmbgimg)
    await message.client.sendMessage(message.chat, {
        image: rmbgimg,
    }, {
        quoted: message.data
    })
    await fs.unlinkSync(img); //return await fs.unlinkSync(rmbg);
});
inrl({
    pattern: "img",
    usage: 'send google image result for give text',
    react: "🖼",
    type: "search",
    desc : lang.IMG.IMG_DESC
}, async (message, match) => {
    if (!match) {
        return await message.client.sendMessage(message.from, {
            text: lang.BASE.TEXT
        }, {
            quoted: message
        });
    }
    if(badWordDetect(match.toLowerCase()) && !message.client.isCreator) return await message.send(lang.BASE.NOT_AUTHR)
    let [text,number] = match.split(/[;,|]/)
    if(!text) text = match;
    if(!number) number = 1;
    if(number>3 && !message.client.isCreator) return await message.reply(lang.BASE.NOT_AUTHR);
    const data = await getJson(config.BASE_URL+'api/gis?text='+text+`&count=${number}`);
    const {result} = data;
    if(!result) return await message.send('_Not Found_');
    result.map(async(url)=>{
    return await message.sendReply(url,{caption:'*result for*: ```'+text+"```"},'image');
    });
});
