import ArLocal from 'arlocal';
import Arweave from 'arweave';
import fs from 'fs';


(async () => {
  const arLocal = new ArLocal();

  // create local testing environment
  await arLocal.start();

  // your tests here

  const arweave = Arweave.init({});

// generate wallet
const wallet = await arweave.wallets.generate()
console.log(`Wallet == ${wallet}`);

// get public address
const paddress= await arweave.wallets.jwkToAddress(wallet.n);
console.log(`Public Address == ${paddress}`);

// getting the winston (wei) present in address
const winston= await arweave.wallets.getBalance(paddress);
console.log(`Winston == ${winston}`);

// getting the AR present in address
const ar= arweave.ar.winstonToAr(winston);
console.log(`AR == ${ar}`);

let data = fs.readFileSync('/home/ubuntu/project/arweave/src/components/contract/kyc.js');
let resumeObject = JSON.parse("/home/ubuntu/project/arweave/src/components/contract/kyc.json");







  // shut down testing environment
  await arLocal.stop();
})(); 