import React from "react";
import { useState } from "react";
import Start from "../start/Start";
import "./Registration.css";

function Registration() {
  const [compDetails, setCompDetails] = useState([
    {
      name: "HDFC",
      category: "Bank1",
      address: "yWEDs-sho-5Ka7ql_Ov71GNFdHqLspekxfhAo1bcqtU",
    },
    {
      name: "SBI",
      category: "Bank2",
      address: "yWEDs-sho-5Ka7ql_Ov71GNFdHqLspekxfhAo1bcqtU",
    },
  ]);

  const [user,setUser]=useState({name:"",age:undefined,nation:"",ph_no:undefined,dl:""});
  const [compName,setCompName]=useState("CAoi");


  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    console.log("dijqioqeo");
  };

  return (
    <div>
      <Start />
      <div className="registration-main">
        <div className="registration-comp-head">
          {compDetails.map((value, key) => {
            return (
              <button onClick={()=>setCompName(value.name)} className="registration-comp">
                <h2>{value.name}</h2>
                <div className="registration-comp-sub">
                  <h3>{value.category}</h3>
                  <h3>{value.address}</h3>
                </div>
              </button>
            );
          })}
        </div>

        <div className="registration-user">
            <h1>{compName}</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Enter Your Name : </label>
              <input
                type="text"
                autoComplete="off"
                value={user.name}
                onChange={handleInput}
                name="name"
                id="name"
                placeholder="Name"
              ></input>
            </div>
            <div>
              <label htmlFor="age">Enter Your Age : </label>
              <input
                type="text"
                autoComplete="off"
                value={user.age}
                onChange={handleInput}
                name="age"
                id="age"
                placeholder="Age"
              ></input>
            </div>
            <div>
              <label htmlFor="nation">Enter Your Nationality : </label>
              <input
                type="text"
                autoComplete="off"
                value={user.nation}
                onChange={handleInput}
                name="nation"
                id="nation"
                placeholder="Nationality"
              ></input>
            </div>
            <div>
              <label htmlFor="ph_no">Enter Your Phone Number : </label>
              <input
                type="text"
                autoComplete="off"
                value={user.ph_no}
                onChange={handleInput}
                name="ph_no"
                id="ph_no"
                placeholder="Phone Number"
              ></input>
            </div>
            <div>
              <label htmlFor="dl">Enter Your Driving License ID : </label>
              <input
                type="text"
                autoComplete="off"
                value={user.dl}
                onChange={handleInput}
                name="dl"
                id="dl"
                placeholder="Driving License"
              ></input>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;