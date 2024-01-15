export function handle(state, action) {
  const company = state.company; // state variable
  const people = state.people; // state variable
  const map1 = state.map1; // state variable
  const map2 = state.map2; // state variable
  const num1 = state.num1; // state variable

  const input = action.input;
  const caller = action.caller;

  if (action.input.function === "upload_kyc") {
    const comp = action.input.comp; // input - variable
    const kyc = action.input.kyc; // input - object

    if (kyc.name == undefined) {
      throw new ContractError("Please enter the name");
    }
    if (kyc.age == undefined) {
      throw new ContractError("Please enter the age");
    }
    if (kyc.nation == undefined) {
      throw new ContractError("Please enter the nationality");
    }
    if (kyc.ph_no == undefined) {
      throw new ContractError("Please enter the phone number");
    }
    if (kyc.dl == undefined) {
      throw new ContractError("Please enter the driving license number");
    }

    if (!Number.isInteger(kyc.ph_no && kyc.age)) {
      throw new ContractError(
        'Invalid value for "age and phone number". Must be an integer.'
      );
    }

    kyc.access = true;
    kyc.address = caller;

    if (state.people[comp] == undefined) {
      state.people[comp] = 0;
    }

    const key = `${comp} ${caller}`;

    var comp_id = state.people[comp];
    state.people[comp][comp_id] = kyc;
    state.map1[key] = state.people[comp][comp_id];
    state.people[comp]++;
    return { state };
  }

  if (action.input.function === "company_reg") {
    const comp = action.input.comp; // input - object

    if (comp.name == undefined) {
      throw new ContractError("Please enter the company name");
    }
    if (comp.category == undefined) {
      throw new ContractError("Please enter the type of company");
    }
    comp.address = caller;

    state.map2[caller] = comp.name;

    state.company.push(comp);

    return { state };
  }

  if (action.input.function === "getDetails") {
    const comp = action.input.comp; // input - variable
    const address = action.input.address; // input - variable

    const key = `${comp} ${address}`;

    if (!(key in state.map1)) {
      throw new ContractError(
        "This address doesn't give you their KYC details"
      );
    }

    const x = state.map1[key];
    if (x.access == false) {
      throw new ContractError(
        "This address doesn't give your company to access their KYC details"
      );
    }

    return { result: state.map1[key] };
  }

  if (action.input.function === "rmAccessU") {
    const comp = action.input.comp; // input - variable

    const key = `${comp} ${caller}`;

    if (!(key in state.map1)) {
      throw new ContractError("Wrong details");
    }

    state.map1[key].access = false;

    return { state };
  }

  if (action.input.function === "getCompDetails") {
    return { result: state.comp };
  }
  if (action.input.function === "getUser") {
    const comp_name = state.map[caller];
    return { result: state.people[comp_name] };
  }

  throw new ContractError("Unsupported contract function");
}
