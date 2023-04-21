const {
    inrl,
    sendRepeat,
    toGroup
} = require('../lib/');
inrl({
    pattern: 'repeate',
    desc: 'To senda  msg rpeatly',
    sucReact: "💯",
    category: ["system", "all"],
    fromMe :true
}, async (message, client, match) => {
    if (!message.client.isCreator) return message.reply('only for owner!')
    if (!match) return message.send("example : repeat 10,image\n _remember thets to reply to an image_");
    match = match.toLowerCase()
    let number = match.split(',')[0].trim() || match;
    await sendRepeat(number, message, client)
    await message.reply("if you use this cmd repeatly a chanse be remove your wa account so on we can't responsible for such ")
    return await client.sendMessage(client.user.id, {
        text: `⚠️dont use this cmd repeatly ⚠️\n a chanse to remove uour account from WhatsApp⚠️`
    });
});
inrl({
    pattern: 'togroup',
    desc: 'To send message as grouped format',
    sucReact: "💯",
    category: ["system", "all"],
    fromMe :true
}, async (message, client, match) => {
    if (!match) return message.send("example : togroup 50,inrl");
    match = match.toLowerCase()
    let number = match.split(',')[0] || match.trim();
    await toGroup(number, message, client)
    return await client.sendMessage(client.user.id, {
        text: `⚠️dont use this cmd repeatly ⚠️\n a chanse to remove uour account from WhatsApp⚠️`
    });
});
