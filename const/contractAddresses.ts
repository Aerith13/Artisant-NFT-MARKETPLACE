/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// import the chain from the package, then set the NETWORK variable to the chain.
import { Sepolia } from "@thirdweb-dev/chains";
export const NETWORK = Sepolia;

// 2. The address of the marketplace V3 smart contract.
export const MARKETPLACE_ADDRESS = "0xAf38e830988a5b3E757F59BeC87B5a3c480c8521";

// 3. The address of our NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS = "0x0A1132a8345d057FeE7e62f079eeBf278293330E"

// Set up the URL of where users can view transactions on
// we use Sepolia etherscan to view transactions on the Sepolia EVM testnet.
export const ETHERSCAN_URL = "https://sepolia.etherscan.io";
