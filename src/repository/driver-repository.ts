import { inject, injectable } from "inversify"
import TYPES from "src/bootstrap/types"
import { DriverGateway } from "src/gateway/driver-gateway"
import { Driver } from "src/model/driver"
import { CreateDriverRequest } from "src/requests/create-driver-request"
import { GetDriversRequest } from "src/requests/get-drivers-request"
import { UpdateDriverRequest } from "src/requests/update-driver-request"

export interface DriverRepository {

  getDrivers(request: GetDriversRequest): Promise<Driver[]>
  getDriverById(id: string): Promise<Driver>
  createDriver(request: CreateDriverRequest): Promise<Driver>
  updateDriver(request: UpdateDriverRequest): Promise<Driver>
  deleteDriver(id: string): Promise<void>
}

@injectable()
export class DriverRepositoryImpl implements DriverRepository {

  constructor(
    @inject(TYPES.DriverGateway) private readonly driverGateway: DriverGateway
  ) { }

  public async getDrivers(request: GetDriversRequest): Promise<Driver[]> {
    return this.driverGateway.getDrivers(request)
  }

  public async getDriverById(id: string): Promise<Driver> {
    return this.driverGateway.getDriverById(id)
  }

  public async createDriver(request: CreateDriverRequest): Promise<Driver> {
    return this.driverGateway.createDriver(request)
  }

  public async updateDriver(request: UpdateDriverRequest): Promise<Driver> {
    return this.driverGateway.updateDriver(request)
  }

  public async deleteDriver(id: string): Promise<void> {
    return this.driverGateway.deleteDriver(id)
  }
}