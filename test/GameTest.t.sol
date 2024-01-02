// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";

import {Gold} from "../contracts/erc20/Gold.sol";
import {CharacterNFT} from "../contracts/erc721/CharacterNFT.sol";
import {CharacterNFTManager} from "../contracts/erc721/CharacterNFTManager.sol";
import {CharacterNFTTokenURI} from "../contracts/erc721/CharacterNFTTokenURI.sol";
import {ItemNFT} from "../contracts/erc1155/ItemNFT.sol";
import {ItemNFTTokenURI} from "../contracts/erc1155/ItemNFTTokenURI.sol";

contract GameTest is Test {
    Gold public gold;

    CharacterNFT public characterNFT;
    CharacterNFTManager public characterNFTManager;
    CharacterNFTTokenURI public characterNFTTokenURI;

    ItemNFT public itemNFT;
    ItemNFTTokenURI public itemNFTTokenURI;

    address public owner;

    function setUp() public {
        owner = msg.sender;
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
    }

    // function test_Increment() public {
    //     counter.increment();
    //     assertEq(counter.number(), 1);
    // }

    // function testFuzz_SetNumber(uint256 x) public {
    //     counter.setNumber(x);
    //     assertEq(counter.number(), x);
    // }
}
