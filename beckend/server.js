    const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Bank', { useNewUrlParser: true })

const router = require('./server/routes/api')

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

 app.use('/', router)


const port = process.env.PORT || 8000
app.listen(port, function(){
    console.log("server is running on port " + port)
})