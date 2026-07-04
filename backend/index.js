import Fastify from 'fastify'
import cors from '@fastify/cors'
import websocket from '@fastify/websocket'
import dotenv from 'dotenv'

dotenv.config()

const fastify = Fastify({ logger: true })

fastify.register(cors, { origin: true })
fastify.register(websocket)

fastify.get('/health', async () => ({ status: 'ok', timestamp: Date.now() }))

fastify.register(async function (fastify) {
  fastify.get('/ws', { websocket: true }, (connection, req) => {
    connection.socket.on('message', message => {
      try {
        const data = JSON.parse(message.toString())
        if (data.type === 'subscribe') {
          connection.socket.send(JSON.stringify({ type: 'subscribed', agent: data.agent }))
        }
      } catch (e) {}
    })
  })
})

const PORT = process.env.PORT || 3001
fastify.listen({ port: PORT, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Backend running on ${address}`)
})
