const {
    inrl,
    GenListMessage,
    UpdateVariable,
    getLang
} = require('../lib');
let lang = getLang()

inrl({
    pattern: 'setting$',
    fromMe: true,
    DismissPrefix: true,
    type: "system",
    desc: lang.SETTINGS.DESC
}, async (m) => {
    if (m.client.text && m.client.text.length > 3) return;
    return await m.sock.sendMessage(m.from, {
        text: GenListMessage(lang.SETTINGS.LIST,
              [
                lang.SETTINGS.SPAM_DELAY,
                lang.SETTINGS.ONLINE,
                lang.SETTINGS.REACT_ALL,
                lang.SETTINGS.REACT_CMD,
                lang.SETTINGS.REACT,
                lang.SETTINGS.READ_MESSAGE,
                lang.SETTINGS.READ_CMD,
                lang.SETTINGS.BGM_BOT,
                lang.SETTINGS.MODE,
                lang.SETTINGS.BLOCK_PM,
                lang.SETTINGS.CALL_BLOCK,
                lang.SETTINGS.STATUS,
                lang.SETTINGS.SAVE_STATUS,
                lang.SETTINGS.PM_CHAT_BOT,
                lang.SETTINGS.GROUP_CHAT_BOT,
                lang.SETTINGS.PRESENCE,
                lang.SETTINGS.SUDO_ADMIN,
                lang.SETTINGS.REJECT_CALL,
                lang.SETTINGS.SPAM_WARN,
                lang.SETTINGS.BAD_WORD_WARN,
                lang.SETTINGS.BAD_WORD_BLOCK,
                lang.SETTINGS.SPAM_BLOCK
            ], false,lang.SETTINGS.TO_UPDATE)
    })
});
inrl({
    on: "text",
    fromMe: true
}, async (m, text, data) => {
    if(!m.reply_message?.fromMe || !m.reply_message?.text) return;
    if(!m.reply_message.text.includes(lang.SETTINGS.TO_UPDATE)) return;
    match = m.client.body.toLowerCase();
    if (!match.includes(lang.SETTINGS.LIST.toLowerCase())) return;
    match = match.replace(lang.SETTINGS.LIST.toLowerCase(), '').trim();
    if (match == lang.SETTINGS.SPAM_DELAY.toLowerCase()) {
        const {
            ANTI_SPAM
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${ANTI_SPAM}`, [`ANTI SPAM ${ANTI_SPAM== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == lang.SETTINGS.ONLINE.toLowerCase()) {
        const {
            ALLWAYS_ONLINE
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${ALLWAYS_ONLINE}`, [`ALLWAYS ONLINE ${ALLWAYS_ONLINE== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == lang.SETTINGS.REACT_ALL.toLowerCase()) {
        const {
            REACT
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${REACT}`, [`REACT ALL ${REACT== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == lang.SETTINGS.REACT_CMD.toLowerCase()) {
        const {
            REACT_CMD
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${REACT_CMD}`, [`REACT CMD ${REACT_CMD== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == lang.SETTINGS.REACT.toLowerCase()) {
        const {
            REACT_EMOJI
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${REACT_EMOJI}`, [`REACT EMOJIS ${REACT_EMOJI== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == lang.SETTINGS.READ_MESSAGE.toLowerCase()) {
        const {
            READ_CHAT
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${READ_CHAT}`, [`READ CHAT ${READ_CHAT== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == lang.SETTINGS.READ_CMD.toLowerCase()) {
        const {
            READ_COMMANDS
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${READ_COMMANDS}`, [`READ COMMANDS ${READ_COMMANDS == "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == lang.SETTINGS.BGM_BOT.toLowerCase()) {
        const {
            BGMBOT
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${BGMBOT}`, [`BGM BOT ${BGMBOT== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == lang.SETTINGS.MODE.toLowerCase()) {
        const {
            WORKTYPE
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${WORKTYPE}`, [`MODE ${WORKTYPE== "public"? 'private':'public'}`])
        })
    } else if (match == lang.SETTINGS.BLOCK_PM.toLowerCase()) {
        const {
            PM_BLOCK
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${PM_BLOCK}`, [`PM BLOCK ${PM_BLOCK== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == lang.SETTINGS.CALL_BLOCK.toLowerCase()) {
        const {
            CALL_BLOCK
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${CALL_BLOCK}`, [`AVOID CALLERS ${CALL_BLOCK== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == lang.SETTINGS.STATUS.toLowerCase()) {
        const {
            STATUS_VIEW
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${STATUS_VIEW}`, [`VIEW ALL STATUS ${STATUS_VIEW== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == lang.SETTINGS.SAVE_STATUS.toLowerCase()) {
        const {
            SAVE_STATUS
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${SAVE_STATUS}`, [`SAVE STATUS ${SAVE_STATUS== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == lang.SETTINGS.PM_CHAT_BOT.toLowerCase()) {
        const {
            AUTO_CHAT_PM
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${AUTO_CHAT_PM}`, [`CHAT BOT IN PM ${AUTO_CHAT_PM== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == lang.SETTINGS.GROUP_CHAT_BOT.toLowerCase()) {
        const {
            AUTO_CHAT_GRP
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${AUTO_CHAT_GRP}`, [`CHAT BOT IN GROUP ${AUTO_CHAT_GRP== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == lang.SETTINGS.PRESENCE.toLowerCase()) {
        const {
            BOT_PRESENCE
        } = data;
        switch (BOT_PRESENCE) {
            case "unavailable":
                return await m.sock.sendMessage(m.from, {
                    text: GenListMessage(`status : ${BOT_PRESENCE}`, ["AVAILABLE", "COMPOSING", "RECORDING", "PAUSED"])
                })
                break;
            case "available":
                return await m.sock.sendMessage(m.from, {
                    text: GenListMessage(`status : ${BOT_PRESENCE}`, ["UNAVAILABLE", "COMPOSING", "RECORDING", "PAUSED"])
                })
                break;
            case "composing":
                return await m.sock.sendMessage(m.from, {
                    text: GenListMessage(`status : ${BOT_PRESENCE}`, ["UNAVAILABLE", "AVAILABLE", "RECORDING", "PAUSED"])
                })
                break;
            case "recording":
                return await m.sock.sendMessage(m.from, {
                    text: GenListMessage(`status : ${BOT_PRESENCE}`, ["UNAVAILABLE", "AVAILABLE", "COMPOSING", "PAUSED"])
                })
                break;
            case "paused":
                return await m.sock.sendMessage(m.from, {
                    text: GenListMessage(`status : ${BOT_PRESENCE}`, ["UNAVAILABLE", "AVAILABLE", "COMPOSING", "RECORDING"])
                })
                break;
            default:
                break;
        }
    } else if (match == lang.SETTINGS.SUDO_ADMIN.toLowerCase()) {
        const {
            ADMIN_SUDO_ACCESS
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${ADMIN_SUDO_ACCESS}`, [`ADMIN SUDO ACCESS ${ADMIN_SUDO_ACCESS == "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == lang.SETTINGS.REJECT_CALL.toLowerCase()) {
        const {
            REJECT_CALL
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${REJECT_CALL}`, [`REJECTCALL ${REJECT_CALL == "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == lang.SETTINGS.SPAM_WARN.toLowerCase()) {
        const {
            WARN_GROUP_SPAMMERS
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${WARN_GROUP_SPAMMERS}`, [`WARN GROUP SPAMMERS ${WARN_GROUP_SPAMMERS == "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == lang.SETTINGS.BAD_WORD_WARN.toLowerCase()) {
        const {
            BAD_WORD_WARN
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${BAD_WORD_WARN}`, [`WARN INAPPROPRIATE MESSAGE SENDER ${BAD_WORD_WARN == "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == lang.SETTINGS.BAD_WORD_BLOCK.toLowerCase()) {
        const {
            BADWORD_BLOCK
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${BADWORD_BLOCK}`, [`AVOID INAPPROPRIATE MESSAGE SENDER ${BADWORD_BLOCK == "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == lang.SETTINGS.SPAM_BLOCK.toLowerCase()) {
        const {
            SPAM_BLOCK
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${SPAM_BLOCK}`, [`AVOID SPAMMERS ${SPAM_BLOCK == "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } 
});
inrl({
    on: "text",
    fromMe: true
}, async (m, text, data) => {
    if(!m.reply_message.fromMe) return;
    if (!m.client.body.includes('status')) return;
    match = m.client.body.toLowerCase();
    if (match.includes('anti spam')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("ANTI_SPAM", updt, m.client.user.number);
        return await m.reply(lang.BASE.SUCCESS);
    } else if (match.includes('allways online')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("ALLWAYS_ONLINE", updt, m.client.user.number);
        return await m.reply(lang.BASE.SUCCESS);
    } else if (match.includes('admin sudo access')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("ADMIN_SUDO_ACCESS", updt, m.client.user.number);
        return await m.reply(lang.BASE.SUCCESS);
    } else if (match.includes('react all')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("REACT", updt, m.client.user.number);
        return await m.reply(lang.BASE.SUCCESS);
    } else if (match.includes('react cmd')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("REACT_CMD", updt, m.client.user.number);
        return await m.reply(lang.BASE.SUCCESS);
    } else if (match.includes('react emojis')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("REACT_EMOJI", updt, m.client.user.number);
        return await m.reply(lang.BASE.SUCCESS);
    } else if (match.includes('read chat')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("READ_CHAT", updt, m.client.user.number);
        return await m.reply(lang.BASE.SUCCESS);
    } else if (match.includes('bgm bot')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("BGMBOT", updt, m.client.user.number);
        return await m.reply(lang.BASE.SUCCESS);
    } else if (match.includes('mode')) {
        let updt = match.split(" ").pop();
        updt = updt == "public" ? 'private' : 'public';
        await UpdateVariable("WORKTYPE", updt, m.client.user.number);
        return await m.reply("_*requested to the db*_\n```restart to run with new variable```");
    } else if (match.includes('avoid pm msgs')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("PM_BLOCK", updt, m.client.user.number);
        return await m.reply(lang.BASE.SUCCESS);
    } else if (match.includes('avoid callers')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("CALL_BLOCK", updt, m.client.user.number);
        return await m.reply(lang.BASE.SUCCESS);
    } else if (match.includes('view all status')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("STATUS_VIEW", updt, m.client.user.number);
        return await m.reply(lang.BASE.SUCCESS);
    } else if (match.includes('save status')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("SAVE_STATUS", updt, m.client.user.number);
        return await m.reply(lang.BASE.SUCCESS);
    } else if (match.includes('chat bot in pm')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("AUTO_CHAT_PM", updt, m.client.user.number);
        return await m.reply(lang.BASE.SUCCESS);
    } else if (match.includes('chat bot in group')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("AUTO_CHAT_GRP", updt, m.client.user.number);
        return await m.reply(lang.BASE.SUCCESS);
    } else if (match.includes('rejectcall')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("REJECT_CALL", updt, m.client.user.number);
        return await m.reply(lang.BASE.SUCCESS);
    } else if (match.includes('warn group spammers')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("WARN_GROUP_SPAMMERS", updt, m.client.user.number);
        return await m.reply(lang.BASE.SUCCESS);
    } else if (match.includes('warn inappropriate message sender')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("BADWORD_BLOCK", updt, m.client.user.number);
        return await m.reply(lang.BASE.SUCCESS);
    } else if (match.includes('avoid inappropriate message sender')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("REJECT_CALL", updt, m.client.user.number);
        return await m.reply(lang.BASE.SUCCESS);
    } else if (match.includes('read commands')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("READ_COMMANDS", updt, m.client.user.number);
        return await m.reply(lang.BASE.SUCCESS);
    } else if (match.includes('avoid spammers')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("SPAM_BLOCK", updt, m.client.user.number);
        return await m.reply(lang.BASE.SUCCESS);
    } else if (match.includes('available') || match.includes('composing') || match.includes('recording') || match.includes('paused')) {
        let updt = match.split(" ")[0]
        await UpdateVariable("BOT_PRESENCE", updt, m.client.user.number);
        return await m.reply(lang.BASE.SUCCESS);
    }
});
