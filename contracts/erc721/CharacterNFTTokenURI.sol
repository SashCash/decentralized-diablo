// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

import "../BaseHelper.sol";
import "./CharacterNFT.sol";

contract CharacterNFTTokenURI is BaseHelper {
    using Strings for uint256;
    /** STRUCTS **/

    struct Attribute {
        string name;
        uint256 value;
    }

    /** VARIABLES **/

    address public characterNFT;

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

        Attribute[] memory attributes = new Attribute[](2);
        attributes[0] = Attribute("SomeTrait1", 123);
        attributes[1] = Attribute("SomeTrait2", 456);

        for (uint256 i = 0; i < attributes.length; i++) {
            if (i == attributes.length - 1) {
                attributesString = string.concat(
                    attributesString,
                    '{"trait_type":"',
                    attributes[i].name,
                    '","value":"',
                    Strings.toString(attributes[i].value),
                    '"}'
                );
            } else {
                attributesString = string.concat(
                    attributesString,
                    '{"trait_type":"',
                    attributes[i].name,
                    '","value":"',
                    Strings.toString(attributes[i].value),
                    '"}',
                    ","
                );
            }
        }

        string memory propertiesJSON = string.concat(
            '"name":"',
            CharacterNFT(characterNFT).tokenName(tokenId),
            '",',
            '"description":"',
            "A paladin character from Diablo2",
            '",',
            '"image":"',
            "https://www.purediablo.com/wp-content/uploads/2021/02/D2R_Paladin-scaled.jpg",
            '",',
            '"external_url":"',
            "https://diablo.fandom.com/wiki/Paladin",
            '",',
            '"attributes":[',
            attributesString,
            "]"
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
}
