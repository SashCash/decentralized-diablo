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
  Monster,
  MonsterInterface,
} from "../../../contracts/monster/Monster";

const _abi = [
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
    inputs: [],
    name: "EnforcedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "ExpectedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidValues",
    type: "error",
  },
  {
    inputs: [],
    name: "MonsterNotAvailable",
    type: "error",
  },
  {
    inputs: [],
    name: "NotCharacterOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "monsterId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currentKillCount",
        type: "uint256",
      },
    ],
    name: "MonsterBattle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
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
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
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
    inputs: [],
    name: "PAUSER_ROLE",
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
    name: "UTILITY_ROLE",
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
        internalType: "uint256",
        name: "monsterId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "charTokenId",
        type: "uint256",
      },
    ],
    name: "battleMonster",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "characterNFT",
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
        internalType: "uint256",
        name: "monsterId",
        type: "uint256",
      },
    ],
    name: "getMonsterLoot",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct Loot[]",
        name: "",
        type: "tuple[]",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "monsterId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
    ],
    name: "getUserKillCount",
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
    inputs: [],
    name: "goldAddress",
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
        name: "initialOwner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "itemNFT",
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
    inputs: [],
    name: "levelContractAddress",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "monsterIdToData",
    outputs: [
      {
        internalType: "uint64",
        name: "id",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "minLevelRequired",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "xpRewarded",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "dailyLimit",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
        name: "_characterNFT",
        type: "address",
      },
    ],
    name: "setCharacterNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_goldAddress",
        type: "address",
      },
    ],
    name: "setGoldAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_itemNFT",
        type: "address",
      },
    ],
    name: "setItemNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_levelContractAddress",
        type: "address",
      },
    ],
    name: "setLevelContractAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "monsterId",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "minLevelRequired",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "xpRewarded",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "dailyLimit",
        type: "uint64",
      },
      {
        components: [
          {
            internalType: "address",
            name: "tokenContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct Loot[]",
        name: "lootRewarded",
        type: "tuple[]",
      },
    ],
    name: "setMonsterData",
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
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userToDateToMonsterToKillCount",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506118ff806100206000396000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c80638456cb5911610104578063d5391393116100a2578063e58378bb11610071578063e58378bb146104cc578063e5b2907a146104e1578063e63ab1e914610512578063fe55bf221461052757600080fd5b8063d53913931461043f578063d547741f14610466578063d974127514610479578063debcf1d21461048c57600080fd5b8063a217fddf116100de578063a217fddf14610396578063c4d66de81461039e578063c9282a74146103b1578063d38bb8211461042c57600080fd5b80638456cb59146103545780638f2967591461035c57806391d148541461038357600080fd5b806347e25eff1161017c5780635c975abb1161014b5780635c975abb146102e257806375b238fc146102fa5780637abe562c146103215780637ea0b2421461034157600080fd5b806347e25eff1461029657806356448ed4146102a957806357d1f910146102bc5780635c75cadb146102cf57600080fd5b80632f2ff15d116101b85780632f2ff15d1461023d57806336568abe14610250578063384d10ee146102635780633f4ba83a1461028e57600080fd5b806301ffc9a7146101df578063248a9ca314610207578063265294be14610228575b600080fd5b6101f26101ed3660046114ac565b61053a565b60405190151581526020015b60405180910390f35b61021a6102153660046114dd565b610571565b6040519081526020016101fe565b61023b610236366004611595565b610593565b005b61023b61024b3660046116ae565b6106d5565b61023b61025e3660046116ae565b6106f7565b603454610276906001600160a01b031681565b6040516001600160a01b0390911681526020016101fe565b61023b61072f565b61023b6102a43660046116de565b610752565b61023b6102b73660046116de565b61078d565b603554610276906001600160a01b031681565b61023b6102dd3660046116de565b6107c8565b6000805160206118aa8339815191525460ff166101f2565b61021a7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b61033461032f3660046114dd565b610803565b6040516101fe91906116fb565b603654610276906001600160a01b031681565b61023b61089b565b61021a7f35af5b5a3fb4c88a8cb5e26e8a68a53cc8f6cafcc4000a1db1ae5753e25a168e81565b6101f26103913660046116ae565b6108bb565b61021a600081565b61023b6103ac3660046116de565b6108f3565b6103f96103bf3660046114dd565b6032602052600090815260409020546001600160401b0380821691600160401b8104821691600160801b8204811691600160c01b90041684565b604080516001600160401b03958616815293851660208501529184169183019190915290911660608201526080016101fe565b61023b61043a36600461175d565b610a01565b61021a7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61023b6104743660046116ae565b610fac565b603754610276906001600160a01b031681565b61021a61049a36600461177f565b6001600160a01b0392909216600090815260336020908152604080832094835293815283822092825291909152205490565b61021a60008051602061184a83398151915281565b61021a6104ef36600461177f565b603360209081526000938452604080852082529284528284209052825290205481565b61021a60008051602061186a83398151915281565b61023b6105353660046116de565b610fc8565b60006001600160e01b03198216637965db0b60e01b148061056b57506301ffc9a760e01b6001600160e01b03198316145b92915050565b600090815260008051602061188a833981519152602052604090206001015490565b60008051602061184a8339815191526105ab81611003565b6000868152603260205260408120818155906105ca600183018261145f565b5050600086815260326020526040812080546001600160401b03808a166fffffffffffffffffffffffffffffffff1990921691909117600160401b89831602176fffffffffffffffffffffffffffffffff16600160801b888316026001600160c01b031617600160c01b91871691909102178155905b83518110156106cb578160010184828151811061065f5761065f6117b4565b602090810291909101810151825460018082018555600094855293839020825160039092020180546001600160a01b0319166001600160a01b039092169190911781559181015192820192909255604090910151600290910155806106c3816117ca565b915050610640565b5050505050505050565b6106de82610571565b6106e781611003565b6106f1838361100d565b50505050565b6001600160a01b03811633146107205760405163334bd91960e11b815260040160405180910390fd5b61072a82826110b2565b505050565b60008051602061186a83398151915261074781611003565b61074f61112e565b50565b60008051602061184a83398151915261076a81611003565b50603580546001600160a01b0319166001600160a01b0392909216919091179055565b60008051602061184a8339815191526107a581611003565b50603680546001600160a01b0319166001600160a01b0392909216919091179055565b60008051602061184a8339815191526107e081611003565b50603480546001600160a01b0319166001600160a01b0392909216919091179055565b606060326000838152602001908152602001600020600101805480602002602001604051908101604052809291908181526020016000905b82821015610890576000848152602090819020604080516060810182526003860290920180546001600160a01b031683526001808201548486015260029091015491830191909152908352909201910161083b565b505050509050919050565b60008051602061186a8339815191526108b381611003565b61074f61118e565b600091825260008051602061188a833981519152602090815260408084206001600160a01b0393909316845291905290205460ff1690565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff1615906001600160401b03166000811580156109385750825b90506000826001600160401b031660011480156109545750303b155b905081158015610962575080155b156109805760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff1916600117855583156109aa57845460ff60401b1916600160401b1785555b6109b3866111d7565b83156109f957845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b610a096112b5565b610a116112e8565b6034546040516331a9108f60e11b81526004810183905233916001600160a01b031690636352211e90602401602060405180830381865afa158015610a5a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a7e91906117f1565b6001600160a01b031614610aa55760405163396eeb4360e21b815260040160405180910390fd5b600082815260326020526040812054600160c01b90046001600160401b03169003610ae357604051639e18700f60e01b815260040160405180910390fd5b60008281526032602052604090819020546037549151633404591760e21b815260048101849052600160401b9091046001600160401b0316916001600160a01b03169063d011645c90602401602060405180830381865afa158015610b4c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b70919061180e565b1015610b8f57604051639e18700f60e01b815260040160405180910390fd5b6000610b9e6201518042611827565b60008481526032602090815260408083205433845260338352818420858552835281842088855290925290912054919250600160c01b90046001600160401b031611610bfd57604051639e18700f60e01b815260040160405180910390fd5b6037546000848152603260205260409081902054905163953b6a9160e01b815260048101859052600160801b9091046001600160401b031660248201526001600160a01b039091169063953b6a9190604401600060405180830381600087803b158015610c6957600080fd5b505af1158015610c7d573d6000803e3d6000fd5b5050505060005b600084815260326020526040902060010154811015610ef057603654600085815260326020526040902060010180546001600160a01b039092169183908110610ccf57610ccf6117b4565b60009182526020909120600390910201546001600160a01b031603610d9f57603654600085815260326020526040902060010180546001600160a01b03909216916340c10f1991339185908110610d2857610d286117b4565b60009182526020909120600260039092020101546040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b158015610d8257600080fd5b505af1158015610d96573d6000803e3d6000fd5b50505050610ede565b603554600085815260326020526040902060010180546001600160a01b039092169183908110610dd157610dd16117b4565b60009182526020909120600390910201546001600160a01b031603610ede57603554600085815260326020526040902060010180546001600160a01b039092169163156e29f691339185908110610e2a57610e2a6117b4565b906000526020600020906003020160010154603260008981526020019081526020016000206001018581548110610e6357610e636117b4565b60009182526020909120600260039092020101546040516001600160e01b031960e086901b1681526001600160a01b03909316600484015260248301919091526044820152606401600060405180830381600087803b158015610ec557600080fd5b505af1158015610ed9573d6000803e3d6000fd5b505050505b80610ee8816117ca565b915050610c84565b5033600090815260336020908152604080832084845282528083208684529091528120805491610f1f836117ca565b909155505033600090815260336020908152604080832084845282528083208684528252918290205482518681529182015283917fd6d3739230e110e8242b8b2f54e226be31cc2a1367e55a600dc17447e5ea6fa5910160405180910390a250610fa860017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b5050565b610fb582610571565b610fbe81611003565b6106f183836110b2565b60008051602061184a833981519152610fe081611003565b50603780546001600160a01b0319166001600160a01b0392909216919091179055565b61074f8133611358565b600060008051602061188a83398151915261102884846108bb565b6110a8576000848152602082815260408083206001600160a01b03871684529091529020805460ff1916600117905561105e3390565b6001600160a01b0316836001600160a01b0316857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4600191505061056b565b600091505061056b565b600060008051602061188a8339815191526110cd84846108bb565b156110a8576000848152602082815260408083206001600160a01b0387168085529252808320805460ff1916905551339287917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4600191505061056b565b611136611395565b6000805160206118aa833981519152805460ff191681557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a150565b6111966112b5565b6000805160206118aa833981519152805460ff191660011781557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25833611170565b6111df6113c5565b6111e761140e565b6111ef61141e565b6111f7611426565b61120260008261100d565b5061121b60008051602061186a8339815191528261100d565b5061123460008051602061184a8339815191528261100d565b5061125f7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68261100d565b5061128a7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217758261100d565b50610fa87f35af5b5a3fb4c88a8cb5e26e8a68a53cc8f6cafcc4000a1db1ae5753e25a168e8261100d565b6000805160206118aa8339815191525460ff16156112e65760405163d93c066560e01b815260040160405180910390fd5b565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0080546001190161132c57604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b61136282826108bb565b610fa85760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440160405180910390fd5b6000805160206118aa8339815191525460ff166112e657604051638dfc202b60e01b815260040160405180910390fd5b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0054600160401b900460ff166112e657604051631afcd79f60e31b815260040160405180910390fd5b6114166113c5565b6112e6611436565b6112e66113c5565b61142e6113c5565b6112e6611457565b61143e6113c5565b6000805160206118aa833981519152805460ff19169055565b6113326113c5565b508054600082556003029060005260206000209081019061074f91905b808211156114a85780546001600160a01b0319168155600060018201819055600282015560030161147c565b5090565b6000602082840312156114be57600080fd5b81356001600160e01b0319811681146114d657600080fd5b9392505050565b6000602082840312156114ef57600080fd5b5035919050565b80356001600160401b038116811461150d57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b038111828210171561154a5761154a611512565b60405290565b604051601f8201601f191681016001600160401b038111828210171561157857611578611512565b604052919050565b6001600160a01b038116811461074f57600080fd5b600080600080600060a086880312156115ad57600080fd5b8535945060206115be8188016114f6565b945060406115cd8189016114f6565b945060606115dc818a016114f6565b945060808901356001600160401b03808211156115f857600080fd5b818b0191508b601f83011261160c57600080fd5b81358181111561161e5761161e611512565b61162c868260051b01611550565b818152868101925090840283018601908d82111561164957600080fd5b928601925b8184101561169a5784848f0312156116665760008081fd5b61166e611528565b843561167981611580565b8152848801358882015286850135878201528352928401929186019161164e565b809750505050505050509295509295909350565b600080604083850312156116c157600080fd5b8235915060208301356116d381611580565b809150509250929050565b6000602082840312156116f057600080fd5b81356114d681611580565b602080825282518282018190526000919060409081850190868401855b8281101561175057815180516001600160a01b0316855286810151878601528501518585015260609093019290850190600101611718565b5091979650505050505050565b6000806040838503121561177057600080fd5b50508035926020909101359150565b60008060006060848603121561179457600080fd5b833561179f81611580565b95602085013595506040909401359392505050565b634e487b7160e01b600052603260045260246000fd5b6000600182016117ea57634e487b7160e01b600052601160045260246000fd5b5060010190565b60006020828403121561180357600080fd5b81516114d681611580565b60006020828403121561182057600080fd5b5051919050565b60008261184457634e487b7160e01b600052601260045260246000fd5b50049056feb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800cd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300a26469706673582212200df24b098f3d465bc69368d694a7f54869010b2a1576c911a44cde09b9f5ecf764736f6c63430008140033";

type MonsterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MonsterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Monster__factory extends ContractFactory {
  constructor(...args: MonsterConstructorParams) {
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
      Monster & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Monster__factory {
    return super.connect(runner) as Monster__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MonsterInterface {
    return new Interface(_abi) as MonsterInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Monster {
    return new Contract(address, _abi, runner) as unknown as Monster;
  }
}
