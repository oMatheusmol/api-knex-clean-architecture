import { User } from '../../../../domain/models/user/user';

export interface CreateUserRepository {
  create(requestModel: any): Promise<User | never | undefined>;
}
