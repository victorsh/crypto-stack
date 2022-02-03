import WalletConnectProvider from '@maticnetwork/walletconnect-provider'
import Web3 from 'web3'
import Matic from '@maticnetwork/maticjs'

const maticMainProvider = new WalletConnectProvider(
  {
    host: `https://polygon-mainnet.g.alchemy.com/v2/YQoQ3Bp4iCXMWZM7fhEV2pUk2f25H1f3`,
    callbacks: {
      onConnect: console.log('connected'),
      onDisconnect: console.log('disconnect')
    }
  }
)

const maticMumbaiProvider = new WalletConnectProvider(
  {
    host: `https://rpc-mumbai.matic.today`,
    callbacks: {
      onConnect: console.log('connected'),
      onDisconnect: console.log('disconnected!')
    }
  }
)

const ropstenProvider = new WalletConnectProvider({
  host: `https://ropsten.infura.io/v3/70645f042c3a409599c60f96f6dd9fbc`,
  callbacks: {
    onConnect: console.log('connected'),
    onDisconnect: console.log('disconnected')
  }
})

const maticMainWeb3 = new Web3(maticMainProvider)
const maticWeb3 = new Web3(maticMumbaiProvider)
const ropstenWeb3 = new Web3(ropstenProvider)
