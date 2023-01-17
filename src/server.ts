import Fastify from "fastify"
import { fastifyCors } from "@fastify/cors"
import { PrismaClient } from "@Prisma/client"

/* Prisma, Fastfy and Cors */
const app = Fastify()
const prisma = new PrismaClient()
app.register(fastifyCors)
app.get('/', () => {
  const habits = prisma.habit.findMany()
  return `habits`
})

/* Server Running */
const PORT = 3000
app.listen({
  port: PORT,
}).then(() => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

