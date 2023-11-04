const { inrl } = require('../lib');


inrl({
        pattern: 'whois ?(.*)',
        type: 'info',
        desc: 'get user bio and image'
}, async (message, match) => {
        try {
                let user = message.reply_message.sender || match.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (!user) return message.send('_Need a User!_')
                try {
                        pp = await message.client.profilePictureUrl(user, 'image')
                } catch {
                        pp = 'https://i.imgur.com/b3hlzl5.jpg'
                }
                let status = await message.client.fetchStatus(user)
                const date = new Date(status.setAt);
                const options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric'
                };
                const setAt = date.toLocaleString('en-US', options);
                await message.send({
                        url: pp
                }, {
                        caption: `*Name :* ${await message.getName(user)}\n*About :* ${status.status}\n*About Set Date :* ${setAt}`,
                        quoted: message.data
                }, 'image')
        } catch (e) {
                return await message.send('Failed');
        }
})
