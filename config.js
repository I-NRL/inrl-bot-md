const toBool = (x) => x == 'true'
const { existsSync } = require('fs')
const { Sequelize } = require('sequelize');
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
process.env.NODE_OPTIONS = '--max_old_space_size=2560'//2.5
const DB_URL =  process.env.DATABASE_URL |postgres://koyeb-adm:VECSpz5Kyqo6@ep-empty-math-a1knd6q7.ap-southeast-1.pg.koyeb.app/koyebdb| '';
module.exports = {
    SESSION_ID: process.env.SESSION_ID |inrl~97841Ozvv47f3c8b61c75255496979b022e8| '', //your ssid to run bot
    HEROKU: {
        API_KEY: process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME
    },
    PORT: process.env.PORT || 3000,
    BASE_URL : "https://upper-romy-inrl-bot.koyeb.app/",
    REPO: "inrl-official/inrl-bot-md",
    BGM_URL : process.env.BGM_URL || "null",
    REJECT_CALL : toBool(process.env.REJECT_CALL || 'true'),
    BADWORD_BLOCK : toBool(process.env.BADWORD_BLOCK || 'true'),
    ALLWAYS_ONLINE: toBool(process.env.ALLWAYS_ONLINE || "true"),
    PM_BLOCK : toBool(process.env.PM_BLOCK || "true"),
    BGMBOT : toBool(process.env.BGMBOT || "true"),
    CALL_BLOCK : toBool(process.env.CALL_BLOCK || "true"),
    STATUS_VIEW : process.env.STATUS_VIEW || "true",
    SAVE_STATUS : toBool(process.env.SAVE_STATUS || "true"),
    ADMIN_SUDO_ACCESS: toBool(process.env.ADMIN_SUDO_ACCESS || "true"),
    DISABLE_PM: toBool(process.env.DISABLE_PM || "true"),
    DISABLE_GRP : toBool(process.env.DISABLE_GRP || "true"),
    ERROR_MSG : toBool(process.env.ERROR_MSG || "true"),
    AJOIN: toBool(process.env.AJOIN || 'true'),
    READ : process.env.READ ||  "true",//true, command
    CHATBOT : process.env.CHATBOT || "true",//true, pm, group
    REACT : process.env.REACT || "true",//true, command, emoji
    WARNCOUND : process.env.WARNCOUND || 5,
    BOT_INFO : process.env.BOT_INFO || "INRL-BOT-MD;INRL;https://i.imgur.com/DyLAuEh.jpg",
    WORKTYPE : process.env.WORKTYPE || "public",
    PREFIX : process.env.PREFIX || "[.,!]",//both  .  and [.] equal, for multi prefix we use [] this
    LANG : process.env.LANG || "en",
    PERSONAL_MESSAGE: process.env.PERSONAL_MESSAGE || "null",
    BOT_PRESENCE : process.env.BOT_PRESENCE || "unavailable",
    AUDIO_DATA : process.env.AUDIO_DATA || "INRL-BOT-MD;INRL;https://i.imgur.com/DyLAuEh.jpg",
    STICKER_DATA : process.env.STICKER_DATA || "inrl;inrl",
    BRAINSHOP: process.env.BRAINSHOP || '172372,nbjE0YAlyw3cpoMl',
    SUDO : process.env.SUDO || "null",
    RMBG_KEY: process.env.RMBG_KEY,
    OPEN_AI: process.env.OPEN_AI,
    ELEVENLABS: process.env.ELEVENLABS,
    INRL_KEY: process.env.INRL_KEY || 'free50_inrl',
    OCR_KEY: (process.env.OCR_KEY || 'K84003107488957').trim(),
    DATABASE: DB_URL ? new Sequelize(DB_URL,{dialect:'postgres',ssl:true,protocol: 'postgres', dialectOptions: {native: true,ssl:{require: true,rejectUnauthorized: false}}, logging: false}) : new Sequelize({dialect:'sqlite',storage:'./database.db',logging:false}) 
};
