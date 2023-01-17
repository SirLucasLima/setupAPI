import Fastify from "fastify"
const app = Fastify()

const PORT = 3000

app.get('/', () => {
  return `HELLO`
})

app.listen({
  port: PORT,
}).then(() => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

