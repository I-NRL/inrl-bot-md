//result from musixmatcH 
const {
    inrl,
    fetchJson,
    lang,
    config
} = require('../lib');


inrl({
    pattern: 'lyrics',
    desc: lang.LYRICS.DESC,
    type: "search"
}, async (m,match) => {
    match = match || m.reply_message.text;
    if(!match) return await m.send(lang.BASE.TEXT);
    const res = await fetchJson(config.BASE_URL+'api/lyrics?text='+match);
    if(!res.status) return m.send(lang.BASE.ERROR.format("Not Found"));
    if(!res.result) return m.send(lang.BASE.ERROR.format(",try again"));
    const { thumb,lyrics,title,artist } = res.result, tbl= "```", tcl ="*_", tdl = "_*";
        const msg = lang.LYRICS.RESPONCE.format(tcl+artist+tdl,tcl+title+tdl)+`\n\n${tbl}${lyrics}${tbl}`;
        return await m.client.sendMessage(m.from, {
            image: {url : thumb},
            caption :msg
        }, {
            quoted: m
        })
});
