// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";

import {Gold} from "../contracts/erc20/Gold.sol";
import {CharacterNFT} from "../contracts/erc721/CharacterNFT.sol";
import {CharacterNFTManager} from "../contracts/erc721/CharacterNFTManager.sol";
import {CharacterNFTTokenURI} from "../contracts/erc721/CharacterNFTTokenURI.sol";
import {ItemNFT} from "../contracts/erc1155/ItemNFT.sol";
import {ItemNFTTokenURI} from "../contracts/erc1155/ItemNFTTokenURI.sol";
import {Level} from "../contracts/leveling/Level.sol";
import {SkillTree} from "../contracts/skills/SkillTree.sol";
import {Akara} from "../contracts/merchant/Akara.sol";

contract GameTest is Test {
    // Contracts
    Gold public gold;
    CharacterNFT public characterNFT;
    CharacterNFTManager public characterNFTManager;
    CharacterNFTTokenURI public characterNFTTokenURI;
    ItemNFT public itemNFT;
    ItemNFTTokenURI public itemNFTTokenURI;
    Level public levelContract;
    SkillTree public skillContract;
    Akara public akara;

    // Accounts
    address public owner;

    address public admin;

    address payable public bank;

    address public playerOne;

    // Constants
    uint256 constant SIGONS_VISOR = 1;
    uint256 constant SIGONS_GUARD = 2;
    uint256 constant SIGONS_WRAP = 3;
    uint256 constant SIGONS_SABOT = 4;
    uint256 constant SIGONS_GAGE = 5;
    uint256 constant SIGONS_SHELTER = 6;

    // reserved for future use

    uint256 constant HEALTH_POT_ID = 100;
    uint256 constant MANA_POT_ID = 101;
    uint256 constant STAMINA_POT_ID = 102;
    uint256 constant REJUVINATION_POT_ID = 103;

    // Roles
    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant UTILITY_ROLE = keccak256("UTILITY_ROLE");

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

    function setUp() public {
        owner = msg.sender;
        admin = address(0x123);
        bank = payable(address(0x456));
        playerOne = address(0x789);
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
        // Utility contracts
        levelContract = new Level();
        skillContract = new SkillTree();
        akara = new Akara();
        // Initialize upgradeables
        characterNFTManager.initialize(owner);
        characterNFTTokenURI.initialize(owner);
        itemNFTTokenURI.initialize(owner);
        levelContract.initialize(owner);
        skillContract.initialize(owner);
        akara.initialize(owner);

        // Contract setup and connections

        // CharacterNFT setup
        characterNFT.setCharacterNFTManager(address(characterNFTManager));
        characterNFT.setTokenUriContract(address(characterNFTTokenURI));
        // CharacterNFTManager setup
        characterNFTManager.setCharacterNFT(address(characterNFT));
        characterNFTTokenURI.setCharacterNFT(address(characterNFT));
        // ItemNFT setup
        itemNFT.setItemNFTTokenURI(address(itemNFTTokenURI));
        // Level setup
        levelContract.setCharacterNFT(address(characterNFT));
        // SkillTree setup
        skillContract.setCharacterNFTManager(address(characterNFTManager));
        skillContract.setLevelContract(address(levelContract));
        // Akara setup
        akara.setGoldTokenAddress(address(gold));
        akara.setItemNFTAddress(address(itemNFT));
        akara.setBank(bank);

        // Set up roles
        characterNFT.grantRole(MINTER_ROLE, address(characterNFTManager));
        itemNFT.grantRole(MINTER_ROLE, address(akara));

        // Setup items
        itemNFT.setItemData(SIGONS_VISOR, 10, false, true);
        itemNFT.setItemData(SIGONS_GUARD, 10, false, true);
        itemNFT.setItemData(SIGONS_WRAP, 10, false, true);
        itemNFT.setItemData(SIGONS_SABOT, 10, false, true);
        itemNFT.setItemData(SIGONS_GAGE, 10, false, true);
        itemNFT.setItemData(SIGONS_SHELTER, 10, false, true);
        itemNFT.setItemData(HEALTH_POT_ID, 100000, true, true);
        itemNFT.setItemData(MANA_POT_ID, 100000, true, true);
        itemNFT.setItemData(STAMINA_POT_ID, 100000, true, true);
        itemNFT.setItemData(REJUVINATION_POT_ID, 100000, true, true);

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
            SIGONS_VISOR,
            ItemNFTTokenURI.ItemAttributes(
                "Sigons Visor",
                "Sigons Complete Steel",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/great_helm_armor_diablo2_wiki_guide_196px.png",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/great_helm_armor_diablo2_wiki_guide_196px.png",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/great_helm_armor_diablo2_wiki_guide_196px.png"
            )
        );
        itemNFTTokenURI.setItemAttributes(
            SIGONS_GUARD,
            ItemNFTTokenURI.ItemAttributes(
                "Sigons Guard",
                "Sigons Complete Steel",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/bverrit_keep_1_diablo2_wiki_guide_196x294px.png",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/bverrit_keep_1_diablo2_wiki_guide_196x294px.png",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/bverrit_keep_1_diablo2_wiki_guide_196x294px.png"
            )
        );
        itemNFTTokenURI.setItemAttributes(
            SIGONS_WRAP,
            ItemNFTTokenURI.ItemAttributes(
                "Sigons Wrap",
                "Sigons Complete Steel",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/plated_belt_armor_diablo2_wiki_guide_196px.png",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/plated_belt_armor_diablo2_wiki_guide_196px.png",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/plated_belt_armor_diablo2_wiki_guide_196px.png"
            )
        );
        itemNFTTokenURI.setItemAttributes(
            SIGONS_SABOT,
            ItemNFTTokenURI.ItemAttributes(
                "Sigons Sabot",
                "Sigons Complete Steel",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/plate_boots_diablo2_wiki_guide_196px.png",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/plate_boots_diablo2_wiki_guide_196px.png",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/plate_boots_diablo2_wiki_guide_196px.png"
            )
        );
        itemNFTTokenURI.setItemAttributes(
            SIGONS_GAGE,
            ItemNFTTokenURI.ItemAttributes(
                "Sigons Gage",
                "Sigons Complete Steel",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/gauntlets_diablo2_wiki_guide_196px.png",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/gauntlets_diablo2_wiki_guide_196px.png",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/gauntlets_diablo2_wiki_guide_196px.png"
            )
        );
        itemNFTTokenURI.setItemAttributes(
            SIGONS_SHELTER,
            ItemNFTTokenURI.ItemAttributes(
                "Sigons Shelter",
                "Sigons Complete Steel",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/gothic_plate_armor_diablo2_wiki_guide_196px.png",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/gothic_plate_armor_diablo2_wiki_guide_196px.png",
                "https://diablo2.wiki.fextralife.com/file/Diablo-2/gothic_plate_armor_diablo2_wiki_guide_196px.png"
            )
        );

        // Setup Akara items
        // Health Pot cost 10 gold
        akara.setItemPrice(HEALTH_POT_ID, 10);
        // Mana Pot cost 10 gold
        akara.setItemPrice(MANA_POT_ID, 10);
        // Stamina Pot cost 20 gold
        akara.setItemPrice(STAMINA_POT_ID, 20);
        // Rejuvination Pot cost 30 gold
        akara.setItemPrice(REJUVINATION_POT_ID, 30);
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
        string memory erc721CharacterClassImages = characterNFT.getClassImage(
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
     * @dev Test that base Xp and Level are zero and one respectively
     */
    function testLevelAndXpBase() public {
        _mintNft(
            owner,
            1,
            uint256(CharacterNFTManager.CharacterClass.BARBARIAN)
        );
        uint256 tokenLevel = levelContract.getTokenLevel(1);
        assertEq(tokenLevel, 1);
        uint256 tokenXp = levelContract.getTokenXp(1);
        assertEq(tokenXp, 0);
    }

    function testLevelAndXpBaseGrantedStillLevelOne() public {
        _mintNft(
            owner,
            1,
            uint256(CharacterNFTManager.CharacterClass.BARBARIAN)
        );
        // Test base level and xp
        uint256 tokenLevel = levelContract.getTokenLevel(1);
        assertEq(tokenLevel, 1);
        uint256 tokenXp = levelContract.getTokenXp(1);
        assertEq(tokenXp, 0);
        // Grant 50 xp, this should result in still level 1 but with 50 xp
        levelContract.gainExperience(1, 50);
        tokenLevel = levelContract.getTokenLevel(1);
        assertEq(tokenLevel, 1);
        tokenXp = levelContract.getTokenXp(1);
        assertEq(tokenXp, 50);
    }

    function testLevelAndXpBaseGrantedPastLevelOne() public {
        _mintNft(
            owner,
            1,
            uint256(CharacterNFTManager.CharacterClass.BARBARIAN)
        );
        // Test base level and xp
        uint256 tokenLevel = levelContract.getTokenLevel(1);
        assertEq(tokenLevel, 1);
        uint256 tokenXp = levelContract.getTokenXp(1);
        assertEq(tokenXp, 0);
        // Grant 50 xp, this should result in still level 1 but with 50 xp
        levelContract.gainExperience(1, 50);
        tokenLevel = levelContract.getTokenLevel(1);
        assertEq(tokenLevel, 1);
        tokenXp = levelContract.getTokenXp(1);
        assertEq(tokenXp, 50);
        // Grant 50 more xp, this should result in level 2 with 100 xp
        levelContract.gainExperience(1, 50);
        tokenLevel = levelContract.getTokenLevel(1);
        assertEq(tokenLevel, 2);
        tokenXp = levelContract.getTokenXp(1);
        assertEq(tokenXp, 100);
    }

    function testLevelAndXpToLevelThree() public {
        _mintNft(
            owner,
            1,
            uint256(CharacterNFTManager.CharacterClass.BARBARIAN)
        );
        // Test base level and xp
        uint256 tokenLevel = levelContract.getTokenLevel(1);
        assertEq(tokenLevel, 1);
        uint256 tokenXp = levelContract.getTokenXp(1);
        assertEq(tokenXp, 0);
        // Grant 100 xp, this should result in level 2 with 100 xp
        levelContract.gainExperience(1, 100);
        tokenLevel = levelContract.getTokenLevel(1);
        assertEq(tokenLevel, 2);
        tokenXp = levelContract.getTokenXp(1);
        assertEq(tokenXp, 100);
        // Grant 100 more xp, this should result in level 3 with 200 xp
        levelContract.gainExperience(1, 100);
        tokenLevel = levelContract.getTokenLevel(1);
        assertEq(tokenLevel, 3);
        tokenXp = levelContract.getTokenXp(1);
        assertEq(tokenXp, 200);
    }

    function testLevelAndXpToMaxLevelTen() public {
        _mintNft(
            owner,
            1,
            uint256(CharacterNFTManager.CharacterClass.BARBARIAN)
        );
        // Test base level and xp
        uint256 tokenLevel = levelContract.getTokenLevel(1);
        assertEq(tokenLevel, 1);
        uint256 tokenXp = levelContract.getTokenXp(1);
        assertEq(tokenXp, 0);
        // Grant 1000 xp, this should result in level 10 with 1000 xp
        levelContract.gainExperience(1, 1000);
        tokenLevel = levelContract.getTokenLevel(1);
        assertEq(tokenLevel, 10);
        tokenXp = levelContract.getTokenXp(1);
        assertEq(tokenXp, 1000);
    }

    /**
     * @dev Test user cannot go past level 10
     */
    function testFailLevelAndXpPastLevelTen() public {
        _mintNft(
            owner,
            1,
            uint256(CharacterNFTManager.CharacterClass.BARBARIAN)
        );
        // Test base level and xp
        uint256 tokenLevel = levelContract.getTokenLevel(1);
        assertEq(tokenLevel, 1);
        uint256 tokenXp = levelContract.getTokenXp(1);
        assertEq(tokenXp, 0);
        // Grant 1001 xp, this will result in surpassing level 10
        levelContract.gainExperience(1, 1001);
    }

    /**
     * @dev Test user at level 2 can use attacks for level 1 and level 2
     */
    function testCanUseSkill() public {
        _mintNft(
            owner,
            1,
            uint256(CharacterNFTManager.CharacterClass.BARBARIAN)
        );
        // Grant 100 xp, this should result in level 2 with 100 xp
        levelContract.gainExperience(1, 100);
        uint256 tokenLevel = levelContract.getTokenLevel(1);
        assertEq(tokenLevel, 2);
        uint256 tokenXp = levelContract.getTokenXp(1);
        assertEq(tokenXp, 100);
        uint256 bashAttackId = 1;
        skillContract.canUseSkill(1, bashAttackId);
        uint256 shoutAttackId = 2;
        skillContract.canUseSkill(1, shoutAttackId);
    }

    /**
     * @dev Test base case, user can use attack at level 1
     */
    function testCanUseSkillBase() public {
        _mintNft(
            owner,
            1,
            uint256(CharacterNFTManager.CharacterClass.BARBARIAN)
        );
        uint256 bashAttackId = 1;
        skillContract.canUseSkill(1, bashAttackId);
    }

    /**
     * @dev Test fail user cannot use attack higher than their level
     */
    function testFailCanUseSkillNotAllowed() public {
        _mintNft(
            owner,
            1,
            uint256(CharacterNFTManager.CharacterClass.BARBARIAN)
        );
        uint256 shoutAttackId = 2;
        skillContract.canUseSkill(1, shoutAttackId);
    }

    /**
     * @dev Test user can purchase health pot from Akara
     */
    function testPurchaseHealthPotFromAkara() public {
        // Mint 10 gold to playerOne
        gold.mint(playerOne, 10);
        vm.stopPrank();
        vm.startPrank(playerOne);
        gold.approve(address(akara), 10);
        akara.purchase(HEALTH_POT_ID, 1);
        uint256 balanceOfPlayer = gold.balanceOf(playerOne);
        assertEq(balanceOfPlayer, 0);
        uint256 balanceOfBank = gold.balanceOf(bank);
        assertEq(balanceOfBank, 10);
        uint256 healthPotBalanceOfPlayer = itemNFT.balanceOf(
            playerOne,
            HEALTH_POT_ID
        );
        assertEq(healthPotBalanceOfPlayer, 1);
    }

    /**
     * @dev Test user can purchase mana pot from Akara
     */
    function testPurchaseManaPotFromAkara() public {
        // Mint 10 gold to playerOne
        gold.mint(playerOne, 10);
        vm.stopPrank();
        vm.startPrank(playerOne);
        gold.approve(address(akara), 10);
        akara.purchase(MANA_POT_ID, 1);
        uint256 balanceOfPlayer = gold.balanceOf(playerOne);
        assertEq(balanceOfPlayer, 0);
        uint256 balanceOfBank = gold.balanceOf(bank);
        assertEq(balanceOfBank, 10);
        uint256 manaPotBalanceOfPlayer = itemNFT.balanceOf(
            playerOne,
            MANA_POT_ID
        );
        assertEq(manaPotBalanceOfPlayer, 1);
    }

    /**
     * @dev Test user can purchase multiple health pots from Akara
     */
    function testPurchaseMultipleHealthPotsFromAkara() public {
        // Mint 30 gold to playerOne
        gold.mint(playerOne, 30);
        vm.stopPrank();
        vm.startPrank(playerOne);
        gold.approve(address(akara), 30);
        akara.purchase(HEALTH_POT_ID, 3);
        uint256 balanceOfPlayer = gold.balanceOf(playerOne);
        assertEq(balanceOfPlayer, 0);
        uint256 balanceOfBank = gold.balanceOf(bank);
        assertEq(balanceOfBank, 30);
        uint256 healthPotBalanceOfPlayer = itemNFT.balanceOf(
            playerOne,
            HEALTH_POT_ID
        );
        assertEq(healthPotBalanceOfPlayer, 3);
    }

    /**
     * @dev Test user can purchase 1 of each pot from Akara
     */
    function testPurchaseAllPotsFromAkara() public {
        // Mint 70 gold to playerOne
        gold.mint(playerOne, 70);
        vm.stopPrank();
        vm.startPrank(playerOne);
        gold.approve(address(akara), 70);
        akara.purchase(HEALTH_POT_ID, 1);
        akara.purchase(MANA_POT_ID, 1);
        akara.purchase(STAMINA_POT_ID, 1);
        akara.purchase(REJUVINATION_POT_ID, 1);
        uint256 balanceOfPlayer = gold.balanceOf(playerOne);
        assertEq(balanceOfPlayer, 0);
        uint256 balanceOfBank = gold.balanceOf(bank);
        // Check that the bank has 70 gold
        assertEq(balanceOfBank, 70);
        // Check that the player has 1 health pot
        assertEq(itemNFT.balanceOf(playerOne, HEALTH_POT_ID), 1);
        // Check that the player has 1 mana pot
        assertEq(itemNFT.balanceOf(playerOne, MANA_POT_ID), 1);
        // Check that the player has 1 stamina pot
        assertEq(itemNFT.balanceOf(playerOne, STAMINA_POT_ID), 1);
        // Check that the player has 1 rejuvination pot
        assertEq(itemNFT.balanceOf(playerOne, REJUVINATION_POT_ID), 1);
    }

    /**
     * @dev Test user cant purchase from Akara if they dont have enough gold
     */
    function testFailPurchaseFromAkara() public {
        // Mint 1 gold to playerOne, and try to purchase a health pot
        gold.mint(playerOne, 1);
        vm.stopPrank();
        vm.startPrank(playerOne);
        gold.approve(address(akara), 1);
        akara.purchase(HEALTH_POT_ID, 1);
    }

    /**
     * @dev Test user cant purchase from Akara because they didnt approve the Akara contract to spend their gold
     */
    function testFailNotApprovePurchaseFromAkara() public {
        // Mint 10 gold to playerOne
        gold.mint(playerOne, 10);
        vm.stopPrank();
        vm.startPrank(playerOne);
        /**
            Skip the approve step to test failure
            gold.approve(address(akara), 1);
         */
        akara.purchase(HEALTH_POT_ID, 1);
    }
}
