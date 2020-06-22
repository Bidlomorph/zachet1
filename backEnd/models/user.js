const { Schema, model } = require('mongoose')

const user = new Schema({
    name: {
        type: String,
    },
    password: {
        type: String,
    },

})

module.exports = model('User', user)