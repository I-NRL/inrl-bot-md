//created by @inrl
const lnn = "ANIME MAKER";
const {
    getVar,
    errorMessage,
    PASS,
    inrl,
    anime,
    ffpack,
    ff1,
    ff2,
    ff3,
    ff4,
    ff5,
    ff6,
    ff7,
    ff8,
    ff9,
    ff10,
    ff11,
    ff12,
    ff13,
    ff14,
    ff15,
    ff16,
    ff17,
    ff18,
    ff19,
    ff20,
    ff21,
    ff22,
    ff23,
    ff24,
    ff25,
    ff26,
    ff27,
    ff28,
    ff29,
    ff30,
    ff31,
    ff32,
    ff33,
    ff34,
    ff35,
    ff36,
    ff37,
    ff38,
    ff39,
    ff40,
    ff41,
    ff42,
    ff43,
    ff44,
    ff45,
    ff46,
    ff47,
    ff48,
    ff49,
    ff50,
    animepack,
    an1,
    an2,
    an3,
    an4,
    an5,
    an6,
    an7,
    an8,
    an9,
    an10,
    an11,
    an12,
    an13,
    an14,
    an15,
    an16,
    an17,
    bts,
    robote,
    spiderman,
    tentacion,
    youAreBad,
    ansay,
    ch,
    trumb,
    inrlQuita
} = require('../lib')
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const ll = "*```Enter a word```"
const Ln = "Free Fire logo maker"
let N_T = "Need Text."
let T_L = "Text is too long."
let T_L_1 = "First text is too long."
let T_L_2 = "Secand text is too long."
let T_W = "Can use two words"
let fileName = "GneratedMeme.jpeg";
inrl({
    pattern: "wm",
    desc: "it send url of wa user",
    sucReact: "🤌",
    category: ["all", "system"],
    type: "extra"
}, async (m, client, match) => {
    let perso = m.quoted?.sender ? m.quoted.sender.split("@")[0] : match.replaceAll(' ', '');
    let person = perso;
    if (perso.includes(':')) {
        person = perso.split(':')[0]
    } else if (perso.includes('+')) {
        person = perso.split('+')[1]
    }
    await m.send(`https://wa.me/${person}`)
})
inrl({
    pattern: "npm",
    desc: "to get infromation of given npm package",
    sucReact: "🤌",
    category: ["all", "system"],
    type: "extra"
}, async (m, client, match) => {
    if (!match) return m.send("give me a pkg name");
    await axios.get(`https://api.npms.io/v2/search?q=${match}`).then(({
        data
    }) => {
        let txt = data.results.map(({
            package: pkg
        }) => `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`).join('\n\n')
        return m.send(' ' + txt + ' ')
    })
})
const maker = require("mumaker");
inrl({
    pattern: "p1",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/create-blackpink-logo-style-online-1001.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p2",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/create-art-paper-cut-text-effect-online-1022.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p3",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p4",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p5",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p6",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p7",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/create-wolf-logo-galaxy-online-936.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p8",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p9",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/create-3d-avengers-logo-online-974.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p10",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/neon-text-effect-online-879.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p11",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/thunder-text-effect-online-881.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p12",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/create-logo-joker-online-934.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p13",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/create-ninja-logo-online-935.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p14",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/advanced-glow-text-effect-873.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p15",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/bokeh-text-effect-876.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p16",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/create-logo-style-marvel-studios-online-971.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p17",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p18",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p19",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p20",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/create-lion-logo-mascot-online-938.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p21",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/neon-text-effect-online-963.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p22",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/ice-cold-text-effect-862.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p23",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/create-space-3d-text-effect-online-985.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p24",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p25",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p26",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p27",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p28",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p29",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "p30",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/create-thunder-text-effect-online-881.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "heart",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
inrl({
    pattern: "summer",
    sucReact: "💗",
    category: ['logo'],
    usage: '<word>',
    type: 'logo-menu'
}, async (message, client) => {
    if (!message.client.text) {
        return await client.sendMessage(message.from, {
            text: message.reply(N_T)
        }, {
            quoted: message
        });
    };
    if (message.client.text.length >= 22) {
        return await client.sendMessage(message.from, {
            text: message.reply(T_L)
        }, {
            quoted: message
        });
    };
    let data = await getVar();
    let {
        BOT_INFO,
        CAPTION
    } = data.data[0]
    let text = message.client.text;
    let text1, text2;
    if (text.includes(',')) {
        let split = text.split(',');
        text1 = split[0];
        text2 = split[1];
    }
    let texts = text1 || text;
    let txt = text2 || BOT_INFO.split(',')[0];
    await maker.textpro('https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html', [texts, txt]).then(async (data) => {
        return await client.sendMessage(message.from, {
            image: {
                url: data
            },
            caption: CAPTION
        }, {
            quoted: message
        });
    }).catch(async (err) => {
        return await client.sendErrorMessage(message.from, err, message.key, message);
    });
});
