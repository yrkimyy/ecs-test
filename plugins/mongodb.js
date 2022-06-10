const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  fastify.register(require('@fastify/mongodb'), {
    forceClose: true,
    url: 'mongodb://hello:world@localhost:27017/baedal'
    })
})
