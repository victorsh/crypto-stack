'use strict'

const ws_port = 3003
const webSocketServer = require('websocket').server
const http = require('http')
const server = http.createServer()
sever.listen(ws_port)
const wsServer = new webSocketServer({ httpServer: server })
