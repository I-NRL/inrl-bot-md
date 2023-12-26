const {
        inrl,
        mention,
        getVar,
        UpdateVariable,
        GenListMessage,
        config
} = require('../lib');


inrl({
        pattern: 'mention ?(.*)',
        on: "all",
        allowBot: true,
        fromMe: 'public'
}, async (message, match) => {
        if (message.command && message.isCreator && !message.isBot && match.toLowerCase() == 'get') {
                        return await message.send(`_${await getVar('MENTION',message.user.number)}_`);
                } else if (message.isCreator && !message.isBot && message.command && message.command.includes('mention')) {
                        await UpdateVariable('mention', match, message.user.number)
                        return await message.send('_mention updated_');
                }
        if (!message.mention.isOwner) return;
        const content = await getVar('MENTION', message.user.number);
        if (!content || (content == 'null') || (content == 'false') || (content == 'off')) return;
        return await mention(message, content);
});
