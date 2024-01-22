import { createContract } from 'arweavekit/contract'
import fs from "fs";


const key = JSON.parse(
    fs.readFileSync("wallet.json").toString()
  );


  (async()=>{
    const contract = await createContract({
        wallet: key,
        initialState: JSON.stringify(JSON.parse(fs.readFileSync(
          "kyc.json",
          "utf-8")
        )),
        contractSource: fs.readFileSync(
          "kyc.js","utf-8"
        ),
        environment: "local",
      });
    
      console.log(`contract Creation == ${contract}`);

    //   const data =await JSON.stringify(contract);
    
    //   fs.writeFileSync("contract_data.json",data);

    function stringify(obj) {
        let cache = [];
        let str = JSON.stringify(obj, function(key, value) {
          if (typeof value === "object" && value !== null) {
            if (cache.indexOf(value) !== -1) {
              // Circular reference found, discard key
              return;
            }
            // Store value in our collection
            cache.push(value);
          }
          return value;
        });
        cache = null; // reset the cache
        return str;
      }
    
      fs.writeFileSync("contract_data.json",stringify(contract));

      console.log("Adding contract data in json");
  })();
  