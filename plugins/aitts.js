const {
	inrl,
	elevenlabs
} = require('../lib');
inrl({
	pattern: "aitts",
	type: "eva",
	fromMe: true,
	desc: 'gernate ai voices'
}, async (message, match) => {
	if (match == 'list') return await message.send(`╭「 *List of Aitts* 」
 ├ 1 _rachel_ 
 ├ 2 _clyde_ 
 ├ 3 _domi_ 
 ├ 4 _dave_ 
 ├ 5 _fin_ 
 ├ 6 _bella_ 
 ├ 7 _antoni_ 
 ├ 8 _thomas_ 
 ├ 9 _charlie_ 
 ├ 10 _emily_ 
 ├ 11 _elli_ 
 ├ 12 _callum_ 
 ├ 13 _patrick_ 
 ├ 14 _harry_ 
 ├ 15 _liam_ 
 ├ 16 _dorothy_ 
 ├ 17 _josh_ 
 ├ 18 _arnold_ 
 ├ 19 _charlotte_ 
 ├ 20 _matilda_ 
 ├ 21 _matthew_ 
 ├ 22 _james_ 
 ├ 23 _joseph_ 
 ├ 24 _jeremy_ 
 ├ 25 _michael_ 
 ├ 26 _ethan_ 
 ├ 27 _gigi_ 
 ├ 28 _freya_ 
 ├ 29 _grace_ 
 ├ 30 _daniel_ 
 ├ 31 _serena_ 
 ├ 32 _adam_ 
 ├ 33 _nicole_ 
 ├ 34 _jessie_ 
 ├ 35 _ryan_ 
 ├ 36 _sam_ 
 ├ 37 _glinda_ 
 ├ 38 _giovanni_ 
 ├ 39 _mimi_ 
 └`)
	const [v, k] = match.split(/,;|/);
	if (!k) return await message.send(`*_need voice id and text_*\n_example_\n\n_*aitts* hey vroh its a test,adam_\n_*aitts list*_`)
	const stream = await elevenlabs(match);
	if (!stream) return await message.send(`_*please upgrade your api key*_\n_get key from http://docs.elevenlabs.io/api-reference/quick-start/introduction_\n_example_\n\nsetvar elvenlabs: your key\n_or update your config.js manually_`);
	return await message.send({
		stream
	}, {
		mimetype: 'audio/mpeg'
	}, 'audio')
})