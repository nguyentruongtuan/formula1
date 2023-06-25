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
import { RaceEventGateway } from 'src/gateway/race-event-gateway'
import { RaceGateway } from 'src/gateway/race-gateway'
import { RaceResultGateway } from 'src/gateway/race-result-gateway'
import { RaceEventMongooseImpl } from 'src/gateway/mongoose/race-event-mongoose-impl'
import { RaceMongooseImpl } from 'src/gateway/mongoose/race-mongoose-impl'
import { RaceResultMongooseImpl } from 'src/gateway/mongoose/race-result-mongoose-impl'
import { GetRaceResultUsecase } from 'src/usecase/get-race-result-usecase'
import { GetRaceEventsUsecase } from 'src/usecase/get-race-events-usecase'
import { GetRaceResultsUsecase } from 'src/usecase/get-race-results-usecase'
import { GetRacesUsecase } from 'src/usecase/get-races-usecase'
import { GetRaceUsecase } from 'src/usecase/get-race-usecase'
import { GetRaceEventUsecase } from 'src/usecase/get-race-event-usecase'
import { RaceController } from 'src/controller/race-controller'
import { RaceEventController } from 'src/controller/race-event-controller'
import { RaceResultController } from 'src/controller/race-result-controller'
import { RaceEventRepository, RaceEventRepositoryImpl } from 'src/repository/race-event-repository'


const container = new Container()

container.bind<AppRouter>(TYPES.AppRouter).to(AppRouter)

container.bind<TeamController>(TYPES.TeamController).to(TeamController)
container.bind<DriverController>(TYPES.DriverController).to(DriverController)
container.bind<RaceController>(TYPES.RaceController).to(RaceController)
container.bind<RaceEventController>(TYPES.RaceEventController).to(RaceEventController)
container.bind<RaceResultController>(TYPES.RaceResultController).to(RaceResultController)

container.bind<TeamRepository>(TYPES.TeamRepository).to(TeamRepositoryImpl)
container.bind<DriverRepository>(TYPES.DriverRepository).to(DriverRepositoryImpl)
container.bind<RaceEventRepository>(TYPES.RaceEventRepository).to(RaceEventRepositoryImpl)

container.bind<TeamGateway>(TYPES.TeamGateway).to(TeamMongooseImpl)
container.bind<DriverGateway>(TYPES.DriverGateway).to(DriverMongooseImpl)
container.bind<RaceEventGateway>(TYPES.RaceEventGateway).to(RaceEventMongooseImpl)
container.bind<RaceGateway>(TYPES.RaceGateway).to(RaceMongooseImpl)
container.bind<RaceResultGateway>(TYPES.RaceResultGateway).to(RaceResultMongooseImpl)

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
container.bind<GetRaceResultUsecase>(TYPES.GetRaceResultUsecase).to(GetRaceResultUsecase)
container.bind<GetRaceEventsUsecase>(TYPES.GetRaceEventsUsecase).to(GetRaceEventsUsecase)
container.bind<GetRaceResultsUsecase>(TYPES.GetRaceResultsUsecase).to(GetRaceResultsUsecase)
container.bind<GetRacesUsecase>(TYPES.GetRacesUsecase).to(GetRacesUsecase)
container.bind<GetRaceUsecase>(TYPES.GetRaceUsecase).to(GetRaceUsecase)
container.bind<GetRaceEventUsecase>(TYPES.GetRaceEventUsecase).to(GetRaceEventUsecase)

export default container