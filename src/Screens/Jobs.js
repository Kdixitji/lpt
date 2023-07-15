import React from "react";
import "./JobStyles.css";
import { BsCircle } from "react-icons/bs";
import img1 from "./images/Rectangle 293.png";
import img2 from "./images/Rectangle 296.png";
import img3 from "./images/Rectangle 298.png";
import img4 from "./images/Rectangle 300.png";
import img5 from "./images/Rectangle 302.png";
import img6 from "./images/Rectangle 304.png";

const Jobs = () => {
  return (
    <div
      className="job"
      style={{
        width: 879,
        height: 656.98,
        background: "#FCFBFF",
        borderRadius: 22,
      }}
    >
      <div
        style={{
          color: "black",
          fontSize: 20,
          fontFamily: "Poppins",
          fontWeight: "500",
          textTransform: "capitalize",
          wordWrap: "break-word",
        }}
      >
        Applications
      </div>
      {/* Techmint */}
      <div
        className="jobs"
        style={{
          width: 854.25,
          height: 84.82,
          background: "white",
          boxShadow: "5px 3px 5px rgba(0, 0, 0, 0.10)",
          borderRadius: 16,
        }}
      >
        <img className="job-logo" src={img1} alt="" />
        <div className="job-names">
          <div
            style={{
              color: "black",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            Product Designer
          </div>
          <div
            style={{
              opacity: 0.5,
              color: "black",
              fontSize: 12,
              fontFamily: "Poppins",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            Techmint , On-site{" "}
          </div>
          <div
            style={{
              opacity: 0.5,
              color: "black",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            Bengaluru, India
          </div>
        </div>
        <div className="job-price">
          <div>
            <span
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Inter",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              ₹
            </span>
            <span
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Poppins",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              50K -
            </span>
            <span
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Inter",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              ₹
            </span>
            <span
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Poppins",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              70K
            </span>
          </div>
          <div
            style={{
              opacity: 0.5,
              color: "black",
              fontSize: 10,
              fontFamily: "Inter",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            Per Month
          </div>
        </div>
        <div
          className="status"
          style={{
            width: 105,
            height: 25,
            background: "#FFAAAA",
            boxShadow: "0px 0px 9.398426055908203px rgba(0, 0, 0, 0.25)",
            borderRadius: 14.1,
          }}
        >
          <span className="status-text" style={{ color: "red" }}>
            Rejected
          </span>
        </div>
        <svg
          className="question"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="31"
          viewBox="0 0 30 31"
          fill="none"
        >
          <g filter="url(#filter0_d_1_250)">
            <ellipse
              cx="14.9295"
              cy="14.0363"
              rx="10.9295"
              ry="10.9959"
              fill="white"
            />
          </g>
          <path
            d="M14.9198 24.0375C20.4426 24.0375 24.9198 19.5604 24.9198 14.0375C24.9198 8.51466 20.4426 4.03751 14.9198 4.03751C9.39694 4.03751 4.91979 8.51466 4.91979 14.0375C4.91979 19.5604 9.39694 24.0375 14.9198 24.0375Z"
            stroke="#BC0F0F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.0096 11.0376C12.2447 10.3693 12.7088 9.80569 13.3196 9.44672C13.9304 9.08775 14.6485 8.95653 15.3468 9.0763C16.0451 9.19607 16.6784 9.55911 17.1347 10.1011C17.591 10.6431 17.8407 11.3291 17.8396 12.0376C17.8396 14.0376 14.8396 15.0376 14.8396 15.0376"
            stroke="#BC0F0F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.9198 19.0375H14.9298"
            stroke="#BC0F0F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <filter
              id="filter0_d_1_250"
              x="0"
              y="0.0404053"
              width="29.859"
              height="29.9918"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_250"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_250"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      {/* Unacademy */}
      <div
        className="jobs"
        style={{
          width: 854.25,
          height: 84.82,
          background: "white",
          boxShadow: "5px 3px 5px rgba(0, 0, 0, 0.10)",
          borderRadius: 16,
        }}
      >
        <img className="job-logo" src={img2} alt="" />
        {/* title name, description */}
        <div className="job-names">
          <div
            style={{
              color: "black",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            Product Designer
          </div>
          <div
            style={{
              opacity: 0.5,
              color: "black",
              fontSize: 12,
              fontFamily: "Poppins",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            Unacademy , W.F.H
          </div>
          <div
            style={{
              opacity: 0.5,
              color: "black",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            Bengaluru, India
          </div>
        </div>
        <div className="job-price">
          <div>
            <span
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Inter",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              ₹
            </span>
            <span
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Poppins",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              60K -
            </span>
            <span
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Inter",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              ₹
            </span>
            <span
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Poppins",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              80K
            </span>
          </div>
          <div
            style={{
              opacity: 0.5,
              color: "black",
              fontSize: 10,
              fontFamily: "Inter",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            Per Month
          </div>
        </div>
        <div
          style={{
            width: 105,
            height: 25,
            background: "#FFF3B2",
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)",
            borderRadius: 12,
          }}
        >
          <span className="status-text" style={{ color: "black" }}>
            In Process
          </span>
        </div>
        <BsCircle className="question" color="white" />
      </div>
      {/* Technovus */}
      <div
        className="jobs"
        style={{
          width: 854.25,
          height: 84.82,
          background: "white",
          boxShadow: "5px 3px 5px rgba(0, 0, 0, 0.10)",
          borderRadius: 16,
        }}
      >
        <img className="job-logo" src={img3} alt="" />
        {/* title name, description */}
        <div className="job-names">
          <div
            style={{
              color: "black",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            UX Designer
          </div>
          <div
            style={{
              opacity: 0.5,
              color: "black",
              fontSize: 12,
              fontFamily: "Poppins",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            Technovus, On-Site
          </div>
          <div
            style={{
              opacity: 0.5,
              color: "black",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            Bengaluru, India
          </div>
        </div>
        <div className="job-price">
          <div>
            <span
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Inter",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              ₹
            </span>
            <span
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Poppins",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              60K -
            </span>
            <span
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Inter",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              ₹
            </span>
            <span
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Poppins",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              75K
            </span>
          </div>
          <div
            style={{
              opacity: 0.5,
              color: "black",
              fontSize: 10,
              fontFamily: "Inter",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            Per Month
          </div>
        </div>
        <div
          style={{
            width: 105,
            height: 25,
            background: "#C4FFD1",
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)",
            borderRadius: 12,
          }}
        >
          <span className="status-text" style={{ color: "green" }}>
            Selected
          </span>
        </div>
        <BsCircle className="question" color="white" />
      </div>
      {/* Udemy */}
      <div
        className="jobs"
        style={{
          width: 854.25,
          height: 84.82,
          background: "white",
          boxShadow: "5px 3px 5px rgba(0, 0, 0, 0.10)",
          borderRadius: 16,
        }}
      >
        <img className="job-logo" src={img4} alt="" />
        {/* title name, description */}
        <div className="job-names">
          <div
            style={{
              color: "black",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            Product Designer
          </div>
          <div
            style={{
              opacity: 0.5,
              color: "black",
              fontSize: 12,
              fontFamily: "Poppins",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            Udemy , On-Site
          </div>
          <div
            style={{
              opacity: 0.5,
              color: "black",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            Delhi, India
          </div>
        </div>
        <div className="job-price">
          <div>
            <span
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Inter",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              ₹
            </span>
            <span
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Poppins",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              80K -
            </span>
            <span
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Inter",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              ₹
            </span>
            <span
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Poppins",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              95K
            </span>
          </div>
          <div
            style={{
              opacity: 0.5,
              color: "black",
              fontSize: 10,
              fontFamily: "Inter",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            Per Month
          </div>
        </div>
        <div
          style={{
            width: 105,
            height: 25,
            background: "#FFF3B2",
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)",
            borderRadius: 12,
          }}
        >
          <span className="status-text" style={{ color: "black" }}>
            In Process
          </span>
        </div>
        <BsCircle className="question" color="white" />
      </div>
      {/* ursa */}
      <div
        className="jobs"
        style={{
          width: 854.25,
          height: 84.82,
          background: "white",
          boxShadow: "5px 3px 5px rgba(0, 0, 0, 0.10)",
          borderRadius: 16,
        }}
      >
        <img className="job-logo" src={img5} alt="" />
        {/* title name, description */}
        <div className="job-names">
          <div
            style={{
              color: "black",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            UX Designer
          </div>
          <div
            style={{
              opacity: 0.5,
              color: "black",
              fontSize: 12,
              fontFamily: "Poppins",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            URSA, On-Site
          </div>
          <div
            style={{
              opacity: 0.5,
              color: "black",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            Bengaluru, India
          </div>
        </div>
        <div className="job-price">
          <div>
            <span
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Inter",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              ₹
            </span>
            <span
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Poppins",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              60K -
            </span>
            <span
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Inter",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              ₹
            </span>
            <span
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Poppins",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              75K
            </span>
          </div>
          <div
            style={{
              opacity: 0.5,
              color: "black",
              fontSize: 10,
              fontFamily: "Inter",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            Per Month
          </div>
        </div>
        <div
          style={{
            width: 105,
            height: 25,
            background: "#C4FFD1",
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)",
            borderRadius: 12,
          }}
        >
          <span className="status-text" style={{ color: "green" }}>
            Selected
          </span>
        </div>
        <BsCircle className="question" color="white" />
      </div>
      {/* Techmint */}
      <div
        className="jobs"
        style={{
          width: 854.25,
          height: 84.82,
          background: "white",
          boxShadow: "5px 3px 5px rgba(0, 0, 0, 0.10)",
          borderRadius: 16,
        }}
      >
        <img className="job-logo" src={img6} alt="" />
        <div className="job-names">
          <div
            style={{
              color: "black",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            UX Designer
          </div>
          <div
            style={{
              opacity: 0.5,
              color: "black",
              fontSize: 12,
              fontFamily: "Poppins",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            Servio Tech, Hybrid
          </div>
          <div
            style={{
              opacity: 0.5,
              color: "black",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            Delhi, India
          </div>
        </div>
        <div className="job-price">
          <div>
            <span
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Inter",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              ₹
            </span>
            <span
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Poppins",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              60K -
            </span>
            <span
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Inter",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              ₹
            </span>
            <span
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Poppins",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              75K
            </span>
          </div>
          <div
            style={{
              opacity: 0.5,
              color: "black",
              fontSize: 10,
              fontFamily: "Inter",
              fontWeight: "500",
              textTransform: "capitalize",
              wordWrap: "break-word",
            }}
          >
            Per Month
          </div>
        </div>
        <div
          className="status"
          style={{
            width: 105,
            height: 25,
            background: "#FFAAAA",
            boxShadow: "0px 0px 9.398426055908203px rgba(0, 0, 0, 0.25)",
            borderRadius: 14.1,
          }}
        >
          <span className="status-text" style={{ color: "red" }}>
            Rejected
          </span>
        </div>
        <svg
          className="question"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="31"
          viewBox="0 0 30 31"
          fill="none"
        >
          <g filter="url(#filter0_d_1_250)">
            <ellipse
              cx="14.9295"
              cy="14.0363"
              rx="10.9295"
              ry="10.9959"
              fill="white"
            />
          </g>
          <path
            d="M14.9198 24.0375C20.4426 24.0375 24.9198 19.5604 24.9198 14.0375C24.9198 8.51466 20.4426 4.03751 14.9198 4.03751C9.39694 4.03751 4.91979 8.51466 4.91979 14.0375C4.91979 19.5604 9.39694 24.0375 14.9198 24.0375Z"
            stroke="#BC0F0F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.0096 11.0376C12.2447 10.3693 12.7088 9.80569 13.3196 9.44672C13.9304 9.08775 14.6485 8.95653 15.3468 9.0763C16.0451 9.19607 16.6784 9.55911 17.1347 10.1011C17.591 10.6431 17.8407 11.3291 17.8396 12.0376C17.8396 14.0376 14.8396 15.0376 14.8396 15.0376"
            stroke="#BC0F0F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.9198 19.0375H14.9298"
            stroke="#BC0F0F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <filter
              id="filter0_d_1_250"
              x="0"
              y="0.0404053"
              width="29.859"
              height="29.9918"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_250"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_250"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Jobs;
