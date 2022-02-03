import Web3 from 'web3'

const web3i = async () => {
  console.log(process.env.ETHERSCAN_API)
  // check metamask is running
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  }

  // connect metamask
  try {
    await window.ethereum.enable()
  } catch (e) { console.error(e) }

  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545")
  console.log(web3)
  console.log(web3.currentProvider)
  const accounts = await web3.eth.getAccounts()
  console.log(accounts)
  const balance = await web3.eth.getBalance(accounts[0])
  console.log(web3.utils.fromWei(balance))

  // getBalance(web3, accounts[0])
}

const getBalance = async (web3, wallet_addr) => {
  const token_addr = '0x2eDf094dB69d6Dcd487f1B3dB9febE2eeC0dd4c5' //zee token
  const contract = new web3.eth.Contract(minABI, token_addr)
  console.log(contract)
  const result = await contract.methods.balanceOf(wallet_addr).call(); // 29803630997051883414242659
  
  const format = web3.utils.fromWei(result); // 29803630.997051883414242659
 
  console.log(format);
}

const minABI = [
    // balanceOf
    {
      constant: true,
      inputs: [{ name: "_owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "balance", type: "uint256" }],
      type: "function",
    },
]

export default web3i
