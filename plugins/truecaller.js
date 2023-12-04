const {
	inrl,
	truecaller,
} = require('../lib/');

inrl({
	pattern: 'true ?(.*)',
	desc: 'search number on truecaller',
	type: "search",
	fromMe: true
}, async (message, match) => {
	if (match.match(/login/gi)) {
		match = match.replace(/login/gi, '');
		if (!match) return await message.send('_give me a number to send otp_');
		const msg = await truecaller.set(match);
		if (msg === true) return await message.send(`_successfully send otp to this ${match} number_\n_use *true otp* <key> to login_`);
		return await message.send(`*message:* _use *true logout* as first_\n*resone*: ${msg}`);
	} else if (match.match(/logout/gi)) {
		await truecaller.logout(match);
		return await message.send(`_successfull_`);
	} else if (match.match(/otp/gi)) {
		match = match.replace(/otp/gi, '');
		if (!match) return await message.send('_please provide an otp_');
		const msg = await truecaller.otp(match);
		if (msg === true) return await message.send(`_successfully Logined to Truecaller!!_`);
		return await message.send(`*message:* _use *true logout* as first_\n*resone*: ${msg}`);
	}
	let user = (message.client.mention.jid?.[0] || message.reply_message.mention.jid?.[0] || message.reply_message.sender || match).replace(/[^0-9]/g, '');
	if (!user) return await message.send(`_reply to a user_`)
	const res = await truecaller.search(user);
	if (!res.status) return await message.send(res.message);
	let msg = `╭─❮ ᴛʀᴜᴇᴄᴀʟʟᴇʀ ❯ ❏\n`
	delete res.status;
	for (const key in res) {
		msg += `│ ${key.toLowerCase()}: ${res[key]}\n`;
	}
	msg += `╰─❏`;
	return await message.send('```' + msg + '```', {quoted: message.data})
});
