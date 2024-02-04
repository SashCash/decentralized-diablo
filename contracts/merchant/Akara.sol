// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../BaseHelper.sol";
import {ItemNFT} from "../erc1155/ItemNFT.sol";

// uint256 constant HEALTH_POT_ID = 1;
// uint256 constant MANA_POT_ID = 2;
// uint256 constant STAMINA_POT_ID = 3;
// uint256 constant REJUVINATION_POT_ID = 4;

contract Akara is BaseHelper {
    /** STRUCTS **/

    /** VARIABLES **/

    // Track the token ID to price
    mapping(uint256 => uint256) public tokenIdToPrice;

    // Gold token address
    address public goldTokenAddress;

    // ItemNFT token address
    address public itemNFTAddress;

    // Wallet that receives the gold from purchases
    address payable public bank;

    /** ERRORS **/

    /// @notice Error if the user cannot purchase
    error UnableToPurchase();

    /** MODIFIERS **/

    /** EVENTS **/

    /// @notice An event emitted when a character gets xp
    event Purchased(
        uint256 indexed tokenId,
        address indexed buyer,
        uint256 price,
        uint256 quantity
    );

    /** FUNCTIONS **/

    function initialize(address initialOwner) public initializer {
        _baseInitialize(initialOwner);
    }

    /**
     * @dev Set the address of the gold token
     */
    function setGoldTokenAddress(
        address _goldTokenAddress
    ) public onlyRole(OWNER_ROLE) {
        goldTokenAddress = _goldTokenAddress;
    }

    /**
     * @dev Set the address of the ItemNFT contract
     */
    function setItemNFTAddress(
        address _itemNFTAddress
    ) public onlyRole(OWNER_ROLE) {
        itemNFTAddress = _itemNFTAddress;
    }

    /**
     * @dev Set bank address
     */
    function setBank(address payable _bank) public onlyRole(OWNER_ROLE) {
        bank = _bank;
    }

    /**
     * @dev Set the price of an item
     */
    function setItemPrice(
        uint256 tokenId,
        uint256 price
    ) public onlyRole(OWNER_ROLE) {
        tokenIdToPrice[tokenId] = price;
    }

    /**
     * @dev Purchase an item
     */
    function purchase(
        uint256 tokenId,
        uint256 quantity
    ) public nonReentrant whenNotPaused {
        // Make sure the token ID is valid
        if (tokenIdToPrice[tokenId] == 0 || quantity == 0) {
            revert UnableToPurchase();
        }
        // Transfer gold from the user to the bank
        ERC20(goldTokenAddress).transferFrom(
            msg.sender,
            bank,
            tokenIdToPrice[tokenId] * quantity
        );
        // Mint the item to the user
        ItemNFT(itemNFTAddress).mint(msg.sender, tokenId, quantity);
        emit Purchased(tokenId, msg.sender, tokenIdToPrice[tokenId], quantity);
    }
}
