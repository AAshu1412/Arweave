import ArLocal from "arlocal";
import {
  createContract,
  writeContract,
  readContractState,
  viewContractState,
} from "arweavekit/contract";
import fs from "fs";

(async () => {
  const arLocal = new ArLocal();

  await arLocal.start();

  const key = JSON.parse(
    readFileSync("/home/ubuntu/project/arweave/wallet.json").toString()
  );

  const contract = await createContract({
    wallet: key,
    initialState: fs.readFileSync(
      "/home/ubuntu/project/arweave/src/components/contract/kyc.json",
      "utf-8"
    ),
    contractSource: fs.readFileSync(
      "/home/ubuntu/project/arweave/src/components/contract/kyc.js"
    ),
    environment: "local",
  });

  console.log(`createcontract == ${contract}`);

  const writeResult1 = await writeContract({
    environment: "local",
    contractTxId: contract.contractTxId,
    wallet: key,
    options: {
      function: "company_reg",
      comp: { name: "HDFC", category: "Bank" },
    },
  });
  console.log(`Company Registration == ${writeResult1}`);

  const readResult1 = await readContractState({
    environment: "local",
    contractTxId: contract.contractTxId,
  });

  console.log(`Read Result == ${readResult1}`);

  const viewResult1 = await viewContractState({
    environment: "local",
    contractTxId: contract.contractTxId,
    wallet: key,
    options: { function: "getCompDetails" },
  });

  console.log(`View Result Of Company Registration == ${viewResult1}`);

  await arLocal.stop();
})();
