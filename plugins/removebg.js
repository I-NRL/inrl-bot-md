const {
    inrl,
    remove,
    unscreen,
    config
} = require('../lib/');
let gis = require("g-i-s");
const fs = require('fs');
const {
    getVar
} = require('../lib/database/variable');
inrl({
    pattern: "rmbg",
    desc: 'To remove bg of any image',
    sucReact: "😉",
    category: ["system", "all", "create", "photo", "fun"],
    type: "converter",
    usage: "give png image without background for your img request"
}, async (message, client) => {
    let data = await getVar();
    let {
        CAPTION
    } = data.data[0]
    if (!message.quoted) return message.reply('reply to a img msg!')
    if (!message.quoted.imageMessage) return message.reply('reply to a img msg!')
    let img = await client.downloadAndSaveMediaMessage(message.quoted.imageMessage)
    let rmbgimg = await remove(fs.readFileSync(img))
    // let rmbg = await fs.writeFile('./media/rmbg/isexit.jpg', rmbgimg)
    await client.sendMessage(message.from, {
        image: rmbgimg,
        caption: CAPTION
    }, {
        quoted: message
    })
    await fs.unlinkSync(img); //return await fs.unlinkSync(rmbg);
});
inrl({
    pattern: "img",
    usage: 'send google image result for give text',
    sucReact: "🖼",
    category: ["search", "all"],
    type: "search"
}, async (message, client, match) => {
    let data = await getVar();
    let {
        CAPTION
    } = data.data[0]
    if (!match) {
        return await client.sendMessage(message.from, {
            text: 'Enter Text'
        }, {
            quoted: message
        });
    }
    gis(match, async (error, results) => {
        if (error) return;
        return await client.sendMessage(message.from, {
            image: {
                url: results[0].url
            },
            caption: CAPTION
        }, {
            quoted: message
        })
    })
});
