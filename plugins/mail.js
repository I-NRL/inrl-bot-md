const {
        inrl,
        getJson,
        config
} = require('../lib/');
inrl({
        pattern: '$tempmail',
        desc: 'get temporary mail for 10 minutes',
        react: "🙃",
        type: "utility"
}, async (message, match) => {
                const data = await getJson(config.BASE_URL+'api/getmail?apikey=inrl');
                if (data.status && data.result && data.result.length > 0) {
                        const tempMails = data.result.join('\n');
                        const replyMessage = `*Temporary Email Addresses:*\n\n${tempMails}\n\n use \`\`\`\checkmail <mail-address>\`\`\`\ if you want to check inbox of any temp mail used from above`;
                        return await message.send(replyMessage);
                } else {
                        return await message.send('No temporary email addresses found.');
                }
});
inrl({
        pattern: '$checkmail',
        desc: 'get temporary mail messages',
        react: "🙃",
        type: "utility"
}, async (message, match) => {
        match = match || message.reply_message.text;
        if (!match) return await message.send('Please provide some text or quote a message to get a response.');
        const mail = match.match(/[^< ]+(?=>)/g);
        if (!mail[0]) return await message.send("_give me an mail id!_");
                const data = await getJson(`${config.BASE_URL}/api/getmailinfo?email=${encodeURIComponent(mail[0])}&apikey=inrl`);
                if (data.status && data.result && data.result.length > 0) {
                        const messages = data.result.map((message) => {
                                return `
*From:* ${message.from}
*Subject:* ${message.subject}
*Date:* ${message.date}
*Body:*
${message.text}
          `;
                        }).join('\n\n---\n\n');
                        const replyMessage = `*Messages in* ${mail[0]}:\n\n${messages}`;
                        return await message.send(replyMessage);
                } else {
                        return await message.send(`No messages found in ${mail[0]}.`);
                }
});
