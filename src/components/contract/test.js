const fs = require('fs');
const path = require('path');
const Arweave = require('arweave');
const { SmartWeaveNodeFactory, LoggerFactory } = require("redstone-smartweave");
const { default: ArLocal } = require("arlocal");

(async () => {
  
// Set up ArLocal
const arLocal = new ArLocal(1984, false);
await arLocal.start();

// Set up Arweave client
const arweave = Arweave.init({
  host: "localhost",
  port: 1984,
  protocol: "http"
});
const wallet = await arweave.wallets.generate();
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