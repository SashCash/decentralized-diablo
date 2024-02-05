// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../BaseHelper.sol";
import "./CharacterNFT.sol";

contract CharacterNFTManager is BaseHelper {
    /** ENUMS **/
    enum CharacterClass {
        NULL,
        BARBARIAN,
        NECROMANCER,
        PALADIN,
        SORCERESS,
        AMAZON,
        ASSASSIN,
        DRUID
    }

    /** VARIABLES **/

    // Track the last token ID minted
    uint256 public tokenIdCounter;
    // Track the character class of each token ID
    mapping(uint256 => CharacterClass) public tokenIdToCharacterClass;
    // Price per mint
    uint256 public pricePerMint;
    // CharacterNFT contract
    address public characterNFT;

    /** ERRORS **/

    error InsufficientFunds(uint256 pricePerMint, uint256 amount);
    error InvalidCharacterClass();

    /** MODIFIERS **/

    /** FUNCTIONS **/

    function initialize(address initialOwner) public initializer {
        _baseInitialize(initialOwner);
    }

    /**
     * @dev Set the price per mint
     */
    function setPricePerMint(
        uint256 _pricePerMint
    ) public onlyRole(OWNER_ROLE) {
        pricePerMint = _pricePerMint;
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
     * @dev Withdraw the contract balance
     */
    function withdraw() public onlyRole(OWNER_ROLE) {
        payable(msg.sender).transfer(address(this).balance);
    }

    /**
     * @dev Mint a character NFT, open for public use, requires payment
     */
    function mintCharacterPublic(
        uint256 amount,
        CharacterClass charType
    ) public payable whenNotPaused nonReentrant {
        if (charType == CharacterClass.NULL) {
            revert InvalidCharacterClass();
        }
        if (amount == 0) {
            revert InvalidValues();
        }
        if (msg.value < pricePerMint * amount) {
            revert InsufficientFunds(pricePerMint, amount);
        }
        for (uint256 i = 0; i < amount; i++) {
            tokenIdCounter++;
            uint256 newTokenId = tokenIdCounter;
            tokenIdToCharacterClass[newTokenId] = charType;
            CharacterNFT(characterNFT).mint(newTokenId, msg.sender);
        }
    }

    /**
     * @dev Mint a character NFT, only for MINTER use, no payment required
     */
    function mintCharacterPrivate(
        uint256 amount,
        address to,
        CharacterClass charType
    ) public onlyRole(MINTER_ROLE) {
        _mintChar(amount, to, charType);
    }

    /**
     * @dev Mint a batch of character NFTs, only for owner use, no payment required
     */
    function mintBatch(
        uint256[] calldata amounts,
        address[] calldata toAddresses,
        CharacterClass[] calldata charTypes
    ) public onlyRole(MINTER_ROLE) {
        if (
            amounts.length != toAddresses.length ||
            amounts.length != charTypes.length
        ) {
            revert InvalidValues();
        }

        for (uint256 i = 0; i < amounts.length; i++) {
            _mintChar(amounts[i], toAddresses[i], charTypes[i]);
        }
    }

    /**
     * @dev Internal mint helper
     */
    function _mintChar(
        uint256 amount,
        address to,
        CharacterClass charType
    ) internal {
        if (
            charType == CharacterClass.NULL || amount == 0 || to == address(0)
        ) {
            revert InvalidValues();
        }

        for (uint256 i = 0; i < amount; i++) {
            tokenIdCounter++;
            uint256 newTokenId = tokenIdCounter;
            tokenIdToCharacterClass[newTokenId] = charType;
            CharacterNFT(characterNFT).mint(newTokenId, to);
        }
    }
}
