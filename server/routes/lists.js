const express = require('express')
const router = express.Router()
const db = require('../db')

var development = require('../../knexfile').development
var knex = require('knex')(development)

router.get('/', function (req, res) {
  const bodyData = res.body
  const dataArr = db.getWidgets()
  console.log(bodyData)
  res.send(dataArr)
})

router.post('/', function (req, res) {
  const shopListObj = req.body
  const shopListArr = Object.values(shopListObj)[0]
  knex('countdown')
    .whereIn('product', shopListArr)
    .then(function (countdown) {
      const countdownItems = { shopping: countdown }
      res.send(countdownItems)
    })
})



module.exports = router
