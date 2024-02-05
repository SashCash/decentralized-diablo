import { HardhatRuntimeEnvironment } from "hardhat/types";
import {
  CharacterNFT__factory,
  ItemNFT__factory,
  Gold__factory,
} from "../../generated/types";
import { task } from "hardhat/config";

/**
 * Deploy all our token contracts (ERC20 and ERC721 and ERC1155)
 */

const deployAllTokenContracts = async (hre: HardhatRuntimeEnvironment) => {
  const [deployer] = await hre.ethers.getSigners();
  const initialOwner = deployer.address;
  console.log("initialOwner : ", initialOwner);

  // Deploy CharacterNFT ERC721 Token contract
  const characterNftFactory = new CharacterNFT__factory(deployer);
  const characterNft = await characterNftFactory.deploy();
  await characterNft.waitForDeployment();
  console.log("CharacterNFT deployed to: ", await characterNft.getAddress());
  // Deploy ItemNFT ERC1155 Token contract
  const itemNftFactory = new ItemNFT__factory(deployer);
  const itemNft = await itemNftFactory.deploy();
  await itemNft.waitForDeployment();
  console.log("ItemNFT deployed to: ", await itemNft.getAddress());
  // Deploy Gold ERC20 Token contract
  const goldFactory = new Gold__factory(deployer);
  const gold = await goldFactory.deploy();
  await gold.waitForDeployment();
  console.log("Gold deployed to: ", await gold.getAddress());
};

task("deploy-tokens", "Deploy all token contracts").setAction(
  async (args, hre) => {
    console.log("Running HH task");
    await deployAllTokenContracts(hre);
    console.log("Successfully ran HH task");
  }
);
