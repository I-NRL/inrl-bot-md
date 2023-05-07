const toBool = (x) => x == 'true'
const { existsSync } = require('fs')
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'inrl~3607f9uNUe76a917e3348f2a69f7dc92d778', //your ssid to run bot
    MONGO_URL : process.env.MONGO_URL,//must be enter your mongo url;
    HEROKU: {
        API_KEY: process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME
    },
    BASE_URL : "https://inrl-web.onrender.com/",
    TUTORIAL : "\nreplit :- https://youtu.be/jwTQAQBH5mM\n\nheroku :- https://youtu.be/4WfgHllp1l8",
    PMB_MSG : "pm msgs isn't allowed",
    PMBC_MSG : "pm call isn't allowed",
    AUTOMUTE_MSG : "_group will been muted at @time_",
    AUTOUNMUTE_MSG : "_group will unmute at @time_",
    GIT : "https://github.com/inrl-official/inrl-bot-md",
    WAGRP : 'https://chat.whatsapp.com/EznQoeFnVxM8lgF1hraL7Kk',
    ALLWAYS_ONLINE: toBool(process.env.ALLWAYS_ONLINE || "true"),
    REACT : toBool(process.env.REACT || "true"),
    AUTO_BIO : toBool(process.env.AUTO_BIO || "true"),
    PM_BLOCK : toBool(process.env.PM_BLOCK || "false"),
    BGMBOT : toBool(process.env.BGMBOT || "false"),
    CALL_BLOCK : toBool(process.env.CALL_BLOCK || "false"),
    STATUS_VIEW : toBool(process.env.STATUS_VIEW || "true"),
    READ_CHAT : toBool(process.env.READ_CHAT ||  "true"),
    AUTO_CHAT_PM : toBool(process.env.AUTO_CHAT_PM || "true"),
    AUTO_CHAT_GRP : toBool(process.env.AUTO_CHAT_GRP || "true"),
    FOOTER : process.env.FOOTER || "ɪɴʀʟ-ʙᴏᴛ-ᴍᴅ",
    PASSWORD : process.env.PASSWORD || 'inrl-bot~md',
    WARNCOUND : process.env.WARNCOUND || 5,
    ALIVE_DATA : process.env.ALIVE_DATA || "$text>_iam alive now &sender_",
    BOT_INFO : process.env.BOT_INFO || "914040404010;INRL-BOT-MD;INRL;https://i.imgur.com/DyLAuEh.jpg",
    WORKTYPE : process.env.WORKTYPE || "public"),
    PREFIX : process.env.PREFIX || "true"),
    WELCOME_MSG : process.env.WELCOME_MSG || "$text>_hey bro/sis_ *&user*\nthanks for join;$image>&pp;",
    EXIT_MSG : process.env.EXIT_MSG || "$text>_goodbye _ *&user*;$image>&pp;",
    LANG : process.env.LANG || "en",
    BLOCK_CHAT : process.env.BLOCK_CHAT || "jid@g.us, jid2@g.us",//set chat similarly
    BOT_PRESENCE : process.env.BOT_PRESENCE || "recording",
    AUDIO_DATA : process.env.AUDIO_DATA || "ᴍᴜꜱɪᴄ;ᴋɪᴅ;https://i.imgur.com/DyLAuEh.jpg",
    STICKER_DATA : process.env.AUDIO_DATA || "inrl;inrl",
    INSTAGRAM :  process.env.INSTAGRAM || "nullX",
    CAPTION : process.env.CAPTION || "_created by @inrl_",
    SUDO : process.env.SUDO || "91707070701010"
};
