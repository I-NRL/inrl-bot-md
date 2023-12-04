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
        if (message.client.command.includes('mention') || message.client.body.includes('I want to update my mention', '')) {
                if (message.client.isCreator && !message.isBot && match.toLowerCase() == 'get') {
                        return await message.send(`_${await getVar('MENTION',message.client.user.number)}_`);
                } else if (message.client.isCreator && !message.isBot && message.client.body.match('I want to update my mention')) {
                        match = message.client.body.replace('I want to update my mention', '').trim();
                        await UpdateVariable('mention', match, message.client.user.number)
                        return await message.send('_mention updated_');
                } else if (message.client.isCreator && !message.isBot) {
                        if (!match) return await message.send(`*_check formats_*\n_${config.BASE_URL}info/bot/vars_\n_*mention* get_`)
                        return await message.send(GenListMessage(match, ["I want to update my mention"], false, "\n_reply to this message and send one(1) if you want to be update!_"));
                }
        }
        if (!message.client.mention.isOwner) return;
        const content = await getVar('MENTION', message.client.user.number);
        if (!content || (content == 'null') || (content == 'false') || (content == 'off')) return;
        return await mention(message, content);
});
