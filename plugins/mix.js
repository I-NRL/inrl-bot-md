const ff = require('fluent-ffmpeg');
const {
        inrl,
        getBuffer,
        toAudio,
        extractUrlsFromString
} = require('../lib');
const fs = require('fs');
const {
        fromBuffer
} = require('file-type');
inrl({
        pattern: "mix",
        desc: 'mix image/video and audio to video',
        type: "media",
        fromMe: true
}, async (message, match) => {
        if (!message.reply_message.audio) return await message.send("_reply to audio message_");
        const ffmpeg = ff();
        let file = './media/tools/black.jpg';
        if (match && message.isMediaURL(match)) {
                const buff = await getBuffer(extractUrlsFromString(match)[0]);
                const {
                        mime
                } = await fromBuffer(buff);
                if (!['jpg', 'jpeg', 'png'].includes(mime.split('/')[1])) return await message.send("please provide a url,thet must be an image url");
                file = './media/' + mime.replace('/', '.');
                fs.writeFileSync(file, buff);
        }
        audioFile = './media/audio.mp3'
        fs.writeFileSync(audioFile, await toAudio(await message.reply_message.download()));
        ffmpeg.input(file);
        ffmpeg.input(audioFile);
        ffmpeg.output('./media/videoMixed.mp4');
        ffmpeg.on('end', async () => {
                await message.send(fs.readFileSync('./media/videoMixed.mp4'), {}, 'video');
        });
        ffmpeg.on('error', async (err) => {
                await message.reply(err);
        });
        ffmpeg.run();
});
