import { inject, injectable } from "inversify"
import KoaRouter from "koa-router"
import TYPES from "@bootstrap/types"
import { TeamController } from "@controller/team-controller"
import { DriverController } from "src/controller/driver-controller"
import { __protected } from "src/middleware/auth"


@injectable()
export class AppRouter {


  constructor(
    @inject(TYPES.TeamController) private readonly teamController : TeamController,
    @inject(TYPES.DriverController) private readonly driverController : DriverController,
  ) {
    this.init()
  }

  public init() {

    const router = new KoaRouter()
    router.prefix('/api')
    router.use(__protected)

  
    router.get('/teams', async (ctx) => { ctx.body = await this.teamController.getTeams() })
    router.post('/teams', async (ctx) => { ctx.body = await this.teamController.createTeam(ctx) })
    router.delete('/teams/:id', async (ctx) => { ctx.body = await this.teamController.deleteTeam(ctx) })
    router.put('/teams/:id', async (ctx) => { ctx.body = await this.teamController.updateTeam(ctx) })
    router.get('/teams/:id', async (ctx) => { ctx.body = await this.teamController.getTeam(ctx) })

  
    router.get('/drivers', async (ctx) => { ctx.body = await this.driverController.getDrivers() })
    router.post('/drivers', async (ctx) => { ctx.body = await this.driverController.createDriver(ctx) })
    router.delete('/drivers/:id', async (ctx) => { ctx.body = await this.driverController.deleteDriver(ctx) })
    router.put('/drivers/:id', async (ctx) => { ctx.body = await this.driverController.updateDriver(ctx) })
    router.get('/drivers/:id', async (ctx) => { ctx.body = await this.driverController.getDriver(ctx) })

    return router
  }
}