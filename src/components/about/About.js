import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      {/* <h1 style={{color:"red"}}>Aboutttttttt</h1> */}
      <ul className="abt">
        <li>
          <h1>What is AR-KYC?</h1>
          <h2>
            AR-KYC presents a groundbreaking solution that utilizes blockchain
            technology to streamline and elevate the intricacies associated with
            the Know Your Customer (KYC) process.
          </h2>
        </li>
        <li>
          <h1>What is KYC?</h1>
          <h2>
            KYC, or "Know Your Customer," is a process that businesses use to
            verify and understand the identity of their customers.{" "}
          </h2>
          <br />
          <h2>
            It involves collecting information about individuals or entities to
            ensure they are who they claim to be.
          </h2>
          <br />
          <h2>
            KYC helps prevent fraud, money laundering, and other illegal
            activities by establishing the identity and legitimacy of customers
            before engaging in business transactions with them.
          </h2>
        </li>
        <li>
          <h1>What does Ar-KYC solve?</h1>
          <ul className="subHead">
            <li>
              <h2 style={{ textDecoration: "underline" }}>Speeding Up KYC:</h2>
              <h2>
                AR-KYC helps make the KYC process faster, so checking customer
                details doesn't take as much time.
              </h2>
            </li>
            <li>
              <h2 style={{ textDecoration: "underline" }}>
                Easy Identity Check:
              </h2>
              <h2>
                With a simple address, AR-KYC makes it easy to confirm who the
                customer is without any complicated steps.
              </h2>
            </li>
            <li>
              <h2 style={{ textDecoration: "underline" }}>Keeps Info Safe:</h2>
              <h2>
                AR-KYC ensures that only the company with permission can see
                customer details, making sure it's safe and private.
              </h2>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default About;
