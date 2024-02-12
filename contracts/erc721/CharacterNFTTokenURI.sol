// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

import "../BaseHelper.sol";
import "./CharacterNFT.sol";
import "../leveling/Level.sol";

contract CharacterNFTTokenURI is BaseHelper {
    using Strings for uint256;
    /** STRUCTS **/

    struct Attribute {
        string name;
        uint256 value;
    }

    /** VARIABLES **/

    address public characterNFT;

    address public levelContractAddress;

    /** ERRORS **/

    /** MODIFIERS **/

    /** FUNCTIONS **/

    function initialize(address initialOwner) public initializer {
        _baseInitialize(initialOwner);
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
    function setLevelContract(
        address _levelContract
    ) public onlyRole(OWNER_ROLE) {
        levelContractAddress = _levelContract;
    }

    /**
     * @dev Returns the URI for a given token ID
     */
    function tokenURI(uint256 tokenId) public view returns (string memory) {
        return _createURI(tokenId);
    }

    /**
     * @dev Creates the URI for a given token ID
     */
    function _createURI(uint256 tokenId) internal view returns (string memory) {
        string memory attributesString = "";

        attributesString = string.concat(
            _addAttribute(
                "Character Class",
                CharacterNFT(characterNFT).getClassName(tokenId)
            ),
            ","
        );

        uint256 level = Level(levelContractAddress).getTokenLevel(tokenId);
        uint256 xp = Level(levelContractAddress).getTokenXp(tokenId);

        Attribute[] memory attributes = new Attribute[](2);
        attributes[0] = Attribute("Level", level);
        attributes[1] = Attribute("Xp", xp);

        for (uint256 i = 0; i < attributes.length; i++) {
            if (i == attributes.length - 1) {
                attributesString = string.concat(
                    attributesString,
                    _addAttribute(
                        attributes[i].name,
                        Strings.toString(attributes[i].value)
                    )
                );
            } else {
                attributesString = string.concat(
                    attributesString,
                    _addAttribute(
                        attributes[i].name,
                        Strings.toString(attributes[i].value)
                    ),
                    ","
                );
            }
        }

        string memory propertiesJSON = string.concat(
            '"name":"',
            CharacterNFT(characterNFT).tokenName(tokenId),
            '",',
            '"description":"',
            CharacterNFT(characterNFT).getClassDescription(tokenId),
            '",',
            '"image":"',
            CharacterNFT(characterNFT).getClassImage(tokenId),
            '",',
            '"external_url":"',
            "https://diablo.fandom.com/wiki/Diablo_II",
            '"'
        );
        string memory fullOpenSeaMetadata = string.concat(
            "{",
            propertiesJSON,
            ",",
            '"attributes":[',
            attributesString,
            "]}"
        );
        return
            string.concat(
                "data:application/json;base64,",
                Base64.encode(bytes(fullOpenSeaMetadata))
            );
    }

    function _addAttribute(
        string memory key,
        string memory value
    ) internal pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    '{"trait_type": "',
                    key,
                    '", "value": "',
                    value,
                    '"}'
                )
            );
    }
}
