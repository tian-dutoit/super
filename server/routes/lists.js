const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', function (req, res) {
  res.send(db.getWidgets())
})

module.exports = router
