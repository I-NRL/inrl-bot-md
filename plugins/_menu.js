const {
    inrl,
    commands,
    send_alive,
    send_menu,
    getLang,
    getBuffer,
    UpdateVariable,
    getVar
} = require('../lib')
let lang = getLang()
inrl({
    pattern: 'list',
    desc: lang.LIST.DESC,
    react: "💯",
    type: 'info'
}, async (message) => {
    let b=1,c="";commands.map((e=>{e.pattern&&e.desc?c+=`${b++} *${e.pattern.replace(/[^a-zA-Z0-9,-]/g,"")}*\n_${e.desc}_\n\n`:c+=`${b++} *${e.pattern?e.pattern.replace(/[^a-zA-Z0-9,-]/g,""):''}*\n`}));
    return await message.send(c);
});

inrl({
    pattern: 'menu ?(.*)',
    desc: 'To check ping',
    react: "😑",
   type: 'info'
}, async (m, match) => {
let img = "https://i.ibb.co/hRqDNKs/14b3b01a49ab.jpg";
let thumbnail = "https://i.ibb.co/6J2Rncy/42f09c2f284b.jpg";
let title = "pɯ-lɹυı©";
let body ="ᗯᕼᗩTᔕᗩᑭᑭ ᗷOT 🎈";
let text = `╭━〔 ᴊ ᴏ ᴊᴏ🍂 〕━◉ 
┃╭━━━━━━━━━━━━━━◉
┃┃ 𝘱𝘭𝘶𝘨𝘪𝘯𝘴 : 199
┃┃ 𝘶𝘴𝘦𝘳 :- ${m.pushName}
┃┃ 𝘰𝘸𝘯𝘦𝘳 : /ī.am.  𝒋𝒐-𝑱𝑶
┃┃ 𝘷𝘦𝘳𝘴𝘪𝘰𝘯: 4.1.0
┃┃ 𝘱𝘳𝘦𝘧𝘪𝘹:- . /  ,
┃┃ 
┃╰━━━━━━━━━━━━━◉
┠┌─⭓『     *INFO*     』
┃│❏ ʟɪsᴛ
┃│❏ ᴀʟɪᴠᴇ
┃│❏ ᴛᴏsʜᴏᴡʟɪsᴛᴏғᴄᴍᴅs
┃│❏ ғɪʟᴛᴇʀ
┃│❏ ᴄᴀʟᴄ
┃│❏ ᴀɢᴇ
┃│❏ ᴘɪɴɢ
┃└──────────⭓
┠┌─⭓『   *WHATSAPP*   』
┃│❏ ᴍᴇɴᴜ
┃│❏ ᴅᴇʟ
┃│❏ ᴅʟᴛ
┃└──────────⭓
┠┌─⭓『     *MISC*     』
┃│❏ ᴛᴛᴘ
┃│❏ ᴀᴛᴛᴘ
┃│❏ ᴡᴇʙss
┃│❏ ᴛᴏɢɢʟᴇ
┃└──────────⭓
┠┌─⭓『    *OTHERS*    』
┃│❏ ᴀᴛᴛᴘ
┃│❏ ᴀᴛᴛᴘ
┃│❏ sᴇᴛᴛɪɴɢ
┃│❏ sᴇᴛᴛɪɴɢ
┃│❏ ᴜᴘᴅᴀᴛᴇ
┃│❏ sʜᴜᴛᴅᴏᴡɴ
┃│❏ ᴇᴍɪx
┃│❏ ᴘʟᴀʏ
┃│❏ ᴡᴇᴀᴛʜᴇʀ
┃│❏ sᴇᴛᴛɪɴɢ
┃│❏ sᴇᴛᴛɪɴɢ
┃│❏ ᴠɪᴅᴇᴏ
┃└──────────⭓
┠┌─⭓『    *SYSTEM*    』
┃│❏ sᴇᴛᴛɪɴɢ
┃│❏ ʀᴇsᴛᴀʀᴛ
┃│❏ ᴘʟᴜɢɪɴ
┃│❏ ʀᴇᴍᴏᴠᴇ
┃│❏ sᴇᴛᴛɪɴɢ
┃└──────────⭓
┠┌─⭓『   *CONVERTER*   』
┃│❏ ᴘʜᴏᴛᴏ
┃│❏ ᴠɪᴅᴇᴏ
┃│❏ ᴠᴏɪᴄᴇ
┃│❏ ɢɪғ
┃│❏ ᴍᴘ3
┃│❏ ʀᴍʙɢ
┃│❏ ᴜʀʟ
┃│❏ ᴛɪɴʏᴜʀʟ
┃│❏ ᴘᴅғ
┃│❏ ʙᴀsᴇ64ᴇ
┃│❏ ʙᴀsᴇ64ᴅ
┃│❏ sᴛɪᴄᴋᴇʀ
┃│❏ ᴛᴛs
┃└──────────⭓
┠┌─⭓『  *AUDIO-EDIT*  』
┃│❏ ʙᴀss
┃│❏ sʟᴏᴡ
┃│❏ ʙʟᴏᴡɴ
┃│❏ ᴅᴇᴇᴘ
┃│❏ ᴇᴀʀʀᴀᴘᴇ
┃│❏ ғᴀsᴛ
┃│❏ ғᴀᴛ
┃│❏ ɴɪɢʜᴛᴄᴏʀᴇ
┃│❏ ʀᴇᴠᴇʀsᴇ
┃│❏ sǫᴜɪʀʀᴇʟ
┃└──────────⭓
┠┌─⭓『     *OWNER*     』
┃│❏ ᴇᴠᴀʟ
┃│❏ ᴀᴄᴘᴛ
┃│❏ ᴛᴀɢ
┃│❏ ʙʟᴏᴄᴋ
┃│❏ ᴜɴʙʟᴏᴄᴋ
┃│❏ ᴘᴘ
┃│❏ ғᴜʟʟᴘᴘ
┃└──────────⭓
┠┌─⭓『    *UTILITY*    』
┃│❏ ғᴀɴᴄʏ
┃│❏ ᴛᴀᴋᴇ
┃└──────────⭓
┠┌─⭓『      *EVA*      』
┃│❏ ɢᴘᴛ
┃│❏ ᴏᴄʀ
┃└──────────⭓
┠┌─⭓『     *GROUP*     』
┃│❏ ᴘʀᴏᴍᴏᴛᴇ
┃│❏ ᴅᴇᴍᴏᴛᴇ
┃│❏ ᴋɪᴄᴋ
┃│❏ ᴀᴅᴅ
┃│❏ ɢᴘᴘ
┃│❏ ғᴜʟʟɢᴘᴘ
┃│❏ ɢɴᴀᴍᴇ
┃│❏ ɢᴅᴇsᴄ
┃│❏ ᴍᴜᴛᴇ
┃│❏ ᴜɴᴍᴜᴛᴇ
┃│❏ ʟᴏᴄᴋ
┃│❏ ᴜɴʟᴏᴄᴋ
┃│❏ ʟᴇғᴛ
┃│❏ ɪɴᴠɪᴛᴇ
┃│❏ ʀᴇᴠᴏᴋᴇ
┃│❏ ɢᴇᴛɪɴғᴏ
┃└──────────⭓
┠┌─⭓『    *MANAGE*    』
┃│❏ ᴀᴍᴜᴛᴇ
┃│❏ ᴀᴜɴᴍᴜᴛᴇ
┃│❏ ᴘᴅᴍ
┃│❏ ᴀɴᴛɪʟɪɴᴋ
┃│❏ ᴀɴᴛɪᴡᴏʀᴅ
┃│❏ ᴀɴᴛɪғᴀᴋᴇ
┃│❏ ᴅᴇʟғᴀᴋᴇ
┃│❏ ᴅᴇʟᴡᴏʀᴅ
┃│❏ ᴅᴇʟᴍᴜᴛᴇ
┃│❏ ᴅᴇʟᴜɴᴍᴜᴛᴇ
┃│❏ ɢᴇᴛғᴀᴋᴇ
┃│❏ ɢᴇᴛᴡᴏʀᴅ
┃│❏ ɢᴇᴛᴍᴜᴛᴇ
┃│❏ ɢᴇᴛᴜɴᴍᴜᴛᴇ
┃└──────────⭓
┠┌─⭓『    *SEARCH*    』
┃│❏ ɪᴍɢ
┃│❏ ʟʏʀɪᴄs
┃│❏ ɢᴏᴏɢʟᴇ
┃│❏ ʀɪɴɢᴛᴏɴᴇ
┃│❏ ᴡᴇᴀᴛʜᴇʀ
┃│❏ ᴛʀᴛ
┃│❏ ᴛʀᴜᴇ
┃│❏ ɪsᴡᴀ
┃│❏ ɴᴏᴡᴀ
┃└──────────⭓
┠┌─⭓『   *DOWNLOAD*   』
┃│❏ ɪɴsᴛᴀ
┃│❏ sᴛᴏʀʏ
┃└──────────⭓
┠┌─⭓『    *ACTION*    』
┃│❏ ᴘᴇʀᴍɪᴛ
┃│❏ ᴏᴛᴘ
┃│❏ ʟɪᴍɪᴛ
┃│❏ ᴡᴀʀɴ
┃└──────────⭓
┠┌─⭓『    *CREATE*    』
┃│❏ ᴇᴍɪx
┃│❏ ǫʀ
┃└──────────⭓
┠┌─⭓『  *DOWNLOADER*  』
┃│❏ ᴘʟᴀʏ
┃│❏ sᴏɴɢ
┃│❏ ᴠɪᴅᴇᴏ
┃└──────────⭓
┠┌─⭓『   *DATABASE*   』
┃│❏ ɢᴇᴛᴠᴀʀ
┃└──────────⭓
┠┌─⭓『   *SETTINGS*   』
┃│❏ ᴘʀᴇғɪx
┃│❏ ᴀᴅᴀᴛᴀ
┃│❏ sᴅᴀᴛᴀ
┃│❏ ʙɪᴏ
┃│❏ ʟᴀɴɢ
┃│❏ ᴀɴᴛɪʙᴏᴛ
┃│❏ ʙɪɴғᴏ
┃│❏ sᴜᴅᴏ
┃└──────────⭓
┠┌─⭓『    *GENERAL*    』
┃│❏ ᴊɪᴅ
┃└──────────⭓
╰━━━━━━━━━━━━━◉`;
return await m.forwardMessage(m.jid, await getBuffer(img), {linkPreview:{title,body, thumbnailUrl:thumbnail}, fileLength :9999999999999999,caption:text,quoted:{key:{
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "0@s.whatsapp.net"
            },
            message: {
                "locationMessage": {
                    "caption": "document or pdf kude ethil set akk daiii"
                }
            }}});
});

inrl({
    pattern: "alive",
    desc: lang.ALIVE.DESC,
    react: "🥰",
    type: 'info',
    usage:lang.ALIVE.HELP
}, async (message, match) => {
    if(match == "get" && message.client.isCreator){
    return await message.send(await getVar('ALIVE_DATA',message.conn.user.number));
    } else if(match && message.client.isCreator){
    await UpdateVariable("ALIVE_DATA", match, message.conn.user.number);
    return await message.send('*success*');
    }
    return await send_alive(message, await getVar('ALIVE_DATA,TIME_ZONE',message.conn.user.number));
});

inrl({
    pattern: "cmd",
    react: "🆗",
    type: 'info'
}, async (message, match) => {
    return await message.client.sendMessage(message.from, {
        text: commands.length.toString()
    }, {
        quoted: message
    });
});
