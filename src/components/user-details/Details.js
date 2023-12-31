import React from "react";
import { useState } from "react";
import Start from "../start/Start";
import "./Details.css";

function Details() {
  const [userDetails, setUserDetails] = useState({ address: "", company: "" });
  const [getDetails, setGetDetails] = useState({
    name: "Ashu",
    age: 19,
    nation: "India",
    ph_no: 1234567890,
    dl: "DL93832",
  });
  const [show, setShow] = useState(false);
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setUserDetails({ ...userDetails, [name]: value });
    // console.log(userDetails.address);
    // console.log(userDetails.company);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    {
      show ? setShow(true) : setShow(true);
    }
  };

  const Data = () => {
    return (
      <div className="output">
        <h2>Name : {getDetails.name}</h2>
        <h2>Age : {getDetails.age}</h2>
        <h2>Nation : {getDetails.nation}</h2>
        <h2>Phone No. : {getDetails.ph_no}</h2>
        <h2>Driving License : {getDetails.dl}</h2>
      </div>
    );
  };

  return (
    <div>
      <Start />
      <div className="details-main">
        <div className="details-img">
          <img
            src="https://i.pinimg.com/564x/af/10/e4/af10e49e35aa90ef04b69ff30787ea3f.jpg"
            width="508"
            height="902.5"
            alt="me"
          ></img>
        </div>
        <div className="details-temp">
          <div className="details-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="address">Enter The User Address : </label>
                <input
                  type="text"
                  autoComplete="off"
                  value={userDetails.address}
                  onChange={handleInput}
                  name="address"
                  id="address"
                  placeholder="Wallet Address"
                ></input>
              </div>

              <div>
                <label htmlFor="company">Enter The Company Name : </label>
                <input
                  type="text"
                  autoComplete="off"
                  value={userDetails.company}
                  onChange={handleInput}
                  name="company"
                  id="company"
                  placeholder="Company Name"
                ></input>
              </div>
              <button type="submit">Details</button>
            </form>
          </div>
          <div className="details-output">
            <h1>User Details : </h1> <br />
            {show && <Data />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
