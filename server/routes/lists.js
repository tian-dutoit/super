const express = require('express')
const router = express.Router()
const db = require('../db')

var development = require('../../knexfile').development
var knex = require('knex')(development)

router.get('/', function (req, res) {
  const bodyData = res.body
  const dataArr = db.getWidgets()
  res.send(dataArr)
})

// router.post('/', function (req, res) {
//   const shopListObj = req.body
//   const shopListArr = Object.values(shopListObj)[0]
//   knex('countdown')
//     .whereIn('product', shopListArr)
//     .then(function (countdown) {
//       const countdownItems = { shopping: countdown }
//       res.send(countdownItems)
//     })
// })

router.post('/', function (req, res) {
  const shopListObj = req.body.shoppingList
  const shopListArr = Object.values(shopListObj)
  console.log(shopListObj);
  // console.log(shopListArr)
  //if I am using this.props in the compare component


  knex('new-world')
    .join('countdown', 'new-world.id', 'countdown.id')
    .select('countdown.product as product', 'countdown.price as cdPrice', 'new-world.price as nwPrice')
    .whereIn('countdown.product', shopListArr)
    .then(function (newWorld) {
      console.log(newWorld)
      const newWorldItems = { shopping: newWorld }
      res.send(newWorldItems)
    })
})


module.exports = router
