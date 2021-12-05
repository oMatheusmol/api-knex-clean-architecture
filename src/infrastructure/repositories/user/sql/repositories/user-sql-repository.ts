import { RepositoryError } from '../../../../../application/errors/repository-error';
import { CreateUserRepository } from '../../../../../application/ports/repositories/user/create-user-repository';
import { FindUserByEmailRepository } from '../../../../../application/ports/repositories/user/find-user-by-email-repository';
import { FindUserByIdRepository } from '../../../../../application/ports/repositories/user/find-user-by-id-repository';

import { User } from '../../../../../domain/models/user/user';
import db from '../../../../knex/config/knex.dataBase';

export class UserSqlRepository implements CreateUserRepository, FindUserByEmailRepository, FindUserByIdRepository {
  private readonly table = 'users';

  async create(requestModel: any): Promise<User | never | undefined> {
    try {
      const user = await db<User>(this.table).insert(requestModel).returning('id');
      return {
        id: user[0].toString(),
        email: requestModel.email,
        name: requestModel.name,
        password: requestModel.password,
      };
    } catch (error) {
      if (error instanceof Error) {
        const repositoryError = new RepositoryError('Could not create User');
        repositoryError.stack = error.stack;
        throw repositoryError;
      }
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await db<User>(this.table).where({ email }).first();
    if (!user) return null;
    return { ...user, id: user.id.toString() };
  }

  async findById(id: string): Promise<User | null> {
    const user = await db<User>(this.table).where({ id }).first();
    if (!user) return null;
    return { ...user, id: user.id.toString() };
  }
}
