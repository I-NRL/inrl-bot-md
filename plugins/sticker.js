const {
  inrl,
  lang,
  config
} = require('../lib');
const fs = require("fs");
const path = require("path");

inrl(
  {
    pattern: "sticker",
    desc: lang.STICKER.DESC,
    react: "🔁",
    type : 'converter',
    usage : "to convert short video or image to sticker fromate, ex:- sticker[repleyed_msg]"
  },
  async (message, match) => {
    if (!/image|video|webp/.test(message.client.mime)) return await message.send(
      lang.STICKER.ERROR
        );
    try {
     if (message.reply_message.mime) {
      await message.send(lang.BASE.WAIT)
        let download = await message.reply_message.download();
        return await message.sendSticker(message.jid, download, {
          author: config.STICKER_DATA.split(/[|;,]/)[0] || config.STICKER_DATA,
          packname: config.STICKER_DATA.split(/[|;,]/)[1],
        });
      } else if (/image|video|webp/.test(message.client.mime)) {
        await message.send(lang.BASE.WAIT)
        let download = await message.client.downloadMediaMessage(message);
        return await message.sendSticker(message.jid, download, {
          author: config.STICKER_DATA.split(/[|;,]/)[0] || config.STICKER_DATA,
          packname: config.STICKER_DATA.split(/[|;,]/)[1],
        });
      } else {
        return await message.send(
          lang.STICKER.ERROR
        );
      }
    } catch (error) {
      return await message.send(
        error
      );
    }
  }
);
