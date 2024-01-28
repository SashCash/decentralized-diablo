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

    address public admin;

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

        // setup itemNFT attributes
        itemNFTTokenURI.setItemAttributes(
            1,
            ItemNFTTokenURI.ItemAttributes(
                "Sigons Visor",
                "Sigons Complete Steel",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/great_helm_armor_diablo2_wiki_guide_196px.png",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/great_helm_armor_diablo2_wiki_guide_196px.png",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/great_helm_armor_diablo2_wiki_guide_196px.png"
            )
        );
        itemNFTTokenURI.setItemAttributes(
            2,
            ItemNFTTokenURI.ItemAttributes(
                "Sigons Guard",
                "Sigons Complete Steel",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/bverrit_keep_1_diablo2_wiki_guide_196x294px.png",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/bverrit_keep_1_diablo2_wiki_guide_196x294px.png",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/bverrit_keep_1_diablo2_wiki_guide_196x294px.png"
            )
        );
        itemNFTTokenURI.setItemAttributes(
            3,
            ItemNFTTokenURI.ItemAttributes(
                "Sigons Wrap",
                "Sigons Complete Steel",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/plated_belt_armor_diablo2_wiki_guide_196px.png",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/plated_belt_armor_diablo2_wiki_guide_196px.png",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/plated_belt_armor_diablo2_wiki_guide_196px.png"
            )
        );
        itemNFTTokenURI.setItemAttributes(
            4,
            ItemNFTTokenURI.ItemAttributes(
                "Sigons Sabot",
                "Sigons Complete Steel",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/plate_boots_diablo2_wiki_guide_196px.png",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/plate_boots_diablo2_wiki_guide_196px.png",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/plate_boots_diablo2_wiki_guide_196px.png"
            )
        );
        itemNFTTokenURI.setItemAttributes(
            5,
            ItemNFTTokenURI.ItemAttributes(
                "Sigons Gage",
                "Sigons Complete Steel",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/gauntlets_diablo2_wiki_guide_196px.png",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/gauntlets_diablo2_wiki_guide_196px.png",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/gauntlets_diablo2_wiki_guide_196px.png"
            )
        );
        itemNFTTokenURI.setItemAttributes(
            6,
            ItemNFTTokenURI.ItemAttributes(
                "Sigons Shelter",
                "Sigons Complete Steel",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/gothic_plate_armor_diablo2_wiki_guide_196px.png",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/gothic_plate_armor_diablo2_wiki_guide_196px.png",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/gothic_plate_armor_diablo2_wiki_guide_196px.png"
            )
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
        uint256 balanceOfOwner = characterNFT.balanceOf(owner);
        assertEq(balanceOfOwner, 0);
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
     * @dev Test Addresses are not address(0)
     */
    function testFailContractAddress() public {
        assertEq(address(characterNFT), address(0));
        assertEq(address(gold), address(0));
        assertEq(address(characterNFTManager), address(0));
        assertEq(address(characterNFTTokenURI), address(0));
        assertEq(address(itemNFT), address(0));
        assertEq(address(itemNFTTokenURI), address(0));
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
    //     console.log("erc721 token URI: ", erc721TokenURI);
    //     assertEq(erc721TokenURI, expected);
    // }

    /**
     * @dev Test ItemNFTTokenURI.uri()
     */
    // function testERC71155TokenURI() public {
    //     _mintNft(
    //         owner,
    //         1,
    //         uint256(CharacterNFTManager.CharacterClass.BARBARIAN)
    //     );
    //     string memory erc1155TokenURI = itemNFTTokenURI.uri(1);
    //     string
    //         memory expected = "data:application/json;base64,eyJuYW1lIjogIkl0ZW0gIzEiLCJpbWFnZSI6ICJodHRwczovL2RpYWJsbzIud2lraS5mZXh0cmFsaWZlLmNvbS9maWxlL0RpYWJsby0yL2dyZWF0X2hlbG1fYXJtb3JfZGlhYmxvMl93aWtpX2d1aWRlXzE5NnB4LnBuZyIsImRlc2NyaXB0aW9uIjogIkQySXRlbSBpcyBhIGNvbGxlY3Rpb24gb2YgaXRlbXMgZnJvbSB0aGUgZ2FtZSBEaWFibG8gMiIsICJhdHRyaWJ1dGVzIjogW3sidHJhaXRfdHlwZSI6ICJuYW1lIiwgInZhbHVlIjogIlNpZ29ucyBWaXNvciJ9LHsidHJhaXRfdHlwZSI6ICJkZXNjcmlwdGlvbiIsICJ2YWx1ZSI6ICJTaWdvbnMgQ29tcGxldGUgU3RlZWwifSx7InRyYWl0X3R5cGUiOiAiaW1hZ2UiLCAidmFsdWUiOiAiaHR0cHM6Ly9kaWFibG8yLndpa2kuZmV4dHJhbGlmZS5jb20vZmlsZS9EaWFibG8tMi9ncmVhdF9oZWxtX2FybW9yX2RpYWJsbzJfd2lraV9ndWlkZV8xOTZweC5wbmcifSx7InRyYWl0X3R5cGUiOiAiZXh0ZXJuYWxfdXJsIiwgInZhbHVlIjogImh0dHBzOi8vZGlhYmxvMi53aWtpLmZleHRyYWxpZmUuY29tL2ZpbGUvRGlhYmxvLTIvZ3JlYXRfaGVsbV9hcm1vcl9kaWFibG8yX3dpa2lfZ3VpZGVfMTk2cHgucG5nIn0seyJ0cmFpdF90eXBlIjogImFuaW1hdGlvbl91cmwiLCAidmFsdWUiOiAiaHR0cHM6Ly9kaWFibG8yLndpa2kuZmV4dHJhbGlmZS5jb20vZmlsZS9EaWFibG8tMi9ncmVhdF9oZWxtX2FybW9yX2RpYWJsbzJfd2lraV9ndWlkZV8xOTZweC5wbmcifV19";
    //     console.log("erc1155 token URI: ", erc1155TokenURI);
    //     assertEq(erc1155TokenURI, expected);
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
