import React from 'react';
import { useState } from "react";
import Start from '../start/Start';
import './Company.css';

function Company(){
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

    return(<div>
        <Start/>
        <div className="company-main">
        <div className="company-img">
          <img
            src="https://i.pinimg.com/564x/01/b0/38/01b0380831048a6dbef6a29fca4c3ee9.jpg"
            width="508"
            height="906"
            alt="me"
          ></img>
        </div>
       
          <div className="company-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Enter Your Company Name : </label>
                <input
                  type="text"
                  autoComplete="off"
                  value={userDetails.address}
                  onChange={handleInput}
                  name="name"
                  id="name"
                  placeholder="Company Name"
                ></input>
              </div>

              <div>
                <label htmlFor="category">Enter Your Company Category : </label>
                <input
                  type="text"
                  autoComplete="off"
                  value={userDetails.company}
                  onChange={handleInput}
                  name="category"
                  id="category"
                  placeholder="Company Category"
                ></input>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
         
      </div>

    </div>);

}

export default Company;