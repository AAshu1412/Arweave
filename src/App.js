import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Start from '/home/ubuntu/project/arweave/src/components/start/Start.js';
import About from '/home/ubuntu/project/arweave/src/components/about/About.js';
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    // <div>
    //   <div className='back-img'>
    // <Home/>
    // </div>
    // </div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/start' element={<Start/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;


//npm install react-icons --save