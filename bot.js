require('dotenv').config()
const Dlang = require('discordbot-script')
const bot = new Dlang({

  token: process.env.BOT_TOKEN,
  prefix: ["mc-"]

})

const fs = require('fs');
const folders = fs.readdirSync("./commands/")

for (const files of folders) {
    const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

    for (const commands of folder) {
        const command = require(`./commands/${files}/${commands}`)
        bot.Command(command);
        console.log(`Loaded: ${command.name} | ${folders} folder - [${command.aliases}]`);
    }
}

bot.MessageEvent()