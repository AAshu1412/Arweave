export function handle(state, action) {
  const company = state.company; //state variable
  const people = state.people; //state variable
  const owners = state.owners; //state variable
  const input = action.input;
  const caller = action.caller;

  //    if (input.function === "initialize") {
  //           owners=caller;
  //   }

  if (input.function === "companyReg" && caller === SmartWeave.contract.owner) {
    var _companyReg_addrs = input.companyReg_addrs;
    var _companyReg_access = true;
    var _companyReg_name = input.companyReg_name;
    var _companyReg_regID = input.companyReg_regID;
    var Id = 0;
    Id = Id + 1;
    company[input.company.id] = {
      id: Id,
      issuerAddress: _companyReg_addrs,
      access: _companyReg_access,
      organisationName: _companyReg_name,
      companyRegisteredNumber: _companyReg_regID,
    };
    return { state };
  }

  if (input.function === "uploadKyc") {
    var _uploadKyc_name = input.uploadKyc_name;
    var _uploadKyc_age = input._uploadKyc_age;
    var _uploadKyc_nationality = input._uploadKyc_nationality;
    var _uploadKyc_IP = input._uploadKyc_IP;
    var _uploadKyc_DL = input._uploadKyc_DL;
    var Id = 0;
    Id = Id + 1;
    people[input.people.id] = {
      id: Id,
      name: _uploadKyc_name,
      age: _uploadKyc_age,
      nationality: _uploadKyc_nationality,
      identity_proof: _uploadKyc_IP,
      driving_license: _uploadKyc_DL,
    };
    return { state };
  }
}
