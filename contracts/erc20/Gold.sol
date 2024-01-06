// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract Gold is ERC20, AccessControl {
    /** VARIABLES **/

    /** ROLES **/

    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");

    /** ERRORS **/

    error InvalidValues();

    /** MODIFIERS **/

    /** FUNCTIONS **/

    constructor() ERC20("D2Gold", "GOLD") {
        // DEFAULT_ADMIN_ROLE is a special role that acts as the default admin role for all roles
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(OWNER_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
        _grantRole(BURNER_ROLE, msg.sender);
    }

    /**
     * @dev Mint Gold, only a minter can call this function
     */
    function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
        if (amount == 0 || to == address(0)) {
            revert InvalidValues();
        }
        _mint(to, amount);
    }

    /**
     * @dev Burn Gold, only a burner can call this function
     */
    function burn(address from, uint256 amount) public onlyRole(BURNER_ROLE) {
        if (amount == 0 || from == address(0)) {
            revert InvalidValues();
        }
        _burn(from, amount);
    }
}
