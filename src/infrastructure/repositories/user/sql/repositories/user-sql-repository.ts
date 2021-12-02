import { FindAllUsersRepository } from '../../../../../application/ports/repositories/user/find-all-users-repository';
import { User } from '../../../../../domain/models/user/user';
import db from '../../../../../infrastructure/knex/config/knex.dataBase';

export class UserSqlRepository implements FindAllUsersRepository {
  private readonly table = 'users';
  async find(order: 'asc' | 'desc', limit: number, offset: number): Promise<User[]> {
    const users = await db(this.table)
      .select('id', 'name', 'email', 'password')
      .orderBy('id', order)
      .limit(limit)
      .offset(offset);
    return users;
  }
}
