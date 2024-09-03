const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
  const channelId = "@Umidxon_IT_blog";
  const userId = ctx.from.id;

  await bot.telegram.getChatMember(channelId, userId).then(async (member) => {
    if (member.status === "creator" || member.status === "administrator") {
      ctx.reply(
        "<b>Assalomu alaykum hurmatli admin!</b>\nMen <b>@Umidxon_IT_blog</b> kanalining admin botiman",
        { parse_mode: "HTML" }
      );
    } else {
      ctx.reply(
        `Assalomu alaykum <a href="tg://user?id=${ctx.from.id}" >${ctx.from.name}</a>\n<b>Botga xush kelibsiz, ammo bot sizga tegishli emas!</b>`,
        { parse_mode: "HTML" }
      );
    }
  });
});

bot.on("channel_post", (ctx) => {
  setTimeout(() => {
    const message = ctx.update.channel_post;
    const channelId = "@Umidxon_IT_blog";
    ctx.editMessageText(`${message.text}\n👉 <b>${channelId}</b>`, {
      parse_mode: "HTML",
    });
    ctx.react("🔥");
  }, 60000);
});

bot.launch(() => {
  console.log("Bot has been successfully started!");
});

module.exports = bot;