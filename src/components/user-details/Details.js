import React from 'react';
import { useState } from 'react';
import Start from '../start/Start';

function Details(){

const [userDetails,setUserDetails]=useState({address:"",company:""});
const handleInput=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
console.log(name,value);
    setUserDetails({...userDetails,company:"ashuuuuuuuuuuuuu"});
    console.log(userDetails.address);
    console.log(userDetails.company);

}




    return(<div>
        <Start/>
             <form>
            <div>
                <label htmlFor='user-address'>Enter The User Address : </label>
                <input type='text' autoComplete='off' value={userDetails.address} onChange={handleInput} name='user-address' id='user-address' placeholder='Wallet Address'></input>
            </div>

            <div>
                <label htmlFor='company-name'>Enter The Company Name : </label>
                <input type='text' autoComplete='off' value={userDetails.company} onChange={handleInput} name='company-name' id='company-name' placeholder='Company Name'></input>
            </div>
            <button type='submit'>Details</button>
                </form>
    </div>);

}

export default Details;