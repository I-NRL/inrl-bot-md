const {
        inrl,
        imageEdit
} = require('../lib');
inrl({
        pattern: 'dragon ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('dragon', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'pornhub ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('pornhub', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'blood ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('blood', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: '1917 ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('1917', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'marvel ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('marvel', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'spooky ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('spooky', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'toxic ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('toxic', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'avengers ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('avengers', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'gameover ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('gameover', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'window ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('window', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'summer ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('summer', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'forework ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('forework', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'sliced ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('sliced', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'naruto ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('naruto', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: '3dbox ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('3dbox', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'batman ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('batman', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'dropwater ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);;
        const url = await imageEdit('dropwater', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'sand ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('sand', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'palm ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('palm', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'lava ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('lava', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'pottery ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('pottery', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'wall ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('wall', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'slime ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('slime', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'skeleton ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('skeleton', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'business ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('business', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'star ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('star', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'typography ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('typography', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'natural ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('natural', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'birthday ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('birthday', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'road ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('road', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'pokemon ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('pokemon', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'magma ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('magma', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'carbon ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('carbon', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'giraffe ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('giraffe', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'metallic ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('metallic', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'eroded ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('eroded', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'gold ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('gold', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'deep ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('deep', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'scary ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('scary', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'ancient ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('ancient', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'captain ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('captain', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
inrl({
        pattern: 'whitegold ?(.*)',
        desc: "generate images with command theme",
        type: 'logo'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await imageEdit('whitegold', match);
        if (!url) return await message.send("_Error while generating image!_");
        return await message.sendReply(url, {}, "image");
});
