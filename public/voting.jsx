export const data = {
	"compiler": {
		"version": "0.8.22+commit.4fc1097e"
	},
	"language": "Solidity",
	"output": {
		"abi": [
			{
				"inputs": [
					{
						"internalType": "string",
						"name": "_name",
						"type": "string"
					}
				],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"inputs": [
					{
						"internalType": "string",
						"name": "_name",
						"type": "string"
					}
				],
				"name": "addCandidate",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_person",
						"type": "address"
					}
				],
				"name": "authorize",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"name": "candidates",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "voteCount",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "electionName",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "end",
				"outputs": [
					{
						"internalType": "string[]",
						"name": "",
						"type": "string[]"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "getAllCandidate",
				"outputs": [
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "id",
								"type": "uint256"
							},
							{
								"internalType": "string",
								"name": "name",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "voteCount",
								"type": "uint256"
							}
						],
						"internalType": "struct VotingSystem.Candidate[]",
						"name": "",
						"type": "tuple[]"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_id",
						"type": "uint256"
					}
				],
				"name": "getCandidate",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_voterAddress",
						"type": "address"
					}
				],
				"name": "getVoter",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "owner",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "totalVotes",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_candidateId",
						"type": "uint256"
					}
				],
				"name": "vote",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "voters",
				"outputs": [
					{
						"internalType": "bool",
						"name": "authorized",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "voted",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "vote",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			}
		],
		"devdoc": {
			"kind": "dev",
			"methods": {},
			"version": 1
		},
		"userdoc": {
			"kind": "user",
			"methods": {},
			"version": 1
		}
	},
	"settings": {
		"compilationTarget": {
			"contracts/a.sol": "VotingSystem"
		},
		"evmVersion": "shanghai",
		"libraries": {},
		"metadata": {
			"bytecodeHash": "ipfs"
		},
		"optimizer": {
			"enabled": false,
			"runs": 200
		},
		"remappings": []
	},
	"sources": {
		"contracts/a.sol": {
			"keccak256": "0x3da7f5dd443972e6fd19d86cbc7405e3df5878965ebb00003d20fb457503946c",
			"license": "MIT",
			"urls": [
				"bzz-raw://85a06eee270a667d95ba11d64b5040a975a7bc04bb1eda22d6034533ca7aff6e",
				"dweb:/ipfs/QmRqeWKENQpcjUNt3curKu6rTEPDyMojCSnJXojDPEYzbc"
			]
		}
	},
	"version": 1
};