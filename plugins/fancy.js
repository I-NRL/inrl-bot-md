const {
    inrl,
    Fancy,
    Fancylist,
    lang
} = require('../lib');

inrl({
     pattern: 'fancy ?(.*)',
     type: 'utility',
     desc: lang.FANCY.DESC
 }, (async (message, match) => {
     if (!match && !message.reply_message.text) return await message.send(lang.FANCY.INFO.format(".fancy 10 Hello_\n                      .fancy Hello world\n                      .fancy <reply> 13\n\n"+String.fromCharCode(8206).repeat(4001)+Fancylist('Text here')));
    const id = match.match(/\d/g)?.join('')
     try {
        if (id === undefined && !message.reply_message.text){
            return await message.send(Fancylist(match));
        }
        return await message.send(Fancy(parseInt(id),message.reply_message.text || match.replace(id,'')))    
    } catch {
        return await message.send('_Failed_')
     }
 }))
