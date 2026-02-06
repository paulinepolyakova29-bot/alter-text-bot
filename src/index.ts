import { Bot } from "grammy";

const token = process.env.BOT_TOKEN;
if (!token) {
  throw new Error("BOT_TOKEN is not set");
}

const bot = new Bot(token);

bot.on("message", async (ctx) => {
  await ctx.reply("ALTER здесь. Я жив и скоро стану твоим текстовым двойником.");
});

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      await bot.handleUpdate(req.body);
      res.status(200).send("ok");
    } catch (err) {
      console.error("Error:", err);
      res.status(500).send("Error");
    }
  } else {
    res.status(200).send("Bot is running");
  }
};
