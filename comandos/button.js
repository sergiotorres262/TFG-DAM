const {ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder} = require('discord.js');

module.exports = {
    name: 'roles',
    description: 'Comando para mandar el mensaje y asignar roles con botones',

    run: (client, message, args) => {
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('rol1')
                    .setLabel('Rol AutoRol')
                    .setStyle('Danger')
            );
        
        const embed = new EmbedBuilder()
            .setTitle('Roles')
            .setDescription('Pulsa un botón para asignar un rol automáticamente')
            .setColor('Green');

        message.channel.send({ embeds: [embed], components: [row] });
    }
};