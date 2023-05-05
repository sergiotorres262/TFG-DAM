/*const { Client, EmbedBuilder, ButtonBuilder, ActionRowBuilder, SelectMenuBuilder, Collection } = require('discord.js')

module.exports ={
    name: "menu",
    description: "Menu para administrar a los usuarios del servidor",

    run: (client, message, args) => {
        const menu = new ActionRowBuilder()
        .addComponents([
            new SelectMenuBuilder()
            .setCustomId("menu")
            .setPlaceholder("Menu")
            .addOptions([
                {
                    label: "Opcion 1",
                    emoji: "🙂",
                    description: "Descripcion",
                    value: "Valor" 
                },
                {
                    label: "Opcion 2",
                    description: "Descripcion 2",
                    value: "Valor2" 
                }
            ])
        ])

        message.channel.send({
            components: [menu]
        })

       
    }
    
}*/