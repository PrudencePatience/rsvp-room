export const baseRsvpContractAddress = "0x1fad2cd32fa194c3776e32b607a491216d4abac4" as const;

export const baseRsvpAbi = [
  {
    type: "function",
    name: "join",
    stateMutability: "nonpayable",
    inputs: [],
    outputs: [],
  },
  {
    type: "function",
    name: "joined",
    stateMutability: "view",
    inputs: [{ name: "", type: "address" }],
    outputs: [{ name: "", type: "bool" }],
  },
  {
    type: "function",
    name: "total",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
  },
] as const;

