const { ChatInputCommandInteraction, SlashCommandBuilder, PermissionFlagsBits} = require("discord.js");
const tablas = require("../Schemas/test");

module.exports = {
  name: "delete",
  description: "Eliminar una palabra de la BBDD",

  run: async (client, message, args) => {
    if (!message.guild.members.me.permissions.has(PermissionFlagsBits.Administrator)) {
      return message.reply({ content: "No tienes permisos de administrador" });
    }

    const word = args[0];
    if(!word) 
         return message.reply({content: "Debes especificar la palabra para borrar"});
    tablas.deleteOne({ palabra: word })
      .then((result) => {
        if (result.deletedCount === 1) {
          message.channel.send(`La palabra ${word} ha sido eliminada correctamente`);
        } else {
          message.channel.send(`La palabra ${word} no fue encontrada en la base de datos`);
        }
      })
      .catch((error) => {
        console.error("Error al eliminar la palabra:", error);
        message.channel.send("Ocurrió un error al eliminar la palabra");
      });
  },
};