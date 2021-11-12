require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors') 

var postMessageRoutes =  require('./controllers/postMessageController')

var app = express()
app.use(bodyParser.json())
app.use(cors())
app.listen(4000,()=>console.log('Server en marche port : 4000'))

app.use('/postMessages', postMessageRoutes)