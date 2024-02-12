import { HardhatRuntimeEnvironment } from "hardhat/types";
import { CharacterNFTManager__factory } from "../../generated/types";
import { task } from "hardhat/config";
import { addresses } from "../deploy/helpers";
import { BigNumberish } from "ethers";

/**
 * Mint 10k character NFTs for the collection
 * Mint 2k Barbarians
 * Mint 2k Paladins
 * Mint 2k Sorceresses
 * Mint 1k Necromancers
 * Mint 1k Amazons
 * Mint 1k Assassins
 * Mint 1k Druids
 * @dev Mint in batches of 100 to avoid hitting the tx gas limit
 * @param hre HardhatRuntimeEnvironment
 */
const mintCollection = async (hre: HardhatRuntimeEnvironment) => {
  const [deployer] = await hre.ethers.getSigners();

  const singleOwner = deployer.address;

  // Connect to the deployed contracts
  const characterNFTManager = CharacterNFTManager__factory.connect(
    addresses.arbSepolia.characterNFTManager,
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

  // Setup your address arrays for your batch mint
  const addressArrayForOneHundred = Array<string>();
  for (let i = 0; i < 100; i++) {
    addressArrayForOneHundred.push(singleOwner);
  }
  // Setup your character class arrays for your batch mint

  // Setup your 100 barbarians array for your batch mint
  const oneHundredBarbarians = Array<BigNumberish>();
  // Setup your 100 paladins array for your batch mint
  const oneHundredPaladins = Array<BigNumberish>();
  // Setup your 100 sorceresses array for your batch mint
  const oneHundredSorceresses = Array<BigNumberish>();
  // Setup your 100 necromancers array for your batch mint
  const oneHundredNecromancers = Array<BigNumberish>();
  // Setup your 100 amazons array for your batch mint
  const oneHundredAmazons = Array<BigNumberish>();
  // Setup your 100 assassins array for your batch mint
  const oneHundredAssassins = Array<BigNumberish>();
  // Setup your 100 druids array for your batch mint
  const oneHundredDruids = Array<BigNumberish>();
  for (let i = 0; i < 100; i++) {
    oneHundredBarbarians.push(barbarianCharacterClass);
    oneHundredPaladins.push(paladinCharacterClass);
    oneHundredSorceresses.push(sorceressCharacterClass);
    oneHundredNecromancers.push(necromancerCharacterClass);
    oneHundredAmazons.push(amazonCharacterClass);
    oneHundredAssassins.push(assassinCharacterClass);
    oneHundredDruids.push(druidCharacterClass);
  }

  // Setup your 'amounts' arrays for your batch mint
  const oneHundredAmountsArray = Array<BigNumberish>();
  for (let i = 0; i < 100; i++) {
    oneHundredAmountsArray.push(1);
  }

  console.log(`Minting 2k Barbarians...`);
  for (let i = 0; i < 20; i++) {
    console.log(`Mint batch ${i} for Barbarians...`);
    // Mint in batches of 100
    let tx = await characterNFTManager.mintBatch(
      oneHundredAmountsArray,
      addressArrayForOneHundred,
      oneHundredBarbarians
    );
    await tx.wait();
  }
  console.log(`Minting 2k Paladins...`);
  for (let i = 0; i < 20; i++) {
    console.log(`Mint batch ${i} for Paladins...`);
    // Mint in batches of 100
    let tx = await characterNFTManager.mintBatch(
      oneHundredAmountsArray,
      addressArrayForOneHundred,
      oneHundredPaladins
    );
    await tx.wait();
  }
  console.log(`Minting 2k Sorceresses...`);
  for (let i = 0; i < 20; i++) {
    console.log(`Mint batch ${i} for Sorceresses...`);
    // Mint in batches of 100
    let tx = await characterNFTManager.mintBatch(
      oneHundredAmountsArray,
      addressArrayForOneHundred,
      oneHundredSorceresses
    );
    await tx.wait();
  }
  console.log(`Minting 1k Necromancers...`);
  for (let i = 0; i < 10; i++) {
    console.log(`Mint batch ${i} for Necromancers...`);
    // Mint in batches of 100
    let tx = await characterNFTManager.mintBatch(
      oneHundredAmountsArray,
      addressArrayForOneHundred,
      oneHundredNecromancers
    );
    await tx.wait();
  }
  console.log(`Minting 1k Amazons...`);
  for (let i = 0; i < 10; i++) {
    console.log(`Mint batch ${i} for Amazons...`);
    // Mint in batches of 100
    let tx = await characterNFTManager.mintBatch(
      oneHundredAmountsArray,
      addressArrayForOneHundred,
      oneHundredAmazons
    );
    await tx.wait();
  }
  console.log(`Minting 1k Assassins...`);
  for (let i = 0; i < 10; i++) {
    console.log(`Mint batch ${i} for Assassins...`);
    // Mint in batches of 100
    let tx = await characterNFTManager.mintBatch(
      oneHundredAmountsArray,
      addressArrayForOneHundred,
      oneHundredAssassins
    );
    await tx.wait();
  }
  console.log(`Minting 1k Druids...`);
  for (let i = 0; i < 10; i++) {
    console.log(`Mint batch ${i} for Druids...`);
    // Mint in batches of 100
    let tx = await characterNFTManager.mintBatch(
      oneHundredAmountsArray,
      addressArrayForOneHundred,
      oneHundredDruids
    );
    await tx.wait();
  }
};

task("mint-collection", "Mint 10k character NFTs for the collection").setAction(
  async (args, hre) => {
    console.log("Running HH task");
    await mintCollection(hre);
    console.log("Successfully ran HH task");
  }
);
