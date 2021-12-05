import { CreateUserRepository } from '../../../application/ports/repositories/user/create-user-repository';
import { FindUserByEmailRepository } from '../../../application/ports/repositories/user/find-user-by-email-repository';
import { FindUserByIdRepository } from '../../../application/ports/repositories/user/find-user-by-id-repository';
import { UserSqlRepository } from './sql/repositories/user-sql-repository';

const userSqlRepository = new UserSqlRepository();

const createUserRepository: CreateUserRepository = userSqlRepository;
const findUserByEmailRepository: FindUserByEmailRepository = userSqlRepository;
const findUserByIdRepository: FindUserByIdRepository = userSqlRepository;

export { createUserRepository, findUserByEmailRepository, findUserByIdRepository };
