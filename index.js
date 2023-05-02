const { Client, EmbedBuilder, ButtonBuilder, ActionRowBuilder, SelectMenuBuilder, Collection } = require('discord.js')
const client = new Client({intents: [3276799]})
const fs = require("fs")
const config = require('./config.json')

client.commands = new Collection()

const archivos = fs.readdirSync("./comandos").filter((f)=> f.endsWith(".js"))

for(arx of archivos) {
    const comando = require("./comandos/" + arx)
    client.commands.set(comando.name, comando)
    console.log(`comando ${arx} iniciado correctamente`)
}
client.on("messageCreate", async message =>{
    const prefix = "!"
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLocaleLowerCase()

    const cmd = client.commands.get(command)

    if(cmd){
        cmd.run(client, message, args)
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