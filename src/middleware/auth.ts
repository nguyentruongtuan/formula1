import { AuthError } from "src/errors/auth-error";
import { auth } from 'firebase-admin'
export async function __protected (ctx, next) {

  try {

    const token = ctx.request.header.authorization
    if (!token) {
      throw new AuthError('Unauthenticated')
    }
    await auth().verifyIdToken(token.split(" ")[1])

    await next()
  } catch (error) {
    if (error instanceof AuthError) {
      ctx.status = 401
      ctx.body = error.message  
    } else {
      ctx.status = 403
      ctx.body = error.message
    }
  }
}