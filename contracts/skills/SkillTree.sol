// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../BaseHelper.sol";
import {CharacterNFTManager} from "../erc721/CharacterNFTManager.sol";
import {Level} from "../leveling/Level.sol";

contract SkillTree is BaseHelper {
    /** STRUCTS **/

    /** VARIABLES **/

    // Character class to skill tree mapping
    mapping(uint256 => uint256[]) public charClassToSkills;

    // Level contract
    address public levelContractAddress;
    // C
    address public characterNFTManager;

    /** ERRORS **/

    error SkillNotAllowed();

    /** MODIFIERS **/

    /** EVENTS **/

    /** FUNCTIONS **/

    function initialize(address initialOwner) public initializer {
        _baseInitialize(initialOwner);
        // Each character type has an array of skills that match to level
        charClassToSkills[1] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Barbarian
        charClassToSkills[2] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Necromancer
        charClassToSkills[3] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Paladin
        charClassToSkills[4] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Sorceress
        charClassToSkills[5] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Amazon
        charClassToSkills[6] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Assassin
        charClassToSkills[7] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Druid
    }

    /**
     * @dev Set the address of the CharacterNFTManager contract
     */
    function setCharacterNFTManager(
        address _characterNFTManager
    ) public onlyRole(OWNER_ROLE) {
        characterNFTManager = _characterNFTManager;
    }

    /**
     * @dev Set the address of the Level contract
     */
    function setLevelContract(
        address _levelContract
    ) public onlyRole(OWNER_ROLE) {
        levelContractAddress = _levelContract;
    }

    /**
     * @dev Check that the character class and skill chosen are valid
     */
    function canUseSkill(uint256 tokenId, uint256 skillChosen) public view {
        // Get the character class of the token ID
        CharacterNFTManager characterNFTManagerContract = CharacterNFTManager(
            characterNFTManager
        );
        CharacterNFTManager.CharacterClass classEnumValue = characterNFTManagerContract
                .tokenIdToCharacterClass(tokenId);
        // Get the level of the token ID
        Level levelContract = Level(levelContractAddress);
        uint256 tokenIdLevel = levelContract.getTokenLevel(tokenId);
        // Get the skills of the character class
        uint256[] memory skills = charClassToSkills[uint256(classEnumValue)];
        if (skillChosen > skills[tokenIdLevel]) {
            revert SkillNotAllowed();
        }
    }
}
