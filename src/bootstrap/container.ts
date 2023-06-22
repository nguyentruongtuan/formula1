import { Container } from 'inversify'
import "reflect-metadata"
import { TeamGateway, TeamGatewayImpl } from '@gateway/team-gateway'
import { TeamController } from '@controller/team-controller'
import { TeamRepository, TeamRepositoryImpl } from '@repository/team-repository'
import { AppRouter } from './app-router'
import { DeleteTeamUseCase } from '@usecase/delete-team-usecase'
import { GetTeamUsecase } from '@usecase/get-team-usecase'
import { CreateTeamUsecase } from '@usecase/create-team-usecase'
import TYPES from './types'
import { UpdateTeamUsecase } from 'src/usecase/update-team-usecase'
import { GetSpecificTeamUsecase } from 'src/usecase/get-specific-team-usecase'


const container = new Container()

container.bind<AppRouter>(TYPES.AppRouter).to(AppRouter)
container.bind<TeamController>(TYPES.TeamController).to(TeamController)
container.bind<TeamRepository>(TYPES.TeamRepository).to(TeamRepositoryImpl)
container.bind<TeamGateway>(TYPES.TeamGateway).to(TeamGatewayImpl)


container.bind<DeleteTeamUseCase>(TYPES.DeleteTeamUseCase).to(DeleteTeamUseCase)
container.bind<GetTeamUsecase>(TYPES.GetTeamUsecase).to(GetTeamUsecase)
container.bind<CreateTeamUsecase>(TYPES.CreateTeamUsecase).to(CreateTeamUsecase)
container.bind<UpdateTeamUsecase>(TYPES.UpdateTeamUsecase).to(UpdateTeamUsecase)
container.bind<GetSpecificTeamUsecase>(TYPES.GetSpecificTeamUsecase).to(GetSpecificTeamUsecase)

export default container