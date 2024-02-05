import { HardhatRuntimeEnvironment } from "hardhat/types";
import {
  CharacterNFT__factory,
  ItemNFT__factory,
  Gold__factory,
  CharacterNFTManager__factory,
  CharacterNFTTokenURI__factory,
  ItemNFTTokenURI__factory,
  Level__factory,
  Akara__factory,
  Monster__factory,
  SkillTree__factory,
} from "../../generated/types";
import { task } from "hardhat/config";
import { addresses } from "./helpers";

/**
 * Setup and connect all contracts for smooth interaction
 */

const contractSetup = async (hre: HardhatRuntimeEnvironment) => {
  const [deployer] = await hre.ethers.getSigners();

  // Connect to the deployed contracts
  const characterNft = CharacterNFT__factory.connect(
    addresses.arbSepolia.characterNFT,
    deployer
  );
  const itemNft = ItemNFT__factory.connect(
    addresses.arbSepolia.itemNFT,
    deployer
  );
  const gold = Gold__factory.connect(addresses.arbSepolia.gold, deployer);
  const characterNFTManager = CharacterNFTManager__factory.connect(
    addresses.arbSepolia.characterNFTManager,
    deployer
  );
  const characterNFTTokenURI = CharacterNFTTokenURI__factory.connect(
    addresses.arbSepolia.characterNFTTokenURI,
    deployer
  );
  const itemNFTTokenURI = ItemNFTTokenURI__factory.connect(
    addresses.arbSepolia.itemNFTTokenURI,
    deployer
  );
  const level = Level__factory.connect(addresses.arbSepolia.level, deployer);
  const akara = Akara__factory.connect(addresses.arbSepolia.akara, deployer);
  const monster = Monster__factory.connect(
    addresses.arbSepolia.monster,
    deployer
  );
  const skillTree = SkillTree__factory.connect(
    addresses.arbSepolia.skillTree,
    deployer
  );

  // Setup all the contracts
  console.log("Setting up contracts...");

  // Setup CharacterNFT
  let tx = await characterNft.setCharacterNFTManager(
    addresses.arbSepolia.characterNFTManager
  );
  await tx.wait();
  tx = await characterNft.setTokenUriContract(
    addresses.arbSepolia.characterNFTTokenURI
  );
  await tx.wait();

  // Setup CharacterNFTManager
  tx = await characterNFTManager.setCharacterNFT(
    addresses.arbSepolia.characterNFT
  );
  await tx.wait();

  // Setup CharacterNFTTokenURI
  tx = await characterNFTTokenURI.setCharacterNFT(
    addresses.arbSepolia.characterNFT
  );
  await tx.wait();

  // Setup ItemNFT
  tx = await itemNft.setItemNFTTokenURI(addresses.arbSepolia.itemNFTTokenURI);
  await tx.wait();

  // Setup Level
  tx = await level.setCharacterNFT(addresses.arbSepolia.characterNFT);
  await tx.wait();

  // Setup SkillTree
  tx = await skillTree.setCharacterNFTManager(
    addresses.arbSepolia.characterNFTManager
  );
  await tx.wait();
  tx = await skillTree.setLevelContract(addresses.arbSepolia.level);
  await tx.wait();

  // Setup Akara
  tx = await akara.setGoldTokenAddress(addresses.arbSepolia.gold);
  await tx.wait();
  tx = await akara.setItemNFTAddress(addresses.arbSepolia.itemNFT);
  await tx.wait();

  // Setup Monster
  tx = await monster.setItemNFT(addresses.arbSepolia.itemNFT);
  await tx.wait();
  tx = await monster.setGoldAddress(addresses.arbSepolia.gold);
  await tx.wait();
  tx = await monster.setCharacterNFT(addresses.arbSepolia.characterNFT);
  await tx.wait();
  tx = await monster.setLevelContractAddress(addresses.arbSepolia.level);
  await tx.wait();

  console.log("Successfully set up contracts");
};

task(
  "contract-setup",
  "Setup and connect all contracts for smooth interaction"
).setAction(async (args, hre) => {
  console.log("Running HH task");
  await contractSetup(hre);
  console.log("Successfully ran HH task");
});
