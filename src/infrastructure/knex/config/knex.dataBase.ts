import knexConnection from '../../../../knexfile';
import { knex, Knex } from 'knex';

type db = Knex;
// environment can be configured in .env file
export default knex(knexConnection) as db;
