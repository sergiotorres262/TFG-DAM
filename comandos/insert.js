const{ChatInputCommandInteraction, SlashCommandBuilder} = require("discord.js")
const tablas = require("../Schemas/test")

module.exports = {
    "name": "insert",
    "description": "prueba",

     run: async (client, message, args) =>{
        const word = "palabra1";
        tablas.findOne({palabra: word}).then((data)=>{
          if(!data){
            tablas.create({
              palabra: word
            });
          }else{
            message.channel.send(`La palabra ${data.palabra} ya ha sido introducida`);
          }
        });   
    }       
    }
