async function main() {
  // We get the contract to deploy
  const NFT = await ethers.getContractFactory("SampleNFT");
  const nft = await NFT.deploy();

  console.log("SampleNFT deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });