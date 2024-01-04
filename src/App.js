import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Start from "/home/ubuntu/project/arweave/src/components/start/Start.js";
import About from "/home/ubuntu/project/arweave/src/components/about/About.js";
import Registration from "./components/registration/Registration";
import Details from "./components/user-details/Details";
import Access from "./components/access-remove/Access";
import Company from "./components/company-registration/Company";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div>
    //   <div className='back-img'>
    // <Home/>
    // </div> 
    // </div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start/registration" element={<Registration />} />
        <Route path="/about" element={<About />} />
        <Route path="/start/registration" element={<Registration />} />
        <Route path="/start/user-details" element={<Details />} />
        <Route path="/start/company-registration" element={<Company />} />
        <Route path="/start/access-remove" element={<Access />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//npm install react-icons --save
