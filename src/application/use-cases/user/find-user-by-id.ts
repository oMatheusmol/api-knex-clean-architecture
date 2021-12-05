import { NotFoundError } from '../../../application/errors/not-found-error';
import { FindUserByIdRepository } from '../../../application/ports/repositories/user/find-user-by-id-repository';
import { User } from '../../../domain/models/user/user';
import { ValidationComposite } from '../../../application/ports/validation/validation-composite';

export class FindUserById {
  constructor(private readonly repository: FindUserByIdRepository, private readonly validation: ValidationComposite) {}

  async findById(id: string): Promise<User> | never {
    await this.validation.validate(id);
    const user = await this.repository.findById(id);

    if (!user) {
      throw new NotFoundError('User not found');
    }

    return user;
  }
}
