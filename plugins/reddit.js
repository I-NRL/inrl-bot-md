const {
        inrl,
        config,
        getJson
} = require('../lib');

inrl({
        pattern: 'reddit',
        type: "search",
        desc: "searches and get data from reddit",
}, async (message, match) => {
                match = match || message.reply_message.text;
                if (!match) return await message.send("*please give me an text!*");
                const data = await getJson(config.BASE_URL + 'api/reddit?query=' + encodeURIComponent(match));
                if (!data.status || !data.result) return await message.send("*No result Found*");
                let msg ="*_→RESULT FROM REDDIT←_*\n\n";
                data.result.map(({title, image, link, nsfw,voteRatio,like,author, dislike,comment,subredditName})=>{
                msg += `_• title: ${title}_
_• image: ${image}_
_• link: ${link}_
_• isNSFW: ${nsfw}_
_• votes in ratio: ${voteRatio}_
_• author: ${author}_
_• like: ${like}_
_• dislike: ${dislike}_
_• comment: ${comment}_
_• subredditName: ${subredditName}_

`
});
                return await message.send(msg);
});
