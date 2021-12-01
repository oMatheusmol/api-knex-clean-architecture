import knex from '../config/knex.dataBase';

(async () => {
  console.log(await knex('users').select('*'));
})();
