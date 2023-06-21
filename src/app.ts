import 'module-alias/register'
import koa from 'koa'
import koaBody from 'koa-bodyparser'
import { AppRouter } from '@bootstrap/app-router'
import { CONFIG } from './config/common'
import { errorHandler } from './middleware/error-handler'
import { MongoDB } from './service/mongodb'
import container from '@bootstrap/container'
import TYPES from '@bootstrap/types'

async function bootstrap() {

  const db = new MongoDB()
  await db.connect()

  const app = new koa()

  const router = container.get<AppRouter>(TYPES.AppRouter)
  const routes = router.init()

  app.use(koaBody())
  app.use(errorHandler)
  app.use(routes)


  app.listen(CONFIG.APP_PORT, () => {
    console.log('App is listening on ' + CONFIG.APP_PORT)

  })
}

bootstrap() 