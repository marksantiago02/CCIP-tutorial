import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const infuraKey: string = process.env.INFURA_API_KEY as string;
const privateKey: string = process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY as string : "";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.30",
        settings: {
          viaIR: true,
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      }
    ],
  },
  networks: {
    ethereum: {
      url: `https://mainnet.infura.io/v3/${infuraKey}`,
      accounts: [`0x${privateKey}`],
    },
    ethereum_sepolia: {
      url: "https://ethereum-sepolia-rpc.publicnode.com",
      accounts: [`0x${privateKey}`],
    },
    arbitrum_one: {
      url: "https://arb1.arbitrum.io/rpc",
      accounts: [`0x${privateKey}`],
      chainId: 42161
    },
    arbitrum_sepolia: {
      url: "https://sepolia-rollup.arbitrum.io/rpc",
      accounts: [`0x${privateKey}`],
      chainId: 421614
    },
    avalanche_fuji: {
      url: "https://avalanche-fuji-c-chain-rpc.publicnode.com",
      accounts: [`0x${privateKey}`],
      chainId: 43113,
    },
    hardhat: {
      chainId: 31337,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
    customChains : [
      {
        network: "arbitrum_one",
        chainId: 42161,
        urls: {
          apiURL: "https://api.arbiscan.io/api",
          browserURL: "https://arbiscan.io"
        }
      },
      {
        network: "arbitrum_sepolia", 
        chainId: 421614,
        urls: {
          apiURL: "https://api-sepolia.arbiscan.io/api",
          browserURL: "https://sepolia.arbiscan.io"
        }
      },
      {
        network: "avalanche_fuji",
        chainId: 43113,
        urls: {
          apiURL: "https://api-testnet.snowtrace.io/api",
          browserURL: "https://testnet.snowtrace.io"
        }
      }
    ]
  },
  sourcify: {
    enabled: true,
  },
};

export default config;
