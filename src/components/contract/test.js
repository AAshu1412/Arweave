
const fs = require('fs');
const path = require('path');
const Arweave = require('arweave');
const { SmartWeaveNodeFactory, LoggerFactory } = require("redstone-smartweave");
const { default: ArLocal } = require("arlocal");

// File: simple-demo.js

// Set up ArLocal
(async () => {
    const arLocal = new ArLocal(1985, false);

    await arLocal.start();
  })();


   // Set up Arweave client
  (async () => {
   
    const arweave = Arweave.init({
        host: "localhost",
        port: 1985,
        protocol: "http"
      });
      const wallet = await arweave.wallets.generate();
      const mine = () => arweave.api.get("mine");
  })();


// Set up SmartWeave client
LoggerFactory.INST.logLevel('error');
const smartweave = SmartWeaveNodeFactory.memCached(arweave);

// File: simple-demo.js

const contractSrc = fs.readFileSync("/home/ubuntu/project/arweave/src/components/contract/kyc.js", "utf8");
const initialState = fs.readFileSync("/home/ubuntu/project/arweave/src/components/contract/kyc.json", "utf8");

// File: simple-demo.js
(async () => {
    const contractTxId = await smartweave.createContract.deploy({
        wallet,
        initState: initialState,
        src: contractSrc
      });
      await mine();
  })();



