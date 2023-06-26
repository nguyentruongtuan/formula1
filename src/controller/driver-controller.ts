import TYPES from '@bootstrap/types';
import { inject, injectable } from "inversify";
import { Driver } from 'src/model/driver';
import { CreateDriverRequest } from 'src/requests/create-driver-request';
import { GetDriversRequest } from 'src/requests/get-drivers-request';
import { UpdateDriverRequest } from 'src/requests/update-driver-request';
import { CreateDriverUsecase } from 'src/usecase/create-driver-usecase';
import { DeleteDriverUsecase } from 'src/usecase/delete-driver-usecase';
import { GetDriverUsecase } from 'src/usecase/get-driver-usecase';
import { GetSpecificDriverUsecase } from 'src/usecase/get-specific-driver-usecase';
import { UpdateDriverUsecase } from 'src/usecase/update-driver-usecase';

@injectable()
export class DriverController {

  constructor(
    @inject(TYPES.CreateDriverUsecase) private readonly createDriverUsecase: CreateDriverUsecase,
    @inject(TYPES.GetDriverUsecase) private readonly getDriverUsecase: GetDriverUsecase,
    @inject(TYPES.GetSpecificDriverUsecase) private readonly getSpecificDriverUsecase: GetSpecificDriverUsecase,
    @inject(TYPES.DeleteDriverUsecase) private readonly deleteDriverUsecase: DeleteDriverUsecase,
    @inject(TYPES.UpdateDriverUsecase) private readonly updateDriverUsecase: UpdateDriverUsecase,
  ) {}

  public async getDrivers(ctx): Promise<Driver[]> {
    const request: GetDriversRequest = { filter: ctx.request.query }
    return this.getDriverUsecase.execute(request)
  }

  public async getDriver(ctx): Promise<Driver> {
    return this.getSpecificDriverUsecase.execute(ctx.params.id)
  }

  public async createDriver(ctx): Promise<Driver> {
    const request: CreateDriverRequest = ctx.request.body
    return this.createDriverUsecase.execute(request)
  }

  public async deleteDriver(ctx): Promise<void> {
    return this.deleteDriverUsecase.execute(ctx.params.id)
  }

  public async updateDriver(ctx): Promise<Driver> {
    const request: UpdateDriverRequest = {id: ctx.params.id, data: ctx.request.body}
    return this.updateDriverUsecase.execute(request)
  }
}