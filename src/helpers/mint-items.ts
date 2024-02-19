import { HardhatRuntimeEnvironment } from "hardhat/types";
import { ItemNFT__factory } from "../../generated/types";
import { task } from "hardhat/config";
import { addresses } from "../deploy/helpers";

/**
 * @dev Script to mint Item NFTs
 * Mint 1 of full sigons set and 5 of each health and mana potions and 2 of each rejuvenation potions
 * @param hre HardhatRuntimeEnvironment
 */
const mintItemNFT = async (hre: HardhatRuntimeEnvironment) => {
  const [deployer] = await hre.ethers.getSigners();

  const singleOwner = deployer.address;

  // Connect to the deployed contracts
  const itemNFT = ItemNFT__factory.connect(
    addresses.arbSepolia.itemNFT,
    deployer
  );
  // Setup your item constants
  // Sigons Set, health potions, mana potions, rejuvenation potions
  const sigonsVisor = BigInt(1);
  const sigonsGuard = BigInt(2);
  const sigonsWrap = BigInt(3);
  const sigonsSabot = BigInt(4);
  const sigonsGage = BigInt(5);
  const sigonsShelter = BigInt(6);

  const minorHealingPotion = BigInt(7);
  const lightHealingPotion = BigInt(8);
  const healingPotion = BigInt(9);
  const greaterHealingPotion = BigInt(10);
  const superHealingPotion = BigInt(11);

  const minorManaPotion = BigInt(12);
  const lightManaPotion = BigInt(13);
  const manaPotion = BigInt(14);
  const greaterManaPotion = BigInt(15);
  const superManaPotion = BigInt(16);

  const rejuvenationPotion = BigInt(17);
  const fullRejuvenationPotion = BigInt(18);

  // Setup the items in ItemNFT ERC1155

  console.log("Registering items in ItemNFT...");

  // There can only be 1 of each Sigons set item but there can be unlimited potions
  let tx = await itemNFT.setItemData(sigonsVisor, 1, false, true);
  await tx.wait();
  tx = await itemNFT.setItemData(sigonsGuard, 1, false, true);
  await tx.wait();
  tx = await itemNFT.setItemData(sigonsWrap, 1, false, true);
  await tx.wait();
  tx = await itemNFT.setItemData(sigonsSabot, 1, false, true);
  await tx.wait();
  tx = await itemNFT.setItemData(sigonsGage, 1, false, true);
  await tx.wait();
  tx = await itemNFT.setItemData(sigonsShelter, 1, false, true);
  await tx.wait();

  tx = await itemNFT.setItemData(minorHealingPotion, BigInt(10000), true, true);
  await tx.wait();
  tx = await itemNFT.setItemData(lightHealingPotion, BigInt(10000), true, true);
  await tx.wait();
  tx = await itemNFT.setItemData(healingPotion, BigInt(10000), true, true);
  await tx.wait();
  tx = await itemNFT.setItemData(
    greaterHealingPotion,
    BigInt(10000),
    true,
    true
  );
  await tx.wait();
  tx = await itemNFT.setItemData(superHealingPotion, BigInt(10000), true, true);
  await tx.wait();

  tx = await itemNFT.setItemData(minorManaPotion, BigInt(10000), true, true);
  await tx.wait();
  tx = await itemNFT.setItemData(lightManaPotion, BigInt(10000), true, true);
  await tx.wait();
  tx = await itemNFT.setItemData(manaPotion, BigInt(10000), true, true);
  await tx.wait();
  tx = await itemNFT.setItemData(greaterManaPotion, BigInt(10000), true, true);
  await tx.wait();
  tx = await itemNFT.setItemData(superManaPotion, BigInt(10000), true, true);
  await tx.wait();

  tx = await itemNFT.setItemData(rejuvenationPotion, BigInt(10000), true, true);
  await tx.wait();
  tx = await itemNFT.setItemData(
    fullRejuvenationPotion,
    BigInt(10000),
    true,
    true
  );
  await tx.wait();

  console.log("Successfully registered items in ItemNFT!");

  // Mint the items
  console.log("Minting all items in single batch tx to save gas...");

  tx = await itemNFT["mintBatch(address,uint256[],uint256[])"](
    singleOwner,
    [
      sigonsVisor,
      sigonsGuard,
      sigonsWrap,
      sigonsSabot,
      sigonsGage,
      sigonsShelter,
      minorHealingPotion,
      lightHealingPotion,
      healingPotion,
      greaterHealingPotion,
      superHealingPotion,
      minorManaPotion,
      lightManaPotion,
      manaPotion,
      greaterManaPotion,
      superManaPotion,
      rejuvenationPotion,
      fullRejuvenationPotion,
    ],
    [1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 2]
  );
  await tx.wait();
  console.log("Successfully minted all items!, tx hash: ", tx.hash);
};

task("mint-items", "Mint Item NFT").setAction(async (args, hre) => {
  console.log("Running HH task");
  await mintItemNFT(hre);
  console.log("Successfully ran HH task");
});
