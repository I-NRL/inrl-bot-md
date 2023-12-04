const {
    inrl,
    setAntiBot,
    removeAntiBot,
    isAdmin,
    config
} = require('../lib');
const actions = ['kick','warn','null']

inrl({
    pattern: 'antibot',
    desc: 'remove users who use bot',
    type: "manage",
    onlyGroup: true
}, async (message, match) => {
    let admin = await isAdmin(message);
    if (!config.ADMIN_SUDO_ACCESS && !message.client.isCreator) return;
    if (!admin && !message.client.isCreator) return;
    if (!match) return await message.reply("_*AntiBot* on/off_\n_*AntiBot* action warn/kick/null_");
    if(match.toLowerCase() == 'on') {
        await setAntiBot(message.jid,{enable: match.toLowerCase()})
        return await message.send(`_AntiBot Activated with action null_\n_*AntiBot action* warn/kick/null for chaning actions_`)
    } else if(match.toLowerCase() == 'off') {
        const res = await removeAntiBot(message.jid)
        return await message.send(`_AntiBot ${res ? 'Deactivated':'Deactivation faild'}_`)
    }
    if(match.toLowerCase().match('action')) {
        match = match.replace(/action/gi,'').trim();
        if(!actions.includes(match)) return await message.send('_action must be warn,kick or null_')
        await setAntiBot(message.jid,{action: match})
        return await message.send(`_AntiBot Action Updated_`);
    }
});
