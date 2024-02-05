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
import { hexRoles, addresses } from "./helpers";

/**
 * Grant all roles needed for all contracts to interact smoothly
 */

const grantAllRolesNeeded = async (hre: HardhatRuntimeEnvironment) => {
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

  // Grant roles
  console.log("Granting roles...");
  let tx = await characterNft.grantRole(
    hexRoles.MINTER_ROLE,
    addresses.arbSepolia.characterNFTManager
  );
  await tx.wait();
  tx = await itemNft.grantRole(
    hexRoles.MINTER_ROLE,
    addresses.arbSepolia.akara
  );
  await tx.wait();
  tx = await itemNft.grantRole(
    hexRoles.MINTER_ROLE,
    addresses.arbSepolia.monster
  );
  await tx.wait();
  tx = await gold.grantRole(hexRoles.MINTER_ROLE, addresses.arbSepolia.monster);
  await tx.wait();
  tx = await level.grantRole(
    hexRoles.UTILITY_ROLE,
    addresses.arbSepolia.monster
  );
  await tx.wait();
  console.log("Successfully granted roles");
};

task(
  "grant-roles",
  "Grant all roles needed for all contracts to interact smoothly"
).setAction(async (args, hre) => {
  console.log("Running HH task");
  await grantAllRolesNeeded(hre);
  console.log("Successfully ran HH task");
});
