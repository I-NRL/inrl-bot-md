const {
    inrl,
    setAntiFake,
    removeAntiFake,
    getAntiFake,
    isAdmin
} = require('../lib')
const {ADMIN_SUDO_ACCESS} = require('../config');

inrl({
    pattern: 'antifake',
    desc: 'remove fake numbers',
    react: "🖕",
    type: "manage",
    onlyGroup: true
}, async (message, match) => {
    let admin = await isAdmin(message);
    if (!ADMIN_SUDO_ACCESS && !message.client.isCreator) return;
    if (!admin && !message.client.isCreator) return;
    if (!match) return await message.reply("_*antifake* 94,92_\n_*antifake* on/off_\n_*antifake* list_");
    if(match.toLowerCase()=='list'){
    const {data,status} = await getAntiFake(message.jid)
    return await message.send(
        `_*status* : ${status}_\n_*not allowed* : ${data}_`
        )
    }
    if(match.toLowerCase() == 'on') {
        await setAntiFake(message.jid,{enable: match.toLowerCase()})
        return await message.send(`_Antifake Activated_`)
    } else if(match.toLowerCase() == 'off') {
        const res = await removeAntiFake(message.jid)
        return await message.send(`_Antifake ${res ? 'Deactivated':'Deactivation faild'}_`)
    }
    match = match.replace(/[^0-9,!]/g, "");
    await setAntiFake(message.jid,{data: match})
    return await message.send(`_Antifake Updated_`);
});
