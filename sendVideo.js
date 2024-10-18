const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const path = require('path');

// Init
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', async () => {
    console.log('Client is ready!');

    // Specify the phone number 
    const recipientNumber = "919876543210@s.whatsapp.net";  

    const videoPath = path.join(__dirname, 'video.mp4');
    
    try {
        // Load 
        const media = MessageMedia.fromFilePath(videoPath);

        // Send video 
        await client.sendMessage(recipientNumber, media);
        console.log('Video sent successfully!');
    } catch (error) {
        console.error('Failed to send video:', error);
    }

    client.destroy();
});

client.initialize();
