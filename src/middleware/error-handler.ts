import { ValidationError } from "../errors/validation-error";

export function *errorHandler (next) {
  

  try {
    yield next
  } catch (err) {
    if (err instanceof ValidationError) {

      this.body = err.message;
      this.app.emit('error', err, this);
    } else {
      throw err
    }
  }
}