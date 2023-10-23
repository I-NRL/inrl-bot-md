const {
	inrl,
	extractUrlsFromString,
	searchYT,
	getYTInfo,
	GenListMessage,
	AudioMetaData,
	downloadMp3,
	downloadMp4,
	getBuffer,
	toAudio,
	getLang
} = require('../lib');
let lang = getLang()

inrl({
	pattern: 'play',
	type: "downloader",
	desc: lang.YT.PLAY_DESC
}, async (m, match) => {
	match = match || message.reply_message.text;
	try {
		if (!match) return await m.send(lang.YT.NEED_TEXT);
		const url = await extractUrlsFromString(match);
		if (!url[0]) {
			const result = await searchYT(match, true);
			if (!result[0]) return await m.send(lang.BASE.ERROR.format('_Not Found_'));
			const {
				title,
				publishDate,
				viewCount,
				thumbnail
			} = await getYTInfo(result[0]);
			return await m.sendReply(thumbnail, {
				caption: GenListMessage(title, ["• video", "• video document", "• audio", "• audio document"], false, "\n_Send number as reply to download_")
			}, "image");
		} else {
			const {
				title,
				publishDate,
				viewCount,
				thumbnail
			} = await getYTInfo(url[0]);
			return await m.sendReply(thumbnail, {
				caption: GenListMessage(title, ["• video", "• video document", "• audio", "• audio document"], false, "\n_Send number as reply to download_")
			}, "image");
		}
	} catch (e) {
		return m.send(e + '_Time Out_');
	}
});
inrl({
	on: "text"
}, async (m, match, data) => {
	if (!m.reply_message?.fromMe || !m.reply_message?.text) return;
	if (!m.reply_message.text.includes('_Send number as reply to download_')) return;
	try {
		if (m.client.body.includes("• audio document")) {
			match = m.client.body.replace("• audio document", "").trim();
			await m.send(lang.BASE.DOWNLOAD.format(match));
			const result = await searchYT(match.replace('•', ''), true);
			const {
				seconds,
				title,
				thumbnail
			} = await getYTInfo(result[0]);
		        let qu = seconds<1800?"360p":"144p";
			const ress = await downloadMp3(result[0],qu);
			const AudioMeta = await AudioMetaData(await toAudio(ress),{title,image:thumbnail});
			return await m.conn.sendMessage(m.from, {
				document: AudioMeta,
				mimetype: 'audio/mpeg',
				fileName: title.replaceAll(' ', '-') + ".mp3"
			}, {
				quoted: m
			});
		} else if (m.client.body.includes("• audio")) {
			match = m.client.body.replace("• audio", "").trim();
			await m.send(lang.BASE.DOWNLOAD.format(match));
			const result = await searchYT(match.replace('•', ''), true);
			const {
				seconds,
				title,
				thumbnail
			} = await getYTInfo(result[0]);
		        let qu = seconds<1800?"360p":"144p";
			const ress = await downloadMp3(result[0],qu);
			const AudioMeta = await AudioMetaData(await toAudio(ress),{title,image:thumbnail});
			return await m.conn.sendMessage(m.jid, {
				audio: AudioMeta,
				mimetype: 'audio/mpeg',
				fileName: title.replaceAll(' ', '-') + ".mp3"
			}, {
				quoted: m
			});
		} else if (m.client.body.includes("• video document")) {
			match = m.client.body.replace("• video document", "").trim();
			await m.send(lang.BASE.DOWNLOAD.format(match));
			const result = await searchYT(match.replace('•', ''), true);
			const {
				seconds,
				title,
				thumbnail
			} = await getYTInfo(result[0]);
		        let qu = seconds<1800?"360p":"144p";
			const ress = await downloadMp4(result[0],qu);
			return await m.conn.sendMessage(m.from, {
				document: ress,
				mimetype:  'video/mp4',
				fileName: title.replaceAll(' ', '-') + ".mp4"
			}, {
				quoted: m
			});
		} else if (m.client.body.includes("• video")) {
			match = m.client.body.replace("• video", "").trim();
			await m.send(`*_downloading_*\n*_${match}_*`);
			const result = await searchYT(match.replace('•', ''), true);
			const {
				seconds,
				title,
				thumbnail
			} = await getYTInfo(result[0]);
		        let qu = seconds<1800?"360p":"144p";
			const ress = await downloadMp4(result[0], qu);
			return await m.conn.sendMessage(m.from, {
				video: ress,
				mimetype: 'video/mp4',
				fileName: title.replaceAll(' ', '-') + ".mp4",
				caption: title
			}, {
				quoted: m
			});
		}
	} catch (e) {
		console.log(e);
		return await m.send('_Error, try again!_')
	}
});
