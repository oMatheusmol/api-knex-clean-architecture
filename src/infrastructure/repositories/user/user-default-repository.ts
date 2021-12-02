/* eslint-disable @typescript-eslint/no-unused-vars */
import { FindAllUsersRepository } from '../../../application/ports/repositories/user/find-all-users-repository';
import { UserSqlRepository } from './sql/repositories/user-sql-repository';

// This is just for changing repositories easily while developing
const userSqlRepository = new UserSqlRepository();

const findAllUsersRepository: FindAllUsersRepository = userSqlRepository;

export { findAllUsersRepository };
