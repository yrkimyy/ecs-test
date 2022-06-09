'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const orders = this.mongo.db.collection('order')
    const result = orders.find({}).toArray()
    reply.send(result)
  })
}