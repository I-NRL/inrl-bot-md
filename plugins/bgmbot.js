const bgm = require('../media/bgm.json');
const { inrl, config } = require('../lib');

inrl({
        on: "text",
        fromMe: 'public'
}, async (m, match) => {
        if (!config.BGMBOT) return;
        if (m.client.isCreator) return;
        let audios = [];
        const add = m.client.body.toLowerCase().trim().split(' ') || [m.client.body.toLowerCase().trim()];
        for (let key in bgm) {
                add.forEach(s => {
                        if (s.toLowerCase() == key.toLowerCase()) {
                                audios.push(bgm[key]);
                        }
                })
        }
        const mp3 = audios[Math.floor(Math.random() * audios.length)];
        if (!mp3) return;
        return await m.client.sendMessage(m.from, {
                audio: {
                        url: mp3.trim()
                },
                mimetype: "audio/mp4",
                ptt: true
        }, {
                quoted: m
        });
})
