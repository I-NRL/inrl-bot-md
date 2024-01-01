const {
        inrl,
        getJson,
        config
} = require('../lib');


inrl({
        on: "text"
}, async (m, match) => {
        //if(m.isCreator) return;
        if(config.CHATBOT_PM && !m.isGroup) {
                let data = await getJson(
                        `http://api.brainshop.ai/get?bid=${config.BRAINSHOP.split(/[,;|]/)[0]}&key=${config.BRAINSHOP.split(/[,;|]/)[1]}&uid=[${m.sender.split('@')[0]}]&msg=[${m.body}]`
                )
                return await m.reply(data.cnt)
        } else if(config.CHATBOT_GRP && m.isGroup) {
                let data = await getJson(
                        `http://api.brainshop.ai/get?bid=${config.BRAINSHOP.split(/[,;|]/)[0]}&key=${config.BRAINSHOP.split(/[,;|]/)[1]}&uid=[${m.sender.split('@')[0]}]&msg=[${m.body}]`
                )
                return await m.reply(data.cnt)
        }
});
