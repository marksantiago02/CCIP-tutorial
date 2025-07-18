# CCIP Tutorial

A comprehensive tutorial demonstrating how to use Chainlink's Cross-Chain Interoperability Protocol (CCIP) to send messages between different blockchain networks.

## Overview

This project contains two main smart contracts that showcase cross-chain messaging capabilities:

- **Sender Contract**: Sends string messages to other blockchain networks
- **Receiver Contract**: Receives and processes messages from other blockchain networks

## Features

- ✅ Cross-chain string message transmission
- ✅ LINK token fee payment system
- ✅ Event emission for message tracking
- ✅ Owner-only access control for sending messages
- ✅ Gas limit configuration for destination chain execution
- ✅ Out-of-order execution support

## Smart Contracts

### Sender Contract (`contracts/sender.sol`)

The Sender contract enables sending string messages to other chains using CCIP.

**Key Features:**
- Inherits from `OwnerIsCreator` for access control
- Uses LINK tokens to pay for cross-chain fees
- Configurable gas limits and execution parameters
- Comprehensive error handling and event emission

**Main Function:**
```solidity
function sendMessage(
    uint64 destinationChainSelector,
    address receiver,
    string calldata text
) external onlyOwner returns (bytes32 messageId)
```

### Receiver Contract (`contracts/Receiver.sol`)

The Receiver contract processes incoming cross-chain messages.

**Key Features:**
- Inherits from `CCIPReceiver` base contract
- Stores the last received message details
- Emits events for message tracking
- Provides getter functions for message retrieval

**Main Functions:**
```solidity
function _ccipReceive(Client.Any2EVMMessage memory any2EvmMessage) internal override
function getLastReceivedMessageDetails() external view returns (bytes32 messageId, string memory text)
```

## Prerequisites

- Node.js and npm
- Hardhat or Foundry development environment
- LINK tokens for paying CCIP fees
- Access to supported blockchain networks

## Supported Networks

CCIP supports various blockchain networks including:
- Ethereum
- Polygon
- Avalanche
- Arbitrum
- Optimism
- Base
- And more...

## Installation

1. Clone the repository:
```bash
git clone https://github.com/marksantiago02/CCIP-tutorial.git
cd CCIP-tutorial
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Deploying Contracts

1. **Deploy the Receiver contract** on the destination chain:
   - Provide the CCIP router address for that chain

2. **Deploy the Sender contract** on the source chain:
   - Provide the CCIP router address
   - Provide the LINK token address

3. **Fund the Sender contract** with LINK tokens to pay for fees

### Sending Messages

Call the `sendMessage` function on the Sender contract with:
- `destinationChainSelector`: The chain selector ID for the target network
- `receiver`: Address of the Receiver contract on the destination chain
- `text`: The string message to send

### Monitoring Messages

- Monitor the `MessageSent` event on the source chain
- Monitor the `MessageReceived` event on the destination chain
- Use the `getLastReceivedMessageDetails()` function to retrieve the last received message

## Events

### MessageSent
```solidity
event MessageSent(
    bytes32 indexed messageId,
    uint64 indexed destinationChainSelector,
    address receiver,
    string text,
    address feeToken,
    uint256 fees
);
```

### MessageReceived
```solidity
event MessageReceived(
    bytes32 indexed messageId,
    uint64 indexed sourceChainSelector,
    address sender,
    string text
);
```

## Security Considerations

⚠️ **Important Notice**: These contracts are for educational purposes only and contain hardcoded values for clarity. They use un-audited code and should **NOT** be used in production environments.

## Best Practices

- Use dynamic `extraArgs` configuration instead of hardcoded values
- Implement proper access controls
- Add comprehensive error handling
- Monitor gas limits for destination chain execution
- Regularly update to latest CCIP versions

## Resources

- [Chainlink CCIP Documentation](https://docs.chain.link/ccip)
- [CCIP Best Practices](https://docs.chain.link/ccip/concepts/best-practices)
- [Supported Networks](https://docs.chain.link/ccip/supported-networks)

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For questions and support, please refer to the [Chainlink Discord](https://discord.gg/chainlink) or [Chainlink Documentation](https://docs.chain.link/).
