import Arweave from 'arweave';
import TestWeave from 'testweave-sdk';
import { createContract, readContract, interactWrite, interactWriteDryRun } from 'smartweave';
import fs from 'fs';

const arweave = Arweave.init({
  host: 'localhost',
  port: 1984,
  protocol: 'http',
  timeout: 20000,
  logging: false,
}); 

const testWeave = await TestWeave.init(arweave);

// import the sample contract init state
import contractInitState from '/home/ubuntu/project/arweave/src/components/contract/kyc.json';
// load the contract as a string
const contractSource = fs.readFileSync('/home/ubuntu/project/arweave/src/components/contract/kyc.js').toString();

// create the contract and mine the transaction for creating it
const c = await createContract(arweave, testWeave.rootJWK, contractSource, JSON.stringify(contractInitState));
await testWeave.mine();

// read the contract before performing any interaction
const beforeTransaction = await readContract(arweave, c);
console.log(`Before interact write: ${JSON.stringify(beforeTransaction)}`)

// generate a wallet
const jkw = await arweave.wallets.generate();
const generatedAddr = await arweave.wallets.getAddress(jkw);

// interact with the contract
const iwt = await interactWrite(arweave, testWeave.rootJWK, c, {
  function: 'upload_kyc',
  comp: "HDFC",
  kyc:{
    name:"Ashu",
    age:19,
    nation:"India",
    ph_no:9149340127,
    dl:"DL023948"
  }
}, [] , generatedAddr, '23999392')
console.log(`Interact write transaction: ${JSON.stringify(iwt)}`);

// mine the contract interaction transaction
await testWeave.mine();

// read the contract after the interact write transaction (the generated wallet should own 5000 tokens)
const afterTransaction = await readContract(arweave, c);
console.log(`After interact write: ${JSON.stringify(afterTransaction)}`);

