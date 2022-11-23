module.exports = {
    name: "messageCreate",
    once: false,
    execute(message) {
      if (message.content == "나문") {
        message.reply({ content: `**철**` });
      }
    },
  };