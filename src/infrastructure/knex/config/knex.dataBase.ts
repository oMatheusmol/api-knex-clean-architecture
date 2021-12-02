import knex from 'knex';
import knexConnection from '../knexfile';

// environment can be configured in .env file
type Environment = 'test' | 'development' | 'production';
const env = (process.env.NODE_ENV as Environment) || 'development';
const db = knex(knexConnection[env]);
export default db;
