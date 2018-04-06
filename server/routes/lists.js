const express = require('express')
const router = express.Router()

var development = require('../../knexfile').development
var knex = require('knex')(development)

router.post('/', function (req, res) {
  const shopListArr = Object.values(req.body.shoppingList)
  var down = {}
  knex('countdown').whereIn('product', shopListArr).select().then(function (ret) {
    down = ret
    return knex('new-world').whereIn('product', shopListArr).select()
  }).then(function (newWorld) {
    res.send({
      countD: down,
      newW: newWorld
    })
  })
})

module.exports = router
