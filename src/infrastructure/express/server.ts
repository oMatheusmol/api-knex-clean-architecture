import express from 'express';
import knex from '../knex/config/knex.dataBase';
import { setupApp } from './setup/setup-app';

export const server = express();

setupApp(server);

server.route('/').get((req, res) => {
  knex('users')
    .select('*')
    .then(users => {
      return res.send(users);
    });
});

server.listen(3000, () => {
  console.log('Listening on port 3000');
});
