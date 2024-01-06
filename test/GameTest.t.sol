// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";

import {Gold} from "../contracts/erc20/Gold.sol";
import {CharacterNFT} from "../contracts/erc721/CharacterNFT.sol";
import {CharacterNFTManager} from "../contracts/erc721/CharacterNFTManager.sol";
import {CharacterNFTTokenURI} from "../contracts/erc721/CharacterNFTTokenURI.sol";
import {ItemNFT} from "../contracts/erc1155/ItemNFT.sol";
import {ItemNFTTokenURI} from "../contracts/erc1155/ItemNFTTokenURI.sol";

contract GameTest is Test {
    // Contracts
    Gold public gold;
    CharacterNFT public characterNFT;
    CharacterNFTManager public characterNFTManager;
    CharacterNFTTokenURI public characterNFTTokenURI;
    ItemNFT public itemNFT;
    ItemNFTTokenURI public itemNFTTokenURI;

    // Accounts
    address public owner;

    // Roles
    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    function setUp() public {
        owner = msg.sender;
        vm.startPrank(owner);
        // ERC20 contracts
        gold = new Gold();
        // ERC721 contracts
        characterNFT = new CharacterNFT();
        characterNFTManager = new CharacterNFTManager();
        characterNFTTokenURI = new CharacterNFTTokenURI();
        // ERC1155 contracts
        itemNFT = new ItemNFT();
        itemNFTTokenURI = new ItemNFTTokenURI();
        // Initialize upgradeables
        characterNFTManager.initialize(owner);
        characterNFTTokenURI.initialize(owner);
        itemNFTTokenURI.initialize(owner);

        // Contract setup and connections
        characterNFT.setCharacterNFTManager(address(characterNFTManager));
        characterNFT.setTokenUriContract(address(characterNFTTokenURI));
        characterNFTManager.setCharacterNFT(address(characterNFT));
        characterNFTTokenURI.setCharacterNFT(address(characterNFT));
        itemNFT.setItemNFTTokenURI(address(itemNFTTokenURI));

        // Set up roles
        characterNFT.grantRole(MINTER_ROLE, address(characterNFTManager));

        // setup characterNFT class images
        characterNFT.updateClassImages(
            uint256(CharacterNFTManager.CharacterClass.BARBARIAN),
            "https://www.purediablo.com/wp-content/uploads/2021/02/D2R_Barbarian-scaled.jpg"
        );
        characterNFT.updateClassImages(
            uint256(CharacterNFTManager.CharacterClass.NECROMANCER),
            "https://www.purediablo.com/wp-content/uploads/2021/02/D2R_Necromancer-scaled.jpg"
        );
        characterNFT.updateClassImages(
            uint256(CharacterNFTManager.CharacterClass.PALADIN),
            "https://www.purediablo.com/wp-content/uploads/2021/02/D2R_Paladin-scaled.jpg"
        );
        characterNFT.updateClassImages(
            uint256(CharacterNFTManager.CharacterClass.SORCERESS),
            "https://www.purediablo.com/wp-content/uploads/2021/02/D2R_Sorceress-scaled.jpg"
        );
        characterNFT.updateClassImages(
            uint256(CharacterNFTManager.CharacterClass.AMAZON),
            "https://www.purediablo.com/wp-content/uploads/2021/02/D2R_Amazon-scaled.jpg"
        );
        characterNFT.updateClassImages(
            uint256(CharacterNFTManager.CharacterClass.ASSASSIN),
            "https://www.purediablo.com/wp-content/uploads/2021/02/D2R_Assassin-scaled.jpg"
        );
        characterNFT.updateClassImages(
            uint256(CharacterNFTManager.CharacterClass.DRUID),
            "https://www.purediablo.com/wp-content/uploads/2021/02/D2R_Druid-scaled.jpg"
        );
    }

    /**
     * @dev Test CharacterNFT.mint()
     */
    function testCharacterNFTMint() public {
        _mintNft(
            owner,
            1,
            uint256(CharacterNFTManager.CharacterClass.BARBARIAN)
        );
        uint256 expectedTokenId = 1;
        address tokenOwner = characterNFT.ownerOf(expectedTokenId);
        assertEq(tokenOwner, owner);
    }

    /**
     * @dev Test CharacterNFT.burn()
     */
    function testCharacterNFTBurn() public {
        _mintNft(
            owner,
            1,
            uint256(CharacterNFTManager.CharacterClass.BARBARIAN)
        );
        uint256 expectedTokenId = 1;
        address tokenOwner = characterNFT.ownerOf(expectedTokenId);
        assertEq(tokenOwner, owner);
        characterNFT.burn(expectedTokenId);
        tokenOwner = characterNFT.ownerOf(expectedTokenId);
        assertEq(tokenOwner, address(0));
    }

    /**
     * @dev Test CharacterNFT.tokenName()
     */
    function testERC721TokenName() public {
        _mintNft(
            owner,
            1,
            uint256(CharacterNFTManager.CharacterClass.BARBARIAN)
        );
        string memory erc721TokenName = characterNFT.tokenName(1);
        string memory expected = "BARBARIAN #1";
        assertEq(erc721TokenName, expected);
    }

    /**
     * @dev Test CharacterNFT.characterClassImages()
     */
    function testERC721CharacterClassImages() public {
        _mintNft(
            owner,
            1,
            uint256(CharacterNFTManager.CharacterClass.BARBARIAN)
        );
        string memory erc721CharacterClassImages = characterNFT
            .characterClassImages(
                uint256(CharacterNFTManager.CharacterClass.BARBARIAN)
            );
        string
            memory expected = "https://www.purediablo.com/wp-content/uploads/2021/02/D2R_Barbarian-scaled.jpg";
        assertEq(erc721CharacterClassImages, expected);
    }

    /**
     * @dev Test CharacterNFT.tokenURI()
     */
    // function testERC721TokenURI() public {
    //     _mintNft(
    //         owner,
    //         1,
    //         uint256(CharacterNFTManager.CharacterClass.BARBARIAN)
    //     );
    //     string memory erc721TokenURI = characterNFT.tokenURI(1);
    //     string memory expected = "test";
    //     console.log("token URI: ", erc721TokenURI);
    //     assertEq(erc721TokenURI, expected);
    // }

    /**
     * @dev Internal helper to mint nfts
     */
    function _mintNft(address to, uint256 amount, uint256 class) internal {
        characterNFTManager.mintCharacterPrivate(
            amount,
            to,
            CharacterNFTManager.CharacterClass(class)
        );
    }
}
