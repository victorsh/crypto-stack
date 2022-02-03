const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
require('dotenv').config()

const app = express()
const config = require('./webpack.config.js')
const compiler = webpack(config)

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    mode: 'development',
    hot: true
  })
)

app.listen(process.env.DEV_PORT, () => {
  console.log(`React-Template client development server running on port ${process.env.DEV_PORT}...`)
})
