# Smart Contract Polygon Deployment

source: https://medium.com/pinata/how-to-create-layer-2-nfts-with-polygon-and-ipfs-aef998ff8ef2

```
npm i -D hardhat dotenv @openzeppelin/contracts
npx hardhat
npx hardhat run scripts/sample-script.js --network matic
```

Contrary to the tutorial, set the default network to `hardhat`. This way it doesn't deploy to the Polygon Testnet
each time it compiles and runs tests.

Running standalone node: `npx hardhat node`
Connect to local node at port 8545: `npx hardhat run scripts/sample-script.js --network matic`

