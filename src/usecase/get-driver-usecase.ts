import { inject, injectable } from "inversify";
import TYPES from "src/bootstrap/types";
import { Driver } from "src/model/driver";
import { DriverRepository } from "src/repository/driver-repository";
import { GetDriversRequest } from "src/requests/get-drivers-request";

@injectable()
export class GetDriverUsecase {

  constructor(
    @inject(TYPES.DriverRepository) private readonly driverRepository: DriverRepository
  ) { }

  public async execute(request: GetDriversRequest): Promise<Driver[]> {
    // const { filter } = request
    // for (const key in filter) {
    //   if (key === 'grandsPrixEntered' || key === 'highestGridPosition') {
    //     filter[key] = Number(filter[key])
    //   }
    // }
    return this.driverRepository.getDrivers(request)
  }

}