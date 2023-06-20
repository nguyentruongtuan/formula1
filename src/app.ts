import koa from 'koa'
import koaBody from 'koa-bodyparser'
import { AppRouter } from './bootstrap/app-router'
import { CONFIG } from './config/common'
import { errorHandler } from './middleware/error-handler'
import { MongoDB } from './service/mongodb'

async function bootstrap() {

  const db = new MongoDB()
  await db.connect()

  const app = new koa()

  const router = new AppRouter()

  app.use(koaBody())
  app.use(errorHandler)
  app.use(router.routes())


  app.listen(CONFIG.APP_PORT, () => {
    console.log('App is listening on ' + CONFIG.APP_PORT)

  })
}

bootstrap() 