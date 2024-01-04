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
import type { Gold, GoldInterface } from "../../../contracts/erc20/Gold";

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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
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
    ],
    name: "ERC20InsufficientBalance",
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
    name: "ERC20InvalidApprover",
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
    name: "ERC20InvalidReceiver",
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
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
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
        internalType: "address",
        name: "from",
        type: "address",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
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
        name: "to",
        type: "address",
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
    inputs: [],
    name: "name",
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
    name: "symbol",
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
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405180604001604052806006815260200165110c91dbdb1960d21b8152506040518060400160405280600481526020016311d3d31160e21b81525081600390816200005f919062000266565b5060046200006e828262000266565b5062000080915060009050336200010e565b50620000ad7fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e336200010e565b50620000da7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336200010e565b50620001077f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a848336200010e565b5062000332565b60008281526005602090815260408083206001600160a01b038516845290915281205460ff16620001b75760008381526005602090815260408083206001600160a01b03861684529091529020805460ff191660011790556200016e3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001620001bb565b5060005b92915050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620001ec57607f821691505b6020821081036200020d57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200026157600081815260208120601f850160051c810160208610156200023c5750805b601f850160051c820191505b818110156200025d5782815560010162000248565b5050505b505050565b81516001600160401b03811115620002825762000282620001c1565b6200029a81620002938454620001d7565b8462000213565b602080601f831160018114620002d25760008415620002b95750858301515b600019600386901b1c1916600185901b1785556200025d565b600085815260208120601f198616915b828110156200030357888601518255948401946001909101908401620002e2565b5085821015620003225787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610cad80620003426000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806340c10f19116100b8578063a217fddf1161007c578063a217fddf1461029c578063a9059cbb146102a4578063d5391393146102b7578063d547741f146102de578063dd62ed3e146102f1578063e58378bb1461032a57600080fd5b806340c10f191461023257806370a082311461024557806391d148541461026e57806395d89b41146102815780639dc29fac1461028957600080fd5b8063248a9ca3116100ff578063248a9ca3146101b1578063282c51f3146101d45780632f2ff15d146101fb578063313ce5671461021057806336568abe1461021f57600080fd5b806301ffc9a71461013c57806306fdde0314610164578063095ea7b31461017957806318160ddd1461018c57806323b872dd1461019e575b600080fd5b61014f61014a366004610a91565b610351565b60405190151581526020015b60405180910390f35b61016c610388565b60405161015b9190610ac2565b61014f610187366004610b2c565b61041a565b6002545b60405190815260200161015b565b61014f6101ac366004610b56565b610432565b6101906101bf366004610b92565b60009081526005602052604090206001015490565b6101907f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a84881565b61020e610209366004610bab565b610456565b005b6040516012815260200161015b565b61020e61022d366004610bab565b610481565b61020e610240366004610b2c565b6104b9565b610190610253366004610bd7565b6001600160a01b031660009081526020819052604090205490565b61014f61027c366004610bab565b61051f565b61016c61054a565b61020e610297366004610b2c565b610559565b610190600081565b61014f6102b2366004610b2c565b6105bf565b6101907f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61020e6102ec366004610bab565b6105cd565b6101906102ff366004610bf2565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101907fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e81565b60006001600160e01b03198216637965db0b60e01b148061038257506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606003805461039790610c1c565b80601f01602080910402602001604051908101604052809291908181526020018280546103c390610c1c565b80156104105780601f106103e557610100808354040283529160200191610410565b820191906000526020600020905b8154815290600101906020018083116103f357829003601f168201915b5050505050905090565b6000336104288185856105f2565b5060019392505050565b6000336104408582856105ff565b61044b85858561067c565b506001949350505050565b600082815260056020526040902060010154610471816106db565b61047b83836106e8565b50505050565b6001600160a01b03811633146104aa5760405163334bd91960e11b815260040160405180910390fd5b6104b4828261077c565b505050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66104e3816106db565b8115806104f757506001600160a01b038316155b156105155760405163516e361d60e11b815260040160405180910390fd5b6104b483836107e9565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60606004805461039790610c1c565b7f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a848610583816106db565b81158061059757506001600160a01b038316155b156105b55760405163516e361d60e11b815260040160405180910390fd5b6104b48383610823565b60003361042881858561067c565b6000828152600560205260409020600101546105e8816106db565b61047b838361077c565b6104b48383836001610859565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461047b578181101561066d57604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b61047b84848484036000610859565b6001600160a01b0383166106a657604051634b637e8f60e11b815260006004820152602401610664565b6001600160a01b0382166106d05760405163ec442f0560e01b815260006004820152602401610664565b6104b483838361092e565b6106e58133610a58565b50565b60006106f4838361051f565b6107745760008381526005602090815260408083206001600160a01b03861684529091529020805460ff1916600117905561072c3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610382565b506000610382565b6000610788838361051f565b156107745760008381526005602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610382565b6001600160a01b0382166108135760405163ec442f0560e01b815260006004820152602401610664565b61081f6000838361092e565b5050565b6001600160a01b03821661084d57604051634b637e8f60e11b815260006004820152602401610664565b61081f8260008361092e565b6001600160a01b0384166108835760405163e602df0560e01b815260006004820152602401610664565b6001600160a01b0383166108ad57604051634a1406b160e11b815260006004820152602401610664565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561047b57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161092091815260200190565b60405180910390a350505050565b6001600160a01b03831661095957806002600082825461094e9190610c56565b909155506109cb9050565b6001600160a01b038316600090815260208190526040902054818110156109ac5760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610664565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166109e757600280548290039055610a06565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610a4b91815260200190565b60405180910390a3505050565b610a62828261051f565b61081f5760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610664565b600060208284031215610aa357600080fd5b81356001600160e01b031981168114610abb57600080fd5b9392505050565b600060208083528351808285015260005b81811015610aef57858101830151858201604001528201610ad3565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610b2757600080fd5b919050565b60008060408385031215610b3f57600080fd5b610b4883610b10565b946020939093013593505050565b600080600060608486031215610b6b57600080fd5b610b7484610b10565b9250610b8260208501610b10565b9150604084013590509250925092565b600060208284031215610ba457600080fd5b5035919050565b60008060408385031215610bbe57600080fd5b82359150610bce60208401610b10565b90509250929050565b600060208284031215610be957600080fd5b610abb82610b10565b60008060408385031215610c0557600080fd5b610c0e83610b10565b9150610bce60208401610b10565b600181811c90821680610c3057607f821691505b602082108103610c5057634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561038257634e487b7160e01b600052601160045260246000fdfea2646970667358221220105e61a526e3ef684dd210be364d8c8d6cd107ef2a0bf5b36c70439df3d0a18564736f6c63430008140033";

type GoldConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GoldConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Gold__factory extends ContractFactory {
  constructor(...args: GoldConstructorParams) {
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
      Gold & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Gold__factory {
    return super.connect(runner) as Gold__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GoldInterface {
    return new Interface(_abi) as GoldInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Gold {
    return new Contract(address, _abi, runner) as unknown as Gold;
  }
}
