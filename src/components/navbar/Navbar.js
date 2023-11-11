import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { ArweaveWebWallet } from "arweave-wallet-connector";

function Navbar() {
  const connect_wallet = async () => {
    const wallet = new ArweaveWebWallet({
      name: "AAshu",
      logo: "https://i.pinimg.com/564x/ed/64/96/ed64960142ea3db49cefad283f9f33c2.jpg",
    });

    wallet.setUrl("https://arweave.app");
    const no = await wallet.connect();
    console.log("dawdawdawdawd :::: " + no);
  };

  return (
    <nav className="main-nav">
      <div className="logo">
        <NavLink to="/">
          <h2>Ar-KYC</h2>
        </NavLink>
      </div>
      <div className="header-content">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/start">Start</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
      <div className="connect-button">
        <button onClick={connect_wallet}>Connect Wallet</button>
      </div>
    </nav>
  );
}

export default Navbar;
