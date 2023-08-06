import { PrismaClient } from "@prisma/client"

declare global {
    var prisma: PrismaClient | undefined
}

const newPrisma = new PrismaClient()
const client = globalThis.prisma || newPrisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = client

export default client
