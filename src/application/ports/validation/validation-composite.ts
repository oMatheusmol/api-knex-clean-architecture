/* eslint-disable @typescript-eslint/no-explicit-any */
export abstract class ValidationComposite {
  protected validations: ValidationComposite[] = [];

  abstract validate(args: any): Promise<void> | never;

  add(...validations: ValidationComposite[]) {
    validations.forEach(validation => {
      this.validations.push(validation);
    });
  }
}
