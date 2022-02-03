const exch = require('./interfaces/exch')
const config = require('./config')
const utils = require('./utils')
const ClientsData = require('./clients-data')

const events = require('events')
const eventEmitter = new events.EventEmitter()
const http = require('http')
const Decimal = require('decimal.js')
const IPFS = require('ipfs')
const WebSocketServer = require('websocket').server

const ws_port = 8085
let keepLooping = true

const Initialize = async () => {
  const time_pre = Date.now()
  const selected_coins = ['ALGO', 'ATOM', 'MATIC', 'BTC']
  const selected_quotes = ['USD', 'USDC']
  
  ClientsData.clients = {}
  ClientsData.rclients = await exch.operations.InitClientsPrivate(config.private_exchanges)
  delete ClientsData.ClientsData

  // Initial clients object && Parse Markets
  ClientsData.rclients.forEach(client => {
    ClientsData.clients[client.id] = {}
    ClientsData.clients[client.id].timeframes = client.timeframes
    ClientsData.clients[client.id].symbols = {}

    // Parse Markets
    Object.keys(client.markets).forEach(market => {
      const base = market.substr(0, market.indexOf('/'))
      const quote = market.substr(market.indexOf('/') + 1)
      if (selected_quotes.includes(quote) && selected_coins.includes(base)) {
        ClientsData.clients[client.id].symbols[market] = { ohlcvs: {}, tickers: [], orderbooks: [] }
      }
    })
  })

  // Fetch Raw Balance
  const balances = await exch.operations.FetchAllBalances(ClientsData)
  ClientsData.rbalances = balances
  // Parse Balance For Non-Empty && Store in ClientsData
  Object.keys(balances).forEach(client => {
    const positive_balances = {}
    Object.keys(balances[client]).forEach(coin => {
      if (coin !== 'info' && coin !== 'used' && coin !== 'free' && coin !== 'total') {
        if (balances[client][coin].total > 0 || selected_coins.includes(balances[client][coin])){
          positive_balances[coin] = balances[client][coin]
        }
      }
    })
    ClientsData.clients[client]['balance'] = positive_balances
  })

  // [OHLCV] //
  if (1 == 2) {
    // Compose OHLCV fetch list
    const ohlcv_requests = []
    Object.keys(ClientsData.clients).forEach(client => {
      Object.keys(ClientsData.clients[client].symbols).forEach(symbol => {
        Object.keys(ClientsData.clients[client].timeframes).forEach(timeframe => {
          // console.log(symbol, timeframe, ClientsData.clients[client].timeframes[timeframe])
          ohlcv_requests.push({ client, symbol, timeframe })
        })
      })
    })

    // Get all OHLCV data
    await utils.AsyncForEach(ClientsData.rclients, async client => {
      ClientsData.clients[client.id].ohlcvs = {}
      await utils.AsyncForEach(ohlcv_requests, async rqst => {
        if (rqst.client === client.id) {
          ClientsData.clients[client.id].symbols[rqst.symbol].ohlcvs[rqst.timeframe] = await exch.publics.FetchOHLCV(client, rqst.symbol, rqst.timeframe)
        }
      })
      // console.log(ClientsData.clients[client.id].symbols)
    })
  }

  // GET USER TRADING ACTIVITY
  if (1 === 2) {
    const openOrders = await exch.operations.FetchAllOpenOrders(ClientsData)
    const closedOrders = await exch.operations.FetchAllClosedOrders(ClientsData)
    const myTrades = await exch.operations.FetchAllMyTrades(ClientsData)
    // const transactions = await exch.operations.FetchAllTransactions(ClientsData)
    const deposits = await exch.operations.FetchAllDeposits(ClientsData)
    const withdrawals = await exch.operations.FetchAllWithdrawals(ClientsData)
  }

  console.log(Date.now() - time_pre)
}

const looper = async (i) => {
  console.log('loop count: ', i)

  await utils.AsyncForEach(ClientsData.rclients, async client => {
    const tickers = await exch.publics.FetchTickers(client)
    // Fetch from list of Selected Markets
    
    await utils.AsyncForEach(Object.keys(ClientsData.clients[client.id].symbols), async symbol => {
      if (tickers === false) {
        const ticker = await exch.publics.FetchTicker(client, symbol)
        ClientsData.clients[client.id].symbols[symbol].tickers.push(ticker)
      }
      const orderbook = await exch.publics.FetchOrderBook(client, symbol)
      ClientsData.clients[client.id].symbols[symbol].orderbooks.push(orderbook)
    })

    // Parse all tickers into Clients Data
    if (tickers !== false) {
      Object.keys(tickers).forEach(symbol => {
        if (typeof ClientsData.clients[client.id].symbols[symbol] === 'undefined') {
          ClientsData.clients[client.id].symbols[symbol] = { ohlcvs: {}, tickers: [], orderbooks: [] }
        }
        ClientsData.clients[client.id].symbols[symbol].tickers.push(tickers[tickers[symbol].symbol])
      })
    }
    // console.log(ClientsData.clients[client.id].symbols)
  })

  await new Promise(res => setTimeout(res, 1000))
  i === 0 ? eventEmitter.emit('clientdata-initialized') : null
  keepLooping ? looper(i+1) : console.log('Stopping Loop at: ', i)
}

// [WS SERVER] //
const run_server = async () => {
  const server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
  });
  server.listen(ws_port, function() {
    console.log(`${new Date()} Server is listening on port ${ws_port}`);
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
            await utils.Sleeper(100)
            connection.sendUTF(message.utf8Data);
        }
        else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            await utils.Sleeper(1000)
            connection.sendBytes(message.binaryData);
        }
    });
    connection.on('close', (reasonCode, description) => {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });

    const send_ticker = async () => {
      const data = await JSON.stringify(ClientsData)
      connection.sendUTF('j_' + data)
      await utils.Sleeper(5000)
      send_ticker()
    }
    await send_ticker()
  })
}

;(async () => {
  console.log('Initializing Client')
  await Initialize()

  console.log('Starting Bot Loop')
  looper(0);

  eventEmitter.on('stop-loop', () => keepLooping = false)
  
  eventEmitter.on('clientdata-initialized', () => {
    console.log('Starting Server')
    run_server()
    setTimeout(() => {
      console.log('Stopping Loop')
      eventEmitter.emit('stop-loop')
    }, 60000)
  })
})()
