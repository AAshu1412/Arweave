import { createContract } from "arweavekit/contract";
import fs from "fs";

const key = JSON.parse(fs.readFileSync("wallet.json").toString());

(async () => {
  const contract = await createContract({
    wallet: key,
    initialState: JSON.stringify(
      JSON.parse(fs.readFileSync("kyc.json", "utf-8"))
    ),
    contractSource: fs.readFileSync("kyc.js", "utf-8"),
    environment: "local",
  });

  console.log(`contract Creation == ${contract}`);

  function stringify(obj) {
    let cache = [];
    let str = JSON.stringify(obj, function (key, value) {
      if (typeof value === "object" && value !== null) {
        if (cache.indexOf(value) !== -1) {
          return;
        }
        cache.push(value);
      }
      return value;
    });
    cache = null;
    return str;
  }

  fs.writeFileSync("contract_data.json", stringify(contract));

  console.log("Adding contract data in json");
})();
