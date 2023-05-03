const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits} = require("discord.js");

module.exports = {
    name: "unban",
    description: "Desbanear a un usuario", 

    run: async (client, message, args) => {
        if(!message.member.permissions.has(PermissionFlagsBits.KickMembers)) 
            return message.reply({content: "No tengo permisos para desbanear"});

        if(!message.guild.members.me.permissions.has(PermissionFlagsBits.BanMembers)) 
            return message.reply({content: "No tengo permisos para desbanear"});

        try {
            const usuarioId = args[0];

            if(!usuarioId) 
                return message.reply({content: "Debes especificar el ID de un usuario (ej: AAA#7495)"});

            const usuarioBaneado = await message.guild.bans.fetch();

            const user = usuarioBaneado.find(user => user.user.id === usuarioId);

            if(!user)
                return message.reply({content: "El usuario que intentas desbanear no está baneado"});

            await message.guild.members.unban(user.user);
            await message.reply({content:`Se desbaneó a ${user.user.tag} correctamente`});
        } catch(error) {
            console.log(error);
            message.reply({content: "Error al desbanear al usuario"});
        }
    }
}