import env from 'env-var'

export const CONFIG  = {
  APP_PORT: env.get('APP_PORT').required().asPortNumber()
}