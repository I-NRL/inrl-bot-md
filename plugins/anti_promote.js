const {
    inrl,
    antiPromote,
    getPromote
} = require('../lib');

inrl({
    pattern: 'antipromote',
    desc: 'demote both promoted persone and promoter',
    type: "manage",
    onlyGroup: true
}, async (message, match) => {
    if (!match) return message.reply('antipromote on/off');
    if (match != 'on' && match != 'off') return message.reply('antipromote on');
    let promote = await getPromote(message.jid)
    if (match == "on") {
        if (promote) return message.reply('_Already activated_');
        await antiPromote(message.jid, {
            status: true
        })
        return await message.reply('_activated_')
    } else if (match == "off") {
        if (!promote) return message.reply('_Already Deactivated_');
        await antiPromote(message.jid, {
            status: false
        })
        return await message.reply('_deactivated_')
    }
});
