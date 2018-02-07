
exports.up = (knex, Promise) => {
  return knex.schema.createTable('countdown', (table) => {
    table.increments('id').primary()
    table.string('product')
    table.integer('price')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('countdown')
}
