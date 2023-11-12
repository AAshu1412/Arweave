import React from "react";
import "./Home.css";
import Navbar from "/home/ubuntu/project/arweave/src/components/navbar/Navbar.js";
import home1 from "/home/ubuntu/project/arweave/src/assets/home.png";

function Home() {
  return (
    <div className="home-img1">
      {/* <Navbar/> */}
      <div className="home-center">
        <h3>WELCOME TO AR-KYC</h3>
        <h1>
          Introducing a Fresh Approach To <br />
          Streamline KYC Processes Effortlessly.
        </h1>
        {/* Simplifying the complex, revolutionizing KYC tasks with ease. */}
        <h3 >
          Ar-KYC, a blockchain-based KYC solution on the innovative Arweave
          blockchain,
          <br /> combining security and decentralization for a robust identity
          verification experience
        </h3>
      </div>
      <div className="home-img2">
        <img src={home1} width="626" height="409" alt="me"></img>
      </div>
    </div>
  );
}

export default Home;
