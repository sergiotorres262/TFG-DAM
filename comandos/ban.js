const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits} = 
require("discord.js");

module.exports = {
    name: "ban",
    description: "ban usuario", 

    run: async (client, message, args) => {
        if(!message.member.permissions.has(PermissionFlagsBits.KickMember)) 
            return message.reply({content: "No tengo permisos para banear"})
        if(!message.guild.members.me.permissions.has(PermissionFlagsBits.Administrator)) 
            return message.reply({content: "No tienes permisos de administrador"})

        try{
            const usuario = message.mentions.members.first()
            if(!usuario) return message.reply({content: "Debes especificar un usuario"})
            if(message.member.roles.highest.position<=usuario.roles.highest.position) 
                return message.reply({content: "El usuario que has intentado banear tiene un rol igual o superior al tuyo"})
            let razon = args.slice(1).join(" ")
            if(!razon) return message.reply({content: "Debes especificar una razon"})

            await usuario.ban({reason: razon})
            await message.reply({content:`Se baneó a ${usuario} correctamente\n Razon: ${razon}`})
        }catch(error){
            console.log(error)
            message.channel.send({content: "Error al banear un usuario"})
        }
    }
}
