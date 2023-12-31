import { injectable } from "inversify";
import { DriverGateway } from "../driver-gateway";
import { CreateDriverRequest } from "src/requests/create-driver-request";
import { Driver, DriverModel } from "src/model/driver";
import { UpdateDriverRequest } from "src/requests/update-driver-request";
import { Types } from "mongoose";
import { GetDriversRequest } from "src/requests/get-drivers-request";

@injectable()
export class DriverMongooseImpl implements DriverGateway {

  public async getDrivers(request: GetDriversRequest): Promise<Driver[]> {
    const { filter } = request
    if (filter.highestGridPosition) {
      filter.highestGridPosition = filter.highestGridPosition * 1
    }
    return DriverModel.find(filter).limit(10)
  }

  public async createDriver(request: CreateDriverRequest): Promise<Driver> {
    const driver = new DriverModel(request)
    return driver.save()
  }

  public async deleteDriver(id: string): Promise<void> {
    await DriverModel.deleteOne({
      _id: new Types.ObjectId(id)
    })
  }

  public async getDriverById(id: string): Promise<Driver> {
    return DriverModel.findById(new Types.ObjectId(id))
  }

  public async updateDriver(request: UpdateDriverRequest): Promise<Driver> {
    const { id, data } = request
    await DriverModel.updateOne({ _id: new Types.ObjectId(id) }, { ...data })
    return this.getDriverById(id)
  }

}