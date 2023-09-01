const simpleGit = require('simple-git');
const git = simpleGit();
const Config = require('../config');
const exec = require('child_process').exec;
const Heroku = require('heroku-client');
const axios = require("axios");
const {
    PassThrough
} = require('stream');
const heroku = new Heroku({
    token: process.env.HEROKU_API_KEY
})
//function used
function secondsToDhms(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
}
const {
    inrl,
    GenListMessage,
    getLang
} = require('../lib');
let lang = getLang()

inrl({
    pattern: 'update$',
    fromMe: true,
    desc:lang.HEROKU.DESC
}, (async (m) => {
    try {
        if (!m.client.text) {
            return await m.sock.sendMessage(m.from, {
                text: GenListMessage(lang.HEROKU.UPDATE_ARGS.split(",")[0], ["update now", "update check"])
            })
        } else if (m.client.text.includes("now")) {
            await git.fetch();
            let commits = await git.log(['master' + '..origin/' + 'master']);
            if (commits.total === 0) {
                return await m.sock.sendMessage(m.from, {
                    text: lang.HEROKU.ALLREDY
                });
            } else {
                await m.send("_*updating...*_");
                let al
                try {
                    await heroku.get('/apps/' + process.env.HEROKU_APP_NAME)
                } catch {
                    return await m.send('*_status_* : ```false```\n*_reason_* : ```invalid information from heroku```');
                }
                git.fetch('upstream', 'master');
                git.reset('hard', ['FETCH_HEAD']);
                const app = await heroku.get('/apps/' + process.env.HEROKU_APP_NAME)
                const git_url = app.git_url.replace("https://", "https://api:" + process.env.HEROKU_API_KEY + "@")
                try {
                    await git.addRemote('heroku', git_url);
                } catch (e) {
                    console.log(e)
                }
                await git.push('heroku', 'master');
                return await m.send("successfully updated");
            }
        } else if (m.client.text.includes("check")) {
            await git.fetch();
            let commits = await git.log(['master' + '..origin/' + 'master']);
            if (commits.total === 0) {
                return await m.sock.sendMessage(m.from, {
                    text: lang.HEROKU.ALLREDY
                });
            } else {
                let inrlupdate = lang.HEROKU.LIST_UPDATE;
                commits['all'].map(
                    (commit) => {
                        inrlupdate += "```" + lang.HEROKU.COMMITS.format(commit.date.substring(0, 10),commit.message,commit.author_name) + "```\n\n";
                    });
                return await m.send(inrlupdate);
            }
        }
    } catch (e) {
        return await m.send(e)
    }
}));

inrl({
    pattern: 'shutdown$',
    fromMe: true,
    dontAddCommandList: true,
    use: 'owner'
}, (async (message) => {
    if (!process.env.HEROKU_API_KEY) {
        return await pm2.stop("inrl");
    } else if (process.env.HEROKU_API_KEY) {
        await heroku.get('/apps/' + process.env.HEROKU_APP_NAME + '/formation').then(async (formation) => {
            forID = formation[0].id;
            await message.send("_Shutting down_")
            await heroku.patch('/apps/' + process.env.HEROKU_APP_NAME + '/formation/' + forID, {
                body: {
                    quantity: 0
                }
            });
        }).catch(async (err) => {
            await message.send(err.message)
        });
    } else return await message.send("_This is a heroku command, but this bot is not running on heroku!_");
}));
