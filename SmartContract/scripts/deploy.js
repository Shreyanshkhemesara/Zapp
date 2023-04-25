const hre = require("hardhat");
// const getABI = require('hardhat-abi-exporter');

async function main() { 
  const Lending = await hre.ethers.getContractFactory("Lending");
  const lending = await Lending.deploy();

  await lending.deployed();

  console.log(
    `Contract deployed to ${lending.address}`
    // `contract has abi : ${lending.json}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
