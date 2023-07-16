require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "ZYLLSR1Kqi3IcPZBwuJKFzYrI8HDg2KX";
const PRIVATE_KEY =
  "ebe102065928d0ae18fc5f6bc5953f7048d733a1f1fc8707babe59e8c923661b";
const SEPOLIA_ALCHEMY_API_KEY = "RAnVHEkV0DiHIejsit8uKC0Wlq_vGERL";
const POLYGON_ALCHEMY_API_KEY = "9P7IBj_aZGrUmVMe6Vhhyq9nLfEWBzZB";
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${SEPOLIA_ALCHEMY_API_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    polygon: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${POLYGON_ALCHEMY_API_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
