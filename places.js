const fs = require('fs');
const path = require('path');

module.exports = {
  status: "on",
  name: 'أماكن تواجدنا',
  command: ['اماكن'],
  category: 'info',
  description: 'روابط التواجد على السوشيال ميديا',

  async execute(sock, msg) {
    try {
      const from = msg.key.remoteJid;
      const logoPath = path.join(process.cwd(), 'Logo.jpg'); // غيّر الاسم لو الصورة اسمها مختلف (image.jpeg)

      const text = `🌍 *أماكن تواجدنا*:

📺 يوتيوب: [https://youtube.com/@mahmoudelsokary-f9r?si=B6n0Cs1aTmAFlV-2]
💬 تليجرام: [https://t.me/Sokarynum1]
📘 فيسبوك: [https://www.facebook.com/share/1BxEGToUH2/]
🌐 المنصة: [https://share.google/jnz0qqqblwIKtlUDO]
🎯 تيك توك : [https://www.tiktok.com/@mahmoudalsokary37?_r=1&_t=ZS-92WBGe2P8Gy]

بالتوفيق يا أبطال 💪 | FORA1ON`;

      if (fs.existsSync(logoPath)) {
        const imageBuffer = fs.readFileSync(logoPath);
        await sock.sendMessage(from, {
          image: imageBuffer,
          caption: text,
          footer: 'سكر مصر 💛'
        }, { quoted: msg });
      } else {
        await sock.sendMessage(from, { text }, { quoted: msg });
      }
    } catch (error) {
      console.error('خطأ في أماكن:', error);
      await sock.sendMessage(msg.key.remoteJid, { text: '❌ حصل خطأ، جرب تاني.' }, { quoted: msg });
    }
  }
};