/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  ItemNFT,
  ItemNFTInterface,
} from "../../../contracts/erc1155/ItemNFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC1155InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC1155InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "idsLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "valuesLength",
        type: "uint256",
      },
    ],
    name: "ERC1155InvalidArrayLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC1155InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC1155InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC1155InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC1155MissingApprovalForAll",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidMint",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidValues",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "unlimitedSupply",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "registered",
        type: "bool",
      },
    ],
    name: "ItemDataSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BURNER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OWNER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "burnBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "itemIdToItemData",
    outputs: [
      {
        internalType: "uint256",
        name: "maxAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentSupply",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "unlimitedSupply",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "registered",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "itemNFTTokenURIContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mintBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "mintBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "unlimitedSupply",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "registered",
        type: "bool",
      },
    ],
    name: "setItemData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxAmount",
        type: "uint256",
      },
    ],
    name: "setItemMaxAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "itemNFTTokenURIAddress",
        type: "address",
      },
    ],
    name: "setItemNFTTokenURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "registered",
        type: "bool",
      },
    ],
    name: "setItemRegistered",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "unlimitedSupply",
        type: "bool",
      },
    ],
    name: "setItemUnlimitedSupply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040805160208101909152600081526200002c81620000c8565b506200003a600033620000da565b50620000677fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e33620000da565b50620000947f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000da565b50620000c17f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a84833620000da565b50620002fe565b6002620000d6828262000232565b5050565b60008281526003602090815260408083206001600160a01b038516845290915281205460ff16620001835760008381526003602090815260408083206001600160a01b03861684529091529020805460ff191660011790556200013a3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600162000187565b5060005b92915050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620001b857607f821691505b602082108103620001d957634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200022d57600081815260208120601f850160051c81016020861015620002085750805b601f850160051c820191505b81811015620002295782815560010162000214565b5050505b505050565b81516001600160401b038111156200024e576200024e6200018d565b62000266816200025f8454620001a3565b84620001df565b602080601f8311600181146200029e5760008415620002855750858301515b600019600386901b1c1916600185901b17855562000229565b600085815260208120601f198616915b82811015620002cf57888601518255948401946001909101908401620002ae565b5085821015620002ee5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611f58806200030e6000396000f3fe608060405234801561001057600080fd5b50600436106101e45760003560e01c8063731133e91161010f578063d5391393116100a2578063e58378bb11610071578063e58378bb146104ae578063e985e9c5146104d5578063f242432a146104e8578063f5298aca146104fb57600080fd5b8063d539139314610460578063d547741f14610475578063d646c20714610488578063d81d0a151461049b57600080fd5b8063a217fddf116100de578063a217fddf14610407578063a22cb4651461040f578063b2aefe6214610422578063bdd421bd1461044d57600080fd5b8063731133e9146103b957806375b238fc146103cc5780637da23b26146103e157806391d14854146103f457600080fd5b8063282c51f31161018757806336e7a4921161015657806336e7a492146103605780634e1273f4146103735780634ef984db146103935780636b20c454146103a657600080fd5b8063282c51f3146103005780632eb2c2d6146103275780632f2ff15d1461033a57806336568abe1461034d57600080fd5b8063156e29f6116101c3578063156e29f6146102525780631f7fdffa146102675780631ff255171461027a578063248a9ca3146102dd57600080fd5b8062fdd58e146101e957806301ffc9a71461020f5780630e89341c14610232575b600080fd5b6101fc6101f7366004611604565b61050e565b6040519081526020015b60405180910390f35b61022261021d366004611644565b610536565b6040519015158152602001610206565b610245610240366004611668565b610541565b60405161020691906116d1565b6102656102603660046116e4565b6105b3565b005b610265610275366004611866565b610659565b6102b5610288366004611668565b60046020526000908152604090208054600182015460029092015490919060ff8082169161010090041684565b6040805194855260208501939093529015159183019190915215156060820152608001610206565b6101fc6102eb366004611668565b60009081526003602052604090206001015490565b6101fc7f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a84881565b6102656103353660046118ff565b610684565b6102656103483660046119a9565b6106f0565b61026561035b3660046119a9565b610715565b61026561036e3660046119e5565b61074d565b610386610381366004611a08565b610790565b6040516102069190611b03565b6102656103a1366004611b16565b610865565b6102656103b4366004611b31565b6108b2565b6102656103c7366004611ba5565b6108e7565b6101fc600080516020611f0383398151915281565b6102656103ef3660046119e5565b610977565b6102226104023660046119a9565b6109b3565b6101fc600081565b61026561041d366004611bfa565b6109de565b600554610435906001600160a01b031681565b6040516001600160a01b039091168152602001610206565b61026561045b366004611c24565b6109ed565b6101fc600080516020611ee383398151915281565b6102656104833660046119a9565b610a98565b610265610496366004611c6a565b610abd565b6102656104a9366004611b31565b610ae8565b6101fc7fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e81565b6102226104e3366004611c8c565b610b1b565b6102656104f6366004611cb6565b610b49565b6102656105093660046116e4565b610ba8565b6000818152602081815260408083206001600160a01b03861684529091529020545b92915050565b600061053082610c3f565b6005546040516303a24d0760e21b8152600481018390526060916001600160a01b031690630e89341c90602401600060405180830381865afa15801561058b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105309190810190611d1b565b600080516020611ee38339815191526105cb81610c64565b8215806105df57506001600160a01b038416155b806105e8575081155b156106065760405163516e361d60e11b815260040160405180910390fd5b6106108383610c71565b60008381526004602052604081206001018054849290610631908490611da8565b9250508190555061065384848460405180602001604052806000815250610d1a565b50505050565b600080516020611ee383398151915261067181610c64565b61067d85858585610d77565b5050505050565b336001600160a01b03861681148015906106a557506106a38682610b1b565b155b156106db5760405163711bec9160e11b81526001600160a01b038083166004830152871660248201526044015b60405180910390fd5b6106e88686868686610daf565b505050505050565b60008281526003602052604090206001015461070b81610c64565b6106538383610e0f565b6001600160a01b038116331461073e5760405163334bd91960e11b815260040160405180910390fd5b6107488282610ea3565b505050565b600080516020611f0383398151915261076581610c64565b5060009182526004602052604090912060020180549115156101000261ff0019909216919091179055565b606081518351146107c15781518351604051635b05999160e01b8152600481019290925260248201526044016106d2565b6000835167ffffffffffffffff8111156107dd576107dd611717565b604051908082528060200260200182016040528015610806578160200160208202803683370190505b50905060005b845181101561085d576020808202860101516108309060208084028701015161050e565b82828151811061084257610842611dbb565b602090810291909101015261085681611dd1565b905061080c565b509392505050565b7fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e61088f81610c64565b50600580546001600160a01b0319166001600160a01b0392909216919091179055565b7f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a8486108dc81610c64565b610653848484610f10565b600080516020611ee38339815191526108ff81610c64565b83158061091357506001600160a01b038516155b8061091c575082155b1561093a5760405163516e361d60e11b815260040160405180910390fd5b6109448484610c71565b60008481526004602052604081206001018054859290610965908490611da8565b9091555061067d905085858585610d1a565b600080516020611f0383398151915261098f81610c64565b50600091825260046020526040909120600201805460ff1916911515919091179055565b60009182526003602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6109e9338383610f56565b5050565b7fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e610a1781610c64565b60008581526004602090815260409182902086815560028101805461ffff191687151561ff00198116919091176101008815159081029190911790925584518981529384015282840152915187917facadfbed660f55df8ef3905f3b39efb5f361782d236eabb31bdb03f669eff01f919081900360600190a2505050505050565b600082815260036020526040902060010154610ab381610c64565b6106538383610ea3565b600080516020611f03833981519152610ad581610c64565b5060009182526004602052604090912055565b600080516020611ee3833981519152610b0081610c64565b61065384848460405180602001604052806000815250610d77565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b336001600160a01b0386168114801590610b6a5750610b688682610b1b565b155b15610b9b5760405163711bec9160e11b81526001600160a01b038083166004830152871660248201526044016106d2565b6106e88686868686610fec565b7f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a848610bd281610c64565b6001600160a01b0384161580610be6575081155b80610bef575082155b15610c0d5760405163516e361d60e11b815260040160405180910390fd5b60008381526004602052604081206001018054849290610c2e908490611dea565b90915550610653905084848461107a565b60006001600160e01b03198216637965db0b60e01b14806105305750610530826110e2565b610c6e8133611132565b50565b60008281526004602090815260408083208151608081018352815481526001820154938101939093526002015460ff808216151592840192909252610100900416151560608201819052909103610cdb5760405163201dc6f560e01b815260040160405180910390fd5b6040810151158015610cfc575080516020820151610cfa908490611da8565b115b156107485760405163201dc6f560e01b815260040160405180910390fd5b6001600160a01b038416610d4457604051632bfa23e760e11b8152600060048201526024016106d2565b604080516001808252602082018690528183019081526060820185905260808201909252906106e860008784848761116b565b6001600160a01b038416610da157604051632bfa23e760e11b8152600060048201526024016106d2565b61065360008585858561116b565b6001600160a01b038416610dd957604051632bfa23e760e11b8152600060048201526024016106d2565b6001600160a01b038516610e0257604051626a0d4560e21b8152600060048201526024016106d2565b61067d858585858561116b565b6000610e1b83836109b3565b610e9b5760008381526003602090815260408083206001600160a01b03861684529091529020805460ff19166001179055610e533390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610530565b506000610530565b6000610eaf83836109b3565b15610e9b5760008381526003602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610530565b6001600160a01b038316610f3957604051626a0d4560e21b8152600060048201526024016106d2565b61074883600084846040518060200160405280600081525061116b565b6001600160a01b038216610f7f5760405162ced3e160e81b8152600060048201526024016106d2565b6001600160a01b03838116600081815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b03841661101657604051632bfa23e760e11b8152600060048201526024016106d2565b6001600160a01b03851661103f57604051626a0d4560e21b8152600060048201526024016106d2565b60408051600180825260208201869052818301908152606082018590526080820190925290611071878784848761116b565b50505050505050565b6001600160a01b0383166110a357604051626a0d4560e21b8152600060048201526024016106d2565b604080516001808252602082018590528183019081526060820184905260a0820190925260006080820181815291929161067d9187918590859061116b565b60006001600160e01b03198216636cdb3d1360e11b148061111357506001600160e01b031982166303a24d0760e21b145b8061053057506301ffc9a760e01b6001600160e01b0319831614610530565b61113c82826109b3565b6109e95760405163e2517d3f60e01b81526001600160a01b0382166004820152602481018390526044016106d2565b611177858585856111be565b6001600160a01b0384161561067d57825133906001036111b057602084810151908401516111a98389898585896113db565b50506106e8565b6106e88187878787876114ff565b80518251146111ed5781518151604051635b05999160e01b8152600481019290925260248201526044016106d2565b3360005b83518110156112fc576020818102858101820151908501909101516001600160a01b038816156112a4576000828152602081815260408083206001600160a01b038c1684529091529020548181101561127d576040516303dee4c560e01b81526001600160a01b038a1660048201526024810182905260448101839052606481018490526084016106d2565b6000838152602081815260408083206001600160a01b038d16845290915290209082900390555b6001600160a01b038716156112e9576000828152602081815260408083206001600160a01b038b168452909152812080548392906112e3908490611da8565b90915550505b5050806112f590611dd1565b90506111f1565b50825160010361137d5760208301516000906020840151909150856001600160a01b0316876001600160a01b0316846001600160a01b03167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62858560405161136e929190918252602082015260400190565b60405180910390a4505061067d565b836001600160a01b0316856001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb86866040516113cc929190611dfd565b60405180910390a45050505050565b6001600160a01b0384163b156106e85760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e619061141f9089908990889088908890600401611e22565b6020604051808303816000875af192505050801561145a575060408051601f3d908101601f1916820190925261145791810190611e67565b60015b6114c3573d808015611488576040519150601f19603f3d011682016040523d82523d6000602084013e61148d565b606091505b5080516000036114bb57604051632bfa23e760e11b81526001600160a01b03861660048201526024016106d2565b805181602001fd5b6001600160e01b0319811663f23a6e6160e01b1461107157604051632bfa23e760e11b81526001600160a01b03861660048201526024016106d2565b6001600160a01b0384163b156106e85760405163bc197c8160e01b81526001600160a01b0385169063bc197c81906115439089908990889088908890600401611e84565b6020604051808303816000875af192505050801561157e575060408051601f3d908101601f1916820190925261157b91810190611e67565b60015b6115ac573d808015611488576040519150601f19603f3d011682016040523d82523d6000602084013e61148d565b6001600160e01b0319811663bc197c8160e01b1461107157604051632bfa23e760e11b81526001600160a01b03861660048201526024016106d2565b80356001600160a01b03811681146115ff57600080fd5b919050565b6000806040838503121561161757600080fd5b611620836115e8565b946020939093013593505050565b6001600160e01b031981168114610c6e57600080fd5b60006020828403121561165657600080fd5b81356116618161162e565b9392505050565b60006020828403121561167a57600080fd5b5035919050565b60005b8381101561169c578181015183820152602001611684565b50506000910152565b600081518084526116bd816020860160208601611681565b601f01601f19169290920160200192915050565b60208152600061166160208301846116a5565b6000806000606084860312156116f957600080fd5b611702846115e8565b95602085013595506040909401359392505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561175657611756611717565b604052919050565b600067ffffffffffffffff82111561177857611778611717565b5060051b60200190565b600082601f83011261179357600080fd5b813560206117a86117a38361175e565b61172d565b82815260059290921b840181019181810190868411156117c757600080fd5b8286015b848110156117e257803583529183019183016117cb565b509695505050505050565b600067ffffffffffffffff82111561180757611807611717565b50601f01601f191660200190565b600082601f83011261182657600080fd5b81356118346117a3826117ed565b81815284602083860101111561184957600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000806080858703121561187c57600080fd5b611885856115e8565b9350602085013567ffffffffffffffff808211156118a257600080fd5b6118ae88838901611782565b945060408701359150808211156118c457600080fd5b6118d088838901611782565b935060608701359150808211156118e657600080fd5b506118f387828801611815565b91505092959194509250565b600080600080600060a0868803121561191757600080fd5b611920866115e8565b945061192e602087016115e8565b9350604086013567ffffffffffffffff8082111561194b57600080fd5b61195789838a01611782565b9450606088013591508082111561196d57600080fd5b61197989838a01611782565b9350608088013591508082111561198f57600080fd5b5061199c88828901611815565b9150509295509295909350565b600080604083850312156119bc57600080fd5b823591506119cc602084016115e8565b90509250929050565b803580151581146115ff57600080fd5b600080604083850312156119f857600080fd5b823591506119cc602084016119d5565b60008060408385031215611a1b57600080fd5b823567ffffffffffffffff80821115611a3357600080fd5b818501915085601f830112611a4757600080fd5b81356020611a576117a38361175e565b82815260059290921b84018101918181019089841115611a7657600080fd5b948201945b83861015611a9b57611a8c866115e8565b82529482019490820190611a7b565b96505086013592505080821115611ab157600080fd5b50611abe85828601611782565b9150509250929050565b600081518084526020808501945080840160005b83811015611af857815187529582019590820190600101611adc565b509495945050505050565b6020815260006116616020830184611ac8565b600060208284031215611b2857600080fd5b611661826115e8565b600080600060608486031215611b4657600080fd5b611b4f846115e8565b9250602084013567ffffffffffffffff80821115611b6c57600080fd5b611b7887838801611782565b93506040860135915080821115611b8e57600080fd5b50611b9b86828701611782565b9150509250925092565b60008060008060808587031215611bbb57600080fd5b611bc4856115e8565b93506020850135925060408501359150606085013567ffffffffffffffff811115611bee57600080fd5b6118f387828801611815565b60008060408385031215611c0d57600080fd5b611c16836115e8565b91506119cc602084016119d5565b60008060008060808587031215611c3a57600080fd5b8435935060208501359250611c51604086016119d5565b9150611c5f606086016119d5565b905092959194509250565b60008060408385031215611c7d57600080fd5b50508035926020909101359150565b60008060408385031215611c9f57600080fd5b611ca8836115e8565b91506119cc602084016115e8565b600080600080600060a08688031215611cce57600080fd5b611cd7866115e8565b9450611ce5602087016115e8565b93506040860135925060608601359150608086013567ffffffffffffffff811115611d0f57600080fd5b61199c88828901611815565b600060208284031215611d2d57600080fd5b815167ffffffffffffffff811115611d4457600080fd5b8201601f81018413611d5557600080fd5b8051611d636117a3826117ed565b818152856020838501011115611d7857600080fd5b611d89826020830160208601611681565b95945050505050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561053057610530611d92565b634e487b7160e01b600052603260045260246000fd5b600060018201611de357611de3611d92565b5060010190565b8181038181111561053057610530611d92565b604081526000611e106040830185611ac8565b8281036020840152611d898185611ac8565b6001600160a01b03868116825285166020820152604081018490526060810183905260a060808201819052600090611e5c908301846116a5565b979650505050505050565b600060208284031215611e7957600080fd5b81516116618161162e565b6001600160a01b0386811682528516602082015260a060408201819052600090611eb090830186611ac8565b8281036060840152611ec28186611ac8565b90508281036080840152611ed681856116a5565b9897505050505050505056fe9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775a2646970667358221220138ff4c75c17355a67656e1fc116c911694ab5c8e68aea879641770a1ae4bca064736f6c63430008140033";

type ItemNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ItemNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ItemNFT__factory extends ContractFactory {
  constructor(...args: ItemNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      ItemNFT & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ItemNFT__factory {
    return super.connect(runner) as ItemNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ItemNFTInterface {
    return new Interface(_abi) as ItemNFTInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ItemNFT {
    return new Contract(address, _abi, runner) as unknown as ItemNFT;
  }
}
