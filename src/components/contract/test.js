import SmartWeaveTester from "smartweave-testing";
import { handle } from "/home/ubuntu/project/arweave/src/components/contract/kyc.js";

// var SmartWeaveTester = require("smartweave-testing");
// var { handle } = require( "/home/ubuntu/project/arweave/src/components/contract/kyc.js");

const caller = "99999999999AAAASSSSSHUUUUUUUUUUUU";

const initialState = {
  "comp":"goole",
  "kyc":{
    
        "name":"ashu",
        "age":3,
        "nation":"japan",
        "ph_no":34554,
        "dl":"apopaks"
      }
    }

const smartweave = new SmartWeaveTester(handle, initialState, caller);

let input, result;

const fun= async ()=>{
  input = { function: "upload_kyc" };
  result = await smartweave.execute(input);
  console.log(result);
}

fun();

