import { RequestValidationError } from '../../../../application/errors/request-validation-error';
import { ValidationComposite } from '../../../../application/ports/validation/validation-composite';
export class UserPasswordsMustMatchValidation extends ValidationComposite {
  async validate(request?: any): Promise<void> | never {
    if (!request) {
      return;
    }
    const error = new RequestValidationError('Invalid request');

    const { password, confirmPassword } = request;

    if (typeof password === 'undefined' && typeof confirmPassword === 'undefined') {
      return;
    }

    if (typeof password !== 'string' || typeof confirmPassword !== 'string') {
      error.messages.push('Password and confirmPassword must be strings');
    }

    if (password && !confirmPassword) {
      error.messages.push('Missing confirmPassword');
    }

    if (!password && confirmPassword) {
      error.messages.push('Missing password');
    }

    if (password !== confirmPassword) {
      const message = 'Password and confirmPassword must match';
      error.message = message;
      error.messages.push(message);
    }

    if (error.messages.length > 1) {
      throw error;
    }
  }
}
