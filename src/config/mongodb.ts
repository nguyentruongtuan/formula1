import env from 'env-var'

export const DB_CONFIG = {
  DATABASE_PORT: env.get('DATABASE_PORT').required().asPortNumber(),
  DATABASE_USERNAME: env.get('DATABASE_USERNAME').required().asString(),
  DATABASE_PASSWORD: env.get('DATABASE_PASSWORD').required().asString(),
  DATABASE_HOST: env.get('DATABASE_HOST').required().asString(),
  DATABASE_DATABASE: env.get('DATABASE_DATABASE').required().asString(),
}