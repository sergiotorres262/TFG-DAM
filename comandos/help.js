const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "help",
    description: "Manual de usuario para moderadores",

    run: (client, message, args) => {
        const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Lista de comandos para moderadores')
        .setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .addFields(
            { name: '!ban', value: 'Para banear a un usuario del servidor, su sintaxis es <!ban> <ID del usuario que quieres banear> EJ: !ban 1100775859717165167' },
            { name: '!kick', value: 'Para kickear a un usuario del servidor, su sintaxis es <!ban> <TAG del usuario que quieres kickear> <razon> EJ: !kick @Usuario spam' },
            { name: '!unban', value: 'Para desbanear a un usuario del servidor, su sintaxis es <!unban> <TAG del usuario que quieres desbanear> EJ: !unban 754830011227439204' },
            { name: '!insert', value: 'Para insertar una palabra en la tabla de palabaras malsonantes, su sintaxis es <!insert><palabra que quieres insertar en la tabla>' },
            { name: '!delete', value: 'Para borrar una palabra de la tabla de palabaras malsonantes, su sintaxis es <!delete><palabra que quieres borrar de la tabla>' }
        )
        .setFooter({ text: 'Cualquier duda podéis contactar con el creador de este bot, Sergitest#7495' });

        message.channel.send({ embeds: [exampleEmbed] });
    }
}