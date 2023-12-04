const {
	inrl,
	isAdmin,
	isBotAdmin,
	errorMessage,
	getString,
	infoMessage,
	lang,
	config
} = require('../lib');



inrl({
	pattern: 'promote ?(.*)',
	type: 'group',
	onlyGroup: true,
	desc: lang.GROUP.PROMOTE.DESC
}, async (message, match) => {
	let admin = await isAdmin(message);
	let BotAdmin = await isBotAdmin(message);
	if (!BotAdmin) return await message.reply(lang.GROUP.BOT_ADMIN)
	if (!config.ADMIN_SUDO_ACCESS && !message.client.isCreator) return;
	if (!admin && !message.client.isCreator) return;
	if (!message.reply_message.sender) return message.reply(lang.BASE.NEED.format("user"));
	await message.client.groupParticipantsUpdate(message.jid,
		[message.reply_message.sender], "promote");
	message.client.sendMessage(message.jid, {
		text: lang.GROUP.PROMOTE.INFO.format(`@${message.reply_message.sender.split('@')[0]}`),
		mentions: [message.reply_message.sender]
	}, {
		quoted: message,
	});
});
inrl({
	pattern: 'demote ?(.*)',
	type: 'group',
	onlyGroup: true,
	desc: lang.GROUP.DEMOTE.DESC
}, async (message, match) => {
	let admin = await isAdmin(message);
	let BotAdmin = await isBotAdmin(message);
	if (!BotAdmin) return await message.reply(lang.GROUP.BOT_ADMIN)
	if (!config.ADMIN_SUDO_ACCESS && !message.client.isCreator) return;
	if (!admin && !message.client.isCreator) return;
	if (!message.reply_message.sender) return message.reply(lang.BASE.NEED.format("user"));
	await message.client.groupParticipantsUpdate(message.jid,
		[message.reply_message.sender], "demote");
	return await message.client.sendMessage(message.jid, {
		text: lang.GROUP.DEMOTE.INFO.format(`@${message.reply_message.sender.split('@')[0]}`),
		mentions: [message.reply_message.sender]
	}, {
		quoted: message,
	});
});
inrl({
	pattern: 'kick ?(.*)',
	type: 'group',
	onlyGroup: true,
	desc: lang.GROUP.KICK.DESC
}, async (message, match) => {
	let admin = await isAdmin(message);
	let BotAdmin = await isBotAdmin(message);
	let user = message.reply_message.sender || match;
	if (!user) return await message.send(lang.GROUP.KICK.HELP)
	user = user.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
	if (match != "all") {
		if (!BotAdmin) return await message.reply(lang.GROUP.BOT_ADMIN)
		if (!config.ADMIN_SUDO_ACCESS && !message.client.isCreator) return;
		if (!admin && !message.client.isCreator) return;
		await message.client.groupParticipantsUpdate(message.jid,
			[user], "remove");
		return await message.client.sendMessage(message.jid, {
			text: lang.GROUP.KICK.INFO.format(`@${user.split('@')[0]}`),
			mentions: [user]
		}, {
			quoted: message,
		});
	} else if (match.toLowerCase() == 'all') {
		if (!BotAdmin) return await message.reply(lang.GROUP.BOT_ADMIN)
		if (!config.ADMIN_SUDO_ACCESS && !message.client.isCreator) return;
		if (!admin && !message.client.isCreator) return;
		const groupMetadata = await message.client.groupMetadata(message.jid).catch(e => {})
		const participants = await groupMetadata.participants;
		let admins = await participants.filter(v => v.admin !== null).map(v => v.id);
		participants.filter((U) => !U.admin == true).map(({
			id
		}) => id).forEach(async (k) => {
			await sleep(250);
			await message.client.groupParticipantsUpdate(message.jid,
				[k], "remove");
		});
		return await message.reply('all group Participants will been kicked!')
	}
});
inrl({
	pattern: 'add ?(.*)',
	type: 'group',
	onlyGroup: true,
	desc: lang.GROUP.ADD.DESC
}, async (message, match) => {
	const BotAdmin = await isBotAdmin(message);
	const admin = await isAdmin(message);
	match = message.reply_message.sender || match;
	if (!match) return await message.reply(lang.BASE.NEED.format("user"));
	match = match.replaceAll(' ', '');
	if (!BotAdmin) return await message.reply(lang.GROUP.BOT_ADMIN)
	if (!config.ADMIN_SUDO_ACCESS && !message.client.isCreator) return;
	if (!admin && !message.client.isCreator) return;
	if (match) {
		let users = match.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
		let info = await message.client.onWhatsApp(users);
		ex = info.map((jid) => jid.jid);
		if (!ex.includes(users)) return await message.reply(lang.GROUP.ADD.NOT_FOUND);
		const su = await message.client.groupParticipantsUpdate(message.jid,
			[users], "add");
		if (su[0].status == 403) {
			message.reply(lang.GROUP.ADD.INVITE);
			return await message.sendGroupInviteMessageRequst(users.replace('@s.whatsapp.net', ''));
		} else if (su[0].status == 408) {
			await message.client.sendMessage(message.jid, {
				text: lang.GROUP.ADD.LEFTED.format("@" + users.split('@')[0]),
				mentions: [users]
			}, {
				quoted: message,
			});
			const code = await message.client.groupInviteCode(message.jid);
			return await message.client.sendMessage(users, {
				text: `https://chat.whatsapp.com/${code}`
			}, {
				quoted: message
			})
		} else if (su[0].status == 401) {
			await message.client.sendMessage(message.jid, {
				text: lang.GROUP.ADD.BLOCKED.format("@" + users.split('@')[0]),
				mentions: [users]
			}, {
				quoted: message,
			});
		} else if (su[0].status == 200) {
			return await message.client.sendMessage(message.jid, {
				text: lang.GROUP.ADD.ADDED.format("@" + users.split('@')[0]),
				mentions: [users]
			}, {
				quoted: message,
			});
		} else if (su[0].status == 409) {
			return await message.client.sendMessage(message.jid, {
				text: lang.GROUP.ADD.ALLREADY.format("@" + users.split('@')[0]),
				mentions: [users]
			}, {
				quoted: message,
			});
		} else {
			return await message.reply(JSON.stringify(su));
		}
	}
});
inrl({
	pattern: 'gpp ?(.*)',
	type: 'group',
	onlyGroup: true,
	desc: lang.GROUP.GPP.DESC
}, async (message, match) => {
	const BotAdmin = await isBotAdmin(message);
	const admin = await isAdmin(message);
	if (!BotAdmin) return await message.reply(lang.GROUP.BOT_ADMIN)
	if (!config.ADMIN_SUDO_ACCESS && !message.client.isCreator) return;
	if (!admin && !message.client.isCreator) return;
	if (!message.reply_message.image) return await message.reply(lang.BASE.NEED.format("image message"));
	let _message = message.reply_message.imageMessage;
	let download = await message.client.downloadMediaMessage(_message);
	await message.client.updateProfilePicture(message.jid, download);
	return message.reply(lang.GROUP.GPP.INFO);
})
inrl({
	pattern: 'fullgpp ?(.*)',
	type: 'group',
	onlyGroup: true,
	desc: lang.GROUP.FULL_GPP.DESC
}, async (message, match) => {
	const BotAdmin = await isBotAdmin(message);
	const admin = await isAdmin(message);
	if (!BotAdmin) return await message.reply(lang.GROUP.BOT_ADMIN)
	if (!config.ADMIN_SUDO_ACCESS && !message.client.isCreator) return;
	if (!admin && !message.client.isCreator) return;
	if (!message.reply_message.image) return await message.reply(lang.BASE.NEED.format("image message"));
	let download = await message.reply_message.download();
	await message.updateProfilePicture(message.jid, download);
	return message.reply(lang.GROUP.FULL_GPP.INFO);
});
inrl({
	pattern: 'gname ?(.*)',
	type: 'group',
	onlyGroup: true,
	desc: lang.GROUP.G_NAME.DESC
}, async (message, match) => {
	const BotAdmin = await isBotAdmin(message);
	const admin = await isAdmin(message);
	if (!BotAdmin) return await message.reply(lang.GROUP.BOT_ADMIN)
	if (!config.ADMIN_SUDO_ACCESS && !message.client.isCreator) return;
	if (!admin && !message.client.isCreator) return;
	if (message.client.text > 75) return await message.client.sendMessage(message.jid, {
		text: errorMessage(lang.GROUP.G_NAME.LENGTH_OVER)
	}, {
		quoted: message
	})
	let txt = message.client.text || " ";
	await message.client.groupUpdateSubject(message.jid, txt);
	return await message.client.sendMessage(message.jid, {
		text: lang.GROUP.G_NAME.SUCCESS
	}, {
		quoted: message
	})
});
inrl({
	pattern: 'gdesc ?(.*)',
	type: 'group',
	onlyGroup: true,
	desc: lang.GROUP.G_DESC.DESC
}, async (message, match) => {
	const BotAdmin = await isBotAdmin(message);
	const admin = await isAdmin(message);
	if (!BotAdmin) return await message.reply(lang.GROUP.BOT_ADMIN)
	if (!config.ADMIN_SUDO_ACCESS && !message.client.isCreator) return;
	if (!admin && !message.client.isCreator) return;
	if (message.client.text > 400) return await message.client.sendMessage(message.jid, {
		text: lang.GROUP.G_DESC.LENGTH_OVER
	}, {
		quoted: message
	})
	let txt = match || " ";
	await message.client.groupUpdateDescription(message.jid, txt);
	return await message.client.sendMessage(message.jid, {
		text: lang.GROUP.G_DESC.SUCCESS
	}, {
		quoted: message
	})
});
inrl({
	pattern: 'mute ?(.*)',
	type: 'group',
	onlyGroup: true,
	desc: lang.GROUP.MUTE.DESC
}, async (message, match) => {
	const BotAdmin = await isBotAdmin(message);
	const admin = await isAdmin(message);
	if (!BotAdmin) return await message.reply(lang.GROUP.BOT_ADMIN)
	if (!config.ADMIN_SUDO_ACCESS && !message.client.isCreator) return;
	if (!admin && !message.client.isCreator) return;
	await message.client.groupSettingUpdate(message.jid, "announcement");
	return await message.client.sendMessage(message.jid, {
		text: lang.GROUP.MUTE.SUCCESS
	}, {
		quoted: message
	});
});
inrl({
	pattern: 'unmute ?(.*)',
	type: 'group',
	onlyGroup: true,
	desc: lang.GROUP.UNMUTE.DESC
}, async (message, match) => {
	const BotAdmin = await isBotAdmin(message);
	const admin = await isAdmin(message);
	if (!BotAdmin) return await message.reply(lang.GROUP.BOT_ADMIN)
	if (!config.ADMIN_SUDO_ACCESS && !message.client.isCreator) return;
	if (!admin && !message.client.isCreator) return;
	await message.client.groupSettingUpdate(message.jid, "not_announcement");
	return await message.client.sendMessage(message.jid, {
		text: lang.GROUP.UNMUTE.SUCCESS
	}, {
		quoted: message
	});
});
inrl({
	pattern: 'lock ?(.*)',
	type: 'group',
	onlyGroup: true,
	desc: lang.GROUP.LOCK.DESC
}, async (message, match) => {
	const BotAdmin = await isBotAdmin(message);
	const admin = await isAdmin(message);
	if (!BotAdmin) return await message.reply(lang.GROUP.BOT_ADMIN)
	if (!config.ADMIN_SUDO_ACCESS && !message.client.isCreator) return;
	if (!admin && !message.client.isCreator) return;
	await message.client.groupSettingUpdate(message.jid, "locked");
	return await message.client.sendMessage(message.jid, {
		text: lang.GROUP.LOCK.SUCCESS
	}, {
		quoted: message
	});
});
inrl({
	pattern: 'unlock ?(.*)',
	type: 'group',
	onlyGroup: true,
	desc: lang.GROUP.UNLOCK.DESC
}, async (message, match) => {
	const BotAdmin = await isBotAdmin(message);
	const admin = await isAdmin(message);
	if (!BotAdmin) return await message.reply(lang.GROUP.BOT_ADMIN)
	if (!config.ADMIN_SUDO_ACCESS && !message.client.isCreator) return;
	if (!admin && !message.client.isCreator) return;
	await message.client.groupSettingUpdate(message.jid, "unlocked");
	return await message.client.sendMessage(message.jid, {
		text: lang.GROUP.UNLOCK.SUCCESS
	}, {
		quoted: message
	});
});
inrl({
	pattern: 'left ?(.*)',
	type: 'group',
	onlyGroup: true,
	desc: lang.GROUP.LEFT.DESC,
	fromMe: true
}, async (message, match) => {
	await message.client.groupLeave(message.jid)
});
inrl({
	pattern: 'invite ?(.*)',
	type: 'group',
	onlyGroup: true,
	desc: lang.GROUP.INVITE.DESC
}, async (message, match) => {
	const BotAdmin = await isBotAdmin(message);
	const admin = await isAdmin(message);
	if (!BotAdmin) return await message.reply(lang.GROUP.BOT_ADMIN)
	if (!config.ADMIN_SUDO_ACCESS && !message.client.isCreator) return;
	if (!admin && !message.client.isCreator) return;
	const code = await message.client.groupInviteCode(message.jid);
	return await message.client.sendMessage(message.jid, {
		text: lang.GROUP.INVITE.INFO.format(`https://chat.whatsapp.com/${code}`)
	}, {
		quoted: message
	});
});
inrl({
	pattern: 'revoke ?(.*)',
	type: 'group',
	onlyGroup: true,
	desc: lang.GROUP.REVOKE.DESC
}, async (message, match) => {
	const BotAdmin = await isBotAdmin(message);
	const admin = await isAdmin(message);
	if (!BotAdmin) return await message.reply(lang.GROUP.BOT_ADMIN)
	if (!config.ADMIN_SUDO_ACCESS && !message.client.isCreator) return;
	if (!admin && !message.client.isCreator) return;
	await message.client.groupRevokeInvite(message.jid);
	return await message.client.sendMessage(message.jid, {
		text: lang.GROUP.REVOKE.INFO
	}, {
		quoted: message
	});
});
inrl({
	pattern: 'join ?(.*)',
	type: 'owner',
	fromMe: true,
	desc: lang.GROUP.ACPT.DESC
}, async (message, match) => {
	if (!match || !match.match(/^https:\/\/chat\.whatsapp\.com\/[a-zA-Z0-9]/)) return await message.reply(lang.GROUP.ACPT.NOT_VALID);
	let urlArray = (match).trim().split("/");
	if (!urlArray[2] == 'chat.whatsapp.com') return await message.client.sendMessage(message.jid, {
		text: lang.BASE.INVALID_URL
	}, {
		quoted: message
	});
	const response = await message.client.groupAcceptInvite(urlArray[3]);
	return await message.client.sendMessage(message.jid, {
		text: lang.BASE.SUCCESS
	}, {
		quoted: message
	});
});
inrl({
	pattern: 'getinfo ?(.*)',
	type: 'group',
	desc: lang.GROUP.GET_INFO.DESC
}, async (message, match) => {
	match = match || message.reply_message.text;
	const BotAdmin = await isBotAdmin(message);
	const admin = await isAdmin(message);
	if (!BotAdmin) return await message.reply(lang.GROUP.BOT_ADMIN)
	if (!config.ADMIN_SUDO_ACCESS && !message.client.isCreator) return;
	if (!admin && !message.client.isCreator) return;
	if (!match || !match.match(/^https:\/\/chat\.whatsapp\.com\/[a-zA-Z0-9]/)) return await message.reply(lang.GROUP.GET_INFO.GIVE_URL);
	let urlArray = (match).trim().split("/")[3];
	const response = await message.client.groupGetInviteInfo(urlArray)
	return await message.client.sendMessage(message.jid, {
		text: "id: " + response.id + lang.GROUP.GET_INFO.INFO.format(response.subject, (response.owner ? response.owner.split('@')[0] : 'unknown'), response.size, response.restrict, response.announce, require('moment-timezone')(response.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss'), response.desc)
	}, {
		quoted: message
	});
});
