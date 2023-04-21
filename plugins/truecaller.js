//created by @inrl
const {
    inrl,
    truecaller
} = require('../lib/');
const got = require('got');
const {
    getVar
} = require('../lib/database/variable');
const {
    BASE_URL
} = require('../config');

inrl({
    pattern: 'true',
    desc: 'To check ping',
    sucReact: "💯",
    category: ["system", "all"],
    type: "search"
}, async (message, client, match) => {
    if (match || message.quoted) {
        let sender;
        if (message.quoted) sender = message.quoted.sender.split("@s.whatsapp.net")[0];
        let True = match.includes('@') ? match.split('@')[1] : match;
        let search = sender || True;
        let rslt = await got(`${BASE_URL}api/truecaller?number=${search}`);
        let msg = await truecaller(rslt);
        return await client.sendMessage(message.from, {
            text: msg
        }, {
            quoted: message
        })
    }
});
