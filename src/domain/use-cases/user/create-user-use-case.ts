import { User } from '../../../domain/models/user/user';

export interface CreateUserUseCase {
  create(userData: any): Promise<User> | never;
}
