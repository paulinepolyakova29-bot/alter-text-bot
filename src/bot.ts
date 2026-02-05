
import { Bot } from "grammy";

const token = process.env.BOT_TOKEN;
if (!token) {
  throw new Error("BOT_TOKEN is not set");
}

export const bot = new Bot(token);

// простой ответ, чтобы проверить, что бот жив
bot.on("message", async (ctx) => {
  await ctx.reply("ALTER здесь. Я жив и скоро стану твоим текстовым двойником.");
});
