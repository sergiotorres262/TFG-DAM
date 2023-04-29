const { Client, EmbedBuilder, ButtonBuilder, ActionRowBuilder, SelectMenuBuilder } = require('discord.js')
const client = new Client({intents: [3276799]})

const config = require('./config.json')

client.on("messageCreate", async message =>{
    if(message.content === "!menu"){
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
})

client.on("interactionCreate", async interaction => {
   const valor = interaction.values[0]
   if(valor == "Valor"){
    interaction.update({
        content: "Respuesta de la opcion 1", components:[]
    })
   }
   
   if(valor == "Valor2"){
    interaction.update({
        content: "Respuesta de la opcion 2", ephemeral: true
    })
   } 
})
client.login(config.token)
console.log("El bot está listo")