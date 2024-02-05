import { HardhatRuntimeEnvironment } from "hardhat/types";
import {
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
 * Upgrade all transparent proxy contracts
 */

const upgradeAllContracts = async (hre: HardhatRuntimeEnvironment) => {
  const [deployer] = await hre.ethers.getSigners();

  // Setup all proxy contracts
  const characterNftManagerFactory = new CharacterNFTManager__factory(deployer);
  const characterNftTokenUriFactory = new CharacterNFTTokenURI__factory(
    deployer
  );
  const itemNftTokenUriFactory = new ItemNFTTokenURI__factory(deployer);
  const levelFactory = new Level__factory(deployer);
  const akaraFactory = new Akara__factory(deployer);
  const monsterFactory = new Monster__factory(deployer);
  const skillTreeFactory = new SkillTree__factory(deployer);

  // Upgrading all the contracts
  console.log("Upgrading contracts...");
  let tx = await hre.upgrades.upgradeProxy(
    addresses.arbSepolia.characterNFTManager,
    characterNftManagerFactory
  );
  await tx.wait();
  tx = await hre.upgrades.upgradeProxy(
    addresses.arbSepolia.characterNFTTokenURI,
    characterNftTokenUriFactory
  );
  await tx.wait();
  tx = await hre.upgrades.upgradeProxy(
    addresses.arbSepolia.itemNFTTokenURI,
    itemNftTokenUriFactory
  );
  await tx.wait();
  tx = await hre.upgrades.upgradeProxy(
    addresses.arbSepolia.level,
    levelFactory
  );
  await tx.wait();
  tx = await hre.upgrades.upgradeProxy(
    addresses.arbSepolia.akara,
    akaraFactory
  );
  await tx.wait();
  tx = await hre.upgrades.upgradeProxy(
    addresses.arbSepolia.monster,
    monsterFactory
  );
  await tx.wait();
  tx = await hre.upgrades.upgradeProxy(
    addresses.arbSepolia.skillTree,
    skillTreeFactory
  );
  await tx.wait();

  console.log("Successfully upgraded all contracts");
};

task("upgrade-contracts", "Upgrade all proxy contracts").setAction(
  async (args, hre) => {
    console.log("Running HH task");
    await upgradeAllContracts(hre);
    console.log("Successfully ran HH task");
  }
);
