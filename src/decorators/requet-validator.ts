import {  validate, validateOrReject } from "class-validator";
import { ValidationError } from "src/errors/validation-error";

export function validateInput(target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor) {

    const method = descriptor.value
    descriptor.value = async function(...args: any[]) {
      for (const [idx, arg] of args.entries()) {
        try {
          
          await validateOrReject(arg)
        } catch (error) {
          throw new ValidationError(error.message)
        }
      }
      return method.call(this, ...args)
    }

}
