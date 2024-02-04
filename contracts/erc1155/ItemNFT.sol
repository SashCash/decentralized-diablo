// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

import "./ItemNFTTokenURI.sol";

contract ItemNFT is ERC1155, AccessControl {
    using Strings for uint256;

    /** STRUCTS **/

    struct ItemData {
        uint256 maxAmount;
        uint256 currentSupply;
        bool unlimitedSupply;
        bool registered;
    }

    /** VARIABLES **/

    // Track the item data of each token ID
    mapping(uint256 => ItemData) public itemIdToItemData;

    address public itemNFTTokenURIContract;

    /** ROLES **/

    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    /** EVENTS **/

    /// @notice An event emitted when an item data is set
    event ItemDataSet(
        uint256 indexed itemId,
        uint256 maxAmount,
        bool unlimitedSupply,
        bool registered
    );

    /** ERRORS **/

    error InvalidValues();
    error InvalidMint();

    /** FUNCTIONS **/

    constructor() ERC1155("") {
        // DEFAULT_ADMIN_ROLE is a special role that acts as the default admin role for all roles
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(OWNER_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
        _grantRole(BURNER_ROLE, msg.sender);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC1155, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function uri(uint256 tokenId) public view override returns (string memory) {
        return ItemNFTTokenURI(itemNFTTokenURIContract).uri(tokenId);
    }

    /**
     * @dev Set the address of the ItemNFTTokenURI contract
     */
    function setItemNFTTokenURI(
        address itemNFTTokenURIAddress
    ) public onlyRole(OWNER_ROLE) {
        itemNFTTokenURIContract = itemNFTTokenURIAddress;
    }

    function setItemData(
        uint256 itemId,
        uint256 maxAmount,
        bool unlimitedSupply,
        bool registered
    ) public onlyRole(OWNER_ROLE) {
        ItemData storage itemData = itemIdToItemData[itemId];
        itemData.maxAmount = maxAmount;
        itemData.unlimitedSupply = unlimitedSupply;
        itemData.registered = registered;
        emit ItemDataSet(itemId, maxAmount, unlimitedSupply, registered);
    }

    function setItemRegistered(
        uint256 itemId,
        bool registered
    ) public onlyRole(ADMIN_ROLE) {
        itemIdToItemData[itemId].registered = registered;
    }

    function setItemMaxAmount(
        uint256 itemId,
        uint256 maxAmount
    ) public onlyRole(ADMIN_ROLE) {
        itemIdToItemData[itemId].maxAmount = maxAmount;
    }

    function setItemUnlimitedSupply(
        uint256 itemId,
        bool unlimitedSupply
    ) public onlyRole(ADMIN_ROLE) {
        itemIdToItemData[itemId].unlimitedSupply = unlimitedSupply;
    }

    /**
     * @dev Mint a new token, only a minter can call this function
     */
    function mint(
        address to,
        uint256 id,
        uint256 amount
    ) public onlyRole(MINTER_ROLE) {
        if (id == 0 || to == address(0) || amount == 0) {
            revert InvalidValues();
        }
        _checkValidMint(id, amount);
        itemIdToItemData[id].currentSupply += amount;
        _mint(to, id, amount, "");
    }

    function mint(
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public onlyRole(MINTER_ROLE) {
        if (id == 0 || to == address(0) || amount == 0) {
            revert InvalidValues();
        }
        _checkValidMint(id, amount);
        itemIdToItemData[id].currentSupply += amount;
        _mint(to, id, amount, data);
    }

    /**
     * @dev Burn a token, only a burner can call this function
     */
    function burn(
        address from,
        uint256 id,
        uint256 amount
    ) public onlyRole(BURNER_ROLE) {
        if (from == address(0) || amount == 0 || id == 0) {
            revert InvalidValues();
        }
        itemIdToItemData[id].currentSupply -= amount;
        _burn(from, id, amount);
    }

    /**
     * @dev Mint a batch of tokens, only a minter can call this function
     */
    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) external onlyRole(MINTER_ROLE) {
        _mintBatch(to, ids, amounts, data);
    }

    /**
     * @dev Mint a batch of tokens, only a minter can call this function
     */
    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts
    ) external onlyRole(MINTER_ROLE) {
        _mintBatch(to, ids, amounts, "");
    }

    /**
     * @dev Burn a batch of tokens, only a burner can call this function
     */
    function burnBatch(
        address from,
        uint256[] memory ids,
        uint256[] memory amounts
    ) external onlyRole(BURNER_ROLE) {
        _burnBatch(from, ids, amounts);
    }

    /**
     * @dev Internal function to check if a mint is valid
     * Revert if item is not registered
     * Revert if item is not unlimited supply and current supply + amount > max amount
     */
    function _checkValidMint(uint256 _id, uint256 _amount) internal view {
        ItemData memory itemData = itemIdToItemData[_id];
        if (itemData.registered == false) {
            revert InvalidMint();
        }
        if (
            itemData.unlimitedSupply == false &&
            itemData.currentSupply + _amount > itemData.maxAmount
        ) {
            revert InvalidMint();
        }
    }
}
