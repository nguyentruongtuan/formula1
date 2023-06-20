import KoaRouter from "koa-router"


export class AppRouter extends KoaRouter {


  constructor() {
    super()
    this.init()
  }

  public init() {

    this.get('/', async (ctx, next) => {

      ctx.body = 'Hello'
      next()
    })
  }
}