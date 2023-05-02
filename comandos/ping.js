module.exports ={
    name:"ping",
    description: "Ver el ping del bot",

    run: (client, message, args) =>{
        message.reply({
            content: `El ping del bot es **${client.ws.ping}**`
        })
    }
}