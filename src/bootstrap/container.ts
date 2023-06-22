import { Container } from 'inversify'
import "reflect-metadata"
import { TeamGateway } from '@gateway/team-gateway'
import { TeamController } from '@controller/team-controller'
import { TeamRepository, TeamRepositoryImpl } from '@repository/team-repository'
import { AppRouter } from './app-router'
import { DeleteTeamUseCase } from '@usecase/delete-team-usecase'
import { GetTeamUsecase } from '@usecase/get-team-usecase'
import { CreateTeamUsecase } from '@usecase/create-team-usecase'
import TYPES from './types'
import { UpdateTeamUsecase } from 'src/usecase/update-team-usecase'
import { GetSpecificTeamUsecase } from 'src/usecase/get-specific-team-usecase'
import { DriverRepository, DriverRepositoryImpl } from 'src/repository/driver-repository'
import { GetDriverUsecase } from 'src/usecase/get-driver-usecase'
import { GetSpecificDriverUsecase } from 'src/usecase/get-specific-driver-usecase'
import { DeleteDriverUsecase } from 'src/usecase/delete-driver-usecase'
import { DriverController } from 'src/controller/driver-controller'
import { CreateDriverUsecase } from 'src/usecase/create-driver-usecase'
import { DriverMongooseImpl } from 'src/gateway/mongoose/driver-mongoose-impl'
import { DriverGateway } from 'src/gateway/driver-gateway'
import { TeamMongooseImpl } from 'src/gateway/mongoose/team-mongoose-impl'
import { UpdateDriverUsecase } from 'src/usecase/update-driver-usecase'


const container = new Container()

container.bind<AppRouter>(TYPES.AppRouter).to(AppRouter)

container.bind<TeamController>(TYPES.TeamController).to(TeamController)
container.bind<DriverController>(TYPES.DriverController).to(DriverController)

container.bind<TeamRepository>(TYPES.TeamRepository).to(TeamRepositoryImpl)
container.bind<DriverRepository>(TYPES.DriverRepository).to(DriverRepositoryImpl)

container.bind<TeamGateway>(TYPES.TeamGateway).to(TeamMongooseImpl)
container.bind<DriverGateway>(TYPES.DriverGateway).to(DriverMongooseImpl)

container.bind<DeleteTeamUseCase>(TYPES.DeleteTeamUseCase).to(DeleteTeamUseCase)
container.bind<GetTeamUsecase>(TYPES.GetTeamUsecase).to(GetTeamUsecase)
container.bind<CreateTeamUsecase>(TYPES.CreateTeamUsecase).to(CreateTeamUsecase)
container.bind<UpdateTeamUsecase>(TYPES.UpdateTeamUsecase).to(UpdateTeamUsecase)
container.bind<GetSpecificTeamUsecase>(TYPES.GetSpecificTeamUsecase).to(GetSpecificTeamUsecase)
container.bind<GetDriverUsecase>(TYPES.GetDriverUsecase).to(GetDriverUsecase)
container.bind<GetSpecificDriverUsecase>(TYPES.GetSpecificDriverUsecase).to(GetSpecificDriverUsecase)
container.bind<DeleteDriverUsecase>(TYPES.DeleteDriverUsecase).to(DeleteDriverUsecase)
container.bind<CreateDriverUsecase>(TYPES.CreateDriverUsecase).to(CreateDriverUsecase)
container.bind<UpdateDriverUsecase>(TYPES.UpdateDriverUsecase).to(UpdateDriverUsecase)

export default container