const toBool = (x) => x == 'true'
const { existsSync } = require('fs')
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
process.env.NODE_OPTIONS = '--max_old_space_size=2560'//2.5
module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'inrl~49ae6fk116fa3b3ae55c8af2e63fe5dc1024', //your ssid to run bot
    MONGO_URL : process.env.MONGO_URL||"mongodb+srv://umarnewid1:Um_030300@cluster0.mrzz9sr.mongodb.net/?retryWrites=true&w=majority",//must be enter your mongo url;
    HEROKU: {
        API_KEY: process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME
    },
    BASE_URL : "https://inrl-web.onrender.com/",
    PMB_MSG : "pm msgs isn't allowed",
    PMBC_MSG : "pm call isn't allowed",
    REJECT_CALL : toBool(process.env.REJECT_CALL || 'true'),
    BADWORD_BLOCK : toBool(process.env.BADWORD_BLOCK || 'false'),
    ALLWAYS_ONLINE: toBool(process.env.ALLWAYS_ONLINE || "false"),
    REACT : toBool(process.env.REACT || "true"),
    ANTI_SPAM : toBool(process.env.ANTI_SPAM || "false"),
    SPAM_BLOCK : toBool(process.env.SPAM_BLOCK || "false"),
    AUTO_BIO : toBool(process.env.AUTO_BIO || "treu"),
    PM_BLOCK : toBool(process.env.PM_BLOCK || "false"),
    BGMBOT : toBool(process.env.BGMBOT || "false"),
    CALL_BLOCK : toBool(process.env.CALL_BLOCK || "false"),
    REACT_CMD : toBool(process.env.REACT_CMD || "true"),
    REACT_EMOJI : toBool(process.env.REACT_EMOJI || "true"),
    SAVE_STATUS : toBool(process.env.SAVE_STATUS || "true"),
    STATUS_VIEW : toBool(process.env.STATUS_VIEW || "true"),
    ADMIN_SUDO_ACCESS: toBool(process.env.ADMIN_SUDO_ACCESS || "true"),
    READ_COMMANDS : toBool(process.env.READ_COMMANDS || "false"),
    WARN_GROUP_SPAMMERS : toBool(process.env.WARN_GROUP_SPAMMERS || "false"),
    BAD_WORD_WARN : toBool(process.env.BAD_WORD_WARN || "false"),
    READ_CHAT : toBool(process.env.READ_CHAT ||  "false"),
    AUTO_CHAT_PM : toBool(process.env.AUTO_CHAT_PM || "false"),
    AUTO_CHAT_GRP : toBool(process.env.AUTO_CHAT_GRP || "false"),
    WARNCOUND : process.env.WARNCOUND || 5,
    ALIVE_DATA : process.env.ALIVE_DATA || "$text>_iam alive now &sender_",
    BOT_INFO : process.env.BOT_INFO || "𝙰𝚌 𝙼𝚘𝚍𝚜-BOT-MD;𝙰𝚌 𝙼𝚘𝚍𝚜;https://ibb.co/wNQpVTz",
    WORKTYPE : process.env.WORKTYPE || "private",
    PREFIX : process.env.PREFIX || false,
    WELCOME_MSG : process.env.WELCOME_MSG || "$text>_hey bro/sis_ *&user*\nthanks for join;$image>&pp;",
    EXIT_MSG : process.env.EXIT_MSG || "$text>_goodbye _ *&user*;$image>&pp;",
    LANG : process.env.LANG || "en",
    BLOCK_CHAT : process.env.BLOCK_CHAT || "jid@g.us, jid2@g.us",//set chat similarly
    BOT_PRESENCE : process.env.BOT_PRESENCE || "recording",
    AUDIO_DATA : process.env.AUDIO_DATA || "𝙰𝚌 𝙼𝚘𝚍𝚜;𝙰𝚌 𝙼𝚘𝚍𝚜;https://ibb.co/wNQpVTz",
    STICKER_DATA : process.env.STICKER_DATA || "𝙰𝚌",
    SUDO : process.env.SUDO || "212614389153"
};
