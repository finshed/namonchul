const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("문철")
    .setDescription("마법의 문철사마"),
  /**
   *
   * @param {import("discord.js").CommandInteraction} interaction
   */
  async execute(interaction) {
    const na  = ["https://postfiles.pstatic.net/MjAyMjEwMzFfNDEg/MDAxNjY3MjEyMTI1NDkz.eaaTKk8kOEEYs-7bdCyqNv0Bx099buzvCZIiKQXolL4g.F_ZgTsXkPmPMWkGunijrT2M5Y_x2krNavVg7M0BXzL4g.JPEG.dlaclen07/20211222_163611.jpg?type=w966","https://postfiles.pstatic.net/MjAyMjEwMzFfMjc2/MDAxNjY3MjEyMTM2NzQw.VMUEkaEPRXLSm7PMPNt37rcX5e5Bm7jO0WteoH3YTlUg.7AEQcZgmRGBE7F7EffZDMXra3kIyvBlSnQBuuFD45X0g.JPEG.dlaclen07/20211222_163643.jpg?type=w966"]
    const namon = Math.floor(Math.random() * na.length)
      
      await interaction.reply({ content: `${na[namon]}` })
      
  }
}