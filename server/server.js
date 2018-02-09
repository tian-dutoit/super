const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const lists = require('./routes/lists.js')

const server = express()

// server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/compare', lists)

module.exports = server
