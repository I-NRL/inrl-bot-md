//update variable with Config
const toBool = (x) => x == 'true'
const { existsSync } = require('fs')
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
module.exports = {
    BASE_URL : "https://i.imgur.com/Bk5uRaj.jpeg",
    VERSION: 'V 1.0.0', // bot version
    SESSION_ID: process.env.SESSION_ID || '', //your ssid to run bot
    MONGO_URL : process.env.MONGO_URL,//must be enter your mongo url;
    HEROKU: {
        API_KEY: process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME
    },
    TUTORIAL : "\nreplit :- https://youtu.be/jwTQAQBH5mM\n\nheroku :- https://youtu.be/4WfgHllp1l8",
    WAGRP : process.env.WAGRP || 'https://chat.whatsapp.com/H7IlnOYuh0TBqAe19NDov0',
    ALLWAYS_ONLINE: process.env.ALLWAYS_ONLINE || false,
    PASSWORD : process.env.PASSWORD || 'inrl-bot~md',
    REACT : process.env.REACT || false,
    FOOTER : process.env.FOOTER || "ɪɴʀʟ-ʙᴏᴛ-ᴍᴅ",
    WARNCOUND : process.env.WARNCOUND || 5,
    ALIVE_DATA : process.env.ALIVE_DATA || "_iam alive now &sender_",
    AUTO_BIO : process.env.AUTO_BIO || "null",
    READ_CHAT : process.env.READ_CHAT ||  false,
    BOT_INFO : process.env.BOT_INFO || "919539060020;𝐍ᴇᴇʟɪ 𝐏ᴇɴɴɪ🧛🏻‍♀️;⃞⍣𝐔ʙꪆ†𝐊ɪʀᴀɴ⛤𝐒ᴇʀ⍣ꪆ;https://i.imgur.com/Bk5uRaj.jpeg",
    BGMBOT : process.env.BGMBOT || false,
    WORKTYPE : process.env.WORKTYPE || "public",
    PMB_MSG : "pm msgs isn't allowed",
    PMBC_MSG : "pm call isn't allowed",
    AUTOMUTE_MSG : "_group will been muted at @time_",
    AUTOUNMUTE_MSG : "_group will unmute at @time_",
    GIT : "https://github.com/inrl-official/inrl-bot-md",
    PM_BLOCK : process.env.PM_BLOCK || false,
    PREFIX : process.env.PREFIX || false,
    WELCOME_MSG : process.env.WELCOME_MSG || "$text>_hey bro/sis_ *&user*\nthanks for join;$image>&pp;",
    EXIT_MSG : process.env.EXIT_MSG || "$text>_goodbye _ *&user*;$image>&pp;",
    CALL_BLOCK : process.env.CALL_BLOCK || false,
    STATUS_VIEW : process.env.STATUS_VIEW || true,
    LANG : process.env.LANG || "en",
    BLOCK_CHAT : process.env.BLOCK_CHAT || "jid@g.us, jid2@g.us",//set chat similarly
    AUTO_CHAT_PM : process.env.AUTO_CHAT_PM || false,
    AUTO_CHAT_GRP : process.env.AUTO_CHAT_GRP || false,
    BOT_PRESENCE : process.env.BOT_PRESENCE || "recording",
    AUDIO_DATA : process.env.AUDIO_DATA || "ᴍᴜꜱɪᴄ;ᴋɪᴅ;https://i.imgur.com/DyLAuEh.jpg",
    STICKER_DATA : process.env.AUDIO_DATA || "inrl, inrl",
    INSTAGRAM :  process.env.INSTAGRAM || "nullX",
    CAPTION : process.env.CAPTION || "_created by @𝐍ᴇᴇʟɪ 𝐏ᴇɴɴɪ🧛🏻‍♀️_",
    SUDO : process.env.SUDO || "919539060020"
};
