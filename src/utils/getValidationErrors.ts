import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validaionErrors: Errors = {};

  err.inner.forEach(error => {
    validaionErrors[error.path] = error.message;
  });

  return validaionErrors;
}
