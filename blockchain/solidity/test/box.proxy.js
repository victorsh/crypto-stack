const { expect } = require('chai')

let Box, box

describe('Box (proxy)', () => {
  beforeEach(async () => {
    Box = await ethers.getContractFactory("Box")
    box = await upgrades.deployProxy(Box, [42], { initializer: 'store' })
  })

  it('retrieve returns a value previously initialized', async () => {
    expect((await box.retrieve()).toString()).to.equal('42')
  })

  it('returns the amount that the user has paid at paySomething', async () => {
    let ret = await box.paySomething({ value: ethers.utils.parseEther("1.0") })
    console.log(ret)
  })
})