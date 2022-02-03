const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.config.js')
const webpackMiddleware = require('webpack-dev-middleware')
const httpsLocalhost = require('https-localhost')
const express = require('express')

const port = process.env.PORT
let app = null

const shouldWrite = (filepath) => {
  if (path.basename(filepath) == 'bundle.js' || path.basename(filepath) == 'bundle.js.map') {
    console.log('write to disk')
    return true
  } else {
    console.log('don\'t write to disk')
    return false
  }
}

if (process.env.NODE_ENV === 'production') {
  config.mode = 'production'
  app = httpsLocalhost()
} else if (process.env.NODE_ENV === 'development') {
  config.mode = 'development'
  config.devtool = 'eval-source-map'
  app = express()
}

const compiler = webpack(config)
const wpmw = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  writeToDisk: shouldWrite(path.resolve(__dirname, './dist'))
})

app.use(wpmw)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/bundle.js'))
})