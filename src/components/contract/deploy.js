const fs = require("fs");
const path = require("path");
const Arweave = require("arweave");
const { SmartWeaveNodeFactory } = require("redstone-smartweave");
// const jwk = require("../../.secrets/jwk.json");

(async () => {
  // Loading contract source and initial state from files
  const contractSrc = fs.readFileSync(path.join("/home/ubuntu/project/arweave/src/components/contract/kyc.js"), "utf8");
  const initialState = fs.readFileSync(path.join( "/home/ubuntu/project/arweave/src/components/contract/kyc.json"), "utf8");

  // Arweave and SmartWeave initialization
  const arweave = Arweave.init({
    host: "arweave.net",
    port: 443,
    protocol: "https",
  });
  const smartweave = SmartWeaveNodeFactory.memCached(arweave);

  // Deploying contract
  console.log("Deployment started");
  const contractTxId = await smartweave.createContract.deploy({
    wallet: "yWEDs-sho-5Ka7ql_Ov71GNFdHqLspekxfhAo1bcqtU",
    initState: initialState,
    src: contractSrc
  });
  console.log("Deployment completed: " + contractTxId);
})();