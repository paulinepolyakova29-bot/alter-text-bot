import { VercelRequest, VercelResponse } from '@vercel/node';
import { Bot } from 'grammy';

const token = process.env.BOT_TOKEN;
if (!token) {
  throw new Error('BOT_TOKEN environment variable is not set');
}

const bot = new Bot(token);

// Обработчик всех сообщений
bot.on('message', async (ctx) => {
  try {
    await ctx.reply('ALTER здесь. Привет!');
  } catch (error) {
    console.error('Error sending message:', error);
  }
});

// Vercel серверлесс хандлер
export default async (
  req: VercelRequest,
  res: VercelResponse
): Promise<void> => {
  try {
    if (req.method === 'POST') {
      // Обработка webhook от Telegram
      await bot.handleUpdate(req.body);
      res.status(200).json({ ok: true });
    } else {
          } else if (req.query.setup === 'webhook') {
      // Установка webhook
      const webhookUrl = 'https://alter-text-bot.vercel.app/';
      await bot.api.setWebhook(webhookUrl);
      const info = await bot.api.getWebhookInfo();
      res.status(200).json({ status: 'Webhook set', info });
      // Проверка, что сервер живет
      res.status(200).json({ status: 'Bot is running' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
