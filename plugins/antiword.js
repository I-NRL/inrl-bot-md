const {
    inrl,
    setAntiWord,
    removeAntiWord,
    getAntiWords,
    isAdmin
} = require('../lib');
const {ADMIN_SUDO_ACCESS} = require('../config');
const actions = ['kick','warn','null']

inrl({
    pattern: 'antiword',
    desc: 'remove users who send antiwords',
    react: "🖕",
    type: "manage",
    onlyGroup: true
}, async (message, match) => {
    let admin = await isAdmin(message);
    if (!ADMIN_SUDO_ACCESS && !message.client.isCreator) return;
    if (!admin && !message.client.isCreator) return;
    if (!match) return await message.reply("_*antiword* on/off_\n_*antiword* action warn/kick/null_\n_*antiword* hy,hi,he,ho_\n_*antiword* list_");
    if(match.toLowerCase() == 'on') {
        await setAntiWord(message.jid,{enable: match.toLowerCase()})
        return await message.send(`_antiword Activated_`)
    } else if(match.toLowerCase() == 'off') {
        const res = await removeAntiWord(message.jid)
        return await message.send(`_AntiWord ${res ? 'Deactivated':'Deactivation faild'}_`)
    } else if(match.toLowerCase() == 'list') {
        const {status,word,action} = await getAntiWords(message.jid);
        if(!status) return await message.send('_AntiWords not activated for this group_')
            return await message.send(
`_*word* : ${word}_
_*action* : ${action}_`
                )
    }
    if(match.toLowerCase().match('action')) {
        match = match.replace(/action/gi,'').trim();
        if(!actions.includes(match)) return await message.send('_action must be warn,kick or null_')
        await setAntiWord(message.jid,{action: match})
        return await message.send(`_antiword Action Updated_`);
    }
    match = match.replaceAll(' ','').toLowerCase();
    if(!match) return await message.send('_give me some words with comas_')
    await setAntiWord(message.jid,{word: match})
    return await message.send(`_antiwords Updated_`);
})
