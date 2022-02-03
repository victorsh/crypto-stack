import Web3 from 'web3'

const contract_balance = async (addr) => {
  const contract = new web3.eth.Contract(minABI, addr)
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

export default contract_balance
