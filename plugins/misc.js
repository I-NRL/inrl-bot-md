//created by @inrl
const {
    inrl,
    add,
    subtract,
    multiply,
    division,
    qrcode,
    base64e,
    base64d,
    age
} = require('../lib/');
const got = require('got');
const {
    getVar
} = require('../lib/database/variable');
inrl({
    pattern: 'calc',
    desc: "to calculate by using bots",
    sucReact: "🤥",
    category: ["ibot"],
    type: 'info'
}, (async (message, client) => {
    if (message.client.text.includes('+')) {
        let split = message.client.text.split('+');
        let number2 = split[1];
        let number1 = split[0]
        let result = add(number1, number2)
        try {
            await client.sendMessage(message.from, {
                text: result
            }, {
                quoted: message
            })
        } catch (err) {
            return await client.sendMessage(message.from, {
                text: "error=" + err
            }, {
                quoted: message
            })
        }
    } else if (message.client.text.includes('-')) {
        let split = message.client.text.split('-'),
            inrlsub1 = split[1],
            inrlsub2 = split[0]
        let result = subtract(inrlsub2, inrlsub1)
        try {
            await client.sendMessage(message.from, {
                text: result
            }, {
                quoted: message
            })
        } catch (err) {
            return await client.sendMessage(message.from, {
                text: "error=" + err
            }, {
                quoted: message
            })
        }
    } else if (message.client.text.includes('×')) {
        let split = message.client.text.split('×'),
            inrlbotswa = split[1],
            inrl1 = split[0]
        let result = multiply(inrl1, inrlbotswa)
        try {
            await client.sendMessage(message.from, {
                text: result
            }, {
                quoted: message
            })
        } catch (err) {
            return await client.sendMessage(message.from, {
                text: "error=" + err
            }, {
                quoted: message
            })
        }
    } else if (message.client.text.includes('/')) {
        let split = message.client.text.split('/'),
            inrldiv1 = split[1],
            inrldiv2 = split[0]
        let result = division(inrldiv2, inrldiv1)
        try {
            await client.sendMessage(message.from, {
                text: result
            }, {
                quoted: message
            })
        } catch (err) {
            return await client.sendMessage(message.from, {
                text: "error=" + err
            }, {
                quoted: message
            })
        }
    }
}));
inrl({
    pattern: 'base64e',
    desc: "to convert ascii to base64",
    sucReact: "🤌",
    category: ['all'],
    type: 'converter'
}, (async (message, client) => {
    const text = message.client.text || message.quoted.text;
    if (!text) return await client.sendMessage(message.from, {
        text: 'Enter A text to convert base64'
    }, {
        quoted: message
    });
    let encodedString = base64e(text);
    return await client.sendMessage(message.from, {
        text: encodedString
    }, {
        quoted: message
    });
}));
inrl({
    pattern: 'base64d',
    desc: "to convert base64 to ascii",
    sucReact: "🤥",
    category: ['all'],
    type: 'converter'
}, (async (message, client) => {
    const text = message.client.text || message.quoted.text;
    if (!text) return await client.sendMessage(message.from, {
        text: 'Enter A text to convert base64'
    }, {
        quoted: message
    });
    let decodedString = base64d(text);
    return await client.sendMessage(message.from, {
        text: decodedString
    }, {
        quoted: message
    });
}));
inrl({
    pattern: 'qr',
    desc: "to convert text as qrcode",
    sucReact: "💗",
    category: ["all"],
    type: 'create'
}, async (message, client) => {
    if (!message.client.text) return await client.sendMessage(message.from, {
        text: "need Text",
    }, {
        quoted: message
    })
    let text = message.client.text;
    let ttinullimage = qrcode(text);
    let data = await getVar();
    let {
        CAPTION
    } = data.data[0]
    const Message = {
        image: {
            url: ttinullimage
        },
        caption: CAPTION
    };
    return await client.sendMessage(message.from, Message, {
        quoted: message
    })
});
inrl({
    pattern: 'age',
    desc: "to convert text as qrcode",
    sucReact: "💗",
    category: ["all"],
    type: 'info'
}, async (message, client) => {
    if (!message.client.text) return await client.sendMessage(message.from, {
        text: " enter your date of birth \n_ex_:year/month/day",
    }, {
        quoted: message
    })
    let text = message.client.text;
    let year, month, day;
    if (text.includes('/')) {
        let split = text.split('/');
        year = split[0];
        month = split[1];
        day = split[2];
    }
    let ageOfYou = age(new Date(year, month, day));
    return await client.sendMessage(message.from, {
        text: ageOfYou
    }, {
        quoted: message
    })
});
