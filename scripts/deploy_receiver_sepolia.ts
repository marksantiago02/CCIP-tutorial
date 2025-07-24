import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying Receiver contract with the account:", deployer.address);

  // Ethereum Sepolia router address
  const router = "0x0BF3dE8c5D3e8A2B34D2BEeB17ABfCeBaf363A59";

  const Receiver = await ethers.getContractFactory("Receiver");
  const receiver = await Receiver.deploy(router);
  await receiver.waitForDeployment();
  const receiverAddress = await receiver.getAddress();
  console.log(`Receiver deployed to: ${receiverAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });