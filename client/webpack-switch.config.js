const path = require('path')
const config = require('./webpack.config.js')

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    console.log('Loading Development Server')
    config.devtool = 'eval-source-map'
    config.devServer = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      historyApiFallback: true,
      hot: true,
      http2: true,
      static: {
        directory: path.join(__dirname, 'src/assets')
      }
    }
  }

  if (argv.mode === 'production') {
    //
  }

  return config
}