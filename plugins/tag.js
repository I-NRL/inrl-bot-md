const {
    inrl,
    getLang,
    addSpace
} = require('../lib');
let lang = getLang()

inrl({
    pattern: 'tag ?(.*)',
    desc: lang.TAG_DESC,
    type: "owner",
    onlyGroup :true,
    fromMe: true
}, async (message, match) => {
    if(!match && !message.quoted.text) return;
    const groupMetadata = await message.client.groupMetadata(message.from).catch(e => {})
    const participants = await groupMetadata.participants
    let admins = await participants.filter(v => v.admin !== null).map(v => v.id)
    if(match=="all"){
    let msg = "",
        ext;
    let count = 1;
    for (let mem of participants) {
        msg += `${addSpace(count++, 3)} @${mem.id.split('@')[0]}\n`
    }
    return await message.client.sendMessage(message.jid, {
        text: '```'+msg+'```',
        mentions: participants.map(a => a.id)
    }, {
        quoted: message
    });
    } else if (match=="admin" || match=="admins") {
    let msg = "";
    let count = 1;
    for (let mem of admins) {
        msg += `${addSpace(count++, 3)} @${mem.split('@')[0]}\n`
    }
    return await message.client.sendMessage(message.key.remoteJid, {
        text: '```'+msg+'```',
        mentions: participants.map(a => a.id)
    }, {
        quoted: message
    });
    } else if(match == "me" || match == "mee") {
           return await message.send(`@${message.client.user.number}`, {mentions: [message.client.user.jid]});
} else if(match || message.quoted.text){
        match =  message.quoted.text||match;
    if (!match) return await message.reply(lang.BASE.TEXT);
    message.client.sendMessage(message.key.remoteJid, {
        text: match,
        mentions: participants.map((a) => a.id),
    }, {
        quoted: message
    });
   } else if(message.reply_message.msg) {
          return await message.forwardMessage(message.jid, message.quoted, {contextInfo: {mentionedJid: participants.map(a => a.id)}});
  }
});
