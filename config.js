const toBool = (x) => x == 'true'
const { existsSync } = require('fs')
const { Sequelize } = require('sequelize');
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
process.env.NODE_OPTIONS = '--max_old_space_size=2560'//2.5
const DB_URL =  process.env.DATABASE_URL || '';
module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'inrl~0917aehVr79a63f0b93a369a31794b4748f4', //your ssid to run bot
    HEROKU: {
        API_KEY: process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME
    },
    BASE_URL : "https://inrl-web.onrender.com/",
    REJECT_CALL : toBool(process.env.REJECT_CALL || 'false'),
    BADWORD_BLOCK : toBool(process.env.BADWORD_BLOCK || 'true'),
    ALLWAYS_ONLINE: toBool(process.env.ALLWAYS_ONLINE || "true"),
    REACT : toBool(process.env.REACT || "true"),
    ANTI_SPAM : toBool(process.env.ANTI_SPAM || "ture"),
    SPAM_BLOCK : toBool(process.env.SPAM_BLOCK || "false"),
    PM_BLOCK : toBool(process.env.PM_BLOCK || "false"),
    BGMBOT : toBool(process.env.BGMBOT || "true"),
    CALL_BLOCK : toBool(process.env.CALL_BLOCK || "false"),
    REACT_CMD : toBool(process.env.REACT_CMD || "false"),
    REACT_EMOJI : toBool(process.env.REACT_EMOJI || "true"),
    STATUS_VIEW : toBool(process.env.STATUS_VIEW || "true"),
    ADMIN_SUDO_ACCESS: toBool(process.env.ADMIN_SUDO_ACCESS || "false"),
    READ_COMMANDS : toBool(process.env.READ_COMMANDS || "false"),
    WARN_GROUP_SPAMMERS : toBool(process.env.WARN_GROUP_SPAMMERS || "ture"),
    BAD_WORD_WARN : toBool(process.env.BAD_WORD_WARN || "true"),
    READ_CHAT : toBool(process.env.READ_CHAT ||  "false"),
    CHATBOT_PM : toBool(process.env.CHATBOT_PM || "false"),
    CHATBOT_GRP : toBool(process.env.CHATBOT_GRP || "false"),
    ERROR_MSG : toBool(process.env.ERROR_MSG || "false"),
    WARNCOUND : process.env.WARNCOUND || 2,
    ALIVE_DATA : process.env.ALIVE_DATA || "_*جنازہ  بہت   بھاری   ہو گا   میرا* 

 *میں سارے ارمان ساتھ لے کے جاؤں گا .....* 💔 now &sender_",
    BOT_INFO : process.env.BOT_INFO || "INRL-BOT-MD;INRL;https://i.imgur.com/DyLAuEh.jpg",
    WORKTYPE : process.env.WORKTYPE || "public",
    PREFIX : process.env.PREFIX || "[.,!]",
    LANG : process.env.LANG || "en",
    BLOCK_CHAT : process.env.BLOCK_CHAT || "jid@g.us,jid2@g.us",
    BOT_PRESENCE : process.env.BOT_PRESENCE || "unavailable",
    AUDIO_DATA : process.env.AUDIO_DATA || "SIGMA-BOT-MD;SIGMA;https://i.imgur.com/DyLAuEh.jpg",
    STICKER_DATA : process.env.STICKER_DATA || "SIGMA;BOT",
    SUDO : process.env.SUDO || "null",
    RMBG_KEY: process.env.RMBG_KEY,
    OPEN_AI: process.env.OPEN_AI,
    ELEVENLABS: process.env.ELEVENLABS,
    DATABASE: DB_URL ? new Sequelize(DB_URL,{dialect:'postgres',ssl:true,protocol: 'postgres', dialectOptions: {native: true,ssl:{require: true,rejectUnauthorized: false}}, logging: false}) : new Sequelize({dialect:'sqlite',storage:'./database.db',logging:false}) 
};
