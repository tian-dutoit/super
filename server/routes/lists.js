const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', function (req, res) {
  console.log('H')
  const response = db.getWidgets()
  console.log(response, 'working')
  res.send(db.getWidgets())
})

module.exports = router
