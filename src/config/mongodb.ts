import env from 'env-var'

export const DB_CONFIG = {
  DATABASE_PORT: env.get('DB_PORT').required().asPortNumber(),
  DATABASE_USERNAME: env.get('MONGO_USERNAME').required().asString(),
  DATABASE_PASSWORD: env.get('MONGO_PASSWORD').required().asString(),
  DATABASE_HOST: env.get('DB_URL').required().asString(),
  DATABASE_DATABASE: env.get('DB_NAME').required().asString(),
}