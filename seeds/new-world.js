
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('new-world').del()
    .then(function () {
      // Inserts seed entries
      return knex('new-world').insert([
        {id: 1, product: 'milk', price: 6},
        {id: 2, product: 'bread', price: 1},
        {id: 3, product: 'chocolate', price: 3},
        {id: 4, product: 'coffee', price: 9},
        {id: 5, product: 'cheese', price: 99}
      ]);
    });
};
