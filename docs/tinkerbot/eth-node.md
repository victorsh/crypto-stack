# Save Info on Ethereum Programming

- install geth
https://www.quiknode.io/guides/infrastructure/how-to-install-and-run-a-geth-node

- Change Directory
`geth --datadir path/to/SD/datadir --ipcdisable`

- Print geth sync status
https://ethereum.stackexchange.com/questions/11233/how-to-check-my-sync-status-on-geth-1-5-5-raspberry-pi-3

- `geth attach http://localhost:88545`


```
  npm install web3
  Web3 = require('web3')
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
```