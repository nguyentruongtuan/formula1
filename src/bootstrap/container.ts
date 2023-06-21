import { Container } from 'inversify'
import "reflect-metadata"
import { TeamGateway, TeamGatewayImpl } from '@gateway/team-gateway'
import { TeamController, TeamControllerImpl } from '@controller/team-controller'
import { TeamRepository, TeamRepositoryImpl } from '@repository/team-repository'
import { AppRouter } from './app-router'


const container = new Container()

container.bind<AppRouter>(Symbol.for('AppRouter')).to(AppRouter)
container.bind<TeamController>(Symbol.for('TeamController')).to(TeamControllerImpl)
container.bind<TeamRepository>(Symbol.for('TeamRepository')).to(TeamRepositoryImpl)
container.bind<TeamGateway>(Symbol.for('TeamGateway')).to(TeamGatewayImpl)

export default container