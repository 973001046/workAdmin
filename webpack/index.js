const webpack = require('webpack')
const webpackDevelop = require('./config/webpack.development')
const webpackProduction = require('./config/webpack.production')
const WebpackDevServer = require('webpack-dev-server')
const ServerConfig = require('./config/devServer')
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const ENV_FLAG = argv.env === 'production'
const compiler = webpack(ENV_FLAG ? webpackProduction : webpackDevelop)

if (ENV_FLAG) { // 生产环境
  compiler.run((err, stats) => {
  if (err) {
    console.log(err)
    return
  }
  process.stdout.write(
    stats.toString('errors-warnings') + '\n\n'
  )
})
} else { // 开发环境
  const server = new WebpackDevServer(ServerConfig, compiler)
  const runServer = async () => {
    console.log('Starting devServer...')
    await server.start()
  }
  runServer()
}