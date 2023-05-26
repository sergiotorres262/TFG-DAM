const { Client, EmbedBuilder, ButtonBuilder, ActionRowBuilder, SelectMenuBuilder, Collection, PermissionFlagsBits } = require('discord.js');
const client = new Client({intents: [3276799]});
const fs = require("fs");
const config = require('./config.json');
const mongoose = require("mongoose");
const tablas = require("./Schemas/test");

client.commands = new Collection();

const archivos = fs.readdirSync("./comandos").filter((f)=> f.endsWith(".js"));

for(arx of archivos) {
    const comando = require("./comandos/" + arx);
    client.commands.set(comando.name, comando);
    console.log(`comando ${arx} iniciado correctamente`);
}


client.on('messageCreate', (message) => {
  if (message.author.bot) {
    return;
  }
  const words = message.content.toLowerCase().match(/\b\w+\b/g);

  tablas.findOne({ palabra: { $in: words } }).then((data) => {
    if (data !== null) {
      const palabraMalsonante = data.palabra;
      message.reply({ content: `Palabra malsonante detectada: ${palabraMalsonante}` })
        .then(() => {
          const member = message.member;
          if (!member.permissions.has(PermissionFlagsBits.ManageMessages)) {
            member.timeout(60000)
              .then(() => message.channel.send(`${member.user.tag} ha sido silenciado por un minuto.`))
              .catch(console.error);
          } else {
            console.log(`El miembro ${member.user.tag} no tiene los permisos necesarios para aplicar el timeout.`);
          }
        })
        .catch(console.error);
    }
  }).catch((error) => {
    console.error('Error al buscar palabras malsonantes:', error);
  });
});

client.on("messageCreate", async message =>{
    const prefix = "!";
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    const cmd = client.commands.get(command);

    if(cmd){
        cmd.run(client, message, args);
    }
});

client.on("interactionCreate", async interaction => {
    if(interaction.customId == "rol1"){
      const rol = interaction.guild.roles.cache.get('1109929777659400302');
      const tieneRol = interaction.member.roles.cache.has(rol.id);
      if(tieneRol){
        return interaction.reply({
          content: `Ya tienes el rol ${rol}`,
          ephemeral: true
        });
      } 
      return interaction.member.roles
      .add(rol)
      .then((member) =>
        interaction.reply({
          content: `El rol ${rol} se ha añadido`,
          ephemeral: true,
        })
      );
    }
});

client.login(config.token);
console.log("El bot está listo");


  mongoose.connect(config.mongopass,{
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

try{
  if(mongoose.connect){
    console.log("El bot se ha conectado a la base de datos correctamente");
  }
}catch{
  console.log("Error al conectar a la base de datos");
}
