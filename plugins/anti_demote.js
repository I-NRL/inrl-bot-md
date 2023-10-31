const {
    inrl,
    antiDromote,
    getDemote
} = require('../lib');

inrl({
    pattern: 'antidemote',
    desc: 'demote actor and re-promote demoted person',
    type: "manage",
    onlyGroup: true
}, async (message, match) => {
    if (!match) return message.reply('antidemote on/off');
    if (match != 'on' && match != 'off') return message.reply('antidemote on');
    let promote = await getDemote(message.jid)
    if (match == "on") {
        if (promote) return message.reply('_Already activated_');
        await antiDromote(message.jid, {
            status: true
        })
        return await message.reply('_activated_')
    } else if (match == "off") {
        if (!promote) return message.reply('_Already Deactivated_');
        await antiDromote(message.jid, {
            status: false
        })
        return await message.reply('_deactivated_')
    }
});
