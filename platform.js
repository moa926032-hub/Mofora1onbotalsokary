const fs = require('fs');
const path = require('path');

module.exports = {
  status: "on",
  name: 'المنصة التعليمية',
  command: ['منصة'],
  category: 'info',
  description: 'تفاصيل المنصة التعليمية',

  async execute(sock, msg) {
    try {
      const from = msg.key.remoteJid;
      const logoPath = path.join(process.cwd(), 'Logo.jpg');

      const text = `🚀 *المنصة التعليمية بتاعتنا*

بنقدملك:
• كورسات كاملة مسجلة بجودة عالية
• مراجعات نهائية مكثفة قبل الامتحانات
• امتحانات إلكترونية مع تصحيح فوري
• حلقات لايف أسبوعية للأسئلة
• ملخصات PDF + خرائط ذهنية
• جروبات دعم للطلاب طوال السنة
ــَـ̸̡̐ــ̸َ̐ــَـــَــَـ̸̡̐ــ̸َ̐ــَـــَــَـ̸̡̐ــ̸َ̐ــَـــَــَـ̸̡̐ــ̸َ̐ــَـــَــَـ̸̡̐ــ̸َ̐ــَـــَ✉
➪https://share.google/jnz0qqqblwIKtlUDO
ــ۬ۦـــٜــــ۬ۦـــٜــــ۬ۦـــٜــــ۬ۦـــٜــــ۬ۦـــٜــــ۬ۦـــٜــ↯
كل ده عشان كل طالب ينجح ويتفوق 🏆

سكر مصر 💛 | FORA1ON`;

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
      console.error('خطأ في منصة:', error);
      await sock.sendMessage(msg.key.remoteJid, { text: '❌ حصل خطأ، جرب تاني.' }, { quoted: msg });
    }
  }
};