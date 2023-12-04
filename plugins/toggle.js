const {
        TogCmd,
        inrl,
        commands,
        sleep,
        getTog,
        lang
} = require('../lib');

inrl({
        pattern: 'toggle ?(.*)',
        fromMe: true,
        desc: lang.TOGGLE.DESC,
        type: 'misc',
}, async (message, match) => {
        if (match == 'list') {
                let res = await getTog(),
                        list = lang.TOGGLE.LIST
                if (!res) return await message.send('_Not Found_');
                let n = 1;
                res.map((b) => {
                        list += `${n++}  ${b}\n`;
                })
                return await message.reply(list)
        }
        let [cmd, tog] = match.split(' '), isIn = false;
        if (!cmd || (tog != 'off' && tog != 'on')) return await message.send(lang.TOGGLE.METHODE.format("toggle"))
        commands.map((c) => {
                if (c.pattern && c.pattern.replace(/[^a-zA-Z0-9,+-]/g, "") == cmd) {
                        isIn = true
                }
        });
        await sleep(250)
        if (!isIn) return await message.reply(lang.TOGGLE.ERROR);
        if (cmd == 'toggle') return await message.send(lang.TOGGLE.ERROR_KILL)
        await TogCmd(cmd, tog, message.client.user.number)
        return await message.send(`_${cmd} ${tog == 'on' ? 'Enabled' : 'Disabled'}._`)
})
