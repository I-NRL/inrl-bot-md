//created by @inrl

const {
    inrl,
    getVar,
    isAdmin,
    isBotAdmin
} = require('../lib')
const {
    setWarn,
    ResetWarn,
    ListWarn
} = require('../lib/database/warndb')
inrl({
    pattern: 'warn',
    desc: 'To warn a user in group',
    sucReact: "😑",
    category: ["system", "all"],
    type: "action",
    fromMe :true,
    onlyGroup :true
}, async (message, client, match) => {
    let admin = await isAdmin(message, client);
    let BotAdmin = await isBotAdmin(message, client);
    if (!BotAdmin) return await message.reply('Bot must Be Admin');
    if (!admin && !message.client.isCreator) return await message.reply('Action only For admin or Owner');
    let data = await getVar();
    let {
        WARNCOUND
    } = data.data[0];
    if (message.quoted) {
        const u = message.quoted.sender;
        const g = message.from;
        const t = match || "warning";
        const d = await setWarn(u, g, t)
        let count = d.count,
            COUND = WARNCOUND;
        let remains = COUND - count;
        let warnmsg = `❏─────[ ᴡᴀʀɴɪɴɢ ]─────❏
│ Group:-${d.group}
│ User :-${d.user}
❏───────────────────❏
┏─────── INFO ───────❏
│ Reason :- ${d.reason}
│ Count :- ${d.count}
│ Remaining :- ${remains}
┗•──────────────────❏`
        await message.reply(warnmsg)
        if (remains <= "0") {
            const u = message.quoted.sender;
            const g = message.from;
            const t = match || "reset";
            const d = await ResetWarn(u, g, t)
            if(BotAdmin){
            await client.groupParticipantsUpdate(message.from, [message.quoted.sender], "remove");
            return await message.reply("_user removes from the group due to warn limit existence_")
            };
        };
    };
})
inrl({
    pattern: 'resetwarn',
    desc: 'To remove warn count of a user',
    sucReact: "💥",
    category: ["system", "all"],
    type: "action",
    fromMe :true,
    onlyGroup :true
}, async (message, client, match) => {
    if (message.quoted) {
        const u = message.quoted.sender;
        const g = message.from;
        const t = match || "reset";
        const d = await ResetWarn(u, g, t)
        return await message.reply(`_reset ${u} your warn count in ${g}_`);
    }
});
