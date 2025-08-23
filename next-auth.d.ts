// next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth"
import { JWT as DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session extends DefaultSession {
    id?: string|null
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id?: string|null
  }
}
