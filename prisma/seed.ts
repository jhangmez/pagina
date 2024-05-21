import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    typeSuscription: {
      connect: {
        id: 1
      }
    },
    typeUser: {
      connect: {
        id: 1
      }
    },
    email: 'jhan@gmail.com',
    firstname: 'Jhan',
    lastname: 'Gómez',
    username: 'jhan',
    password: '$2a$10$nM6dnt1AjUF.En0Hc7tKfuOTAe6ziB499Tio3x99RKaiZKJvOqb9a' // ronal
  }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u
    })
    console.log(
      `Usuario creado con el id: ${user.id} con el nombre ${user.username}`
    )
  }

  console.log(`Datos ingresados.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
