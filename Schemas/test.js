const {model, Schema} = require("mongoose")

let palabrasMalsonantes = new Schema({
    palabra: String,
})


module.exports = model('palabrasMalsonantes', palabrasMalsonantes)