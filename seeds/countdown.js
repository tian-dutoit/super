
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('countdown').del()
    .then(function () {
      // Inserts seed entries
      return knex('countdown').insert([
        {id: 1, product: 'milk', price: 1},
        {id: 2, product: 'bread', price: 2},
        {id: 3, product: 'chocolate', price: 3},
        {id: 4, product: 'coffee', price: 4},
        {id: 5, product: 'cheese', price: 10}
      ]);
    });
};
