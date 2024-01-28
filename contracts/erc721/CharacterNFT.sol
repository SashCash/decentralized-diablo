// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

import "./CharacterNFTManager.sol";
import "./CharacterNFTTokenURI.sol";

contract CharacterNFT is ERC721, AccessControl {
    using Strings for uint256;

    /** VARIABLES **/

    struct CharacterData {
        string className;
        string classImage;
        string classDescription;
    }

    mapping(uint256 => CharacterData) public classIdToCharacterData;
    address public characterNFTManagerContract;
    address public tokenUriContract;

    /** ROLES **/

    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");

    /** ERRORS **/

    error InvalidValues();

    /** MODIFIERS **/

    /** FUNCTIONS **/

    constructor() ERC721("Diablo", "D2NFT") {
        // DEFAULT_ADMIN_ROLE is a special role that acts as the default admin role for all roles
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(OWNER_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
        _grantRole(BURNER_ROLE, msg.sender);

        classIdToCharacterData[1].className = "BARBARIAN";
        classIdToCharacterData[2].className = "NECROMANCER";
        classIdToCharacterData[3].className = "PALADIN";
        classIdToCharacterData[4].className = "SORCERESS";
        classIdToCharacterData[5].className = "AMAZON";
        classIdToCharacterData[6].className = "ASSASSIN";
        classIdToCharacterData[7].className = "DRUID";
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    /**
     * @dev Set the address of the CharacterNFTManager contract
     */
    function setCharacterNFTManager(
        address characterNFTManagerAddress
    ) public onlyRole(OWNER_ROLE) {
        characterNFTManagerContract = characterNFTManagerAddress;
    }

    /**
     * @dev Set the address of the CharacterNFTTokenURI contract
     */
    function setTokenUriContract(
        address tokenUriContractAddress
    ) public onlyRole(OWNER_ROLE) {
        tokenUriContract = tokenUriContractAddress;
    }

    /**
     * @dev Returns the name of a given token ID
     */
    function tokenName(uint256 tokenId) public view returns (string memory) {
        uint256 classEnumValue = uint256(
            CharacterNFTManager(characterNFTManagerContract)
                .tokenIdToCharacterClass(tokenId)
        );
        string memory className = classIdToCharacterData[classEnumValue]
            .className;
        return string(abi.encodePacked(className, " #", tokenId.toString()));
    }

    /**
     * @dev Returns the URI for a given token ID
     */
    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        _requireOwned(tokenId);
        if (tokenUriContract == address(0)) {
            return "";
        }
        return CharacterNFTTokenURI(tokenUriContract).tokenURI(tokenId);
    }

    /**
     * @dev Update the class names
     */
    function updateClassNames(
        uint256 classEnumValue,
        string memory classNames
    ) public onlyRole(OWNER_ROLE) {
        classIdToCharacterData[classEnumValue].className = classNames;
    }

    /**
     * @dev Update the class images
     */
    function updateClassImages(
        uint256 classEnumValue,
        string memory classImages
    ) public onlyRole(OWNER_ROLE) {
        classIdToCharacterData[classEnumValue].classImage = classImages;
    }

    /**
     * @dev Update the class descriptions
     */
    function updateClassDescriptions(
        uint256 classEnumValue,
        string memory classDescriptions
    ) public onlyRole(OWNER_ROLE) {
        classIdToCharacterData[classEnumValue]
            .classDescription = classDescriptions;
    }

    /**
     * @dev Mint a new token, only a minter can call this function
     */
    function mint(uint256 tokenId, address to) public onlyRole(MINTER_ROLE) {
        if (tokenId == 0 || to == address(0)) {
            revert InvalidValues();
        }
        _safeMint(to, tokenId);
    }

    /**
     * @dev Burn a token, only a burner can call this function
     */
    function burn(uint256 tokenId) public onlyRole(BURNER_ROLE) {
        if (tokenId == 0) {
            revert InvalidValues();
        }
        _burn(tokenId);
    }

    function getClassDescription(
        uint256 tokenId
    ) public view returns (string memory) {
        uint256 classEnumValue = uint256(
            CharacterNFTManager(characterNFTManagerContract)
                .tokenIdToCharacterClass(tokenId)
        );
        return classIdToCharacterData[classEnumValue].classDescription;
    }

    function getClassImage(
        uint256 tokenId
    ) public view returns (string memory) {
        uint256 classEnumValue = uint256(
            CharacterNFTManager(characterNFTManagerContract)
                .tokenIdToCharacterClass(tokenId)
        );
        return classIdToCharacterData[classEnumValue].classImage;
    }

    function getClassName(uint256 tokenId) public view returns (string memory) {
        uint256 classEnumValue = uint256(
            CharacterNFTManager(characterNFTManagerContract)
                .tokenIdToCharacterClass(tokenId)
        );
        return classIdToCharacterData[classEnumValue].className;
    }
}
