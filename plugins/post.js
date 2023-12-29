const FormData = require('form-data');
const axios = require('axios');

const {
	inrl,
	lang,
	config
} = require('../lib');

inrl({
	pattern: '$ocr',
	desc: lang.OCR.DESC,
	type: "eva"
}, async (message, match) => {
	if (!message.reply_message.image) return await message.send(lang.OCR.NEED)
	const imageBuffer = await message.reply_message.download();
	const form = new FormData();
	form.append('file', imageBuffer, 'bt.jpg');
	form.append('key', config.OCR_KEY);
	const response = await axios.post(config.BASE_URL + 'post/ocr', form, {
		headers: form.getHeaders()
	});
	if (!response.data.status) return message.send("_Not Found_\n_may be api key limit exhausted_\n_*get key from:* https://ocr.space/ocrapi/freekey_");
	return await message.send(response.data.message);
});

inrl({
	pattern: 'meme',
	desc: 'add text over image',
	type: "edit"
}, async (message, match) => {
	if (!message.reply_message.image) return await message.send('reply to an image')
	const [text, size, x, y, color] = match.split(/[,;|]/);
	if (!text || !size || !x || !y || !color) return await message.send('_*Example*: meme hy, 64,center, middle, yellow_');
	if (!['8', '10', '12', '14', '16', '32', '64', '128'].includes(size.trim())) return await message.send('_*Example*: meme hy, size,center, middle, yellow_\n_size must be 8,10,12,14,16,32,64,128_');
	if (!['center', 'left', 'right'].includes(x.trim())) return await message.send('_*Example*: meme hy, size,center, middle, yellow_\n_x must be center , left, right_');
	if (!['middle', 'bottom', 'top'].includes(y.trim())) return await message.send('_*Example*: meme hy, size,center, middle, yellow_\n_y must be middle , bottom , top_');
	if (!color) return await message.send('_*Example*: meme hy, 64,center, middle, yellow_');
	const form = new FormData();
	const imageBuffer = await message.reply_message.download();
	form.append('file', imageBuffer, 'text.jpg');
	form.append('size', size.trim());
	form.append('text', text);
	form.append('x', x.trim());
	form.append('y', y.trim());
	form.append('color', color.trim());
	const response = await axios.post(config.BASE_URL + 'post/writer', form, {
		headers: form.getHeaders()
	});
	return await message.send({
		url: response.data.url
	}, {}, 'image');
});
