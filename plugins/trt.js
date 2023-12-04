const { TRT, inrl, lang } = require('../lib');

inrl(
	{
		pattern: 'trt ?(.*)',
		desc: lang.TRT.DESC,
		type: 'search',
	},
	async (message, match) => {
		if (!message.reply_message.text)
			return await message.send(
				lang.TRT.NEED
			)
                if(!match) return await message.send(lang.TRT.NEED_LANG);
                const {text} = await TRT(message.reply_message.text, match)
		return await message.send(text);
	}
)
