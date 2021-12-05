import { Controller } from '../../../application/ports/controllers/controller';
import { ResponseHandler } from '../../../application/ports/responses/response-handler';
import { CreateUserUseCase } from '../../../domain/use-cases/user/create-user-use-case';
import { User } from '../../../domain/models/user/user';
import { RequestValidationError } from '../../../application/errors/request-validation-error';
import { genericStringSanitizerSingleton } from '../../../common/adapters/sanitizers/generic/generic-string-sanitizer-adapter';
import { objectKeyExists } from '../../../common/helpers/objects/object-key-exists';

export class CreateUserController implements Controller<User | never> {
  constructor(private readonly createUser: CreateUserUseCase, private readonly presenter: ResponseHandler<User>) {}

  async handleRequest(requestModel: any) {
    if (!objectKeyExists(requestModel, 'body')) {
      throw new RequestValidationError('Missing body');
    }

    const { email, name, password, confirmPassword } = requestModel.body;

    const sanitizedBody: any = {
      email: this.sanitize(email),
      name: this.sanitize(name),
      password: this.sanitize(password),
      confirmPassword: this.sanitize(confirmPassword),
    };

    const user = await this.createUser.create(sanitizedBody);
    return await this.presenter.response(user);
  }

  private sanitize(value: string): string {
    return genericStringSanitizerSingleton.sanitize(value);
  }
}
