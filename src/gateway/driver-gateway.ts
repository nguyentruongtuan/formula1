import { Driver } from "src/model/driver"
import { CreateDriverRequest } from "src/requests/create-driver-request"
import { UpdateDriverRequest } from "src/requests/update-driver-request"

export interface  DriverGateway {

  getDrivers(): Promise<Driver[]>
  createDriver(request: CreateDriverRequest): Promise<Driver>
  deleteDriver(id: string): Promise<void>
  getDriverById(id: string): Promise<Driver>
  updateDriver(request: UpdateDriverRequest): Promise<Driver>
}