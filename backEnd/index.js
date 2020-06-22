const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000

const app = express()

// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/user', require('./api/users.js'))
app.use('/galery', require('./api/galery.js'))


async function start() {
    try {
        await mongoose.connect(
            'mongodb+srv://admin:admin@cluster0-9hxqm.mongodb.net/user',
            {
                useNewUrlParser: true,
                useFindAndModify: false
            }
        )
        app.listen(PORT, () => {
            console.log('Server has been started...')
        })
    } catch (e) {
        console.log(e)
    }
}

start()