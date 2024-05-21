import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import Credentials from 'next-auth/providers/credentials'
import { compare } from 'bcryptjs'
import { ZodError } from 'zod'
import { signInSchema } from '@lib/zod'

const prisma = new PrismaClient()

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/login'
  },
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '*********'
        },
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'username'
        }
      },
      authorize: async (credentials) => {
        try {
          const { username, password } = await signInSchema.parseAsync(
            credentials
          )

          const user = await prisma.user.findUnique({
            where: { username: username }
          })

          if (!user) {
            throw new Error('Usuario no encontrado')
          }

          // Verifica la contraseña
          if (!(await compare(password, user.password))) {
            throw new Error('Contraseña incorrecta')
          }

          // Devuelve el objeto de usuario si las credenciales son válidas
          return user
        } catch (error) {
          if (error instanceof ZodError) {
            // Aquí puedes acceder a los detalles del error de validación
            // Por ejemplo, imprimir los mensajes de error
            // console.error(error.errors.map((e) => e.message))

            // Decidir qué acción tomar basado en los errores de validación
            // Por ejemplo, lanzar un error personalizado o redirigir al usuario
            throw new Error('Error en la validación de las credenciales')
          } else {
            // Para otros tipos de errores, puedes manejarlos de manera diferente
            // console.error(error)
            throw new Error(
              'Ocurrió un error durante el proceso de autenticación'
            )
          }
        }
      }
    })
  ]
})
