require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

//FOR DEPLOYING LOCALLY
module.exports = {
  solidity: "0.8.18",
};

//DEPLOYING TO TEST NETWORKS LINK(Polygon)
 const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc.ankr.com/polygon_mumbai";
 const NEXT_PUBLIC_PRIVATE_KEY = "7f7d1310c75203b1339b29d33badcdfa04da05b6bbc76be3f97975eeba95eb4c"
//   "";

 module.exports = {
   solidity: {
     version: "0.8.9",
     settings: {
       optimizer: {
         enabled: true,
         runs: 1000,
       },
     },
   },
   defaultNetwork: "polygon_mumbai",
   networks: {
     hardhat: {},
     polygon_mumbai: {
       url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
       accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
     },
   },
 };
