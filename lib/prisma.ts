import { PrismaClient } from '@prisma/client'

// PrismaClient is attached to the `global` object in development.
// It prevents exhausting your database connection limit.
// 🔍 Learn more at https://shrty.vercel.app/bmtbna

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default prisma
