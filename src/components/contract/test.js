const fs = require('fs');
const path = require('path');
const Arweave = require('arweave');
const { SmartWeaveNodeFactory, LoggerFactory } = require("redstone-smartweave");
const { default: ArLocal } = require("arlocal");

test('test transaction', async () => {
  
// Set up ArLocal
const arLocal = new ArLocal();
await arLocal.start();

// Set up Arweave client
const arweave = Arweave.init({});
// arweave.wallets.generate().then((key) => {
//   console.log(key);
//   const wallet = key;

//   // {
//   //     "kty": "RSA",
//   //     "n": "3WquzP5IVTIsv3XYJjfw5L-t4X34WoWHwOuxb9V8w...",
//   //     "e": ...
// });

// arweave.wallets.jwkToAddress(key).then((address) => {
//   console.log(address);
//   const walletAddress=address;
//   //1seRanklLU_1VTGkEk7P0xAwMJfA7owA1JHW5KyZKlY
// });

 // airdrop amount of tokens (in winston) to wallet
 await arweave.api.get(`mint/yWEDs-sho-5Ka7ql_Ov71GNFdHqLspekxfhAo1bcqtU/10000000000000000`)

  // create mine function
const mine = () => arweave.api.get("mine");

// Set up SmartWeave client
LoggerFactory.INST.logLevel('error');
const smartweave = SmartWeaveNodeFactory.memCached(arweave);

const contractSrc = fs.readFileSync("/home/ubuntu/project/arweave/src/components/contract/kyc.js", "utf8");
const initialState = fs.readFileSync("/home/ubuntu/project/arweave/src/components/contract/kyc.json", "utf8");

const contractTxId = await smartweave.createContract.deploy({
  wallet,
  initState: initialState,
  src: contractSrc
});
await mine();

// Interacting with the contract
const contract = smartweave
  .contract(contractTxId)
  .connect(wallet);

// Read state
const state = await contract.readState();
console.log("State before any interactions");
console.log(JSON.stringify(state, null, 2));

})();