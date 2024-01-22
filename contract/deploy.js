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

      const data =await JSON.stringify(contract);
    
      fs.writeFileSync("contract_data.json",data);
    
      console.log("Adding contract data in json");
  })();
  