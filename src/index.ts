import { Bot } from 'grammy';

const token = process.env.BOT_TOKEN;
if (!token) {
  throw new Error('BOT_TOKEN is not set');
}

const bot = new Bot(token);

bot.on('message', async (ctx) => {
  try {
    await ctx.reply('АЛTЕР здесь. Привет!');
  } catch (error) {
    console.error('Error:', error);
  }
});

async function startBot() {
  try {
    await bot.api.deleteWebhook({ drop_pending_updates: true });
    await bot.start();
    console.log('Bot is running in polling mode...');
  } catch (error) {
    console.error('Failed to start bot:', error);
  }
}

startBot();
