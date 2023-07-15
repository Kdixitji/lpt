import React from "react";
import "./MainContentStyles.css";
import { PiNumberCircleFiveFill } from "react-icons/pi";
import { BsFilter } from "react-icons/bs";
import Jobs from "./Jobs";

const MainContent = () => {
  return (
    <div className="main">
      <div className="left">
        <h1 className="title">Search for Jobs</h1>
        <div className="left-search">
          {/* filter search for job, filter, location */}
          <form className="left-search-box">
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
            <input
              type="text"
              placeholder="Search for Job title, company, keywords"
            />
          </form>
          <form className="left-location-box">
            <svg
              className="button"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="25"
              viewBox="0 0 21 25"
              fill="none"
            >
              <path
                d="M19.5097 10.4372C19.5097 17.4372 10.5097 23.4372 10.5097 23.4372C10.5097 23.4372 1.5097 17.4372 1.5097 10.4372C1.5097 8.05025 2.45792 5.76106 4.14574 4.07323C5.83357 2.38541 8.12276 1.43719 10.5097 1.43719C12.8967 1.43719 15.1858 2.38541 16.8737 4.07323C18.5615 5.76106 19.5097 8.05025 19.5097 10.4372Z"
                stroke="#747474"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5097 13.4372C12.1666 13.4372 13.5097 12.094 13.5097 10.4372C13.5097 8.78034 12.1666 7.43719 10.5097 7.43719C8.85285 7.43719 7.5097 8.78034 7.5097 10.4372C7.5097 12.094 8.85285 13.4372 10.5097 13.4372Z"
                stroke="#747474"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input type="text" placeholder="Anywhere" />
            <svg
              className="button"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
            >
              <path
                d="M6.95382 7.43719L13.1615 0.651956H0.746157L6.95382 7.43719Z"
                fill="#D9D9D9"
              />
            </svg>
          </form>
          <form className="left-filter-box">
            <button className="button">
              <BsFilter size={25} />
            </button>
            <input type="text" placeholder="Filters" />
            <button className="button">
              <PiNumberCircleFiveFill size={20} style={{ color: "#22506C" }} />
            </button>
          </form>
        </div>
        <div className="ui">
          <button className="ui-btn">
            <div className="flex-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="31"
                viewBox="0 0 29 31"
                fill="none"
              >
                <ellipse
                  cx="14.4086"
                  cy="15.7066"
                  rx="14.3526"
                  ry="14.9766"
                  fill="#D9D9D9"
                />
                <line
                  x1="0.5"
                  y1="-0.5"
                  x2="13.6597"
                  y2="-0.5"
                  transform="matrix(0.663 0.74862 -0.73761 0.675227 9.52875 10.4065)"
                  stroke="black"
                  stroke-linecap="round"
                />
                <line
                  x1="0.5"
                  y1="-0.5"
                  x2="13.6597"
                  y2="-0.5"
                  transform="matrix(0.663 -0.74862 0.73761 0.675227 9.90057 21.0067)"
                  stroke="black"
                  stroke-linecap="round"
                />
              </svg>
              <span>UX Design</span>
            </div>
          </button>
          <button className="ui-btn">
            <div className="flex-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="31"
                viewBox="0 0 29 31"
                fill="none"
              >
                <ellipse
                  cx="14.4086"
                  cy="15.7066"
                  rx="14.3526"
                  ry="14.9766"
                  fill="#D9D9D9"
                />
                <line
                  x1="0.5"
                  y1="-0.5"
                  x2="13.6597"
                  y2="-0.5"
                  transform="matrix(0.663 0.74862 -0.73761 0.675227 9.52875 10.4065)"
                  stroke="black"
                  stroke-linecap="round"
                />
                <line
                  x1="0.5"
                  y1="-0.5"
                  x2="13.6597"
                  y2="-0.5"
                  transform="matrix(0.663 -0.74862 0.73761 0.675227 9.90057 21.0067)"
                  stroke="black"
                  stroke-linecap="round"
                />
              </svg>
              <span>Full Time</span>
            </div>
          </button>
          <button className="ui-btn">
            <div className="flex-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="31"
                viewBox="0 0 29 31"
                fill="none"
              >
                <ellipse
                  cx="14.4086"
                  cy="15.7066"
                  rx="14.3526"
                  ry="14.9766"
                  fill="#D9D9D9"
                />
                <line
                  x1="0.5"
                  y1="-0.5"
                  x2="13.6597"
                  y2="-0.5"
                  transform="matrix(0.663 0.74862 -0.73761 0.675227 9.52875 10.4065)"
                  stroke="black"
                  stroke-linecap="round"
                />
                <line
                  x1="0.5"
                  y1="-0.5"
                  x2="13.6597"
                  y2="-0.5"
                  transform="matrix(0.663 -0.74862 0.73761 0.675227 9.90057 21.0067)"
                  stroke="black"
                  stroke-linecap="round"
                />
              </svg>
              <span>On-Site</span>
            </div>
          </button>
          <button className="ui-btn">
            <div className="flex-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="31"
                viewBox="0 0 29 31"
                fill="none"
              >
                <ellipse
                  cx="14.4086"
                  cy="15.7066"
                  rx="14.3526"
                  ry="14.9766"
                  fill="#D9D9D9"
                />
                <line
                  x1="0.5"
                  y1="-0.5"
                  x2="13.6597"
                  y2="-0.5"
                  transform="matrix(0.663 0.74862 -0.73761 0.675227 9.52875 10.4065)"
                  stroke="black"
                  stroke-linecap="round"
                />
                <line
                  x1="0.5"
                  y1="-0.5"
                  x2="13.6597"
                  y2="-0.5"
                  transform="matrix(0.663 -0.74862 0.73761 0.675227 9.90057 21.0067)"
                  stroke="black"
                  stroke-linecap="round"
                />
              </svg>
              <span>Delhi NCR</span>
            </div>
          </button>
          <button className="ui-btn">
            <div className="flex-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="31"
                viewBox="0 0 29 31"
                fill="none"
              >
                <ellipse
                  cx="14.4086"
                  cy="15.7066"
                  rx="14.3526"
                  ry="14.9766"
                  fill="#D9D9D9"
                />
                <line
                  x1="0.5"
                  y1="-0.5"
                  x2="13.6597"
                  y2="-0.5"
                  transform="matrix(0.663 0.74862 -0.73761 0.675227 9.52875 10.4065)"
                  stroke="black"
                  stroke-linecap="round"
                />
                <line
                  x1="0.5"
                  y1="-0.5"
                  x2="13.6597"
                  y2="-0.5"
                  transform="matrix(0.663 -0.74862 0.73761 0.675227 9.90057 21.0067)"
                  stroke="black"
                  stroke-linecap="round"
                />
              </svg>
              <span>Bangalore</span>
            </div>
          </button>
        </div>
        <div className="my-job">
          <div
            className="my-job-title"
            style={{
              color: "black",
              fontSize: 33.38,
              fontFamily: "Poppins",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            My Jobs
          </div>
          <div className="my-job-status">
            <div
              className="stat-text"
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Poppins",
                fontWeight: "800",
                wordWrap: "break-word",
              }}
            >
              Job search status
            </div>
            <button
              className="status"
              style={{
                width: 190.81,
                height: 38.01,
                background: "white",
                borderRadius: 11,
                border: "0.25px black solid",
              }}
            >
              <div className="flex-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <circle
                    cx="6.39006"
                    cy="6.87956"
                    r="6.10954"
                    fill="#0DC556"
                  />
                </svg>
                <span>Actively Interviewing</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="10"
                  viewBox="0 0 17 10"
                  fill="none"
                >
                  <path
                    d="M15.946 1.87939L8.94604 8.87939L1.94604 1.87939"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <Jobs />
      </div>
      <div className="right"></div>
    </div>
  );
};

export default MainContent;
