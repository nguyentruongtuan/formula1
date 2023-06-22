import { inject, injectable } from "inversify";
import TYPES from "src/bootstrap/types";
import { Driver } from "src/model/driver";
import { DriverRepository } from "src/repository/driver-repository";

@injectable()
export class GetDriverUsecase {

  constructor(
    @inject(TYPES.DriverRepository) private readonly driverRepository: DriverRepository
  ) { }

  public async execute(): Promise<Driver[]> {
    return this.driverRepository.getDrivers()
  }

}