import { inject, injectable } from "inversify"
import KoaRouter from "koa-router"
import TYPES from "@bootstrap/types"
import { TeamController } from "@controller/team-controller"


@injectable()
export class AppRouter {


  constructor(
    @inject(TYPES.TeamController) private readonly teamController : TeamController
  ) {
    this.init()
  }

  public init() {

    const router = new KoaRouter()

    router.get('/teams', async (ctx, next) => {

      const teams = await this.teamController.getTeams()

      ctx.body = teams
      next()
    })

    return router.routes()
  }
}