import Web3 from "web3";

const contractAddress = "0x18B2A687610328590Bc8F2e5fEdDe3b582A49cdA";

const abi = [
  {
    inputs: [],
    name: "currentEpoch",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];

let web3;
if (window.ethereum) {
  web3 = new Web3(window.ethereum);
} else {
  console.error("Ethereum provider not found");
}

export const contract = web3 && new web3.eth.Contract(abi, contractAddress);
