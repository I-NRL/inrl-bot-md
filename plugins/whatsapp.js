const {
    inrl,
    getCompo,
    sleep,
    lang,
    config
} = require('../lib');


inrl({
    pattern: 'del',
    desc: lang.WHATSAPP.DLT_DESC,
    react: "⚒️",
    type: 'whatsapp',
    fromMe :true,
    onlyGroup :true
}, async (message, match) => {
        if (!message.reply_message.text) return;
        return await message.send({key: message.reply_message.data.key}, {},'delete');
});
inrl({
    pattern: 'dlt',
    desc: lang.WHATSAPP.DEL_DESC,
    react: "🤌",
    type: 'whatsapp',
    onlyGroup :true
}, async (message, match) => {
    if (match) return;
        let admin = await isAdmin(message);
        let BotAdmin = await isBotAdmin(message);
        if (!BotAdmin) return await message.reply(lang.GROUP.BOT_ADMIN);
        if(config.ADMIN_SUDO_ACCESS != "true" && !message.isCreator) return await message.reply(lang.BASE.NOT_AUTHR)
        if (!admin && !message.isCreator) return await message.reply(lang.BASE.NOT_AUTHR)
        if(!message.reply_message.msg) return message.send(lang.BASE.NEED.format("message"));
        return await message.send({key: message.reply_message.data.key}, {},'delete');
})

inrl({
    pattern: '$iswa ?(.*)',
    desc: lang.WHATSAPP.ISWA.ISWA_DISC,
    type: 'search',
}, async (m, match) => {
    match = match || m.reply_message.text
    if (!match) return await m.send(lang.WHATSAPP.ISWA.NO_NUMBER.format(".iswa 920000000x"));
    if (!match.match('x')) return await m.send(lang.WHATSAPP.ISWA.NOT_VALID.format(".iswa 920000000x"));
    let xlength = match.replace(/[0-9]/gi, '')
    if (xlength.length > 3) return await m.send(lang.WHATSAPP.ISWA.X_LENGTH)
    let count = xlength.length == 3 ? 1000 : xlength.length == 2 ? 100 : 10;
    const {key}= await m.send(lang.WHATSAPP.ISWA.WAIT);
    let ioo = await getCompo(match)
    let bcs = [],
        notFound = []
    ioo.map(async (a) => {
        let [rr] = await m.client.onWhatsApp(a)
        if (rr && rr.exists) {
            bcs.push(rr.jid);
        }
    });
    let msg = "",
        prvt = [],
        abt, n = 1;
    await sleep(2500);
    msg += lang.WHATSAPP.ISWA.EXIST.format(bcs.length,count)
        bcs.map(async (jid) => {
            abt = await m.client.fetchStatus(jid).catch((e) => {
                notFound.push(jid);
            });
            if (!abt.status) {
                prvt.push(jid)
            } else {
                msg += `${n++}. *Number :* ${jid.replace(/[^0-9]/gi,'')}\n*About :* ${abt.status}\n*Date :* ${abt.setAt.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}\n\n`
            }
        })
    await sleep(1750)
    if (prvt.length) {
        msg += lang.WHATSAPP.ISWA.PRIVACY.format(prvt.length,bcs.length)
        prvt.map((num) => {
            msg += `*Number:* ${num.replace(/[^0-9]/gi,'')}\n`
        });
    }
    await sleep(750)
    if (notFound.length) {
        msg += lang.WHATSAPP.ISWA.NOT_FOUND.format(bcs.length-n-prvt.length,bcs.length)
        notFound.map((j) => {
            msg += `*Number:* ${j.replace(/[^0-9]/gi,'')}\n`
        })
    }
    await sleep(50)
    return await m.editMessage(m.jid,msg, key)
});


inrl({
    pattern: '$nowa ?(.*)',
    desc: lang.WHATSAPP.NOWA.DESC,
    type: 'search',
}, async (m, match) => {
    match = match || m.reply_message.text
    if (!match) return await m.send(lang.WHATSAPP.NOWA.NO_NUMBER.format(".nowa 920000000x"));
    if (!match.match('x')) return await m.send(lang.WHATSAPP.NOWA.NOT_VALID.format(".nowa 920000000x"));
    let xlength = match.replace(/[0-9]/gi, '')
    if (xlength.length > 3) return await m.send(lang.WHATSAPP.NOWA.X_LENGTH)
    let count = xlength.length == 3 ? 1000 : xlength.length == 2 ? 100 : 10;
    const {key}= await m.send(lang.WHATSAPP.NOWA.WAIT);
    let ioo = await getCompo(match)
    let bcs = lang.WHATSAPP.NOWA.LIST, n=1;
    ioo.map(async (a) => {
        let [rr] = await m.client.onWhatsApp(a).catch((e)=>console.log(e))
        if (!rr) bcs += "```wa.me/"+a+"```\n";
    });
    await sleep(2000)
    bcs = bcs.replace("{}", (bcs.split('\n').length -3).toString());
    await sleep(100);
    return await m.editMessage(m.jid,bcs, key)
});

inrl({
    pattern: 'jid',
    desc: lang.USER.JID,
    react : "💯",
    type: "general"
}, async (message) => {
    if (message.reply_message.sender) {
        await message.send(message.reply_message.sender)
    } else {
        await message.send(message.from)
    }
});
inrl({
    pattern: 'block',
    desc: lang.USER.BLOCK_DESC,
    react : "💯",
    type: "owner",
    fromMe :true
}, async (message) => {
    if (message.isGroup) {
        await message.client.updateBlockStatus(message.reply_message.sender, "block") // Block user
    } else {
        await message.client.updateBlockStatus(message.from, "block")
    }
}); // Block user
inrl({
    pattern: 'unblock',
    desc: lang.USER.UNBLOCK_DESC,
    react : "💯",
    type: "owner",
    fromMe :true
}, async (message) => {
    if (message.isGroup) {
        await message.client.updateBlockStatus(message.reply_message.sender, "unblock") // Unblock user
    } else {
        await message.client.updateBlockStatus(message.from, "unblock") // Unblock user
    }
});
inrl({
    pattern: "pp",
    desc: lang.USER.PP.DESC,
    react : "😁",
    type: 'owner',
    fromMe: true
}, async (message, match) => {
        if (!message.reply_message.image) return await message.reply(lang.BASE.NEED.format("image message"));
        let download = await message.client.downloadMediaMessage(message.reply_message.image);
        await message.client.updateProfilePicture(message.botNumber, download);
        return message.reply(lang.USER.PP.SUCCESS);
});
inrl({
    pattern: "fullpp",
    desc: lang.USER.FULL_PP.DESC,
    react : "🔥",
    type: 'owner',
    fromMe: true
}, async (message, match) => {
        if (!message.reply_message.image) return await message.reply(lang.BASE.NEED.format("image message"));
        let download = await message.reply_message.download();
        await message.updateProfilePicture(message.botNumber, download);
        return message.reply(lang.USER.FULL_PP.SUCCESS);
});
