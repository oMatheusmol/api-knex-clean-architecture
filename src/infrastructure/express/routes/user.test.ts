import request from 'supertest';
import { app } from '../server';
//import db from '../../../infrastructure/knex/config/knex.dataBase';

describe('User', () => {
  it('should get all users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    console.log(response.body);
    expect(response.body).toHaveLength(1);
  });
});
