const {
	inrl,
	poll,
	PREFIX
} = require('../lib');

inrl({
	pattern: 'vote|poll ?(.*)',
	desc: 'create a poll message',
	fromMe: true,
	type: "misc",
	onlyGroup: true
}, async (message, match) => {
	if (message.reply_message.i && message.reply_message.type == "pollCreationMessage") {
		const {
			status,
			res,
			total
		} = await poll(message.reply_message.data);
		if (!status) return await message.send('*Not Found*');
		let msg = "*result*\n\n";
		const obj = Object.keys(res);
		msg += `*total options: ${obj.length}*\n`;
		msg += `*total participates: ${total}*\n\n`;
		obj.map(a => msg += `*${a} :-*\n*_total votes: ${res[a].count}_*\n*_percentage: ${res[a].percentage}_*\n\n`);
		return await message.send(msg);
	}
	match = message.client.body.replace(/poll/gi, '').replace(/vote/gi, '').replace(PREFIX, '').trim();
	if (!match || !match.split(/[,|;]/)) return await message.send(`_*Example:* ${PREFIX}poll title |option1|option2|option3..._\n_*get a poll result:* ${PREFIX}poll_\n_reply to a poll message to get its result_`);
	const options = match.split(/[,|;]/).slice(1);
	const {
		participants
	} = await message.client.groupMetadata(message.jid);
	return await message.send({
		name: match.split(/[,|;]/)[0],
		values: options,
		withPrefix: false,
		onlyOnce: true,
		participates: participants.map(a => a.id),
		selectableCount: true
	}, {}, 'poll');
});
