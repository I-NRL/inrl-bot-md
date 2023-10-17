const toBool = (x) => x == 'true'
const { existsSync } = require('fs')
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
process.env.NODE_OPTIONS = '--max_old_space_size=2560'//2.5
module.exports = {
    SESSION_ID: process.env.SESSION_ID || "", //your ssid to run bot
    MONGO_URL : process.env.MONGO_URL||"",//must be enter your mongo url;
    HEROKU: {
        API_KEY: process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME
    },
    BASE_URL : "https://inrl-web.onrender.com/",
    PMB_MSG : "pm msgs isn't allowed",
    PMBC_MSG : "pm call isn't allowed",
    REJECT_CALL : toBool(process.env.REJECT_CALL || 'false'),
    BADWORD_BLOCK : toBool(process.env.BADWORD_BLOCK || 'false'),
    ALLWAYS_ONLINE: toBool(process.env.ALLWAYS_ONLINE || "true"),
    REACT : toBool(process.env.REACT || "true"),
    ANTI_SPAM : toBool(process.env.ANTI_SPAM || "false"),
    SPAM_BLOCK : toBool(process.env.SPAM_BLOCK || "false"),
    AUTO_BIO : toBool(process.env.AUTO_BIO || "false"),
    PM_BLOCK : toBool(process.env.PM_BLOCK || "false"),
    BGMBOT : toBool(process.env.BGMBOT || "false"),
    CALL_BLOCK : toBool(process.env.CALL_BLOCK || "false"),
    REACT_CMD : toBool(process.env.REACT_CMD || "true"),
    REACT_EMOJI : toBool(process.env.REACT_EMOJI || "true"),
    SAVE_STATUS : toBool(process.env.SAVE_STATUS || "true"),
    STATUS_VIEW : toBool(process.env.STATUS_VIEW || "true"),
    ADMIN_SUDO_ACCESS: toBool(process.env.ADMIN_SUDO_ACCESS || "false"),
    READ_COMMANDS : toBool(process.env.READ_COMMANDS || "false"),
    WARN_GROUP_SPAMMERS : toBool(process.env.WARN_GROUP_SPAMMERS || "false"),
    BAD_WORD_WARN : toBool(process.env.BAD_WORD_WARN || "false"),
    READ_CHAT : toBool(process.env.READ_CHAT ||  "false"),
    AUTO_CHAT_PM : toBool(process.env.AUTO_CHAT_PM || "true"),
    AUTO_CHAT_GRP : toBool(process.env.AUTO_CHAT_GRP || "false"),
    WARNCOUND : process.env.WARNCOUND || 3,
    ALIVE_DATA : process.env.ALIVE_DATA || "$text>_iam alive now &sender_",
    BOT_INFO : process.env.BOT_INFO || "𝙏 𝞒 𝞘 𝙇 𝞢 𝞦⁩;💕αℓєχ 💌;https://i.imgur.com/JvZrcg7.jpeg",
    WORKTYPE : process.env.WORKTYPE || "public",
    PREFIX : process.env.PREFIX || "🌹",
    WELCOME_MSG : process.env.WELCOME_MSG || "true",
    EXIT_MSG : process.env.EXIT_MSG || "true",
    LANG : process.env.LANG || "fr",
    BLOCK_CHAT : process.env.BLOCK_CHAT || "jid@g.us, jid2@g.us",//set chat similarly
    BOT_PRESENCE : process.env.BOT_PRESENCE || "composing",
    AUDIO_DATA : process.env.AUDIO_DATA || "𝙏 𝞒 𝞘 𝙇 𝞢 𝞦⁩;💕αℓєχ 💌;https://i.imgur.com/JvZrcg7.jpeg",
    STICKER_DATA : process.env.STICKER_DATA || "⁩𝙏 𝞒 𝞘 𝙇 𝞢 𝞦⁩;💕αℓєχ 💌",
    SUDO : process.env.SUDO || "237697015770"
};
