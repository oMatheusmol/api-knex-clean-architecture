import knex from './knex.dataBase';

//it should be able to connect to the database
describe('knex', () => {
  it('should be able to connect to the database', async () => {
    const result = await knex.raw('select 1+1 as result');

    expect(result[0][0].result).toBe(6);
  });
});
