// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "../BaseHelper.sol";
import {ItemNFT} from "../erc1155/ItemNFT.sol";
import {Level} from "../leveling/Level.sol";
import {Gold} from "../erc20/Gold.sol";

/** Global STRUCTS **/

// Loot struct
struct Loot {
    address tokenContract;
    uint256 tokenId;
    uint256 amount;
}

// Monster struct
struct MonsterData {
    uint64 id;
    uint64 minLevelRequired;
    uint64 xpRewarded;
    uint64 dailyLimit;
    Loot[] lootRewarded;
}

contract Monster is BaseHelper {
    /** STRUCTS **/

    /** VARIABLES **/

    // Track the Level and Xp of each token ID
    mapping(uint256 => MonsterData) public monsterIdToData;

    // Track the each users daily limit of monsters defeated
    mapping(address => mapping(uint256 => mapping(uint256 => uint256)))
        public userToDateToMonsterToKillCount;

    // CharacterNFT contract
    address public characterNFT;

    // ItemNFT contract
    address public itemNFT;

    // Gold contract
    address public goldAddress;

    // Level contract
    address public levelContractAddress;

    /** ERRORS **/

    /// @notice Error if the monster is not available
    error MonsterNotAvailable();

    /// @notice Error if the caller is not the owner of the character NFT
    error NotCharacterOwner();

    /** MODIFIERS **/

    /** EVENTS **/

    event MonsterBattle(
        uint256 indexed tokenId,
        uint256 monsterId,
        uint256 currentKillCount
    );

    /** FUNCTIONS **/

    function initialize(address initialOwner) public initializer {
        _baseInitialize(initialOwner);
    }

    /**
     * @dev Set the address of the ItemNFT contract
     */
    function setItemNFT(address _itemNFT) public onlyRole(OWNER_ROLE) {
        itemNFT = _itemNFT;
    }

    /**
     * @dev Set the address of the Gold contract
     */
    function setGoldAddress(address _goldAddress) public onlyRole(OWNER_ROLE) {
        goldAddress = _goldAddress;
    }

    /**
     * @dev Set the address of the CharacterNFT contract
     */
    function setCharacterNFT(
        address _characterNFT
    ) public onlyRole(OWNER_ROLE) {
        characterNFT = _characterNFT;
    }

    /**
     * @dev Set the address of the Level contract
     */
    function setLevelContractAddress(
        address _levelContractAddress
    ) public onlyRole(OWNER_ROLE) {
        levelContractAddress = _levelContractAddress;
    }

    /**
     * @dev Set monster data
     */
    function setMonsterData(
        uint256 monsterId,
        uint64 minLevelRequired,
        uint64 xpRewarded,
        uint64 dailyLimit,
        Loot[] memory lootRewarded
    ) public onlyRole(OWNER_ROLE) {
        // Clear data first, this is needed to reset the array in the struct
        delete monsterIdToData[monsterId];
        MonsterData storage monsterData = monsterIdToData[monsterId];
        monsterData.id = uint64(monsterId);
        monsterData.minLevelRequired = minLevelRequired;
        monsterData.xpRewarded = xpRewarded;
        monsterData.dailyLimit = dailyLimit;
        // You cant copy a memory array to storage directly so we need to loop through and push
        for (uint256 i = 0; i < lootRewarded.length; i++) {
            monsterData.lootRewarded.push(lootRewarded[i]);
        }
    }

    /**
     * @dev Allow the user to battle a monster and gain xp and loot
     * Limited by daily allowed amounts
     */
    function battleMonster(
        uint256 monsterId,
        uint256 charTokenId
    ) public whenNotPaused nonReentrant {
        // Only the owner of the character NFT can battle using their nft
        if (IERC721(characterNFT).ownerOf(charTokenId) != msg.sender) {
            revert NotCharacterOwner();
        }
        // Make sure the monster is available
        if (monsterIdToData[monsterId].dailyLimit == 0) {
            revert MonsterNotAvailable();
        }
        // Make sure the user has the required level
        if (
            Level(levelContractAddress).getTokenLevel(charTokenId) <
            monsterIdToData[monsterId].minLevelRequired
        ) {
            revert MonsterNotAvailable();
        }
        // Get todays date as days since epoch
        uint256 today = (block.timestamp / 1 days);
        // Make sure the user has not reached the daily limit
        if (
            userToDateToMonsterToKillCount[msg.sender][today][monsterId] >=
            monsterIdToData[monsterId].dailyLimit
        ) {
            revert MonsterNotAvailable();
        }

        // Grant the user xp
        Level(levelContractAddress).gainExperience(
            charTokenId,
            monsterIdToData[monsterId].xpRewarded
        );
        // Grant the user loot
        for (
            uint256 i = 0;
            i < monsterIdToData[monsterId].lootRewarded.length;
            i++
        ) {
            if (
                monsterIdToData[monsterId].lootRewarded[i].tokenContract ==
                goldAddress
            ) {
                Gold(goldAddress).mint(
                    msg.sender,
                    monsterIdToData[monsterId].lootRewarded[i].amount
                );
            } else if (
                monsterIdToData[monsterId].lootRewarded[i].tokenContract ==
                itemNFT
            ) {
                ItemNFT(itemNFT).mint(
                    msg.sender,
                    monsterIdToData[monsterId].lootRewarded[i].tokenId,
                    monsterIdToData[monsterId].lootRewarded[i].amount
                );
            }
        }
        // Update the users daily kill count for this monster
        userToDateToMonsterToKillCount[msg.sender][today][monsterId]++;
        emit MonsterBattle(
            charTokenId,
            monsterId,
            userToDateToMonsterToKillCount[msg.sender][today][monsterId]
        );
    }

    /**
     * @dev Helper view function returns the users kill count for a monster for a given day
     */
    function getUserKillCount(
        address user,
        uint256 monsterId,
        uint256 date
    ) public view returns (uint256) {
        return userToDateToMonsterToKillCount[user][date][monsterId];
    }

    /**
     * @dev Helper view function returns the loot rewarded by a monster
     */
    function getMonsterLoot(
        uint256 monsterId
    ) public view returns (Loot[] memory) {
        return monsterIdToData[monsterId].lootRewarded;
    }
}
