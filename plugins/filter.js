const {
    inrl,
    addFilterV2,
    getFilterV2,
    removeFilter,
    getLang,
    lang
} = require('../lib');

const Config = require("../config");
inrl({
    pattern: 'filter',
    desc: lang.FILTERS.DESC,
    react: "🌝",
    type: 'filter',
    onlyGroup: true,
    fromMe : true
}, async (m) => {
    const text = m.client.text;
    const conn = m.conn;
    if (text == "get" || text == "getall") {
        if (text == "getall") {
            const res = await getFilterV2(m.from, true);
            return await m.send(res);
        } else {
            const res = await getFilterV2(m.from, false);
            return await m.send(res);
        }
    }
    if (!text.includes('=')) return await m.reply(lang.FILTERS.INVALID.format("*filter 💗=https://example.webp/sticker*\n\n"));
    const response = await addFilterV2(m.from, text);
    return await m.reply(`${response?"_success_":"_faild_"}`);
});


inrl({
    pattern: 'stop',
    desc: "remove filters fromg group",
    react: "😫",
    type: 'filter',
    onlyGroup: true,
    fromMe : true
}, async (m, match) => {
        if(!match) return await m.send('*Example*\n*stop* ```hi``` _to stop filter *hi*_\n*filter* ```get``` to get current filters thets you added');
        const res = await removeFilter(m.from, match);
        if (!res) return await m.send("_*given filter not found for this group*_");
        return await m.send("successfull");
    });


