import { findUserByIdRepository } from '../../../../infrastructure/repositories/user/user-default-repository';
import { ValidateStringNotEmpty } from '../../../../application/validation/common/leaf/validate-string-not-empty';
import { FindUserById } from '../../../../application/use-cases/user/find-user-by-id';
import { GenericSuccessResponse } from '../../../../presentation/responses/generic-success-response';
import { FindUserByIdController } from '../../../../presentation/controllers/user/find-by-id-controller';

import { User } from '../../../../domain/models/user/user';

export const findUserByIdControllerFactory = () => {
  const findUserByIdValidation = new ValidateStringNotEmpty();
  const findUserById = new FindUserById(findUserByIdRepository, findUserByIdValidation);
  const successUserPresenter = new GenericSuccessResponse<User>();
  const findUserByIdController = new FindUserByIdController(findUserById, successUserPresenter);

  return {
    findUserByIdController,
    findUserByIdValidation,
    findUserById,
    successUserPresenter,
    findUserByIdRepository,
  };
};
