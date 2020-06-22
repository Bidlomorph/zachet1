const express = require('express')
const mongoose = require('mongoose')
const { Router } = require('express')
const router = Router()
const User = require('../models/user.js')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieParser = require ('cookie-parser')
const connect = require('connect') ;
const cookieSessions = require('cookie-sessions');
const MongoStore = require('connect-mongo')(session)

const app = express()
app.use(cookieParser())

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/api", (req, res) => {
    res.send({method: "GET"})
})

app.post('/api/registration', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    const user = new User({
        name: req.query.name,
        password: req.query.password
    })
    await user.save()
    console.log(req.query)
    res.send('Done')
    console.log(req.session)
})

app.post('/api/authentication', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    if (req.query.name) {
        await User.findOne({name: req.query.name}, (err, user) => {
            if (user) {
                if (user.password === req.query.password) {
                    res.send('Вошел');
                }
                else {
                    res.send('Неверный пароль');
                }
            }
            else {
                res.send('Ошибка');
            }
        })
    }
    else {
        res.send('Ошибка');
    }
})
module.exports = app