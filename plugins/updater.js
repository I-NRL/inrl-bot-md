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
const {
        inrl,
        GenListMessage,
        getLang
} = require('../lib');
let lang = getLang()
inrl({
        pattern: 'update$',
        fromMe: true,
        desc: lang.HEROKU.DESC
}, async (message) => {
        try {
                if (!message.client.text) {
                        return await message.sock.sendMessage(message.from, {
                                text: GenListMessage(lang.HEROKU.UPDATE_ARGS.split(",")[0], ["update now", "update check"])
                        })
                } else if (message.client.text.includes("now")) {
                        await git.fetch();
                        let commits = await git.log(['master' + '..origin/' + 'master']);
                        if (commits.total === 0) {
                                return await message.sock.sendMessage(message.from, {
                                        text: lang.HEROKU.ALLREDY
                                });
                        } else {
                                await message.send("_*updating...*_");
                                let al
                                try {
                                        await heroku.get('/apps/' + process.env.HEROKU_APP_NAME)
                                } catch {
                                        await git.reset("hard", ["HEAD"])
                                        await git.pull()
                                        await message.send("_Successfully updated. Please manually update npm modules if applicable!_")
                                        process.exit(0);
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
                                return await message.send("successfully updated");
                        }
                } else if (message.client.text.includes("check")) {
                        await git.fetch();
                        let commits = await git.log(['master' + '..origin/' + 'master']);
                        if (commits.total === 0) {
                                return await message.sock.sendMessage(message.from, {
                                        text: lang.HEROKU.ALLREDY
                                });
                        } else {
                                let inrlupdate = lang.HEROKU.LIST_UPDATE;
                                commits['all'].map(
                                        (commit) => {
                                                inrlupdate += "```" + lang.HEROKU.COMMITS.format(commit.date.substring(0, 10), commit.message, commit.author_name) + "```\n\n";
                                        });
                                return await message.send(inrlupdate);
                        }
                }
        } catch (e) {
                return await message.send(e)
        }
});
