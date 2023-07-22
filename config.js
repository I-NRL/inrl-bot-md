const toBool = (x) => x == 'true'
const { existsSync } = require('fs')
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
module.exports = {
    SESSION_ID: process.env.SESSION_ID || '', //your ssid to run bot
    MONGO_URL : process.env.MONGO_URL,//must be enter your mongo url;
    HEROKU: {
        API_KEY: process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME
    },
    BASE_URL : "https://inrl-web.onrender.com/",
    TUTORIAL : "\nreplit :- https://youtu.be/jwTQAQBH5mM\n\nheroku :- https://youtu.be/4WfgHllp1l8\n",
    PMB_MSG : "pm msgs isn't allowed",
    PMBC_MSG : "pm call isn't allowed",
    AUTOMUTE_MSG : "_group will been muted at @time_",
    AUTOUNMUTE_MSG : "_group will unmute at @time_",
    GIT : "https://github.com/inrl-official/inrl-bot-md",
    WAGRP : 'https://chat.whatsapp.com/ECjTvQMK5D6Bayzu6rJ7Ot',
    ALLWAYS_ONLINE: toBool(process.env.ALLWAYS_ONLINE || "true"),
    REACT : toBool(process.env.REACT || "false"),
    ANTI_SPAM : toBool(process.env.ANTI_SPAM || "true"),
    AUTO_BIO : toBool(process.env.AUTO_BIO || "false"),
    PM_BLOCK : toBool(process.env.PM_BLOCK || "false"),
    BGMBOT : toBool(process.env.BGMBOT || "false"),
    CALL_BLOCK : toBool(process.env.CALL_BLOCK || "false"),
    STATUS_VIEW : toBool(process.env.STATUS_VIEW || "true"),
    READ_CHAT : toBool(process.env.READ_CHAT ||  "true"),
    AUTO_CHAT_PM : toBool(process.env.AUTO_CHAT_PM || "false"),
    AUTO_CHAT_GRP : toBool(process.env.AUTO_CHAT_GRP || "false"),
    FOOTER : process.env.FOOTER || "ɪɴʀʟ-ʙᴏᴛ-ᴍᴅ",
    PASSWORD : process.env.PASSWORD || 'inrl-bot~md',
    WARNCOUND : process.env.WARNCOUND || 5,
    ALIVE_DATA : process.env.ALIVE_DATA || "$text>_iam alive now &sender_",
    BOT_INFO : process.env.BOT_INFO || "923406902086;INRL-BOT-MD;INRL;https://i.imgur.com/DyLAuEh.jpg",
    WORKTYPE : process.env.WORKTYPE || "private",
    PREFIX : process.env.PREFIX || false,
    WELCOME_MSG : process.env.WELCOME_MSG || "$text>_hey bro/sis_ *&user*\nthanks for join;$image>&pp;",
    EXIT_MSG : process.env.EXIT_MSG || "$text>_goodbye _ *&user*;$image>&pp;",
    LANG : process.env.LANG || "en",
    BLOCK_CHAT : process.env.BLOCK_CHAT || "jid@g.us, jid2@g.us",//set chat similarly
    BOT_PRESENCE : process.env.BOT_PRESENCE || "recording",
    AUDIO_DATA : process.env.AUDIO_DATA || "ᴍᴜꜱɪᴄ;ᴋɪᴅ;https://i.imgur.com/DyLAuEh.jpg",
    STICKER_DATA : process.env.AUDIO_DATA || "inrl;inrl",
    INSTAGRAM :  process.env.INSTAGRAM || "nullX",
    CAPTION : process.env.CAPTION || "_created by @inrl_",
    SUDO : process.env.SUDO || "923406902086"
};
