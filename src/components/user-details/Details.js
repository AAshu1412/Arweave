import React from 'react';
import { useState } from 'react';
import Start from '../start/Start';

function Details(){

const [userDetails,setUserDetails]=useState({address:"",company:""});
const handleInput=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
console.log(name,value);
    setUserDetails({...userDetails,[name]:value});
    // console.log(userDetails.address);
    // console.log(userDetails.company);

}

const handleSubmit=()=>{

}




    return(<div>
        <Start/>
             <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='address'>Enter The User Address : </label>
                <input type='text' autoComplete='off' value={userDetails.address} onChange={handleInput} name='address' id='address' placeholder='Wallet Address'></input>
            </div>

            <div>
                <label htmlFor='company'>Enter The Company Name : </label>
                <input type='text' autoComplete='off' value={userDetails.company} onChange={handleInput} name='company' id='company' placeholder='Company Name'></input>
            </div>
            <button type='submit'>Details</button>
                </form>
    </div>);

}

export default Details;