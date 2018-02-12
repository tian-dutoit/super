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


// call to one db only
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


//call to both dbs joined
// router.post('/', function (req, res) {
//   const shopListObj = req.body.shoppingList
//   const shopListArr = Object.values(shopListObj)
//   knex('new-world')
//     .join('countdown', 'new-world.id', 'countdown.id')
//     .select('countdown.product as product', 'countdown.price as cdPrice', 'new-world.price as nwPrice')
//     .whereIn('countdown.product', shopListArr)
//     .then(function (newWorld) {
//       console.log(newWorld)
//       const newWorldItems = { shopping: newWorld }
//       res.send(newWorldItems)
//     })
// })

router.post('/', function (req, res) {
  const shopListObj = req.body.shoppingList
  const shopListArr = Object.values(shopListObj)
     var down = {}
      knex("countdown").whereIn('product', shopListArr).select().then(function(ret){
       down=ret
       //console.log(down.whereIn('product, shopListArr'))
       return knex("new-world").whereIn('product', shopListArr).select()
     }).then(function(newWorld){
       res.send({
         countD: down,
         newW: newWorld
       })
     })
   })



module.exports = router
