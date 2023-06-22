import 'module-alias/register'
import koa from 'koa'
import koaBody from 'koa-bodyparser'
import { AppRouter } from '@bootstrap/app-router'
import { CONFIG } from './config/common'
import { errorHandler } from './middleware/error-handler'
import { MongoDB } from './service/mongodb'
import container from '@bootstrap/container'
import TYPES from '@bootstrap/types'
import proxy from 'koa-proxies'
import {bootstrapFirebase} from '@bootstrap/firebase'


async function bootstrap() {

  const db = new MongoDB()
  await db.connect()

  bootstrapFirebase()

  const app = new koa()

  const router = container.get<AppRouter>(TYPES.AppRouter).init()

  app.use(koaBody())
  app.use(errorHandler)
  app.use(router.routes())
  app.use(proxy('/swagger', {
    target: 'http://swagger:8080',
    logs: true
  }))


  app.listen(CONFIG.APP_PORT, () => {
    console.log('App is listening on ' + CONFIG.APP_PORT)

  })
}

bootstrap() 