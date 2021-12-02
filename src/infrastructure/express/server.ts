import express from 'express';
import db from '../knex/config/knex.dataBase';
import { setupApp } from './setup/setup-app';
import { setupRoutes } from './setup/setup-routes';

export const app = express();

setupApp(app);
setupRoutes(app);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
