import React from 'react';
import Start from '../start/Start';
import './Registration.css';

function Registration(){

    const handleInput=(event)=>{
  
    }

const handleSubmit=()=>{
    console.log("dijqioqeo");
}

    return(<div>
        <Start/>
            <div className='registration-main'>
                <div className='registration-comp'>
                     <h2>HDFC</h2>
                     <div className='registration-comp-sub'>
                     <h4>Bank</h4>
                     <h4>yWEDs-sho-5Ka7ql_Ov71GNFdHqLspekxfhAo1bcqtU</h4>
                     </div>
                    
                </div>
                <div className='registration-user'>
                <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Enter Your Name : </label>
              <input
                type="text"
                autoComplete="off"
                value="name"
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
                value="age"
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
                value="nation"
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
                value="ph_no"
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
                value="dl"
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
    </div>);

}

export default Registration;