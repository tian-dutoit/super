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
  const bodyData = req.body
  const dataArr = db.getWidgets()
  console.log(bodyData)
  knex('countdown')
    .then(function (countdown) {
      console.log({ wombles: countdown })
    })
  res.send(dataArr)
})



module.exports = router
