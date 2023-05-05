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
        { name: '!unban', value: 'Para desbanear a un usuario del servidor, su sintaxis es <!unban> <TAG del usuario que quieres desbanear> EJ: !unban Usuario#7490' }
	)
	.setFooter({ text: 'Cualquier duda podéis contactar con el creador de este bot, Sergitest#7495' });

    message.channel.send({ embeds: [exampleEmbed] });
    }
}