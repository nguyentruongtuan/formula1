import { inject, injectable } from "inversify";
import TYPES from "src/bootstrap/types";
import { Driver } from "src/model/driver";
import { DriverRepository } from "src/repository/driver-repository";
import { UpdateDriverRequest } from "src/requests/update-driver-request";

@injectable()
export class UpdateDriverUsecase {

  constructor(
    @inject(TYPES.DriverRepository) private readonly driverRepository: DriverRepository
  ) { }

  public async execute(request: UpdateDriverRequest): Promise<Driver> {
    return this.driverRepository.updateDriver(request)
  }
}