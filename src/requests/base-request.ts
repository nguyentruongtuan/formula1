import { validate } from "class-validator";

export abstract class BaseRequest {

  public async validate() {

    try {
      await validate(this)  
    } catch (error) {
      throw error
    }
    
  }

}