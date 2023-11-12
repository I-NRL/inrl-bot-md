const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = './media/pdf';
const {
        inrl,
        stream2buffer,
        getRandom
} = require('../lib');
inrl({
        pattern: 'pdf ?(.*)',
        desc: "Images/texts to PDF",
        type: 'converter',
        usage: `_1. Input images/text using .pdf_\n_2. Get output pdf using .pdf get_\n_3. Added images by mistake? then delete all inputted images using .pdf delete_\n_4. All files will be auto deleted after the output is produced_`
}, async (message, match, {BOT_INFO}) => {
        try {
                match = match || message.reply_message.text;
                if (!match && !message.reply_message.image) return await message.send("*reply to an image or text*\nuse pdf _help_ to clarify");
                if (!fs.existsSync(path)) {
                        fs.mkdirSync(path)
                }
                const margin = 36;
                const doc = new PDFDocument({
                        size: [595.28, 841.89],
                        margin: margin
                });
                if (match && match != "get" && !message.reply_message.image) {
                        let currentPage = 1;
                        doc.on('pageAdded', () => {
                                currentPage++;
                        });
                        const lines = doc.font('Helvetica', 12).text(match, margin, margin, {
                                align: 'justify'
                        });
                        let y = margin;
                        if (doc.undocumented_lines) {
                                y += doc.undocumented_lines.length * 12;
                        }
                        while (y > doc.page.height - margin) {
                                doc.addPage();
                                currentPage++;
                                y -= doc.page.height - margin;
                        }
                        doc.end();
                        const pdfBuffer = await stream2buffer(doc);
                        return await message.sock.sendMessage(message.jid, {
                                'document': pdfBuffer,
                                filename: 'document.pdf'
                        });
                } else if (message.reply_message.image) {
                        const media = await message.quoted.download();
                        fs.writeFileSync('./media/pdf/' + getRandom('.jpg'), media);
                        doc.end();
                        return await message.send("*Image added!*");
                } else if (match && match == "get") {
                        let page = 1;
                        const files = fs.readdirSync('./media/pdf');
                        if (files.length == 0) return await message.send('*No image/message added*');
                        files.map(async (file) => {
                                if (file != "pdf" && page == 1) {
                                        doc.image(fs.readFileSync('./media/pdf/' + file), {
                                                fit: [500, 500],
                                                align: 'center',
                                                valign: 'center'
                                        });
                                        page++
                                } else if (file != "pdf" && page != 1) {
                                        doc.addPage().image(fs.readFileSync('./media/pdf/' + file), {
                                                fit: [500, 500],
                                                align: 'center',
                                                valign: 'center'
                                        });
                                 }
                        });
                        doc.end();
                        const pdfBuffer = await stream2buffer(doc);
                        await message.sock.sendMessage(message.jid, {
                                document: pdfBuffer,
                                fileName: "images.pdf"
                        });
                        fs.rmSync(path, {
                                recursive: true,
                                force: true
                        });
                }
        } catch (e) {
                return await message.send('_Reply to any image/text!_');
        }
});
