const fs = require('fs');
const path = require('path');

module.exports = {
  status: "on",
  name: 'من هو مستر محمود',
  command: ['من'],
  category: 'info',
  description: 'معلومات عن مستر محمود السكري',

  async execute(sock, msg) {
    try {
      const from = msg.key.remoteJid;
      const logoPath = path.join(process.cwd(), 'Logo.jpg');

      const text = `👨‍🏫 *مستر محمود السكري* 👨‍🏫

مدرس متخصص في [اللغة العربية] للثانوية العامة
خبرة طويلة في التدريس بطريقة بسيطة وممتعة
يهتم بتبسيط أصعب المواد ومساعدة الطلاب على الفهم العميق
هدفه: كل طالب يحقق أعلى الدرجات بإذن الله 💪

"العلم نور والجهد طريق النجاح" ✨

➠ https://elsokary-num1.pages.dev/

سكر مصر في القمة دايمًا 💛 | FORA1ON`;

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
      console.error('خطأ في من:', error);
      await sock.sendMessage(msg.key.remoteJid, { text: '❌ حصل خطأ، جرب تاني.' }, { quoted: msg });
    }
  }
};