# Decentralized Diablo

##### An onchain approach of implementing Blizzards Diablo2 : Lord of Destruction game.

## ERC721 NFTs for Character class creation

Barbarian , Paladin, Sorceress, Necromancer, Amazon, Druid, Assassin

> Upgradeable custom Token URI builder : `CharacterNFTTokenURI.sol`
> Upgradeable custom NFT Manager : `CharacterNFTManager.sol`

Deployed & Verified on Arbitrum Sepolia : `CharacterNFTTokenURI` : [https://sepolia.arbiscan.io/address/0xcF68621bEE91E1D0Bb0528aE0E15bf3A9E34A7Fd#code]
Deployed & Verified on Arbitrum Sepolia : `CharacterNFTManager` : [https://sepolia.arbiscan.io/address/0x8100e69Ae3b94370ee16C1D167b793446B608499#code]
Deployed & Verified on Arbitrum Sepolia : `CharacterNFT` :

## ERC1155 NFTs for Item creation

Base items, Rares, Uniques, Set items

> Upgradeable custom Token URI builder : `ItemNFTTokenURI.sol`

Deployed & Verified on Arbitrum Sepolia : `ItemNFTTokenURI` : [https://sepolia.arbiscan.io/address/0xd9f19B48456332B0F097c48c8dd9078df4922194#code]
Deployed & Verified on Arbitrum Sepolia : `ItemNFT` :

## ERC20 Token for In-game Gold currency

Mintable/Burnable only by allowed parties
Deployed & Verified on Arbitrum Sepolia : `Gold` :

## Level contract

Gaming utility contract for NFT leveling
Deployed & Verified on Arbitrum Sepolia : `Level` : [https://sepolia.arbiscan.io/address/0xeE7f21556ceEf570E9191a3738c1029C98413830#code]

## SkillTree contract

Gaming utility contract for NFT SkillTree
Deployed & Verified on Arbitrum Sepolia : `SkillTree` : [https://sepolia.arbiscan.io/address/0xA2B806cF83D0B1E33866C492DA0A05a260bb4A9f#code]

## Akara contract

Shop utility contract for purchasing ERC1155 items from an NPC Merchant
Deployed & Verified on Arbitrum Sepolia : `Akara` : [https://sepolia.arbiscan.io/address/0xEa30F35203d9f6e2E74d47f322EEAcfF213Bb88D#code]

## Monster contract

Gaming utility contract for battling monsters, gaining xp, loot drops, and daily capped limits
Deployed & Verified on Arbitrum Sepolia : `Monster` : [https://sepolia.arbiscan.io/address/0x2Fe136714E915DA34b3B25597cF89693c3500B85#code]

### To deploy all upgradeable contracts

`npx hardhat deploy-upgradeables --network arb-sepolia`
