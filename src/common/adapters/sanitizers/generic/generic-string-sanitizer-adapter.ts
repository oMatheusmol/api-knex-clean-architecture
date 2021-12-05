/* eslint-disable @typescript-eslint/no-explicit-any */
import sanitizeHtml from 'sanitize-html';
import { SanitizerError } from '../../../../application/errors/sanitizer-error';

export class GenericStringSanitizerAdapter {
  sanitize(value: any) {
    if (typeof value === 'undefined') {
      return '';
    }

    if (typeof value !== 'string') {
      throw new SanitizerError('Invalid value');
    }

    return sanitizeHtml(value);
  }
}

export const genericStringSanitizerSingleton = new GenericStringSanitizerAdapter();
