const {
    inrl,
    getGreet,
    setGreet
} = require('../lib')

inrl({
    pattern: "welcome",
    desc: "set welcome message",
    react: "👀",
    type: 'greetings',
    fromMe: true,
    onlyGroup: true
}, async (message, match) => {
    if(match == "get"){
    return await message.send(await getGreet(message.jid,'welcome'));
    } else if(match){
    await setGreet(message.jid, match);
    return await message.send('*success*');
    }
    return await message.send('_*welcome get*_\n_*welcome* thank you for joining &mention_\n*_welcome false_*');
});
inrl({
    pattern: "goodbye",
    desc: "set exit message",
    react: "😏",
    type: 'greetings',
    fromMe: true,
    onlyGroup: true
}, async (message, match) => {
    if(match == "get"){
    return await message.send(await getGreet(message.jid,'exit'));
    } else if(match){
        await setGreet(message.jid, match,'exit');
    return await message.send('*success*');
    }
    return await message.send('_*goodbye get*_\n_*goodbye* go out kid😶_\n*_goodbye false_*');
});
