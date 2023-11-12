const { inrl, GPT } = require('../lib/');
inrl({
    pattern: "gpt",
    desc: 'get open ai chatgpt response',
    type: "eva",
    fromMe: true
}, async (message, match) => {
    if(match && match == 'clear') {
        await GPT.clear();
        return await message.send('_successfully cleard_');
    }
    match = match || message.reply_message.text;
        if (!match) return await message.reply('_please can you provide me a task_');
        return await message.send(await GPT.prompt(match));
});
