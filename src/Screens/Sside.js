import React from "react";
import "./SsideStyles.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { PiBagSimple } from "react-icons/pi";

const Sside = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-icon">
          <div>
            <GiHamburgerMenu size={25} className="nav-menu" />
          </div>
          <div className="nav-icons">
            <RxDashboard size={25} />
            <h6>Dashboard</h6>
          </div>
          <div className="nav-icons">
            <PiBagSimple size={25} />
            <h6>My Jobs</h6>
          </div>
          <div className="nav-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M19.6445 13.9748C19.6445 14.5053 19.4338 15.014 19.0587 15.389C18.6837 15.7641 18.175 15.9748 17.6445 15.9748H5.64453L1.64453 19.9748V3.97482C1.64453 3.44439 1.85524 2.93568 2.23032 2.56061C2.60539 2.18554 3.1141 1.97482 3.64453 1.97482H17.6445C18.175 1.97482 18.6837 2.18554 19.0587 2.56061C19.4338 2.93568 19.6445 3.44439 19.6445 3.97482V13.9748Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h6>Messages</h6>
          </div>
          <div className="nav-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="23"
              viewBox="0 0 21 23"
              fill="none"
            >
              <path
                d="M17.3247 3.35178H3.32471C2.22014 3.35178 1.32471 4.24721 1.32471 5.35178V19.3518C1.32471 20.4563 2.22014 21.3518 3.32471 21.3518H17.3247C18.4293 21.3518 19.3247 20.4563 19.3247 19.3518V5.35178C19.3247 4.24721 18.4293 3.35178 17.3247 3.35178Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.3247 1.35178V5.35178"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.32471 1.35178V5.35178"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.32471 9.35178H19.3247"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h6>Upcoming Event</h6>
          </div>
        </div>
        <div className="bottom">
          <button
            style={{
              width: 57.98,
              height: 22.21,
              background: "white",
              borderRadius: 6.95,
              border: "0.35px black solid",
            }}
          >
            Help
          </button>
          <div className="logout">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M7.46875 19.8596H3.46875C2.93832 19.8596 2.42961 19.6489 2.05454 19.2738C1.67946 18.8988 1.46875 18.3901 1.46875 17.8596V3.85962C1.46875 3.32919 1.67946 2.82048 2.05454 2.44541C2.42961 2.07033 2.93832 1.85962 3.46875 1.85962H7.46875"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.4688 15.8596L19.4688 10.8596L14.4688 5.85962"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.4688 10.8596H7.46875"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div
            style={{
              color: "white",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            Log out
          </div>
        </div>
      </div>
    </>
  );
};

export default Sside;
