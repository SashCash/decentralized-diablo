// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";

abstract contract BaseHelper is
    AccessControlUpgradeable,
    PausableUpgradeable,
    ReentrancyGuardUpgradeable
{
    /** ROLES **/
    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    /** ERRORS **/

    error InvalidValues();

    /** MODIFIERS **/

    /** FUNCTIONS **/

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function _baseInitialize(address initialOwner) internal onlyInitializing {
        __Pausable_init();
        __AccessControl_init();
        __ReentrancyGuard_init();

        // Grant default admin role to initialOwner
        _grantRole(DEFAULT_ADMIN_ROLE, initialOwner);
        // Grant pauser role to initialOwner
        _grantRole(PAUSER_ROLE, initialOwner);
    }

    // The gap is needed to avoid overwriting storage variables in future upgrades
    uint256[50] private __gap;
}
