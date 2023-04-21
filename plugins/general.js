const {
    inrl
} = require('../lib/'), {
        BASE_URL
    } = require('../config'),
    got = require('got');
inrl({
    pattern: "gpt",
    sucReact: "🤝",
    category: ["all", "create"],
    type: "eva"
}, async (message, client, match) => {
    try {
        if (message.quoted) {
            match = match || message.quoted.text;
        }
        if (!match) return await message.reply('need text to get ai result');
        let {
            body
        } = await got(`${BASE_URL}api/chatgpt?text=${match}`);
        body = JSON.parse(body).result;
        return await client.sendMessage(message.from, {
            text: body
        });
    } catch (e) {
        return await message.send('provided API is not valid');
    }
});
inrl({
    pattern: "scan",
    sucReact: "🤝",
    category: ["all", "create"],
    type: "user"
}, async (message, client, match) => {
    let ttinullimage = `${BASE_URL}server/scan`;
    const Message = {
        image: {
            url: ttinullimage
        },
        caption: "scan within 23.5 seconds"
    };
    return await client.sendMessage(message.from, Message).catch((e) => message.reply('_undefined error_ *pleaee try again later*'));
});
inrl({
    pattern: 'jid',
    desc: 'To get jid off member',
    sucReact: "💯",
    category: ["system", "all"],
    type: "general"
}, async (message, client) => {
    if (message.quoted) {
        await client.sendMessage(message.from, {
            text: message.quoted.sender
        }, {
            quoted: message
        })
    } else {
        await client.sendMessage(message.from, {
            text: message.from
        }, {
            quoted: message
        })
    }
});
inrl({
    pattern: 'block',
    desc: 'To block a person',
    sucReact: "💯",
    category: ["system", "all"],
    type: "owner",
    fromMe :true
}, async (message, client) => {
    if (message.isGroup) {
        await client.updateBlockStatus(message.quoted.sender, "block") // Block user
    } else {
        await client.updateBlockStatus(message.from, "block")
    }
}); // Block user
inrl({
    pattern: 'unblock',
    desc: 'To unblock a person',
    sucReact: "💯",
    category: ["system", "all"],
    type: "owner",
    fromMe :true
}, async (message, client) => {
    if (!message.client.isCreator) return message.send("only for owner!");
    if (message.isGroup) {
        await client.updateBlockStatus(message.quoted.sender, "unblock") // Unblock user
    } else {
        await client.updateBlockStatus(message.from, "unblock") // Unblock user
    }
});
inrl({
    pattern: 'tagall',
    desc: 'To tag all group member',
    sucReact: "😄",
    category: ["system", "all"],
    type: "owner",
    fromMe :true,
    onlyGroup :true
}, async (message, client, match) => {
    const groupMetadata = await client.groupMetadata(message.from).catch(e => {})
    const participants = await groupMetadata.participants
    let admins = await participants.filter(v => v.admin !== null).map(v => v.id) : ''
    let msg = "╭─❮ ʜᴇy ᴀʟʟ 😛🪄 ❯ ─⊷❍\n",
        ext;
    let count = 1;
    ext = `│${message.quoted?message.quoted.text||'hi all😚':match||'hi all🤎'}\n`
    msg += (typeof ext !== 'string' ? 'hy all😚' : ext)
    for (let mem of participants) {
        msg += `│${count++}  @${mem.id.split('@')[0]}\n`
    }
    msg += "╰───────────⊷❍";
    return await client.sendMessage(message.key.remoteJid, {
        text: msg,
        mentions: participants.map(a => a.id)
    }, {
        quoted: message
    });
});
inrl({
    pattern: ['tagadmin'],
    desc: 'To tag all group member',
    sucReact: "😄",
    category: ["system", "all"],
    type: "owner",
    fromMe :true,
    onlyGroup :true
}, async (message, client, match) => {
    const groupMetadata = await client.groupMetadata(message.from).catch(e => {})
    const participants = await groupMetadata.participants
    let admins = await participants.filter(v => v.admin !== null).map(v => v.id)
    let msg = "╭─❮ ʜᴇy ᴀᴅᴍɪɴꜱ🪄 ❯ ─⊷❍\n",
        ext;
    ext = `│${message.quoted?message.quoted.text||'hi all😚':match||'hi all🤎'}\n`
    msg += (typeof ext !== 'string' ? 'hy all😚' : ext)
    let count = 1;
    for (let mem of admins) {
        msg += `│${count++}  @${mem.split('@')[0]}\n`
    }
    msg += "╰───────────⊷❍";
    return await client.sendMessage(message.key.remoteJid, {
        text: msg,
        mentions: participants.map(a => a.id)
    }, {
        quoted: message
    });
});
inrl({
    pattern: 'frd',
    desc: 'for sending a message  by thir jid',
    sucReact: "😉",
    category: ["system", "all"],
    type: "utility",
    fromMe :true
}, async (message, client, match) => {
    if (!match) {
        return client.sendMessage(message.from, {
            text: "after the (cmd) enter the jid to share your data \n_example :- forward 910123456789@s.whatsapp.net_"
        });
    }
    let jid = match;
    if (!message.quoted) return message.reply('need forwarding content! Image/video/audio/sticker/text');
    if (message.quoted.imageMessage) {
        let msg = await message.quoted.download();
        await client.sendMessage(jid, {
            image: msg
        });
    } else if (message.quoted.stickerMessage) {
        let msg = await message.quoted.download();
        await client.sendMessage(jid, {
            sticker: msg
        });
    } else if (message.quoted.videoMessage) {
        let msg = await message.quoted.download();
        await client.sendMessage(jid, {
            video: msg
        });
    } else if (message.quoted.audioMessage) {
        let msg = await message.quoted.download();
        await client.sendMessage(jid, {
            audio: msg
        });
    } else {
        return await client.sendMessage(message.from, {
            text: "replay to a message with a jid"
        });
    }
});
inrl({
    pattern: 'whois',
    desc: 'it send information of user',
    sucReact: "💯",
    category: ["system", "all"],
    type: "utility",
    fromMe :true
}, async (message, client, match) => {
    try {
        let pp, from, cap;
        if (message.isGroup) {
            if (!message.quoted) return;
            from = message.quoted.sender;
            try {
                pp = await client.profilePictureUrl(from, 'image')
            } catch {
                pp = 'https://i.ibb.co/gdp7HrS/8390ad4fefbd.jpg'
            }
            //let { id, name } = message.conn.user;
            let {
                status,
                setAt
            } = await client.fetchStatus(from)
            let captiOn = "```" /*user : ${name}\nid : ${id}\n*/ + `status :${status}\nstatus setAt : ${setAt}` + "```";
            await client.sendMessage(message.from, {
                image: {
                    url: pp
                },
                caption: captiOn
            }, {
                quoted: message
            });
        } else {
            from = message.from;
            try {
                pp = await client.profilePictureUrl(from, 'image')
            } catch {
                pp = 'https://i.ibb.co/gdp7HrS/8390ad4fefbd.jpg'
            }
            //let { id, name } = message.conn.user;
            let {
                status,
                setAt
            } = await client.fetchStatus(from)
            let captiOn = "```" /*user : ${name}\nid : ${id}\n*/ + `status :${status}\nstatus setAt : ${setAt}` + "```";
            await client.sendMessage(message.from, {
                image: {
                    url: pp
                },
                caption: captiOn
            }, {
                quoted: message
            });
        }
    } catch (e) {
        message.reply('error\n' + e)
    }
});
