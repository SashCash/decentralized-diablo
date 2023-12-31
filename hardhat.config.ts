/** @format */

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-deploy";

// Tasks
import "./src/deploy-contract";
import "./src/upgrade-contract";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  paths: {
    cache: "./generated/cache",
    artifacts: "./generated/artifacts",
  },
  typechain: {
    outDir: "./generated/types",
    target: "ethers-v6",
  },
  networks: {
    sepolia: {
      url: String(process.env.INFURA_RPC_URL),
      accounts: [String(process.env.PRIVATE_KEY)],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: String(process.env.ETHERSCAN_SEP_API_KEY),
    },
  },
};

export default config;
