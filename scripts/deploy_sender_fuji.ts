import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying Sender contract with the account:", deployer.address);

  // Avalanche Fuji addresses
  const router = "0xF694E193200268f9a4868e4Aa017A0118C9a8177";
  const link = "0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846";

  const Sender = await ethers.getContractFactory("Sender");
  const sender = await Sender.deploy(router, link);
  await sender.waitForDeployment();
  const senderAddress = await sender.getAddress();
  console.log(`Sender deployed to: ${senderAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });