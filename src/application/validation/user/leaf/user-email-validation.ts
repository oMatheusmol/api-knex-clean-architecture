import { EmailValidationError } from '../../../../application/errors/email-validation-error';
import { ValidationComposite } from '../../../../application/ports/validation/validation-composite';

export class UserEmailValidation extends ValidationComposite {
  constructor(private readonly emailValidator: any) {
    super();
  }

  async validate(request?: any): Promise<void> | never {
    if (!request) {
      return;
    }

    const { email } = request;

    if (typeof email === 'undefined') {
      return;
    }

    if (!(await this.emailValidator.isValid(email))) {
      throw new EmailValidationError('Invalid e-mail');
    }
  }
}
