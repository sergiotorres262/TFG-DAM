const{ChatInputCommandInteraction, SlashCommandBuilder, PermissionFlagsBits} = require("discord.js"); 
const tablas = require("../Schemas/test");

module.exports = {
    "name": "insert",
    "description": "Insertar una palabra en la BBDD",

     run: async (client, message, args) =>{
      if(!message.guild.members.me.permissions.has(PermissionFlagsBits.Administrator)) 
            return message.reply({content: "No tienes permisos de administrador"});

        const word = args[0];
        if(!word) 
         return message.reply({content: "Debes especificar la palabra para insertar"});
        tablas.findOne({palabra: word}).then((data)=>{
          if(!data){
            tablas.create({
              palabra: word
            });
          message.channel.send(`La palabra ${args[0]} ha sido introducida correctamente`);
          }else{
            message.channel.send(`La palabra ${data.palabra} ya está en nuestra base de datos`);
          }
        });   
    }       
}
