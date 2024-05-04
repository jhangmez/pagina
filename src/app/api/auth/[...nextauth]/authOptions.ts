import { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '@lib/prisma'
import { compare } from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/login'
  },
  session: {
    maxAge: 60 * 60 * 2
  },
  jwt: {
    maxAge: 60 * 60 * 2
  },
  providers: [
    CredentialsProvider({
      name: 'Iniciar sesión',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'ejemplo@ejemplo.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) {
          throw new Error('Falta nombre de usuario o contraseña')
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user || !(await compare(credentials.password, user.password))) {
          throw new Error('Error en la autenticación')
        }

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.username,
          randomKey: 'Hey cool'
        }
      }
    })
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey
        }
      }
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey
        }
      }
      return token
    }
  }
}
