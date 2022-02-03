const { expect } = require('chai')

describe('NFT', function() {
  it('should deploy the contract, mint a token, and resolve to the right URI', async function() {
    const NFT = await ethers.getContractFactory('SampleNFT')
    const nft = await NFT.deploy()
    const URI = 'ipfs://QmWJBNeQAm9Rh4YaW8GFRnSgwa4dN889VKm9poc2DQPBkv'
    await nft.deployed()
    await nft.mint('0x91d11B033B7a25e2D826D4499C464a88E7b4dA6a', URI)
    expect(await nft.tokenURI(1)).to.equal(URI)
  })

  it('should mint a token with an empty uri', async function() {
    const NFT = await ethers.getContractFactory('SampleNFT')
    const nft = await NFT.deploy()
    const URI = ''
    await nft.deployed()
    await nft.mint('0x91d11B033B7a25e2D826D4499C464a88E7b4dA6a', URI)
    expect(await nft.tokenURI(1)).to.equal(URI)
  })
})