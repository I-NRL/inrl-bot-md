//crated by @inrl
const {
    inrl,
    PASS,
    hentaivideo,
    send_vote,
    send_poll
} = require('../lib');
const {
    getVar
} = require('../lib/database/variable');
inrl({
    pattern: "vote",
    desc: 'To send a vote msg',
    sucReact: "💯",
    category: ["system", "all"],
    type: 'whatsapp',
    fromMe :true,
    usage: "to rate your question in  a group, ex:- vote heding, option1,option2,etc..",
    onlyGroup: true
}, async (message, client, text, cmd, store) => {
    return await send_vote(message, client);
});
inrl({
    pattern: "poll",
    desc: 'To send a poll msg',
    sucReact: "💯",
    category: ["system", "all"],
    type: 'whatsapp',
    fromMe :true,
    usage: "to rate your question in  a group, ex:- vote heding, option1,option2,etc..",
}, async (message, client, text) => {
    return await send_poll(message, client, text);
});
/*
inrl({
    pattern: 'hentaivideo',
    desc: "thus send random anime hot videos, asure thets bad",
    sucReact: "😕",
    category: ["anime", "18+"],
    type: '18+'
}, async (message, client) => {
    let data = await getVar();
    const {
        FOOTER,
        PREFIX,
        PASSWORD
    } = data.data[0];
    if (!message.client.isCreator) {
        await message.reply('only for owner\nblocking you🤌');
        return await client.updateBlockStatus(message.from, "block")
    }
    if (PASSWORD === PASS) {
        rslt = await hentaivideo();
        result = rslt[Math.floor(Math.random(), rslt.length)]
        let buttons = [{
            buttonId: '.hentaivideo',
            buttonText: {
                displayText: `ɴᴇxᴛ ➪`
            },
            type: 1
        }, ]
        let buttonMsg = {
            video: {
                url: result.video_1
            },
            caption: `Title : ${result.title}\n\n Category : ${result.category}\n\n Mimetype : ${result.type}\n\n Views : ${result.views_count}\n\n Shares : ${result.share_count}\n\nSource : ${result.link}\n\n Media Url : ${result.video_1}`,
            footer: FOOTER,
            buttons: buttons,
            headerType: 4
        }
        return await client.sendMessage(message.from, buttonMsg, {
            quoted: message
        })
    }
})
*/
