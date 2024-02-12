import { HardhatRuntimeEnvironment } from "hardhat/types";
import { CharacterNFT__factory } from "../../generated/types";
import { task } from "hardhat/config";
import { addresses } from "../deploy/helpers";

/**
 * @dev Setup tokenURI data for all the NFTs
 * Setup their class image
 * Setup their class description
 * @param hre HardhatRuntimeEnvironment
 */
const setupTokenURIData = async (hre: HardhatRuntimeEnvironment) => {
  const [deployer] = await hre.ethers.getSigners();

  const singleOwner = deployer.address;

  // Connect to the deployed contracts
  const characterNFT = CharacterNFT__factory.connect(
    addresses.arbSepolia.characterNFT,
    deployer
  );
  // Setup your character type constants
  const barbarianCharacterClass = BigInt(1);
  const necromancerCharacterClass = BigInt(2);
  const paladinCharacterClass = BigInt(3);
  const sorceressCharacterClass = BigInt(4);
  const amazonCharacterClass = BigInt(5);
  const assassinCharacterClass = BigInt(6);
  const druidCharacterClass = BigInt(7);

  const barbarianImage = `https://www.purediablo.com/wp-content/uploads/2021/02/D2R_Barbarian-scaled.jpg`;
  const barbarianDescription = `Glorified by many a song and fireside tale, the Barbarian is unrivaled in delivering unrelenting melee fury on anyone foolish enough to greet their axe-head.`;
  const necromancerImage = `https://www.purediablo.com/wp-content/uploads/2021/02/D2R_Necromancer-scaled.jpg`;
  const necromancerDescription = `A Necromancer’s dominion over life and death grants this grisly apothecary the ability to summon skeleton armies and golems, and to unleash baneful poison, curse, and bone skills upon his foes.`;
  const paladinImage = `https://www.purediablo.com/wp-content/uploads/2021/02/D2R_Paladin-scaled.jpg`;
  const paladinDescription = `The Paladin is a battle-ready warrior for whom faith is a shield, and fights for what he believes to be right. His steadfastness gives him powers to bestow blessings to his friends and wreak cruel justice on foes. There are those who call the Paladin an overwrought zealot, but others recognize in him the strength and goodness of the Light.`;
  const sorceressImage = `https://www.purediablo.com/wp-content/uploads/2021/02/D2R_Sorceress-scaled.jpg`;
  const sorceressDescription = `Sorceresses are of the Zann Esu Clan. Athletic, affable, and self-assured, Sorceresses hardly seem like scholarly bibliophiles hidden away from civilization. They possess many of the same skills as the male members of the Mage Clans, but excel at the use of elemental magic. Like most mages, they consider melee combat vulgar, and use magic almost exclusively to fight their enemies.`;
  const amazonImage = `https://www.purediablo.com/wp-content/uploads/2021/02/D2R_Amazon-scaled.jpg`;
  const amazonDescription = `A master of the javelin and bow, the Amazon reacts to combat situations with superhuman agility. She relies on magic prowess to enhance her significant martial abilities.`;
  const assassinImage = `https://www.purediablo.com/wp-content/uploads/2021/02/D2R_Assassin-scaled.jpg`;
  const assassinDescription = `A member of an ancient Vizjerei order founded to hunt down mages gone rogue, the Assassin is a martial arts expert who uses deadly traps and shadow disciplines to vanquish evil.`;
  const druidImage = `https://www.purediablo.com/wp-content/uploads/2021/02/D2R_Druid-scaled.jpg`;
  const druidDescription = `The Druids who inhabit the northern forests of Scosglen developed their magic independently from the eastern mage clans. They served as the warrior-kings of their tribes, usually living apart from their people in massive stone towers that were covered with vines and ivy. As masters of the natural world, they were able to control living creatures and the very forces of nature.`;

  // Set class images for each class
  let tx = await characterNFT.updateClassImages(
    barbarianCharacterClass,
    barbarianImage
  );
  await tx.wait();
  tx = await characterNFT.updateClassImages(
    necromancerCharacterClass,
    necromancerImage
  );
  await tx.wait();
  tx = await characterNFT.updateClassImages(
    paladinCharacterClass,
    paladinImage
  );
  await tx.wait();
  tx = await characterNFT.updateClassImages(
    sorceressCharacterClass,
    sorceressImage
  );
  await tx.wait();
  tx = await characterNFT.updateClassImages(amazonCharacterClass, amazonImage);
  await tx.wait();
  tx = await characterNFT.updateClassImages(
    assassinCharacterClass,
    assassinImage
  );
  await tx.wait();
  tx = await characterNFT.updateClassImages(druidCharacterClass, druidImage);
  await tx.wait();

  // Set class descriptions for each class
  tx = await characterNFT.updateClassDescriptions(
    barbarianCharacterClass,
    barbarianDescription
  );
  await tx.wait();
  tx = await characterNFT.updateClassDescriptions(
    necromancerCharacterClass,
    necromancerDescription
  );
  await tx.wait();
  tx = await characterNFT.updateClassDescriptions(
    paladinCharacterClass,
    paladinDescription
  );
  await tx.wait();
  tx = await characterNFT.updateClassDescriptions(
    sorceressCharacterClass,
    sorceressDescription
  );
  await tx.wait();
  tx = await characterNFT.updateClassDescriptions(
    amazonCharacterClass,
    amazonDescription
  );
  await tx.wait();
  tx = await characterNFT.updateClassDescriptions(
    assassinCharacterClass,
    assassinDescription
  );
  await tx.wait();
  tx = await characterNFT.updateClassDescriptions(
    druidCharacterClass,
    druidDescription
  );
  await tx.wait();
};

task(
  "setup-tokenuri",
  "Setup class image and class description tokenURI data"
).setAction(async (args, hre) => {
  console.log("Running HH task");
  await setupTokenURIData(hre);
  console.log("Successfully ran HH task");
});
