// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

import "../BaseHelper.sol";

contract ItemNFTTokenURI is BaseHelper {
    using Strings for uint256;
    /** STRUCTS **/

    struct ItemAttributes {
        string name;
        string description;
        string image;
        string externalUrl;
        string animationUrl;
    }

    /** VARIABLES **/

    // Track the item URI of each token ID
    mapping(uint256 => ItemAttributes) public itemIdToURI;

    /** ERRORS **/

    /** MODIFIERS **/

    /** EVENTS **/

    /// @notice An event emitted when an item URI is set
    event ItemURISet(uint256 indexed itemId, ItemAttributes uriData);

    /** FUNCTIONS **/

    function initialize(address initialOwner) public initializer {
        _baseInitialize(initialOwner);
    }

    function setItemAttributes(
        uint256 itemId,
        ItemAttributes memory itemAttributes
    ) public onlyRole(ADMIN_ROLE) {
        itemIdToURI[itemId] = itemAttributes;
        emit ItemURISet(itemId, itemAttributes);
    }

    /**
     * @dev Returns the URI for a given token ID
     */
    function uri(uint256 tokenId) public view returns (string memory) {
        return _createURI(tokenId);
    }

    function _createURI(uint256 tokenId) internal view returns (string memory) {
        string memory attributesString = "";

        ItemAttributes memory itemAttributes = itemIdToURI[tokenId];

        attributesString = string(
            abi.encodePacked(
                attributesString,
                _addAttribute("name", itemAttributes.name, false)
            )
        );
        attributesString = string(
            abi.encodePacked(
                attributesString,
                _addAttribute("description", itemAttributes.description, false)
            )
        );
        attributesString = string(
            abi.encodePacked(
                attributesString,
                _addAttribute("image", itemAttributes.image, false)
            )
        );
        attributesString = string(
            abi.encodePacked(
                attributesString,
                _addAttribute("external_url", itemAttributes.externalUrl, false)
            )
        );
        attributesString = string(
            abi.encodePacked(
                attributesString,
                _addAttribute(
                    "animation_url",
                    itemAttributes.animationUrl,
                    true
                )
            )
        );

        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "Item #',
                        tokenId.toString(),
                        '","image": "',
                        itemAttributes.image,
                        '",',
                        '"description": "D2Item is a collection of items from the game Diablo 2", "attributes": [',
                        attributesString,
                        "]}"
                    )
                )
            )
        );
        return string(abi.encodePacked("data:application/json;base64,", json));
    }

    function _addAttribute(
        string memory key,
        string memory value,
        bool isLast
    ) internal pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    '{"trait_type": "',
                    key,
                    '", "value": "',
                    value,
                    '"}',
                    isLast ? "" : ","
                )
            );
    }
}
