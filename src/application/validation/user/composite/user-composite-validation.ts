import { InternalServerError } from '../../../../application/errors/internal-server-error';
import { ValidationComposite } from '../../../../application/ports/validation/validation-composite';

export class UserCompositeValidation extends ValidationComposite {
  validations: any;
  async validate(request: any): Promise<void> | never {
    if (this.validations.length === 0) {
      throw new InternalServerError('Composite has no validations');
    }

    for (const validation of this.validations) {
      await validation.validate(request);
    }
  }
}
