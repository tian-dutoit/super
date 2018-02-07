exports.up = (knex, Promise) => {
  return knex.schema.createTable('new-world', (table) => {
    table.increments('id').primary()
    table.string('product')
    table.integer('price')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('new-world')
}
