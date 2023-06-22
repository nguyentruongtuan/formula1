import { inject, injectable } from "inversify";
import TYPES from "src/bootstrap/types";
import { Driver } from "src/model/driver";
import { DriverRepository } from "src/repository/driver-repository";
import { CreateDriverRequest } from "src/requests/create-driver-request";

@injectable()
export class CreateDriverUsecase {

  constructor(
    @inject(TYPES.DriverRepository) private readonly driverRepository: DriverRepository
  ) { }

  public async execute(request: CreateDriverRequest): Promise<Driver> {
    return this.driverRepository.createDriver(request)
  }

}