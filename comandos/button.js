const {ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder} = require('discord.js');

module.exports = {
    name: 'roles',
    description: 'Comando para mandar el mensaje y asignar roles con botones',

    run: (client, message, args) => {
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('rol1')
                    .setLabel('Prueba')
                    .setStyle('Danger'),
                new ButtonBuilder()
                    .setCustomId('rol2')
                    .setLabel('Prueba2')
                    .setStyle('Primary')
            );
        
        const embed = new EmbedBuilder()
            .setTitle('Roles')
            .setDescription('Pulsa un botón para asignar un rol automáticamente')
            .setColor('Green');

        message.channel.send({ embeds: [embed], components: [row] });
    }
};