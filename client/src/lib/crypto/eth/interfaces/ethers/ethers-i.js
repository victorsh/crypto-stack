const ethersi = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const blockNumber = await provider.getBlockNumber()
  console.log(blockNumber)
  
  const element = document.createElement('div')
  element.innerHTML = 'hi'
  document.body.appendChild(element)
  
  add_text(blockNumber)

}

export default ethersi
