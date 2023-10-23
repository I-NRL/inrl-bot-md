//created by @inrl
const {
    inrl,
    sleep,
    extractUrlsFromString,
    searchYT,
    downloadMp3,
    downloadMp4,
    GenListMessage,
    getLang,
    getYTInfo,
    getBuffer,
    AudioMetaData,
    toAudio
} = require('../lib');
let lang = getLang();


const {
    BASE_URL
} = require('../config');
inrl({
    pattern: 'song',
    type: "downloader",
    desc: lang.YT.SONG_DESC
}, async (m,match, data) => {
    try {
        match = match|| m.reply_message.text;
        if (!match) return await m.send(lang.BASE.NEED);
        const url = await extractUrlsFromString(match);
        if (!url[0]) {
            const result = await searchYT(match);
            if (!result[0]) return await m.send('_not found_');
            let msg = lang.YT.INFO_SONG,
                arr = [];
            return await m.send(GenListMessage(msg, result));
        } else {
            const {seconds,title,thumbnail} = await getYTInfo(url[0]);
            let quality = seconds<1800?"360p":"144p";
            const ress = await downloadMp3(url[0],quality);
            const AudioMeta = await AudioMetaData(await toAudio(ress),{title,image:thumbnail});
            return await m.sock.sendMessage(m.from, {
                audio: AudioMeta,
                mimetype: 'audio/mpeg'
            });
        }
    } catch (e) {
        return m.send('_Time Out_');
    }
});
inrl({
    pattern: 'video',
    type: "downloader",
    desc: lang.YT.VIDEO_DESC
}, async (m,match) => {
    try {
        match = match|| m.reply_message.text;
        if (!match) return await m.send(lang.BASE.NEED);
        const url = await extractUrlsFromString(match);
        if (!url[0]) {
            const result = await searchYT(match);
            if (!result[0]) return await m.send('_not found_');
            let msg = lang.YT.INFO_VIDEO;
            return await m.send(GenListMessage(msg, result));
        } else {
            const {seconds} = await getYTInfo(url[0]);
            let quality = seconds<1800?"360p":"144p";
            const ress = await downloadMp4(url[0],quality);
            await m.sock.sendMessage(m.from, {
                video: ress,
                mimetype: 'video/mp4'
            });
        }
    } catch (e) {
        await m.send(e)
        return m.send('_Time Out_');
    }
});
inrl({
    on: "text"
}, async (m, match, data) => {
    if (!m.quoted.fromMe) return;
    try {
        if (m.client.body.includes(lang.YT.INFO_VIDEO)) {
            match = m.client.body.replace(lang.YT.INFO_VIDEO, "").trim();
            await m.send(lang.BASE.DOWNLOAD.format(match));
            const result = await searchYT(match, true);
            const {seconds} = await getYTInfo(result[0]);
            let quality = seconds<1800?"360p":"144p";
            const ress = await downloadMp4(result[0],quality);
            return await m.sock.sendMessage(m.from, {
                video: ress,
                mimetype: 'video/mp4'
            });
        } else if (m.client.body.includes(lang.YT.INFO_SONG)) {
            match = m.client.body.replace(lang.YT.INFO_SONG, "").trim();
            await m.send(lang.BASE.DOWNLOAD.format(match));
            const result = await searchYT(match, true);
            const {seconds,title,thumbnail} = await getYTInfo(result[0]);
            let quality = seconds<1800?"360p":"144p";
            const ress = await downloadMp3(result[0],quality);
            const AudioMeta = await AudioMetaData(await toAudio(ress),{title,image:thumbnail});
            return await m.sock.sendMessage(m.jid, {
                audio: AudioMeta,
                mimetype: 'audio/mpeg'
            });
        }
    } catch (e) {
        console.log(e);
        return await m.send('_Error, try again!_')
    }
});
