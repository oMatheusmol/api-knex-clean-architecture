import { RequestValidationError } from '../../../../application/errors/request-validation-error';
import { ValidationComposite } from '../../../../application/ports/validation/validation-composite';
import { isString } from '../../../../common/helpers/strings/is_string';

export class UserRequiredFieldsValidation extends ValidationComposite {
  async validate(request: any): Promise<void> | never {
    const error = new RequestValidationError('Invalid request');
    const { name, email, password, confirmPassword } = request;

    if (!isString(name) || !name) {
      error.messages.push('Missing field name');
    }

    if (!isString(email) || !email) {
      error.messages.push('Missing field email');
    }

    if (!isString(password) || !password) {
      error.messages.push('Missing field password');
    }

    if (!isString(confirmPassword) || !confirmPassword) {
      error.messages.push('Missing field confirmPassword');
    }

    if (error.messages.length > 1) {
      throw error;
    }
  }
}
