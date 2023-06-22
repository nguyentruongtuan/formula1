import { inject, injectable } from "inversify"
import KoaRouter from "koa-router"
import TYPES from "@bootstrap/types"
import { TeamController } from "@controller/team-controller"
import { CreateTeamRequest } from "src/requests/create-team-request"


@injectable()
export class AppRouter {


  constructor(
    @inject(TYPES.TeamController) private readonly teamController : TeamController
  ) {
    this.init()
  }

  public init() {

    const router = new KoaRouter()
    router.prefix('/api')

  
    router.get('/teams', async (ctx) => { ctx.body = await this.teamController.getTeams() })
    router.post('/teams', async (ctx) => { ctx.body = await this.teamController.createTeam(ctx) })
    router.delete('/teams/:id', async (ctx) => { ctx.body = await this.teamController.deleteTeam(ctx) })
    router.put('/teams/:id', async (ctx) => { ctx.body = await this.teamController.updateTeam(ctx) })
    router.get('/teams/:id', async (ctx) => { ctx.body = await this.teamController.getTeam(ctx) })

    return router
  }
}