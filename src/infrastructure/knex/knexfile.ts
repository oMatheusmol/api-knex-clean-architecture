// These values can be configured in .env file

import dotenv from 'dotenv';
import { resolve } from 'path';

const dotenvFilePath = resolve(__dirname, '..', '..', '..', '.env');
dotenv.config({ path: dotenvFilePath });
const defaultPort = '3000';

export default {
  test: {
    client: process.env.DATABASE_CLIENT,
    connection: {
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      port: parseInt(process.env.DATABASE_PORT || defaultPort),
    },
    pool: {
      min: 2,
      max: 10,
    },
    debug: false,
  },
  development: {
    client: process.env.DATABASE_CLIENT,
    connection: {
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      port: parseInt(process.env.DATABASE_PORT || defaultPort),
    },
    pool: {
      min: 2,
      max: 10,
    },
    debug: false,
  },
  production: {
    client: process.env.DATABASE_CLIENT,
    connection: {
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      port: parseInt(process.env.DATABASE_PORT || defaultPort),
    },
    pool: {
      min: 2,
      max: 10,
    },
    debug: false,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: resolve(__dirname, 'migrations'),
  },
  seeds: {
    directory: resolve(__dirname, 'seeds'),
  },
};
