import React from "react";
import "./ContentStyles.css";
import Sidebar from "./Sidebar.js";
import user from "../assets/user.png";
import { BiSearch, BiToggleLeft, BiToggleRight, BiSort } from "react-icons/bi";
import { BsPersonAdd } from "react-icons/bs";
import { PiBellBold } from "react-icons/pi";
import { AiOutlineMinusCircle } from "react-icons/ai";
import Contentdata from "./Contentdata";

const Content = () => {
  return (
    <div className="content">
      <Sidebar />

      {/* search box and logo */}
      <div className="search">
        <div className="searchx">
          <BiSearch
            className="search-logo"
            size={25}
            style={{ fill: "rgba(0, 0, 0, 0.28)" }}
          />
          <input
            type="text"
            placeholder="Search jobs and application ..."
            className="search-input"
          />
        </div>
        <div className="filter-head">
          <h1>Applications</h1>
          <h4>Filters</h4>

          {/* toggle switches */}
          <div className="switches">
            <BiToggleRight className="g-switch" />
            <p>Show rejected applications</p>
          </div>
          <div className="switches">
            <BiToggleLeft className="switch" />
            <p>Show only subscribed applications</p>
          </div>

          {/* filter options */}
          <div className="list">
            <svg
              className="plus"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 9.88145C18 15.0452 13.9706 19.2313 9 19.2313C4.02944 19.2313 0 15.0452 0 9.88145C0 4.71766 4.02944 0.531586 9 0.531586C13.9706 0.531586 18 4.71766 18 9.88145ZM10 10.8814V15.0758H8V10.8814H4V8.88145H8V4.68708H10V8.88145H14V10.8814H10Z"
                fill="#C4C4C4"
              />
            </svg>
            <p>JOBS</p>
          </div>
          <div className="list">
            <svg
              className="plus"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 9.88145C18 15.0452 13.9706 19.2313 9 19.2313C4.02944 19.2313 0 15.0452 0 9.88145C0 4.71766 4.02944 0.531586 9 0.531586C13.9706 0.531586 18 4.71766 18 9.88145ZM10 10.8814V15.0758H8V10.8814H4V8.88145H8V4.68708H10V8.88145H14V10.8814H10Z"
                fill="#C4C4C4"
              />
            </svg>
            <p>JOBS DOMAINS</p>
          </div>
          <div className="list">
            <svg
              className="plus"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 9.88145C18 15.0452 13.9706 19.2313 9 19.2313C4.02944 19.2313 0 15.0452 0 9.88145C0 4.71766 4.02944 0.531586 9 0.531586C13.9706 0.531586 18 4.71766 18 9.88145ZM10 10.8814V15.0758H8V10.8814H4V8.88145H8V4.68708H10V8.88145H14V10.8814H10Z"
                fill="#C4C4C4"
              />
            </svg>
            <p>SCORE</p>
          </div>
          <div className="list">
            <svg
              className="plus"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 9.88145C18 15.0452 13.9706 19.2313 9 19.2313C4.02944 19.2313 0 15.0452 0 9.88145C0 4.71766 4.02944 0.531586 9 0.531586C13.9706 0.531586 18 4.71766 18 9.88145ZM10 10.8814V15.0758H8V10.8814H4V8.88145H8V4.68708H10V8.88145H14V10.8814H10Z"
                fill="#C4C4C4"
              />
            </svg>
            <p>APPLICATION DATE</p>
          </div>
          <div className="list">
            <svg
              className="plus"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 9.88145C18 15.0452 13.9706 19.2313 9 19.2313C4.02944 19.2313 0 15.0452 0 9.88145C0 4.71766 4.02944 0.531586 9 0.531586C13.9706 0.531586 18 4.71766 18 9.88145ZM10 10.8814V15.0758H8V10.8814H4V8.88145H8V4.68708H10V8.88145H14V10.8814H10Z"
                fill="#C4C4C4"
              />
            </svg>
            <p>TAGS</p>
          </div>
        </div>
      </div>
      <div className="right">
        {/*bell icons*/}
        <PiBellBold className="bell" />

        {/* logo */}
        <img src={user} alt="user" className="user-logo" />

        {/* name and company*/}
        <div className="title">
          <div className="name">Riley Cooper</div>
          <div className="company">Acme International</div>
        </div>

        {/* dropdown */}
        <svg
          className="drop-logo"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
        >
          <path
            d="M7.10513 8.07334L0.964125 0.637739L13.0878 0.509767L7.10513 8.07334Z"
            fill="#C4C4C4"
          />
        </svg>
        <hr
          className="line2"
          style={{ width: "2px", height: "45px", background: "#D3D0D0" }}
        />

        {/* logout icon */}
        <svg
          className="logout"
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="28"
          viewBox="0 0 26 28"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.7839 0.0986328C14.8806 0.0986328 17.3999 2.79932 17.3999 6.11886V7.3837C17.3999 7.94555 16.9745 8.40155 16.4504 8.40155C15.9263 8.40155 15.5009 7.94555 15.5009 7.3837V6.11886C15.5009 3.92031 13.8336 2.13433 11.7839 2.13433H5.61219C3.56506 2.13433 1.899 3.92031 1.899 6.11886V21.2223C1.899 23.4195 3.56506 25.2055 5.61219 25.2055H11.7979C13.8387 25.2055 15.5009 23.425 15.5009 21.2373V19.9575C15.5009 19.3956 15.9263 18.9397 16.4504 18.9397C16.9745 18.9397 17.3999 19.3956 17.3999 19.9575V21.2373C17.3999 24.5487 14.8856 27.2412 11.7979 27.2412H5.61219C2.51808 27.2412 0 24.5419 0 21.2223V6.11886C0 2.79932 2.51808 0.0986328 5.61219 0.0986328H11.7839ZM22.0134 8.99326L25.7202 12.9493C25.7533 12.9845 25.7829 13.021 25.81 13.0597L25.7202 12.9493C25.7651 12.9967 25.805 13.0485 25.8396 13.1037C25.8548 13.1288 25.8695 13.1546 25.8831 13.1812C25.8942 13.202 25.9043 13.2237 25.9138 13.2458C25.9218 13.2653 25.9294 13.2847 25.9365 13.3045C25.9461 13.3303 25.9544 13.3569 25.9618 13.3837C25.9673 13.4049 25.9724 13.426 25.9768 13.4474C25.9825 13.4733 25.9869 13.4994 25.9904 13.5256C25.9924 13.5427 25.9944 13.5606 25.9959 13.5787C25.9987 13.6096 26 13.6397 26 13.6699L25.9935 13.7541L25.9909 13.808C25.9907 13.8103 25.9904 13.8126 25.9901 13.8149L26 13.6699C26 13.7453 25.9922 13.8199 25.9771 13.8924C25.9724 13.9139 25.9673 13.935 25.9616 13.9558C25.9544 13.983 25.9461 14.0095 25.9367 14.0356C25.9294 14.0551 25.9217 14.0746 25.9135 14.0938C25.9043 14.1161 25.8942 14.1378 25.8833 14.1591C25.8695 14.1852 25.8548 14.2111 25.8391 14.2362C25.8302 14.2511 25.8205 14.2657 25.8103 14.2802C25.7802 14.3227 25.7473 14.3627 25.7118 14.3997L22.0134 18.3479C21.8285 18.5461 21.5855 18.6452 21.3436 18.6452C21.1006 18.6452 20.8562 18.5461 20.6714 18.3452C20.3017 17.9462 20.303 17.303 20.6739 16.9067L22.75 14.6878H9.80619C9.28207 14.6878 8.85669 14.2318 8.85669 13.6699C8.85669 13.1081 9.28207 12.6521 9.80619 12.6521H22.7526L20.6739 10.4345C20.303 10.0382 20.3005 9.39497 20.6714 8.99597C21.0411 8.59697 21.6412 8.59697 22.0134 8.99326Z"
            fill="black"
          />
        </svg>
        <div className="jobsite">jobsite</div>
      </div>
      <div className="sub-head">
        <p className="result-p">
          showing <span style={{ fontWeight: "900", color: "gray" }}>45</span>
          results from 108 total
        </p>
        <BsPersonAdd size={24} color="white" className="add-logo" />
      </div>

      {/* frame containing job details */}
      <div className="frame">
        <div className="frame-heading">
          <AiOutlineMinusCircle size={18} />
          <p>deselect 3 rows</p>
        </div>
        <button className="sort">
          <BiSort size={16} className="sort-logo" />
          <p>Sort by: newest first</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M18 9L12 15L6 9" stroke="black" stroke-width="2" />
          </svg>
        </button>

        {/* download option */}
        <div className="frame-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="27"
            viewBox="0 0 24 27"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.5262 19.3261C15.2222 18.8537 15.7787 18.1914 16.1216 17.4138L16.1242 17.4079L16.1242 17.4079C16.2024 17.2305 16.2646 17.0897 16.3143 16.9833C16.3607 16.884 16.4117 16.7804 16.4691 16.699C16.5753 16.5483 16.6969 16.4076 16.8643 16.2977C17.0317 16.1878 17.2091 16.1322 17.3896 16.0946C17.5377 16.0638 17.7255 16.0627 17.9515 16.0615L18.0051 16.0611C19.3858 16.0522 20.4978 14.9256 20.4888 13.545C20.4798 12.1643 19.3533 11.0523 17.9726 11.0612L11.9727 11.1002L5.97288 11.1391C4.59219 11.1481 3.48019 12.2746 3.48916 13.6553C3.49812 15.036 4.62465 16.148 6.00533 16.139L6.0589 16.1387C6.2849 16.137 6.4727 16.1356 6.62116 16.1645C6.80216 16.1997 6.9803 16.253 7.1491 16.3607C7.31789 16.4684 7.44127 16.6076 7.54945 16.7569C7.60788 16.8375 7.66023 16.9405 7.70795 17.0392C7.75904 17.1449 7.82296 17.2849 7.90343 17.4611L7.90622 17.4672C8.25922 18.2402 8.82426 18.8952 9.52631 19.3585L9.53382 20.5165C8.41698 19.9546 7.51745 19.0233 6.99657 17.8826C6.91275 17.699 6.85337 17.569 6.80764 17.4744C6.785 17.4276 6.76801 17.3943 6.75502 17.3705C6.74534 17.3527 6.74018 17.3446 6.73904 17.3428L6.7388 17.3424C6.66917 17.2465 6.63253 17.2173 6.61117 17.2037C6.58973 17.19 6.54762 17.169 6.43021 17.1461C6.39464 17.1392 6.32085 17.137 6.01182 17.139C4.07887 17.1516 2.50172 15.5948 2.48918 13.6618C2.47663 11.7288 4.03343 10.1517 5.96638 10.1392L11.9663 10.1002L17.9661 10.0613C19.8991 10.0487 21.4762 11.6055 21.4888 13.5385C21.5013 15.4714 19.9445 17.0486 18.0116 17.0611C17.7025 17.0631 17.6288 17.0663 17.5933 17.0737C17.4762 17.098 17.4344 17.1196 17.4131 17.1336C17.3919 17.1475 17.3557 17.1771 17.2873 17.2739C17.2873 17.274 17.2872 17.2741 17.2871 17.2743C17.2859 17.2762 17.2809 17.2844 17.2714 17.3022C17.2588 17.3262 17.2422 17.3597 17.2202 17.4068C17.1757 17.502 17.118 17.6328 17.0366 17.8174C16.5305 18.9647 15.6432 19.9077 14.5337 20.484L14.5262 19.3261Z"
              fill="#444343"
            />
            <path
              d="M12.0234 26.0094L12.3778 26.3621L12.0251 26.7165L11.6707 26.3638L12.0234 26.0094ZM11.4999 16.0106C11.4993 15.7344 11.7226 15.51 11.9988 15.5094C12.2749 15.5087 12.4993 15.7321 12.4999 16.0082L11.4999 16.0106ZM16.3684 22.3527L12.3778 26.3621L11.6691 25.6566L15.6597 21.6473L16.3684 22.3527ZM11.6707 26.3638L7.66134 22.3732L8.36678 21.6644L12.3762 25.655L11.6707 26.3638ZM11.5234 26.0105L11.4999 16.0106L12.4999 16.0082L12.5234 26.0082L11.5234 26.0105Z"
              fill="#444343"
            />
          </svg>
          <button className="bulk">
            <p>Bulk Actions</p>
            <svg
              className="down"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M18 9L12 15L6 9" stroke="black" stroke-width="2" />
            </svg>
          </button>
        </div>
        <div className="row">
          <Contentdata />
        </div>
      </div>
    </div>
  );
};

export default Content;
