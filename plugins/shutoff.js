const {
    inrl,
    UpdateVariable,
    getVar
} = require('../lib')
const {
        exec
} = require("child_process");

inrl({
    pattern: "shutoff",
    desc: 'turn off the bot',
    type: 'owner',
    usage: 'turnoff bot',
    root: true
}, async (message, match) => {
const status = await getVar('SHUTOFF',message.client.user.number);
if(status) return await message.send("_already turned off!_");
    await UpdateVariable("SHUTOFF", true, message.client.user.number);
    await message.send('*shutting off!⚫️*');
    return exec('pm2 restart all')
});

inrl({
    pattern: "shuton",
    desc: 'turn on the bot',
    type: 'owner',
    usage: 'turnon bot',
    root: true
}, async (message, match) => {
const status = await getVar('SHUTOFF',message.client.user.number);
if(!status) return await message.send("_already turned on!_");
    await UpdateVariable("SHUTOFF", false, message.client.user.number);
    await message.send('*shutting on!⚪️*');
    return exec('pm2 restart all')
});
