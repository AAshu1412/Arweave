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

            <button type="submit">Submit</button>
          </form>
                </div>
            </div>
    </div>);

}

export default Registration;