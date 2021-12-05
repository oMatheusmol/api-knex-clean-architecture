import { BCryptAdapter } from '../../../../common/adapters/security/bcrypt-adapter';
import { CreateUserValidation } from '../../../../application/validation/user/composite/create-user-validation';
import { CreateUser } from '../../../../application/usecase/user/create-user';
import {
  createUserRepository,
  findUserByEmailRepository,
} from '../../../../infrastructure/repositories/user/user-default-repository';
import { User } from '../../../../domain/models/user/user';
import { GenericCreatedResponse } from '../../../../presentation/responses/generic-created-response';
import { CreateUserController } from '../../../../presentation/controllers/user/create-user-controller';

export const createUserControllerFactory = () => {
  // bcryptAdapter
  const bcryptAdapter = new BCryptAdapter();
  //user validation
  const createUserValidation = new CreateUserValidation();
  //create usecase
  const createUserUseCase = new CreateUser(
    bcryptAdapter,
    createUserValidation,
    createUserRepository,
    findUserByEmailRepository,
  );
  const createdUserPresenter = new GenericCreatedResponse<User>();
  const createUserController = new CreateUserController(createUserUseCase, createdUserPresenter);

  return {
    bcryptAdapter,
    createUserValidation,
    createUserUseCase,
    createdUserPresenter,
    createUserController,
    createUserRepository,
  };
};
