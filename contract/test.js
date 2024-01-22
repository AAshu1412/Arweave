// import ArLocal from "arlocal";
import {
  createContract,
  writeContract,
  readContractState,
  viewContractState,
} from "arweavekit/contract";
import fs from "fs";

(async () => {
  // const arLocal = new ArLocal();

  // await arLocal.start();

  const key = JSON.parse(
    fs.readFileSync("wallet.json").toString()
  );

 const data=fs.readFileSync("./contract_data.json");
 const conractAddress = JSON.parse(data);

//  console.log(conractAddress);

const contract_address=conractAddress.contract._contractTxId;
// console.log(contract_address);

  const writeResult1 = await writeContract({
    environment: "local",
    contractTxId: contract_address,
    wallet: key,
    options: {
      function: "company_reg",
      comp: { name: "HDFC", category: "Bank" },
    },
  });
  console.log(`Company Registration == ${writeResult1}`);

  const readResult1 = await readContractState({
    environment: "local",
    contractTxId: contract_address,
  });

  console.log(`Read Result == ${readResult1}`);

  const viewResult1 = await viewContractState({
    environment: "local",
    contractTxId: contract_address,
    wallet: key,
    options: { function: "getCompDetails" },
  });

  console.log(`View Result Of Company Registration == ${viewResult1}`);

  // await arLocal.stop();
})();
