import { Bot } from 'grammy';

const token = process.env.BOT_TOKEN;
if (!token) {
  throw new Error('BOT_TOKEN is not set');
}

const bot = new Bot(token);

bot.on('message', async (ctx) => {
  try {
    await ctx.reply('ALTER здесь. Привет!');
  } catch (error) {
    console.error('Error:', error);
  }
});

bot.start();
console.log('Bot is running in polling mode...');
