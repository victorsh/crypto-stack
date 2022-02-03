// npx hardhat run scripts/sample-script.js --network maticMumbai

require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-ethers')
require('@openzeppelin/hardhat-upgrades')
require('dotenv').config()
const PRIVATE_KEY = process.env.PRIVATE_KEY

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
      forking: {
        url: 'https://polygon-mainnet.g.alchemy.com/v2/YQoQ3Bp4iCXMWZM7fhEV2pUk2f25H1f3'
      }
    },
    maticMainnet: {
      url: 'https://polygon-rpc.com/',
      chainId: 137,
      accounts: [PRIVATE_KEY]
    },
    maticMumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      chainId: 80001,
      accounts: [PRIVATE_KEY]
    },
    avaxMainnet: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: [PRIVATE_KEY]
    },
    avaxFuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [PRIVATE_KEY]
    },
    harmonyMainnet: {
      url: `https://api.harmony.one`,
      chainId: 1666600000,
      accounts: [PRIVATE_KEY]
    },
    harmonyTestnet: {
      url: `https://api.s0.b.hmny.io`,
      accounts: [PRIVATE_KEY]
    }
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};
