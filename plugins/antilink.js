const {
    inrl,
    setAntiLink,
    removeAntiLink,
    isAdmin,
    config
} = require('../lib');
const actions = ['kick','warn','null']

inrl({
    pattern: 'antilink',
    desc: 'remove users who send links',
    react: "🖕",
    type: "manage",
    onlyGroup: true
}, async (message, match) => {
    let admin = await isAdmin(message);
    if (!config.ADMIN_SUDO_ACCESS && !message.client.isCreator) return;
    if (!admin && !message.client.isCreator) return;
    if (!match) return await message.reply("_*antilink* on/off_\n_*anilink* action warn/kick/null_");
    if(match.toLowerCase() == 'on') {
        await setAntiLink(message.jid,{enable: match.toLowerCase()})
        return await message.send(`_AntiLink Activated with action null_\n_*AntiLink action* warn/kick/null for chaning actions_`)
    } else if(match.toLowerCase() == 'off') {
        const res = await removeAntiLink(message.jid)
        return await message.send(`_AntiLink ${res ? 'Deactivated':'Deactivation faild'}_`)
    }
    if(match.toLowerCase().match('action')) {
        match = match.replace(/action/gi,'').trim();
        if(!actions.includes(match)) return await message.send('_action must be warn,kick or null_')
        await setAntiLink(message.jid,{action: match})
        return await message.send(`_Antilink Action Updated_`);
    }
});
