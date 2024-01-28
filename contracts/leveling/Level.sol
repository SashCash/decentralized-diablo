// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../BaseHelper.sol";

contract Level is BaseHelper {
    /** STRUCTS **/

    struct LevelData {
        uint128 level;
        uint128 xp;
    }

    /** VARIABLES **/

    // Track the Level and Xp of each token ID
    mapping(uint256 => LevelData) public tokenIdToLevelData;

    // Each level has an xp requirement
    uint256[] public xpPerLevel;

    /** ERRORS **/

    error MaxLevelReached();

    /** MODIFIERS **/

    /** EVENTS **/

    /// @notice An event emitted when a character gets xp
    event LevelUp(uint256 indexed tokenId, uint256 level, uint256 xp);

    /** FUNCTIONS **/

    function initialize(address initialOwner) public initializer {
        _baseInitialize(initialOwner);
        // Each level has an xp requirement, start with 10 levels, we can add more later
        xpPerLevel.push(0); // Base level is 0
        xpPerLevel.push(100); // Level 1 is 100 xp
        xpPerLevel.push(200); // Level 2 is 200 xp
        xpPerLevel.push(300); // Level 3 is 300 xp
        xpPerLevel.push(400); // Level 4 is 400 xp
        xpPerLevel.push(500); // Level 5 is 500 xp
        xpPerLevel.push(600); // Level 6 is 600 xp
        xpPerLevel.push(700); // Level 7 is 700 xp
        xpPerLevel.push(800); // Level 8 is 800 xp
        xpPerLevel.push(900); // Level 9 is 900 xp
        xpPerLevel.push(1000); // Level 10 is 1000 xp
    }

    /**
     * @dev Update the XpPerLevel array if needed
     */
    function updateXpPerLevelArray(
        uint256[] memory _xpPerLevel
    ) external onlyRole(ADMIN_ROLE) {
        xpPerLevel = _xpPerLevel;
    }

    /**
     * @dev Utility-contract only. Grant the user experience and increase their level if valid
     */
    function gainExperience(
        uint256 tokenId,
        uint256 xp
    ) public onlyRole(UTILITY_ROLE) {
        LevelData storage levelData = tokenIdToLevelData[tokenId];
        // Make sure user cannot go past max level
        if (levelData.level >= xpPerLevel.length - 1) {
            revert MaxLevelReached();
        }
        levelData.xp += uint128(xp);
        uint256 currentLevel = levelData.level;
        // Update the level if the new xp falls with the range
        for (uint256 i = currentLevel + 1; i < xpPerLevel.length; i++) {
            if (levelData.xp >= xpPerLevel[i]) {
                levelData.level = uint128(i);
                emit LevelUp(tokenId, i, levelData.xp);
            }
        }
    }
}
