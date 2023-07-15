import React from "react";
import "./ContentdataStyles.css";
import img1 from "../assets/m1.png";
import img2 from "../assets/w 5.png";
import img3 from "../assets/w 3.png";
import img4 from "../assets/m 7.png";
import img5 from "../assets/m 6.png";
import img6 from "../assets/m 4.png";
import img7 from "../assets/w 6.png";
import img8 from "../assets/w 7.png";

const Contentdata = () => {
  return (
    <>
      {/* chikelu */}
      <div className="job-list">
        {/* point */}
        <div className="point">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18.2938 10.0265C18.2938 14.6411 14.5364 18.3855 9.89688 18.3855V19.3855C15.0846 19.3855 19.2938 15.1974 19.2938 10.0265H18.2938ZM9.89688 18.3855C5.2574 18.3855 1.5 14.6411 1.5 10.0265H0.5C0.5 15.1974 4.70914 19.3855 9.89688 19.3855V18.3855ZM1.5 10.0265C1.5 5.41194 5.2574 1.66747 9.89688 1.66747V0.667465C4.70914 0.667465 0.5 4.85564 0.5 10.0265H1.5ZM9.89688 1.66747C14.5364 1.66747 18.2938 5.41194 18.2938 10.0265H19.2938C19.2938 4.85564 15.0846 0.667465 9.89688 0.667465V1.66747Z"
              fill="#D3D0D0"
            />
          </svg>
        </div>
        {/* image */}
        <img src={img1} alt="" className="job-image" />
        {/* bookmark logo */}
        <div className="bookmark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M13 8.49134C13 6.3741 13 5.31548 13.6041 4.65774C14.2082 4 15.1805 4 17.125 4H19.875C21.8195 4 22.7918 4 23.3959 4.65774C24 5.31548 24 6.3741 24 8.49134V13.6022C24 15.6108 24 16.6151 23.4195 16.9223C22.8391 17.2294 22.1138 16.609 20.6632 15.368L20.199 14.9709C19.3834 14.2731 18.9756 13.9242 18.5 13.9242C18.0244 13.9242 17.6166 14.2731 16.801 14.9709L16.3368 15.368C14.8862 16.609 14.1609 17.2294 13.5805 16.9223C13 16.6151 13 15.6108 13 13.6022V8.49134Z"
              fill="#32A0EF"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="job-info">
          <div className="job-name">
            Chikelu Obesea
            {/* clocl */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M7.5 13.5C10.8137 13.5 13.5 10.8137 13.5 7.5C13.5 4.18629 10.8137 1.5 7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5C1.5 10.8137 4.18629 13.5 7.5 13.5Z"
                stroke="#CCD2E3"
                stroke-width="2"
              />
              <path
                d="M10.3125 7.5H7.75C7.61193 7.5 7.5 7.38807 7.5 7.25V5.3125"
                stroke="#CCD2E3"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <div className="job-date">16 sep 2018</div>
          </div>
          <div className="post">Full stack Ruby on Rails Developer</div>
        </div>
        <div className="job-status">
          <p>New</p>
          <div className="dot">
            {/* filled dot */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            {/* empty dot */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
          </div>
        </div>
        <div className="emoji">
          {/* emoji */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
          >
            <circle
              cx="13.5"
              cy="13.5"
              r="10.125"
              fill="#E8C303"
              stroke="#E8C303"
              stroke-linecap="round"
            />
            <circle
              cx="10.125"
              cy="11.25"
              r="1.125"
              fill="#444343"
              stroke="#444343"
              stroke-linecap="round"
            />
            <ellipse
              cx="16.875"
              cy="11.25"
              rx="1.125"
              ry="1.125"
              fill="#444343"
              stroke="#444343"
              stroke-linecap="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.4093 16.875C8.11883 16.875 7.9736 16.875 7.89962 16.9884C7.82564 17.1018 7.87802 17.2208 7.98278 17.4587C8.69428 19.0742 10.8708 20.25 13.4455 20.25C16.0201 20.25 18.1966 19.0742 18.9081 17.4587C19.0129 17.2208 19.0653 17.1018 18.9913 16.9884C18.9173 16.875 18.7721 16.875 18.4816 16.875H8.4093Z"
              fill="#444343"
            />
          </svg>
          <p style={{ color: "green" }}>85%</p>
        </div>
        <div className="menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
              fill="#C5C7CD"
            />
          </svg>
        </div>
      </div>
      {/* dusya */}
      <div className="job-list">
        {/* point */}
        <div className="point">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18.2938 10.0265C18.2938 14.6411 14.5364 18.3855 9.89688 18.3855V19.3855C15.0846 19.3855 19.2938 15.1974 19.2938 10.0265H18.2938ZM9.89688 18.3855C5.2574 18.3855 1.5 14.6411 1.5 10.0265H0.5C0.5 15.1974 4.70914 19.3855 9.89688 19.3855V18.3855ZM1.5 10.0265C1.5 5.41194 5.2574 1.66747 9.89688 1.66747V0.667465C4.70914 0.667465 0.5 4.85564 0.5 10.0265H1.5ZM9.89688 1.66747C14.5364 1.66747 18.2938 5.41194 18.2938 10.0265H19.2938C19.2938 4.85564 15.0846 0.667465 9.89688 0.667465V1.66747Z"
              fill="#D3D0D0"
            />
          </svg>
        </div>
        {/* image */}
        <img src={img2} alt="" className="job-image" />
        {/* bookmark logo */}
        <div className="bookmark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M13 8.49134C13 6.3741 13 5.31548 13.6041 4.65774C14.2082 4 15.1805 4 17.125 4H19.875C21.8195 4 22.7918 4 23.3959 4.65774C24 5.31548 24 6.3741 24 8.49134V13.6022C24 15.6108 24 16.6151 23.4195 16.9223C22.8391 17.2294 22.1138 16.609 20.6632 15.368L20.199 14.9709C19.3834 14.2731 18.9756 13.9242 18.5 13.9242C18.0244 13.9242 17.6166 14.2731 16.801 14.9709L16.3368 15.368C14.8862 16.609 14.1609 17.2294 13.5805 16.9223C13 16.6151 13 15.6108 13 13.6022V8.49134Z"
              fill="#32A0EF"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="job-info">
          <div className="job-name">
            Dusya Sigachyaova
            {/* clock */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M7.5 13.5C10.8137 13.5 13.5 10.8137 13.5 7.5C13.5 4.18629 10.8137 1.5 7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5C1.5 10.8137 4.18629 13.5 7.5 13.5Z"
                stroke="#CCD2E3"
                stroke-width="2"
              />
              <path
                d="M10.3125 7.5H7.75C7.61193 7.5 7.5 7.38807 7.5 7.25V5.3125"
                stroke="#CCD2E3"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <div className="job-date">04 feb 2019</div>
          </div>
          <div className="post">Miracle Marketer on Steroid</div>
        </div>
        <div className="job-status">
          <p>Second Interview</p>
          <div className="dot">
            {/* filled dot */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            {/* empty dot */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
          </div>
        </div>
        <div className="emoji">
          {/* emoji */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
          >
            <circle
              cx="13.5"
              cy="13.5"
              r="10.125"
              fill="#E8C303"
              stroke="#E8C303"
              stroke-linecap="round"
            />
            <circle
              cx="10.125"
              cy="11.25"
              r="1.125"
              fill="#444343"
              stroke="#444343"
              stroke-linecap="round"
            />
            <ellipse
              cx="16.875"
              cy="11.25"
              rx="1.125"
              ry="1.125"
              fill="#444343"
              stroke="#444343"
              stroke-linecap="round"
            />
          </svg>
          <p style={{ color: "yellow" }}>25%</p>
        </div>
        <div className="menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
              fill="#C5C7CD"
            />
          </svg>
        </div>
      </div>
      {/* Ekene */}
      <div className="job-list">
        {/* point */}
        <div className="point">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18.2938 10.0265C18.2938 14.6411 14.5364 18.3855 9.89688 18.3855V19.3855C15.0846 19.3855 19.2938 15.1974 19.2938 10.0265H18.2938ZM9.89688 18.3855C5.2574 18.3855 1.5 14.6411 1.5 10.0265H0.5C0.5 15.1974 4.70914 19.3855 9.89688 19.3855V18.3855ZM1.5 10.0265C1.5 5.41194 5.2574 1.66747 9.89688 1.66747V0.667465C4.70914 0.667465 0.5 4.85564 0.5 10.0265H1.5ZM9.89688 1.66747C14.5364 1.66747 18.2938 5.41194 18.2938 10.0265H19.2938C19.2938 4.85564 15.0846 0.667465 9.89688 0.667465V1.66747Z"
              fill="#D3D0D0"
            />
          </svg>
        </div>
        {/* image */}
        <img src={img3} alt="" className="job-image" />
        {/* bookmark logo */}
        <div className="bookmark-gray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M13 8.49134C13 6.3741 13 5.31548 13.6041 4.65774C14.2082 4 15.1805 4 17.125 4H19.875C21.8195 4 22.7918 4 23.3959 4.65774C24 5.31548 24 6.3741 24 8.49134V13.6022C24 15.6108 24 16.6151 23.4195 16.9223C22.8391 17.2294 22.1138 16.609 20.6632 15.368L20.199 14.9709C19.3834 14.2731 18.9756 13.9242 18.5 13.9242C18.0244 13.9242 17.6166 14.2731 16.801 14.9709L16.3368 15.368C14.8862 16.609 14.1609 17.2294 13.5805 16.9223C13 16.6151 13 15.6108 13 13.6022V8.49134Z"
              fill="#32A0EF"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="job-info">
          <div className="job-name">
            Ekene Obasey
            {/* clock */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M7.5 13.5C10.8137 13.5 13.5 10.8137 13.5 7.5C13.5 4.18629 10.8137 1.5 7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5C1.5 10.8137 4.18629 13.5 7.5 13.5Z"
                stroke="#CCD2E3"
                stroke-width="2"
              />
              <path
                d="M10.3125 7.5H7.75C7.61193 7.5 7.5 7.38807 7.5 7.25V5.3125"
                stroke="#CCD2E3"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <div className="job-date">23 Nov 2018</div>
          </div>
          <div className="post">
            Finally Dressed Representative with Bravodo
          </div>
        </div>
        <div className="job-status">
          <p>Phone Interview</p>
          <div className="dot">
            {/* filled dot */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            {/* empty dot */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
          </div>
        </div>
        <div className="emoji">
          {/* emoji */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
          >
            <circle
              cx="13.5"
              cy="13.5"
              r="10.125"
              fill="#E8C303"
              stroke="#E8C303"
              stroke-linecap="round"
            />
            <circle
              cx="10.125"
              cy="11.25"
              r="1.125"
              fill="#444343"
              stroke="#444343"
              stroke-linecap="round"
            />
            <ellipse
              cx="16.875"
              cy="11.25"
              rx="1.125"
              ry="1.125"
              fill="#444343"
              stroke="#444343"
              stroke-linecap="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.4093 16.875C8.11883 16.875 7.9736 16.875 7.89962 16.9884C7.82564 17.1018 7.87802 17.2208 7.98278 17.4587C8.69428 19.0742 10.8708 20.25 13.4455 20.25C16.0201 20.25 18.1966 19.0742 18.9081 17.4587C19.0129 17.2208 19.0653 17.1018 18.9913 16.9884C18.9173 16.875 18.7721 16.875 18.4816 16.875H8.4093Z"
              fill="#444343"
            />
          </svg>
          <p style={{ color: "green" }}>45%</p>
        </div>
        <div className="menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
              fill="#C5C7CD"
            />
          </svg>
        </div>
      </div>
      {/* fabiana */}
      <div className="job-list">
        {/* point */}
        <div className="point">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <circle cx="9" cy="9" r="9" fill="#61DC00" />
          </svg>
        </div>
        {/* image */}
        <img src={img4} alt="" className="job-image" />
        {/* bookmark logo */}
        <div className="bookmark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M13 8.49134C13 6.3741 13 5.31548 13.6041 4.65774C14.2082 4 15.1805 4 17.125 4H19.875C21.8195 4 22.7918 4 23.3959 4.65774C24 5.31548 24 6.3741 24 8.49134V13.6022C24 15.6108 24 16.6151 23.4195 16.9223C22.8391 17.2294 22.1138 16.609 20.6632 15.368L20.199 14.9709C19.3834 14.2731 18.9756 13.9242 18.5 13.9242C18.0244 13.9242 17.6166 14.2731 16.801 14.9709L16.3368 15.368C14.8862 16.609 14.1609 17.2294 13.5805 16.9223C13 16.6151 13 15.6108 13 13.6022V8.49134Z"
              fill="#32A0EF"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="job-info">
          <div className="job-name">
            Fabiana Capmany
            {/* clock */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M7.5 13.5C10.8137 13.5 13.5 10.8137 13.5 7.5C13.5 4.18629 10.8137 1.5 7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5C1.5 10.8137 4.18629 13.5 7.5 13.5Z"
                stroke="#CCD2E3"
                stroke-width="2"
              />
              <path
                d="M10.3125 7.5H7.75C7.61193 7.5 7.5 7.38807 7.5 7.25V5.3125"
                stroke="#CCD2E3"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <div className="job-date">16 oct 2018</div>
          </div>
          <div className="post">Miracle Marketer on Steroid</div>
        </div>
        <div className="job-status">
          <p>Final Interview</p>
          <div className="dot">
            {/* filled dot */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            {/* empty dot */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
          </div>
        </div>
        <div className="emoji">
          {/* emoji */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="9" fill="#FF5E04" fill-opacity="0.71" />
            <path
              d="M7.88124 16.2441C8.37391 15.8174 9.02309 15.5091 9.72265 15.3072C10.4301 15.103 11.2142 15 12 15C12.7858 15 13.5699 15.103 14.2774 15.3072C14.9769 15.5091 15.6261 15.8174 16.1188 16.2441"
              stroke="#444343"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M17 8L14 10"
              stroke="#444343"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M7 8L10 10"
              stroke="#444343"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle cx="8" cy="10" r="1" fill="#444343" />
            <circle cx="16" cy="10" r="1" fill="#444343" />
          </svg>
          <p style={{ color: "red" }}>5%</p>
        </div>
        <div className="menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
              fill="#C5C7CD"
            />
          </svg>
        </div>
      </div>
      {/* griogoriy */}
      <div className="job-list">
        {/* point */}
        <div className="point">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18.2938 10.0265C18.2938 14.6411 14.5364 18.3855 9.89688 18.3855V19.3855C15.0846 19.3855 19.2938 15.1974 19.2938 10.0265H18.2938ZM9.89688 18.3855C5.2574 18.3855 1.5 14.6411 1.5 10.0265H0.5C0.5 15.1974 4.70914 19.3855 9.89688 19.3855V18.3855ZM1.5 10.0265C1.5 5.41194 5.2574 1.66747 9.89688 1.66747V0.667465C4.70914 0.667465 0.5 4.85564 0.5 10.0265H1.5ZM9.89688 1.66747C14.5364 1.66747 18.2938 5.41194 18.2938 10.0265H19.2938C19.2938 4.85564 15.0846 0.667465 9.89688 0.667465V1.66747Z"
              fill="#D3D0D0"
            />
          </svg>
        </div>
        {/* image */}
        <img src={img5} alt="" className="job-image" />
        {/* bookmark logo */}
        <div className="bookmark-gray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M13 8.49134C13 6.3741 13 5.31548 13.6041 4.65774C14.2082 4 15.1805 4 17.125 4H19.875C21.8195 4 22.7918 4 23.3959 4.65774C24 5.31548 24 6.3741 24 8.49134V13.6022C24 15.6108 24 16.6151 23.4195 16.9223C22.8391 17.2294 22.1138 16.609 20.6632 15.368L20.199 14.9709C19.3834 14.2731 18.9756 13.9242 18.5 13.9242C18.0244 13.9242 17.6166 14.2731 16.801 14.9709L16.3368 15.368C14.8862 16.609 14.1609 17.2294 13.5805 16.9223C13 16.6151 13 15.6108 13 13.6022V8.49134Z"
              fill="#32A0EF"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="job-info">
          <div className="job-name">
            Grigoriy Kozhukhoz
            {/* clock */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M7.5 13.5C10.8137 13.5 13.5 10.8137 13.5 7.5C13.5 4.18629 10.8137 1.5 7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5C1.5 10.8137 4.18629 13.5 7.5 13.5Z"
                stroke="#CCD2E3"
                stroke-width="2"
              />
              <path
                d="M10.3125 7.5H7.75C7.61193 7.5 7.5 7.38807 7.5 7.25V5.3125"
                stroke="#CCD2E3"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <div className="job-date">04 feb 2019</div>
          </div>
          <div className="post">Full stack Ruby on Rails Developer</div>
        </div>
        <div className="job-status">
          <p>Personality Development</p>
          <div className="dot">
            {/* filled dot */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            {/* empty dot */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
          </div>
        </div>
        <div className="emoji">
          {/* emoji */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
          >
            <circle
              cx="13.5"
              cy="13.5"
              r="10.125"
              fill="#E8C303"
              stroke="#E8C303"
              stroke-linecap="round"
            />
            <circle
              cx="10.125"
              cy="11.25"
              r="1.125"
              fill="#444343"
              stroke="#444343"
              stroke-linecap="round"
            />
            <ellipse
              cx="16.875"
              cy="11.25"
              rx="1.125"
              ry="1.125"
              fill="#444343"
              stroke="#444343"
              stroke-linecap="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.4093 16.875C8.11883 16.875 7.9736 16.875 7.89962 16.9884C7.82564 17.1018 7.87802 17.2208 7.98278 17.4587C8.69428 19.0742 10.8708 20.25 13.4455 20.25C16.0201 20.25 18.1966 19.0742 18.9081 17.4587C19.0129 17.2208 19.0653 17.1018 18.9913 16.9884C18.9173 16.875 18.7721 16.875 18.4816 16.875H8.4093Z"
              fill="#444343"
            />
          </svg>
          <p style={{ color: "green" }}>70%</p>
        </div>
        <div className="menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
              fill="#C5C7CD"
            />
          </svg>
        </div>
      </div>
      {/* Xuan  */}
      <div className="job-list">
        {/* point */}
        <div className="point">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18.2938 10.0265C18.2938 14.6411 14.5364 18.3855 9.89688 18.3855V19.3855C15.0846 19.3855 19.2938 15.1974 19.2938 10.0265H18.2938ZM9.89688 18.3855C5.2574 18.3855 1.5 14.6411 1.5 10.0265H0.5C0.5 15.1974 4.70914 19.3855 9.89688 19.3855V18.3855ZM1.5 10.0265C1.5 5.41194 5.2574 1.66747 9.89688 1.66747V0.667465C4.70914 0.667465 0.5 4.85564 0.5 10.0265H1.5ZM9.89688 1.66747C14.5364 1.66747 18.2938 5.41194 18.2938 10.0265H19.2938C19.2938 4.85564 15.0846 0.667465 9.89688 0.667465V1.66747Z"
              fill="#D3D0D0"
            />
          </svg>
        </div>
        {/* image */}
        <img src={img6} alt="" className="job-image" />
        {/* bookmark logo */}
        <div className="bookmark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M13 8.49134C13 6.3741 13 5.31548 13.6041 4.65774C14.2082 4 15.1805 4 17.125 4H19.875C21.8195 4 22.7918 4 23.3959 4.65774C24 5.31548 24 6.3741 24 8.49134V13.6022C24 15.6108 24 16.6151 23.4195 16.9223C22.8391 17.2294 22.1138 16.609 20.6632 15.368L20.199 14.9709C19.3834 14.2731 18.9756 13.9242 18.5 13.9242C18.0244 13.9242 17.6166 14.2731 16.801 14.9709L16.3368 15.368C14.8862 16.609 14.1609 17.2294 13.5805 16.9223C13 16.6151 13 15.6108 13 13.6022V8.49134Z"
              fill="#32A0EF"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="job-info">
          <div className="job-name">
            Xuan Jingyi
            {/* clocl */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M7.5 13.5C10.8137 13.5 13.5 10.8137 13.5 7.5C13.5 4.18629 10.8137 1.5 7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5C1.5 10.8137 4.18629 13.5 7.5 13.5Z"
                stroke="#CCD2E3"
                stroke-width="2"
              />
              <path
                d="M10.3125 7.5H7.75C7.61193 7.5 7.5 7.38807 7.5 7.25V5.3125"
                stroke="#CCD2E3"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <div className="job-date">23 Nov 2018</div>
          </div>
          <div className="post">
            Finally Dressed Representative with Bravodo
          </div>
        </div>
        <div className="job-status">
          <p>New</p>
          <div className="dot">
            {/* filled dot */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            {/* empty dot */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
          </div>
        </div>
        <div className="emoji">
          {/* emoji */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="9" fill="#FF5E04" fill-opacity="0.71" />
            <path
              d="M7.88124 16.2441C8.37391 15.8174 9.02309 15.5091 9.72265 15.3072C10.4301 15.103 11.2142 15 12 15C12.7858 15 13.5699 15.103 14.2774 15.3072C14.9769 15.5091 15.6261 15.8174 16.1188 16.2441"
              stroke="#444343"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M17 8L14 10"
              stroke="#444343"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M7 8L10 10"
              stroke="#444343"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle cx="8" cy="10" r="1" fill="#444343" />
            <circle cx="16" cy="10" r="1" fill="#444343" />
          </svg>
          <p style={{ color: "red" }}>70%</p>
        </div>
        <div className="menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
              fill="#C5C7CD"
            />
          </svg>
        </div>
      </div>
      {/* Igor */}
      <div className="job-list">
        {/* point */}
        <div className="point">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <circle cx="9" cy="9" r="9" fill="#61DC00" />
          </svg>
        </div>
        {/* image */}
        <img src={img7} alt="" className="job-image" />
        {/* bookmark logo */}
        <div className="bookmark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M13 8.49134C13 6.3741 13 5.31548 13.6041 4.65774C14.2082 4 15.1805 4 17.125 4H19.875C21.8195 4 22.7918 4 23.3959 4.65774C24 5.31548 24 6.3741 24 8.49134V13.6022C24 15.6108 24 16.6151 23.4195 16.9223C22.8391 17.2294 22.1138 16.609 20.6632 15.368L20.199 14.9709C19.3834 14.2731 18.9756 13.9242 18.5 13.9242C18.0244 13.9242 17.6166 14.2731 16.801 14.9709L16.3368 15.368C14.8862 16.609 14.1609 17.2294 13.5805 16.9223C13 16.6151 13 15.6108 13 13.6022V8.49134Z"
              fill="#32A0EF"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="job-info">
          <div className="job-name">
            Igor Antonovich
            {/* clock */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M7.5 13.5C10.8137 13.5 13.5 10.8137 13.5 7.5C13.5 4.18629 10.8137 1.5 7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5C1.5 10.8137 4.18629 13.5 7.5 13.5Z"
                stroke="#CCD2E3"
                stroke-width="2"
              />
              <path
                d="M10.3125 7.5H7.75C7.61193 7.5 7.5 7.38807 7.5 7.25V5.3125"
                stroke="#CCD2E3"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <div className="job-date">04 feb 2019</div>
          </div>
          <div className="post">
            Finally Dressed Representative with Bravodo
          </div>
        </div>
        <div className="job-status">
          <p>Second Interview</p>
          <div className="dot">
            {/* filled dot */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            {/* empty dot */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
          </div>
        </div>
        <div className="emoji">
          {/* emoji */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="9" fill="#FF5E04" fill-opacity="0.71" />
            <path
              d="M7.88124 16.2441C8.37391 15.8174 9.02309 15.5091 9.72265 15.3072C10.4301 15.103 11.2142 15 12 15C12.7858 15 13.5699 15.103 14.2774 15.3072C14.9769 15.5091 15.6261 15.8174 16.1188 16.2441"
              stroke="#444343"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M17 8L14 10"
              stroke="#444343"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M7 8L10 10"
              stroke="#444343"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle cx="8" cy="10" r="1" fill="#444343" />
            <circle cx="16" cy="10" r="1" fill="#444343" />
          </svg>
          <p style={{ color: "red" }}>70%</p>
        </div>
        <div className="menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
              fill="#C5C7CD"
            />
          </svg>
        </div>
      </div>
      {/* Alberta */}
      <div className="job-list">
        {/* point */}
        <div className="point">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <circle cx="9" cy="9" r="9" fill="#61DC00" />
          </svg>
        </div>
        {/* image */}
        <img src={img8} alt="" className="job-image" />
        {/* bookmark logo */}
        <div className="bookmark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M13 8.49134C13 6.3741 13 5.31548 13.6041 4.65774C14.2082 4 15.1805 4 17.125 4H19.875C21.8195 4 22.7918 4 23.3959 4.65774C24 5.31548 24 6.3741 24 8.49134V13.6022C24 15.6108 24 16.6151 23.4195 16.9223C22.8391 17.2294 22.1138 16.609 20.6632 15.368L20.199 14.9709C19.3834 14.2731 18.9756 13.9242 18.5 13.9242C18.0244 13.9242 17.6166 14.2731 16.801 14.9709L16.3368 15.368C14.8862 16.609 14.1609 17.2294 13.5805 16.9223C13 16.6151 13 15.6108 13 13.6022V8.49134Z"
              fill="#32A0EF"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="job-info">
          <div className="job-name">
            Alberta Raya
            {/* clock */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M7.5 13.5C10.8137 13.5 13.5 10.8137 13.5 7.5C13.5 4.18629 10.8137 1.5 7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5C1.5 10.8137 4.18629 13.5 7.5 13.5Z"
                stroke="#CCD2E3"
                stroke-width="2"
              />
              <path
                d="M10.3125 7.5H7.75C7.61193 7.5 7.5 7.38807 7.5 7.25V5.3125"
                stroke="#CCD2E3"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <div className="job-date">05 feb 2019</div>
          </div>
          <div className="post">Full Stack Ruby on Rails Developer</div>
        </div>
        <div className="job-status">
          <p>New</p>
          <div className="dot">
            {/* filled dot */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            {/* empty dot */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
          </div>
        </div>
        <div className="emoji">
          {/* emoji */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
          >
            <circle
              cx="13.5"
              cy="13.5"
              r="10.125"
              fill="#E8C303"
              stroke="#E8C303"
              stroke-linecap="round"
            />
            <circle
              cx="10.125"
              cy="11.25"
              r="1.125"
              fill="#444343"
              stroke="#444343"
              stroke-linecap="round"
            />
            <ellipse
              cx="16.875"
              cy="11.25"
              rx="1.125"
              ry="1.125"
              fill="#444343"
              stroke="#444343"
              stroke-linecap="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.4093 16.875C8.11883 16.875 7.9736 16.875 7.89962 16.9884C7.82564 17.1018 7.87802 17.2208 7.98278 17.4587C8.69428 19.0742 10.8708 20.25 13.4455 20.25C16.0201 20.25 18.1966 19.0742 18.9081 17.4587C19.0129 17.2208 19.0653 17.1018 18.9913 16.9884C18.9173 16.875 18.7721 16.875 18.4816 16.875H8.4093Z"
              fill="#444343"
            />
          </svg>
          <p style={{ color: "yellow" }}>55%</p>
        </div>
        <div className="menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
              fill="#C5C7CD"
            />
          </svg>
        </div>
      </div>
      {/* Lucas */}
      <div className="job-list">
        {/* point */}
        <div className="point">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18.2937 10.1037C18.2937 14.7182 14.5364 18.4627 9.89687 18.4627V19.4627C15.0846 19.4627 19.2937 15.2745 19.2937 10.1037H18.2937ZM9.89687 18.4627C5.2574 18.4627 1.5 14.7182 1.5 10.1037H0.5C0.5 15.2745 4.70914 19.4627 9.89687 19.4627V18.4627ZM1.5 10.1037C1.5 5.4891 5.2574 1.74463 9.89687 1.74463V0.744629C4.70914 0.744629 0.5 4.9328 0.5 10.1037H1.5ZM9.89687 1.74463C14.5364 1.74463 18.2937 5.4891 18.2937 10.1037H19.2937C19.2937 4.9328 15.0846 0.744629 9.89687 0.744629V1.74463Z"
              fill="#D3D0D0"
            />
          </svg>
        </div>
        {/* image */}
        <img src={img5} alt="" className="job-image" />
        {/* bookmark logo */}
        <div className="bookmark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M13 8.49134C13 6.3741 13 5.31548 13.6041 4.65774C14.2082 4 15.1805 4 17.125 4H19.875C21.8195 4 22.7918 4 23.3959 4.65774C24 5.31548 24 6.3741 24 8.49134V13.6022C24 15.6108 24 16.6151 23.4195 16.9223C22.8391 17.2294 22.1138 16.609 20.6632 15.368L20.199 14.9709C19.3834 14.2731 18.9756 13.9242 18.5 13.9242C18.0244 13.9242 17.6166 14.2731 16.801 14.9709L16.3368 15.368C14.8862 16.609 14.1609 17.2294 13.5805 16.9223C13 16.6151 13 15.6108 13 13.6022V8.49134Z"
              fill="#32A0EF"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="job-info">
          <div className="job-name">
            Lucas Pacheo
            {/* clock */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M7.5 13.5C10.8137 13.5 13.5 10.8137 13.5 7.5C13.5 4.18629 10.8137 1.5 7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5C1.5 10.8137 4.18629 13.5 7.5 13.5Z"
                stroke="#CCD2E3"
                stroke-width="2"
              />
              <path
                d="M10.3125 7.5H7.75C7.61193 7.5 7.5 7.38807 7.5 7.25V5.3125"
                stroke="#CCD2E3"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <div className="job-date">04 feb 2019</div>
          </div>
          <div className="post">Miracle Marketer on Steroid</div>
        </div>
        <div className="job-status">
          <p>Phone Interview</p>
          <div className="dot">
            {/* filled dot */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                fill="black"
                fill-opacity="0.91"
                stroke="black"
              />
            </svg>
            {/* empty dot */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <path
                d="M2.05571 3.53154C1.23196 3.54472 0.545092 2.87947 0.531917 2.05572C0.518742 1.23197 1.18398 0.5451 2.00774 0.531925C2.83149 0.51875 3.51836 1.18399 3.53153 2.00775C3.54471 2.8315 2.87947 3.51837 2.05571 3.53154Z"
                stroke="black"
              />
            </svg>
          </div>
        </div>
        <div className="emoji">
          {/* emoji */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
          >
            <circle
              cx="13.5"
              cy="13.5"
              r="10.125"
              fill="#E8C303"
              stroke="#E8C303"
              stroke-linecap="round"
            />
            <circle
              cx="10.125"
              cy="11.25"
              r="1.125"
              fill="#444343"
              stroke="#444343"
              stroke-linecap="round"
            />
            <ellipse
              cx="16.875"
              cy="11.25"
              rx="1.125"
              ry="1.125"
              fill="#444343"
              stroke="#444343"
              stroke-linecap="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.4093 16.875C8.11883 16.875 7.9736 16.875 7.89962 16.9884C7.82564 17.1018 7.87802 17.2208 7.98278 17.4587C8.69428 19.0742 10.8708 20.25 13.4455 20.25C16.0201 20.25 18.1966 19.0742 18.9081 17.4587C19.0129 17.2208 19.0653 17.1018 18.9913 16.9884C18.9173 16.875 18.7721 16.875 18.4816 16.875H8.4093Z"
              fill="#444343"
            />
          </svg>
          <p style={{ color: "yellow" }}>50%</p>
        </div>
        <div className="menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
              fill="#C5C7CD"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Contentdata;
