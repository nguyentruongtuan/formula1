import { inject, injectable } from "inversify"
import KoaRouter from "koa-router"
import TYPES from "@bootstrap/types"
import { TeamController } from "@controller/team-controller"
import { DriverController } from "src/controller/driver-controller"
import { __protected } from "src/middleware/auth"
import { RaceController } from "src/controller/race-controller"
import { RaceEventController } from "src/controller/race-event-controller"
import { RaceResultController } from "src/controller/race-result-controller"
import { SearchController } from "src/controller/search-controller"


@injectable()
export class AppRouter {


  constructor(
    @inject(TYPES.TeamController) private readonly teamController : TeamController,
    @inject(TYPES.DriverController) private readonly driverController : DriverController,
    @inject(TYPES.RaceController) private readonly raceController : RaceController,
    @inject(TYPES.RaceEventController) private readonly raceEventController : RaceEventController,
    @inject(TYPES.RaceResultController) private readonly raceResultController: RaceResultController,
    @inject(TYPES.SearchController) private readonly searchController: SearchController,
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

  
    router.get('/drivers', async (ctx) => { ctx.body = await this.driverController.getDrivers() })
    router.post('/drivers', async (ctx) => { ctx.body = await this.driverController.createDriver(ctx) })
    router.delete('/drivers/:id', async (ctx) => { ctx.body = await this.driverController.deleteDriver(ctx) })
    router.put('/drivers/:id', async (ctx) => { ctx.body = await this.driverController.updateDriver(ctx) })
    router.get('/drivers/:id', async (ctx) => { ctx.body = await this.driverController.getDriver(ctx) })

  
    router.get('/results', async (ctx) => { ctx.body = await this.raceResultController.getRaceResults() })
    router.post('/results', async (ctx) => { ctx.body = await this.raceResultController.createRaceResult(ctx) })
    router.delete('/results/:id', async (ctx) => { ctx.body = await this.raceResultController.deleteRaceResult(ctx) })
    router.put('/results/:id', async (ctx) => { ctx.body = await this.raceResultController.updateRaceResult(ctx) })
    router.get('/results/:id', async (ctx) => { ctx.body = await this.raceResultController.getRaceResult(ctx) })

  
    router.get('/events', async (ctx) => { ctx.body = await this.raceEventController.getRaceEvents() })
    router.post('/events', async (ctx) => { ctx.body = await this.raceEventController.createRaceEvent(ctx) })
    router.delete('/events/:id', async (ctx) => { ctx.body = await this.raceEventController.deleteRaceEvent(ctx) })
    router.put('/events/:id', async (ctx) => { ctx.body = await this.raceEventController.updateRaceEvent(ctx) })
    router.get('/events/:id', async (ctx) => { ctx.body = await this.raceEventController.getRaceEvent(ctx) })

    router.get('/races', async (ctx) => { ctx.body = await this.raceController.getRaces() })
    router.post('/races', async (ctx) => { ctx.body = await this.raceController.createRace(ctx) })
    router.delete('/races/:id', async (ctx) => { ctx.body = await this.raceController.deleteRace(ctx) })
    router.put('/races/:id', async (ctx) => { ctx.body = await this.raceController.updateRace(ctx) })
    router.get('/races/:id', async (ctx) => { ctx.body = await this.raceController.getRace(ctx) })
    
    
    router.get('/search', async (ctx) => { ctx.body = await this.searchController.search(ctx) })

    return router
  }
}