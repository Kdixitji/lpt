import React from "react";
import { Link } from "react-router-dom";
import "./ScontentStyles.css";
import img1 from "./images/aviate logo.png";
import img2 from "./images/Ellipse 35.png";
import Sside from "./Sside";
import MainContent from "./MainContent";

const Scontent = () => {
  return (
    <>
      <div className="screen">
        <div className="navbar">
          <div className="nav-logo">
            <Link to="/">
              <img src={img1} alt="" className="aviate" />
            </Link>
          </div>
          <form className="search-box">
            {/* search icon */}
            <svg
              className="button"
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="29"
              viewBox="0 0 27 29"
              fill="none"
            >
              <path
                d="M22.1724 14.1555C21.1891 19.7326 15.9703 23.4741 10.5162 22.5124C5.06207 21.5507 1.43781 16.2499 2.42119 10.6729C3.40459 5.09577 8.62325 1.35427 14.0774 2.31599C19.5315 3.27769 23.1558 8.57845 22.1724 14.1555Z"
                stroke="black"
                stroke-width="2.7344"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.5506 27.4112L18.0209 20.7863"
                stroke="black"
                stroke-width="2.7344"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input type="text" placeholder="Type for Search" />
          </form>
          <div className="icons">
            <svg
              className="icon"
              style={{ marginTop: "35px", marginLeft: "50px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="28"
              viewBox="0 0 29 28"
              fill="none"
            >
              <path
                d="M27.6292 18.2361C27.6292 19.0115 27.3211 19.7552 26.7728 20.3035C26.2245 20.8519 25.4808 21.1599 24.7053 21.1599H7.16231L1.31464 27.0076V3.61689C1.31464 2.84144 1.62268 2.09775 2.17101 1.54943C2.71933 1.0011 3.46302 0.693054 4.23847 0.693054H24.7053C25.4808 0.693054 26.2245 1.0011 26.7728 1.54943C27.3211 2.09775 27.6292 2.84144 27.6292 3.61689V18.2361Z"
                fill="white"
                stroke="#303030"
                stroke-width="0.9"
              />
            </svg>
            <svg
              style={{ marginTop: "35px", marginLeft: "10px" }}
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                d="M10.682 25.046V26.7939C10.682 27.4825 10.8382 28.1643 11.1418 28.8005C11.4454 29.4366 11.8904 30.0146 12.4513 30.5015C13.0124 30.9885 13.6783 31.3748 14.4111 31.6382C15.144 31.9017 15.9296 32.0374 16.7229 32.0374C17.5163 32.0374 18.3019 31.9017 19.0348 31.6382C19.7676 31.3748 20.4335 30.9885 20.9945 30.5015C21.5555 30.0146 22.0005 29.4366 22.304 28.8005C22.6077 28.1643 22.7639 27.4825 22.7639 26.7939V25.046"
                fill="white"
              />
              <path
                d="M32.8324 25.0457C32.8324 25.0457 28.8051 16.3066 28.8051 11.0631C28.8051 5.35113 23.3038 0.57605 16.7231 0.57605C10.1425 0.57605 4.6412 5.35113 4.6412 11.0631C4.6412 18.0544 0.613892 25.0457 0.613892 25.0457H32.8324Z"
                fill="white"
              />
            </svg>
            <svg
              style={{ marginTop: "35px", marginLeft: "10px" }}
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="30"
              viewBox="0 0 21 30"
              fill="none"
            >
              <path
                d="M10.3679 18.5392C15.0524 18.5392 18.85 14.7417 18.85 10.0571C18.85 5.37262 15.0524 1.57507 10.3679 1.57507C5.68341 1.57507 1.88586 5.37262 1.88586 10.0571C1.88586 14.7417 5.68341 18.5392 10.3679 18.5392Z"
                stroke="white"
                stroke-width="2.42345"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.77548 17.1941L4.3093 28.2329L10.3679 24.5977L16.4265 28.2329L14.9603 17.1819"
                stroke="white"
                stroke-width="2.42345"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <img src={img2} alt="" className="dp" />
          </div>
          <div className="nav-text">
            <div className="name">
              <h4>Akash Mishra</h4>
            </div>
            <button className="profile">EDIT MY PROFILE</button>
          </div>
        </div>
      </div>
      <Sside />
      <MainContent />
    </>
  );
};

export default Scontent;
