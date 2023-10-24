const {
       inrl,getLang
} = require('../lib');
let lang = getLang()

inrl({
    pattern: 'ping ?(.*)',
    desc: lang.PING_DESC,
    react: "💯",
    type: 'info'
}, async (message, match) => {
    const start = new Date().getTime()
    const {key} = await message.reply('Ping!')
    const end = new Date().getTime()
    return await message.editMessage(message.from,'*⚡PONG!* ' + (end - start) + ' ms', key);
});
