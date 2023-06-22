import { inject, injectable } from "inversify";
import TYPES from "src/bootstrap/types";
import { DriverRepository } from "src/repository/driver-repository";

@injectable()
export class DeleteDriverUsecase {

  constructor(
    @inject(TYPES.DriverRepository) private readonly driverRepository: DriverRepository
  ) { }

  public async execute(id: string): Promise<void> {
    return this.driverRepository.deleteDriver(id)
  }
}