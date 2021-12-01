//create users table and insert some data
exports.up = function (knex) {
  return Promise.all([
    knex.schema
      .createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').unique().notNullable();
        table.string('password_hash').unique().notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      })
      .then(() => {
        return knex('users').insert([
          {
            name: 'admin',
            email: 'root@localhost',
            password_hash: 'root',
          },
        ]);
      }),
  ]);
};

//drop users table
exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
