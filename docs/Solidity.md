# Solidity Notes

#### Some Notes
- Any Eth sent to contract is stored in contract. `address(this).balance`
- Don't use contructor on upgradeable contract due to storage location mismatch
  - Instead of constructor, use transaction override. 
- Use struct instead of variables to save gas.

pure function modifier, ensure that the function does not read or write state transition.

- EIPS
https://eips.ethereum.org/erc

- Efficient way of Checking and Inserting array address that is unique
https://ethereum.stackexchange.com/questions/62572/efficient-way-of-checking-and-inserting-array-address-that-is-unqiue

- List of ETH developer tools
https://github.com/ConsenSys/ethereum-developer-tools-list/blob/master/README.md

- Crypto Zombies
https://cryptozombies.io/en/course/

- Ethernauts
https://ethernaut.openzeppelin.com/level/0x4E73b858fD5D7A5fc1c3455061dE52a53F35d966

- Eat the blocks (Solidity Playlist)
https://www.youtube.com/watch?v=p3C7jljTXaA&list=PLbbtODcOYIoE0D6fschNU4rqtGFRpk3ea&index=1

- Upgradeable Contracts
https://www.youtube.com/watch?v=bdXJmWajZRY

- Diamond Facet Upgrades
https://eips.ethereum.org/EIPS/eip-2535#how-a-diamond-works

- mstore
https://ethereum.stackexchange.com/questions/48576/solidity-assembly-question-mstore/48582

- Eth conversions
https://eth-converter.com/extended-converter.html

- Eth Deep Dive
https://blog.openzeppelin.com/ethereum-in-depth-part-1-968981e6f833/

- Simple Locking Contracts
https://dontpanicburns.medium.com/a-simple-hash-locked-contract-part-1-28d7c6065417

- EIP-712 Typed Structured Data Hashing
https://eips.ethereum.org/EIPS/eip-712

- Scheduling
https://ethereum-alarm-clock-service.readthedocs.io/en/v0.7.0/scheduling.html

- Pay gas with ERC20
https://medium.com/biconomy/moving-forward-save-your-eth-pay-gas-in-erc20-tokens-7fcd9969d9ff

- Message Encryption
https://bitcointalk.org/index.php?topic=627927.0

- Front Running
https://solidity-by-example.org/hacks/front-running/

- Submarine Contracts
https://libsubmarine.org/

- Encrypt a Message
https://ethereum.stackexchange.com/questions/3092/how-to-encrypt-a-message-with-the-public-key-of-an-ethereum-address