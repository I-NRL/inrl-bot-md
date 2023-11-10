const { inrl, config, getJson, getBuffer } = require('../lib')

inrl(
	{
		pattern: 'ig ?(.*)',
		desc: 'Insta Profile Search',
		type: 'search',
	},
	async (message, match) => {
		if (!match)
			return await message.send('*Give me a instagram username*')
		const { result } = await getJson(
			`${config.BASE_URL}api/ig?name=${encodeURIComponent(match)}`
		)
		if (!result || !result.status) return await message.send('*not found*')
		const { fullname, username, profile, posts, following, followers, bio } = result;
		await message.send(
			await getBuffer(profile),
			{
				caption:
					'```' +
					`username : ${username}\nname : ${fullname}\nposts : ${posts}\nfollowers : ${followers}\nfollowning : ${following}\n\nbio : ${bio}` +
					'```',
				quoted: message.data
			},
			'image'
		)
	}
)
