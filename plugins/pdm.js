const {
    inrl,
    getPdm,
    setpdm,
    removePdm
} = require('../lib');
const {ADMIN_SUDO_ACCESS} = require('../config');
inrl({
    pattern: 'pdm',
    desc: 'promote demote messages',
    react: "😁",
    type: "manage",
    onlyGroup: true
}, async (message, match) => {
    if (ADMIN_SUDO_ACCESS != "true" && !message.client.isCreator) return;
    if (!match) return message.reply('pdm on/off');
    if (match != 'on' && match != 'off') return message.reply('pdm on');
    let pdm = await getPdm(message.jid)
    if (match == "on") {
            if (pdm) return message.reply('_Already activated_');
            await setpdm(message.jid)
            return await message.reply('_activated_')
    } else if (match == "off") {
            if (!pdm) return message.reply('_Already Deactivated_');
            await removePdm(message.jid)
            return await message.reply('_deactivated_')
    }
});
