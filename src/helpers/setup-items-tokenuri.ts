import { HardhatRuntimeEnvironment } from "hardhat/types";
import { ItemNFTTokenURI__factory } from "../../generated/types";
import { task } from "hardhat/config";
import { addresses } from "../deploy/helpers";

/**
 * @dev Setup tokenURI data for the Item NFTs
 * Setup their item image and description
 * Setup their item animation url
 * @param hre HardhatRuntimeEnvironment
 */
const setupItemTokenURIData = async (hre: HardhatRuntimeEnvironment) => {
  const [deployer] = await hre.ethers.getSigners();

  const singleOwner = deployer.address;

  // Connect to the deployed contracts
  const itemNFTTokenUri = ItemNFTTokenURI__factory.connect(
    addresses.arbSepolia.itemNFTTokenURI,
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

  const sigonsDescription = `Sigon's Complete Steel set`;
  const minorhealthPotionDescription = `Health Potion, Restores 30 points of a character's life`;
  const lightHealthPotionDescription = `Health Potion, Restores 60 points of a character's life`;
  const healthPotionDescription = `Health Potion, Restores 100 points of a character's life`;
  const greaterHealthPotionDescription = `Health Potion, Restores 180 points of a character's life`;
  const superHealthPotionDescription = `Health Potion, Restores 320 points of a character's life`;
  const minorManaPotionDescription = `Mana Potion, Restores 20 points of a character's mana`;
  const lightManaPotionDescription = `Mana Potion, Restores 40 points of a character's mana`;
  const manaPotionDescription = `Mana Potion, Restores 80 points of a character's mana`;
  const greaterManaPotionDescription = `Mana Potion, Restores 150 points of a character's mana`;
  const superManaPotionDescription = `Mana Potion, Restores 250 points of a character's mana`;
  const rejuvenationPotionDescription = `Rejuvenation Potion, Instantly regenerates 35% of a character's life and mana`;
  const fullRejuvenationPotionDescription = `Full Rejuvenation Potion, Instantly regenerates 100% of a character's life and mana`;

  const sigonsVisorImage = `https://diablo2.wiki.fextralife.com/file/Diablo-2/great_helm_armor_diablo2_wiki_guide_196px.png`;
  const sigonsGuardImage = `https://diablo2.wiki.fextralife.com/file/Diablo-2/bverrit_keep_1_diablo2_wiki_guide_196x294px.png`;
  const sigonsWrapImage = `https://diablo2.wiki.fextralife.com/file/Diablo-2/plated_belt_armor_diablo2_wiki_guide_196px.png`;
  const sigonsSabotImage = `https://diablo2.wiki.fextralife.com/file/Diablo-2/plate_boots_diablo2_wiki_guide_196px.png`;
  const sigonsGageImage = `https://diablo2.wiki.fextralife.com/file/Diablo-2/gauntlets_diablo2_wiki_guide_196px.png`;
  const sigonsShelterImage = `https://diablo2.wiki.fextralife.com/file/Diablo-2/gothic_plate_armor_diablo2_wiki_guide_196px.png`;

  const minorHealingPotionImage = `https://www.purediablo.com/wp-content/uploads/2021/04/lesser_healing_potion.png`;
  const lightHealingPotionImage = `https://www.purediablo.com/wp-content/uploads/2021/04/light_healing_potion.png`;
  const healingPotionImage = `https://www.purediablo.com/wp-content/uploads/2021/04/healing_potion.png`;
  const greaterHealingPotionImage = `https://www.purediablo.com/wp-content/uploads/2021/04/greater_healing_potion.png`;
  const superHealingPotionImage = `https://www.purediablo.com/wp-content/uploads/2021/04/strong_healing_potion.png`;

  const minorManaPotionImage = `https://www.purediablo.com/wp-content/uploads/2021/04/lesser_mana_potion.png`;
  const lightManaPotionImage = `https://www.purediablo.com/wp-content/uploads/2021/04/light_mana_potion.png`;
  const manaPotionImage = `https://www.purediablo.com/wp-content/uploads/2021/04/mana_potion.png`;
  const greaterManaPotionImage = `https://www.purediablo.com/wp-content/uploads/2021/04/greater_mana_potion.png`;
  const superManaPotionImage = `https://www.purediablo.com/wp-content/uploads/2021/04/strong_mana_potion.png`;

  const rejuvenationPotionImage = `https://www.purediablo.com/wp-content/uploads/2021/04/rejuv_potion.png`;
  const fullRejuvenationPotionImage = `https://www.purediablo.com/wp-content/uploads/2021/04/full_rejuv_potion.png`;

  console.log("Setting up tokenURI data for Item NFTs...");
  // Set Sigon data
  let tx = await itemNFTTokenUri.setItemAttributes(sigonsVisor, {
    name: "Sigon's Visor",
    description: sigonsDescription,
    image: sigonsVisorImage,
    externalUrl: "https://diablo.fandom.com/wiki/Sigon%27s_Visor",
    animationUrl: "",
  });
  await tx.wait();
  tx = await itemNFTTokenUri.setItemAttributes(sigonsGuard, {
    name: "Sigon's Guard",
    description: sigonsDescription,
    image: sigonsGuardImage,
    externalUrl: "https://diablo.fandom.com/wiki/Sigon%27s_Guard",
    animationUrl: "",
  });
  await tx.wait();
  tx = await itemNFTTokenUri.setItemAttributes(sigonsWrap, {
    name: "Sigon's Wrap",
    description: sigonsDescription,
    image: sigonsWrapImage,
    externalUrl: "https://diablo.fandom.com/wiki/Sigon%27s_Wrap",
    animationUrl: "",
  });
  await tx.wait();
  tx = await itemNFTTokenUri.setItemAttributes(sigonsSabot, {
    name: "Sigon's Sabot",
    description: sigonsDescription,
    image: sigonsSabotImage,
    externalUrl: "https://diablo.fandom.com/wiki/Sigon%27s_Sabot",
    animationUrl: "",
  });
  await tx.wait();
  tx = await itemNFTTokenUri.setItemAttributes(sigonsGage, {
    name: "Sigon's Gage",
    description: sigonsDescription,
    image: sigonsGageImage,
    externalUrl: "https://diablo.fandom.com/wiki/Sigon%27s_Gage",
    animationUrl: "",
  });
  await tx.wait();
  tx = await itemNFTTokenUri.setItemAttributes(sigonsShelter, {
    name: "Sigon's Shelter",
    description: sigonsDescription,
    image: sigonsShelterImage,
    externalUrl: "https://diablo.fandom.com/wiki/Sigon%27s_Shelter",
    animationUrl: "",
  });
  await tx.wait();

  // Set health and mana and rejuv potion data
  tx = await itemNFTTokenUri.setItemAttributes(minorHealingPotion, {
    name: "Minor Healing Potion",
    description: minorhealthPotionDescription,
    image: minorHealingPotionImage,
    externalUrl: "https://diablo-archive.fandom.com/wiki/Potions_(Diablo_II)",
    animationUrl: "",
  });
  await tx.wait();
  tx = await itemNFTTokenUri.setItemAttributes(lightHealingPotion, {
    name: "Light Healing Potion",
    description: lightHealthPotionDescription,
    image: lightHealingPotionImage,
    externalUrl: "https://diablo-archive.fandom.com/wiki/Potions_(Diablo_II)",
    animationUrl: "",
  });
  await tx.wait();
  tx = await itemNFTTokenUri.setItemAttributes(healingPotion, {
    name: "Healing Potion",
    description: healthPotionDescription,
    image: healingPotionImage,
    externalUrl: "https://diablo-archive.fandom.com/wiki/Potions_(Diablo_II)",
    animationUrl: "",
  });
  await tx.wait();
  tx = await itemNFTTokenUri.setItemAttributes(greaterHealingPotion, {
    name: "Greater Healing Potion",
    description: greaterHealthPotionDescription,
    image: greaterHealingPotionImage,
    externalUrl: "https://diablo-archive.fandom.com/wiki/Potions_(Diablo_II)",
    animationUrl: "",
  });
  await tx.wait();
  tx = await itemNFTTokenUri.setItemAttributes(superHealingPotion, {
    name: "Super Healing Potion",
    description: superHealthPotionDescription,
    image: superHealingPotionImage,
    externalUrl: "https://diablo-archive.fandom.com/wiki/Potions_(Diablo_II)",
    animationUrl: "",
  });
  await tx.wait();

  tx = await itemNFTTokenUri.setItemAttributes(minorManaPotion, {
    name: "Minor Mana Potion",
    description: minorManaPotionDescription,
    image: minorManaPotionImage,
    externalUrl: "https://diablo-archive.fandom.com/wiki/Potions_(Diablo_II)",
    animationUrl: "",
  });
  await tx.wait();
  tx = await itemNFTTokenUri.setItemAttributes(lightManaPotion, {
    name: "Light Mana Potion",
    description: lightManaPotionDescription,
    image: lightManaPotionImage,
    externalUrl: "https://diablo-archive.fandom.com/wiki/Potions_(Diablo_II)",
    animationUrl: "",
  });
  await tx.wait();
  tx = await itemNFTTokenUri.setItemAttributes(manaPotion, {
    name: "Mana Potion",
    description: manaPotionDescription,
    image: manaPotionImage,
    externalUrl: "https://diablo-archive.fandom.com/wiki/Potions_(Diablo_II)",
    animationUrl: "",
  });
  await tx.wait();
  tx = await itemNFTTokenUri.setItemAttributes(greaterManaPotion, {
    name: "Greater Mana Potion",
    description: greaterManaPotionDescription,
    image: greaterManaPotionImage,
    externalUrl: "https://diablo-archive.fandom.com/wiki/Potions_(Diablo_II)",
    animationUrl: "",
  });
  await tx.wait();
  tx = await itemNFTTokenUri.setItemAttributes(superManaPotion, {
    name: "Super Mana Potion",
    description: superManaPotionDescription,
    image: superManaPotionImage,
    externalUrl: "https://diablo-archive.fandom.com/wiki/Potions_(Diablo_II)",
    animationUrl: "",
  });
  await tx.wait();

  tx = await itemNFTTokenUri.setItemAttributes(rejuvenationPotion, {
    name: "Rejuvenation Potion",
    description: rejuvenationPotionDescription,
    image: rejuvenationPotionImage,
    externalUrl: "https://diablo-archive.fandom.com/wiki/Potions_(Diablo_II)",
    animationUrl: "",
  });
  await tx.wait();
  tx = await itemNFTTokenUri.setItemAttributes(fullRejuvenationPotion, {
    name: "Full Rejuvenation Potion",
    description: fullRejuvenationPotionDescription,
    image: fullRejuvenationPotionImage,
    externalUrl: "https://diablo-archive.fandom.com/wiki/Potions_(Diablo_II)",
    animationUrl: "",
  });
  await tx.wait();
  console.log("Successfully setup tokenURI data for Item NFTs");
};

task("setup-items-tokenuri", "Setup Item NFTs tokenURI data").setAction(
  async (args, hre) => {
    console.log("Running HH task");
    await setupItemTokenURIData(hre);
    console.log("Successfully ran HH task");
  }
);
