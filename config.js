var config = {
  server: {
    protocol: 'http',
    host: 'localhost',
    port: '3102'
  }
}

let { server } = config
config['server']['domain'] = `${server.protocol}://${server.host}:${server.port}`

module.exports = config
