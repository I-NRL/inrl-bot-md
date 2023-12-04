//result from https://ocr.space 
const {
    inrl,
    fetchJson,
    extractUrlsFromString,
    lang,
    config
} = require('../lib');

inrl({
    pattern: '$ocr',
    desc: lang.OCR.DESC,
    type: "eva"
}, async (m) => {
    if(!m.client.text) return await m.send("*_Need Img Url!_*");
    if(!m.reply_message.image) return await m.send(lang.OCR.NEED)
    const url = extractUrlsFromString(m.client.text);
    if(!url[0]) return await m.send("_Need Url_");
    if(!url[0].endsWith('jpg') && !url[0].endsWith('jpeg') && !url[0].endsWith('png')) return await await m.send("*_Need Img Url!_*");
    const res = await fetchJson(config.BASE_URL+'api/ocr?url='+url[0]);
    if(!res.status) return m.send("_Not Found_");
    if(!res.result) return m.send("_Error, try again!_");
        return await m.sock.sendMessage(m.from, {
            text : res.result
        }, {
            quoted: m
        })
});
