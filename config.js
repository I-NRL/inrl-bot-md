const toBool = (x) => x == 'true'
const { existsSync } = require('fs')
const { Sequelize } = require('sequelize');
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
process.env.NODE_OPTIONS = '--max_old_space_size=2560'//2.5
const DB_URL =  process.env.DATABASE_URL || '';
module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'inrl~62e014PUy5f95534b1216548a71cf6a00f02', //your ssid to run bot
    HEROKU: {
        API_KEY: process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME
    },
    BASE_URL : "https://inrl-web-fkns.onrender.com/",
    BGM_DB : process.env.BGM_DB || "null",
    REJECT_CALL : toBool(process.env.REJECT_CALL || 'false'),
    BADWORD_BLOCK : toBool(process.env.BADWORD_BLOCK || 'true'),
    ALLWAYS_ONLINE: toBool(process.env.ALLWAYS_ONLINE || "false"),
    REACT : toBool(process.env.REACT || "false"),
    PM_BLOCK : toBool(process.env.PM_BLOCK || "false"),
    BGMBOT : toBool(process.env.BGMBOT || "false"),
    CALL_BLOCK : toBool(process.env.CALL_BLOCK || "false"),
    REACT_CMD : toBool(process.env.REACT_CMD || "false"),
    REACT_EMOJI : toBool(process.env.REACT_EMOJI || "false"),
    STATUS_VIEW : toBool(process.env.STATUS_VIEW || "true"),
    ADMIN_SUDO_ACCESS: toBool(process.env.ADMIN_SUDO_ACCESS || "false"),
    READ_COMMANDS : toBool(process.env.READ_COMMANDS || "false"),
    READ_CHAT : toBool(process.env.READ_CHAT ||  "false"),
    CHATBOT_PM : toBool(process.env.CHATBOT_PM || "false"),
    CHATBOT_GRP : toBool(process.env.CHATBOT_GRP || "false"),
    ERROR_MSG : toBool(process.env.ERROR_MSG || "false"),
    AJOIN: toBool(process.env.AJOIN || 'false'),
    ANTI_DELETE: (process.env.ANTI_DELETE || 'null').trim(),
    WARNCOUND : process.env.WARNCOUND || 5,
    ALIVE_DATA : process.env.ALIVE_DATA || "_iam alive now &sender_",
    BOT_INFO : process.env.BOT_INFO || "INRL-BOT-MD;INRL;https://i.imgur.com/DyLAuEh.jpg",
    WORKTYPE : process.env.WORKTYPE || "private",
    PREFIX : process.env.PREFIX || "[.,!]",
    LANG : process.env.LANG || "en",
    PERSONAL_MESSAGE: process.env.PERSONAL_MESSAGE || "null",
    BLOCK_CHAT : process.env.BLOCK_CHAT || "null",
    BOT_PRESENCE : process.env.BOT_PRESENCE || "composing",
    AUDIO_DATA : process.env.AUDIO_DATA || "INRL-BOT-MD;INRL;https://i.imgur.com/DyLAuEh.jpg",
    STICKER_DATA : process.env.STICKER_DATA || "inrl;inrl",
    SUDO : process.env.SUDO || "923065444106",
    RMBG_KEY: process.env.RMBG_KEY,
    OPEN_AI: process.env.OPEN_AI,
    ELEVENLABS: process.env.ELEVENLABS,
    DATABASE: DB_URL ? new Sequelize(DB_URL,{dialect:'postgres',ssl:true,protocol: 'postgres', dialectOptions: {native: true,ssl:{require: true,rejectUnauthorized: false}}, logging: false}) : new Sequelize({dialect:'sqlite',storage:'./database.db',logging:false}) 
};
