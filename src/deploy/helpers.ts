import { ethers } from "ethers";

export const addresses = {
  arbSepolia: {
    characterNFT: "0x53Ed52Be08c4C5DF7cf0aBe7e15a07F34C7A5a26",
    itemNFT: "0x1598C7310d1F18CcA35C357d9D1C7ACd4Dd18f52",
    gold: "0x21ed03fCC0bFcD216D803efb75e166BdA6CCC167",
    characterNFTManager: "0x8100e69Ae3b94370ee16C1D167b793446B608499",
    characterNFTTokenURI: "0xcF68621bEE91E1D0Bb0528aE0E15bf3A9E34A7Fd",
    itemNFTTokenURI: "0xd9f19B48456332B0F097c48c8dd9078df4922194",
    level: "0xeE7f21556ceEf570E9191a3738c1029C98413830",
    akara: "0xEa30F35203d9f6e2E74d47f322EEAcfF213Bb88D",
    monster: "0x2Fe136714E915DA34b3B25597cF89693c3500B85",
    skillTree: "0xA2B806cF83D0B1E33866C492DA0A05a260bb4A9f",
  },
};

export const roles = {
  OWNER_ROLE: "OWNER_ROLE",
  PAUSER_ROLE: "PAUSER_ROLE",
  MINTER_ROLE: "MINTER_ROLE",
  ADMIN_ROLE: "ADMIN_ROLE",
  UTILITY_ROLE: "UTILITY_ROLE",
};

export const keccak256 = (value: string): string => {
  return ethers.keccak256(ethers.toUtf8Bytes(value));
};

export const hexRoles = {
  OWNER_ROLE: keccak256("OWNER_ROLE"),
  PAUSER_ROLE: keccak256("PAUSER_ROLE"),
  MINTER_ROLE: keccak256("MINTER_ROLE"),
  ADMIN_ROLE: keccak256("ADMIN_ROLE"),
  UTILITY_ROLE: keccak256("UTILITY_ROLE"),
};
