import React from "react";
import { useState } from "react";
import Start from "../start/Start";
import "./Access.css";

function Access() {
  const [compDetails, setcompDetails] = useState({ name: "", category: "" });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setcompDetails({ ...compDetails, [name]: value });
    // console.log(compDetails.name);
    // console.log(compDetails.category);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit button is working!");
  };

  return (
    <div>
      <Start />
      <div className="access-main">
        <div className="access-img">
          <img
            src="https://i.pinimg.com/564x/3f/54/98/3f5498a8b6b8111ba41d2ccf388c7970.jpg"
            width="508"
            height="685.75"
            alt="me"
          ></img>
        </div>

        <div className="access-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Enter The Company Name : </label>
              <input
                type="text"
                autoComplete="off"
                value={compDetails.name}
                onChange={handleInput}
                name="name"
                id="name"
                placeholder="access Name"
              ></input>
            </div>

            <button type="submit">Remove</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Access;
