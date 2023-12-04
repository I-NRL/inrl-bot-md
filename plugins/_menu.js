const {
    inrl,
    commands,
    send_alive,
    send_menu,
    lang,
    UpdateVariable,
    getVar
} = require('../lib')

inrl({
    pattern: 'list',
    desc: lang.LIST.DESC,
    react: "💯",
    type: 'info'
}, async (message) => {
    let b=1,c="";commands.map((e=>{e.pattern&&e.desc?c+=`${b++} *${e.pattern.replace(/[^a-zA-Z0-9,-]/g,"")}*\n_${e.desc}_\n\n`:c+=`${b++} *${e.pattern?e.pattern.replace(/[^a-zA-Z0-9,-]/g,""):''}*\n`}));
    return await message.send(c);
});

inrl({
    pattern: "menu",
    desc: lang.MENU.DESC,
    react: "📰",
    type: 'whatsapp'
}, async (message, match) => {
    return await send_menu(message, await getVar('TIME_ZONE',message.client.user.number));
});

inrl({
    pattern: "alive",
    desc: lang.ALIVE.DESC,
    react: "🥰",
    type: 'info',
    usage:lang.ALIVE.HELP
}, async (message, match) => {
    if(match == "get" && message.client.isCreator){
    return await message.send(await getVar('ALIVE_DATA',message.client.user.number));
    } else if(match && message.client.isCreator){
    await UpdateVariable("ALIVE_DATA", match, message.client.user.number);
    return await message.send('*success*');
    }
    return await send_alive(message, await getVar('ALIVE_DATA,TIME_ZONE',message.client.user.number));
});
