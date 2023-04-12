require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const privateKey = process.env.DEPLOYER_SIGNER_PRIVATE_KEY;
const bscscanApiKey = process.env.BSCSCAN_API_KEY_TOKEN

module.exports = {
  solidity: "0.8.0",
  etherscan: {
    apiKey: bscscanApiKey,
    additionalNetworks: {
      bsc: bscscanApiKey,
      bsctestnet: bscscanApiKey,
      // fantom: "YOUR_FTMSCAN_API_KEY",
    }
  },
  networks: {
    bsctestnet: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [privateKey]
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [privateKey]
    }
  },
};

// Verify contract: npx hardhat verify YOUR_CONTRACT_ADDRESS --network rinkeby
// Verify contract: npx hardhat verify 0x9a59CFc34ABED8FDE5989892A1D2B75235d14b14 --network rinkeby
