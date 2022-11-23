const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("라인")
    .setDescription("마법의 문철사마 라인을 정해주세요"),
  /**
   *
   * @param {import("discord.js").CommandInteraction} interaction
   */
  async execute(interaction) {
    const line = ["탑","미드","정글","원딜","서폿"] //괄호안에 메세지 더 추가하시거나 수정하시면됩니다
      const randomline = Math.floor(Math.random() * line.length)
      
      const randommsg = ["탑","미드","정글","원딜","서폿"] //괄호안에 메세지 더 추가하시거나 수정하시면됩니다
      const random = Math.floor(Math.random() * randommsg.length)
      
      if (random == randomline) {
        await interaction.reply({ content: `주라인은 ${line[randomline]}이고 부라인은 상관없음` })
      }
      else{
        await interaction.reply({ content: `주라인은 ${line[randomline]}이고 부라인은 ${randommsg[random]}` })
      }
  }
}