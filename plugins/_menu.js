const {
    inrl,
    commands,
    send_alive,
    send_menu,
    lang,
    UpdateVariable,
    getVar,
    Fancy
} = require('../lib')

inrl({
	pattern: 'list',
	desc: lang.LIST.DESC,
	react: "💯",
	type: 'info'
}, async (message) => {
	let count = 1,
		list = "";
	commands.map((cmd => {
		if (cmd.pattern && cmd.desc) {
			list += `${count++} *${cmd.pattern.replace(/[^a-zA-Z0-9,-]/g,"")}*\n_${cmd.desc}_\n\n`;
		} else {
			list += `${count++} *${cmd.pattern?cmd.pattern.replace(/[^a-zA-Z0-9,-]/g,""):''}*\n`
		}
	}));
	return await message.send(Fancy(7, list));
});

inrl({
    pattern: "menu",
    desc: lang.MENU.DESC,
    react: "📰",
    type: 'whatsapp'
}, async (message, match) => {
    return await send_menu(message, await getVar('TIME_ZONE',message.user.number));
});

inrl({
    pattern: "alive",
    desc: lang.ALIVE.DESC,
    react: "🥰",
    type: 'info',
    usage:lang.ALIVE.HELP
}, async (message, match) => {
    if(match == "get" && message.isCreator){
    return await message.send(await getVar('ALIVE_DATA',message.user.number));
    } else if(match && message.isCreator){
    await UpdateVariable("ALIVE_DATA", match, message.user.number);
    return await message.send('*success*');
    }
    return await send_alive(message, await getVar('ALIVE_DATA,TIME_ZONE',message.user.number));
});
