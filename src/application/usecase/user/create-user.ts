import { UserExistsError } from '../../../application/errors/user-exists-error';

import { User } from '../../../domain/models/user/user';
import { ValidationComposite } from '../../../application/ports/validation/validation-composite';

export class CreateUser {
  constructor(
    private readonly passwordHashing: any,
    private readonly validation: ValidationComposite,
    private readonly createUserRepository: any,
    private readonly findUserByEmailRepository: any,
  ) {}

  async create(userData: any): Promise<User> {
    await this.validation.validate(userData);
    const userExists = await this.findUserByEmailRepository.findByEmail(userData.email);

    if (userExists) {
      throw new UserExistsError('User already created');
    }

    const password = await this.passwordHashing.hash(userData.password);
    const userWithPasswordHash = {
      name: userData.name,
      email: userData.email,
      password,
    };
    const user = await this.createUserRepository.create(userWithPasswordHash);
    return user;
  }
}
