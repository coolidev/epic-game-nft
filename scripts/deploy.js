const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  let txn = await nftContract.makeAnEpicNFT()
  await txn.wait()
  console.log("Minted NFT #1")

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();

// 01.deploy:  (Testing Alchemy & OpenSea en Rinkeby testnet)
// 02.deploy: 
// 03.deploy:  (new NFT codificado a base64)
// 04.deploy:  (add json metadata, base64 librarie, arrays of words)
// 05.deploy:  (add event)
// 06.deploy:  (add maxSupply)
// 07.deploy:  (fix event maxSupply)
// 08.deploy:  (add function, change NFT letter color)
// 09.deploy: 
// 10.deploy:  (add verify)