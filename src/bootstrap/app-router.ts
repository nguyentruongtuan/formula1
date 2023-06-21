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

    router.get('/teams', async (ctx, next) => {

      const teams = await this.teamController.getTeams()

      ctx.body = teams
      next()
    })

    router.post('/teams', async (ctx, next) => {
      const teams = await this.teamController.createTeam(ctx.request.body as CreateTeamRequest)
      ctx.body = teams
      next()
    })

    return router
  }
}