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

/**
 * Deploy all our upgradeable contracts
 */

const deployAllUpgradeableContracts = async (
  hre: HardhatRuntimeEnvironment
) => {
  const [deployer] = await hre.ethers.getSigners();
  const initialOwner = deployer.address;
  console.log("initialOwner : ", initialOwner);

  // Deploy CharacterNFTManager
  const characterNftManagerFactory = new CharacterNFTManager__factory(deployer);
  // Deploy CharacterNFTTokenURI
  const characterNftTokenUriFactory = new CharacterNFTTokenURI__factory(
    deployer
  );
  // Deploy ItemNFTTokenURI
  const itemNftTokenUriFactory = new ItemNFTTokenURI__factory(deployer);
  // Deploy Level
  const levelFactory = new Level__factory(deployer);
  // Deploy Akara
  const akaraFactory = new Akara__factory(deployer);
  // Deploy Monster
  const monsterFactory = new Monster__factory(deployer);
  // Deploy SkillTree
  const skillTreeFactory = new SkillTree__factory(deployer);

  // Deploy CharacterNFTManager tx and print address
  let deployProxyTx = await hre.upgrades.deployProxy(
    characterNftManagerFactory,
    [initialOwner],
    {
      initializer: "initialize",
    }
  );
  await deployProxyTx.waitForDeployment();
  console.log(
    "CharacterNFTManager deployed to transparent proxy: ",
    await deployProxyTx.getAddress()
  );
  // Deploy CharacterNFTTokenURI tx and print address
  deployProxyTx = await hre.upgrades.deployProxy(
    characterNftTokenUriFactory,
    [initialOwner],
    {
      initializer: "initialize",
    }
  );
  await deployProxyTx.waitForDeployment();
  console.log(
    "CharacterNFTTokenURI deployed to transparent proxy: ",
    await deployProxyTx.getAddress()
  );
  // Deploy ItemNFTTokenURI tx and print address
  deployProxyTx = await hre.upgrades.deployProxy(
    itemNftTokenUriFactory,
    [initialOwner],
    {
      initializer: "initialize",
    }
  );
  await deployProxyTx.waitForDeployment();
  console.log(
    "ItemNFTTokenURI deployed to transparent proxy: ",
    await deployProxyTx.getAddress()
  );
  // Deploy Level tx and print address
  deployProxyTx = await hre.upgrades.deployProxy(levelFactory, [initialOwner], {
    initializer: "initialize",
  });
  await deployProxyTx.waitForDeployment();
  console.log(
    "Level deployed to transparent proxy: ",
    await deployProxyTx.getAddress()
  );
  // Deploy Akara tx and print address
  deployProxyTx = await hre.upgrades.deployProxy(akaraFactory, [initialOwner], {
    initializer: "initialize",
  });
  await deployProxyTx.waitForDeployment();
  console.log(
    "Akara deployed to transparent proxy: ",
    await deployProxyTx.getAddress()
  );
  // Deploy Monster tx and print address
  deployProxyTx = await hre.upgrades.deployProxy(
    monsterFactory,
    [initialOwner],
    {
      initializer: "initialize",
    }
  );
  await deployProxyTx.waitForDeployment();
  console.log(
    "Monster deployed to transparent proxy: ",
    await deployProxyTx.getAddress()
  );
  // Deploy SkillTree tx and print address
  deployProxyTx = await hre.upgrades.deployProxy(
    skillTreeFactory,
    [initialOwner],
    {
      initializer: "initialize",
    }
  );
  await deployProxyTx.waitForDeployment();
  console.log(
    "SkillTree deployed to transparent proxy: ",
    await deployProxyTx.getAddress()
  );
};

task(
  "deploy-all-upgradeables",
  "Deploy all tps upgradeable contracts"
).setAction(async (args, hre) => {
  console.log("Running HH task");
  await deployAllUpgradeableContracts(hre);
  console.log("Successfully ran HH task");
});
