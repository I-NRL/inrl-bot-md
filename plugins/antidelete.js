const {
	inrl,
	setantiDelete,
	removeantiDelete,
	getantiDelete
} = require('../lib');

inrl({
	pattern: 'antidelete ?(.*)',
	desc: 'forward deleted messages',
	react: "😁",
	type: "manage",
	onlyGroup: true,
	fromMe: true
}, async (message, match) => {
	if (!match) return message.reply('antidelete on/off');
	if (match != 'on' && match != 'off') return message.reply('antidelete on');
	const antidelete = await getantiDelete(message.jid)
	if (match == "on") {
		if (antidelete) return message.reply('_Already activated_');
		await setantiDelete(message.jid)
		return await message.reply('_activated_')
	} else if (match == "off") {
		if (!antidelete) return message.reply('_Already Deactivated_');
		await removeantiDelete(message.jid)
		return await message.reply('_deactivated_')
	}
});
