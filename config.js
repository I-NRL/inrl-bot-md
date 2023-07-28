const toBool = (x) => x == 'true'
const { existsSync } = require('fs')
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'inrl~fbd91NZzBcd705f4a523339ab7340d3657c6', //your ssid to run bot
    MONGO_URL : process.env.MONGO_URL,//must be enter your mongo url;
    HEROKU: {
        API_KEY: process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME
    },
    BASE_URL : "https://inrl-web.onrender.com/",
    PMB_MSG : "pm msgs isn't allowed",
    PMBC_MSG : "pm call isn't allowed",
    AUTOMUTE_MSG : "_group will been muted at @time_",
    AUTOUNMUTE_MSG : "_group will unmute at @time_",
    WA_GRP : process.env.WA_GRP || 'https://chat.whatsapp.com/ECjTvQMK5D6Bayzu6rJ7Ot',
    ALLWAYS_ONLINE: toBool(process.env.ALLWAYS_ONLINE || "true"),
    REACT : toBool(process.env.REACT || "false"),
    ANTI_SPAM : toBool(process.env.ANTI_SPAM || "false"),
    AUTO_BIO : toBool(process.env.AUTO_BIO || "true"),
    PM_BLOCK : toBool(process.env.PM_BLOCK || "false"),
    BGMBOT : toBool(process.env.BGMBOT || "false"),
    CALL_BLOCK : toBool(process.env.CALL_BLOCK || "true"),
    STATUS_VIEW : toBool(process.env.STATUS_VIEW || "true"),
    READ_CHAT : toBool(process.env.READ_CHAT ||  "true"),
    AUTO_CHAT_PM : toBool(process.env.AUTO_CHAT_PM || "false"),
    AUTO_CHAT_GRP : toBool(process.env.AUTO_CHAT_GRP || "false"),
    WARNCOUND : process.env.WARNCOUND || 5,
    ALIVE_DATA : process.env.ALIVE_DATA || "$text>_iam alive now &sender_",
    BOT_INFO : process.env.BOT_INFO || "© ᴀᴅᴋ ʀᴉᴄⲏᴜ ᴘᴜʙᴌᴉᴄ ʙᴏᴛ;© ī.am/ᴀᴅᴋ_ʀᴉᴄʜᴜ;https://i.imgur.com/d7S55LY.jpeg",
    WORKTYPE : process.env.WORKTYPE || "private",
    PREFIX : process.env.PREFIX || false,
    WELCOME_MSG : process.env.WELCOME_MSG || "$text>_hey bro/sis_ *&user*\nthanks for join;$image>&pp;",
    EXIT_MSG : process.env.EXIT_MSG || "$text>_goodbye _ *&user*;$image>&pp;",
    LANG : process.env.LANG || "en",
    BLOCK_CHAT : process.env.BLOCK_CHAT || "jid@g.us, jid2@g.us",//set chat similarly
    BOT_PRESENCE : process.env.BOT_PRESENCE || "recording",
    AUDIO_DATA : process.env.AUDIO_DATA || " ᴉᴛᴢ ᴍᴇ ᴀᴅᴋ_ʀᴉᴄʜᴜ;⇆        ◁ㅤㅤ ❚❚ㅤㅤ ▷        ↻                                                                                        0:09 ━━●────────── 0:19;https://i.imgur.com/d7S55LY.jpeg",
    STICKER_DATA : process.env.AUDIO_DATA || "↢𝑖𝑡𝑠᪳ 𝑚𝑒͢⍣⃟🎀⏤͟͞⛧ꪶ𝐀𝐃𝐊᪳ 𝐑𝐈𝐂𝐇𝐔ꫂ⛧͟͞⏤



𝑨 𝑴𝑶𝑫𝑼𝑳𝑨𝑹 𝑩𝑶𝑻 𝑴𝑨𝑫𝑬 𝑭𝑶𝑹 𝑾𝑯𝑨𝑻𝑺𝑨𝑷𝑷 💫



🤌𝕷𝖀𝖁 𝖄𝕺𝖀 ❤‍🩹😙



 +9162x2x22x03💖📱",
    SUDO : process.env.SUDO || "916282122603"
};
