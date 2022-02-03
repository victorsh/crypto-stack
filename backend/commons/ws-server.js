'use strict'

const ClientsData = require('./clients-data')
const Bot = require('./bot')

const run_server = async () => {
  const server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
  });
  server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
  });

  wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    autoAcceptConnections: false
  });

  function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
    return true;
  }

  wsServer.on('request', async (request) => {
    if (!originIsAllowed(request.origin)) {
      // Make sure we only accept requests from an allowed origin
      request.reject();
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
      return;
    }
    
    const connection = request.accept('echo-protocol', request.origin);
    
    console.log((new Date()) + ' Connection accepted.');
    connection.on('message', async (message) => {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            await commons.utils.Sleeper(100)
            connection.sendUTF(message.utf8Data);
        }
        else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            await commons.utils.Sleeper(1000)
            connection.sendBytes(message.binaryData);
        }
    });
    connection.on('close', (reasonCode, description) => {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });

    const send_ticker = async () => {
      const data = await JSON.stringify(ClientsData)
      connection.sendUTF('j_' + data)
      await commons.utils.Sleeper(5000)
      send_ticker()
    }
    await send_ticker()
  })
}

;(async () => {
  await run_server()
})()