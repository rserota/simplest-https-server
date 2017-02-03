var express = require('express')
var app = express()

var HTTP = require('http')



app.get('/', function(req, res){
    res.send("Welcome to the internet")
})

var httpServer = HTTP.createServer(app)
httpServer.listen()
