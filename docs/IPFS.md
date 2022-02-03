ipfs daemon

### Add to IPFS/IPNS
ipfs add helloipfs.txt
- returns ipfs address
ipfs cat <ipfs address>
ipfs name publish /ipfs/<ipfs address>
- returns ipfs address
curl https://gateway.ipfs.io/ipns/<ipns address>

### Update IPNS
ipfs add <file>
- returns <ipfs address>
ipfs name publish <ipfs address>

### View Qm hash of k5 key
ipfs name resolve

### Usde different k5 key
ipfs key gen SecondKey
- returns ipns address
ipfs name publish --key=SecondKey /ipfs/<ipns address>

**NOTE**
- Assets needs to be updated on each deploy
  - Have separate process to publish assets for the first time

IPFS Setup JS SDK API