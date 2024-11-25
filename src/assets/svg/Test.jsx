import { useState } from "react";

/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line react/prop-types
export default function Test({ num }) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = function () {
    setIsClicked((prev) => !prev);
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="133.612"
      height="92.345"
      viewBox="0 0 133.612 92.345"
    >
      <defs>
        <filter
          id="Path_113"
          x="0"
          y="0"
          width="133.093"
          height="92.345"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feFlood floodColor="#aa4db9" floodOpacity="0.102" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Path_113-2"
          x="104.507"
          y="65.454"
          width="29.104"
          height="24.637"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="2.5" result="blur-2" />
          <feFlood floodColor="#aa4db9" floodOpacity="0.102" />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g
        id="Group_208424"
        data-name="Group 208424"
        transform="translate(11.56 11.527)"
      >
        <g
          id="Group_208208"
          data-name="Group 208208"
          transform="translate(0 0)"
        >
          <g id="Group_43518" data-name="Group 43518">
            <g
              transform="matrix(1, 0, 0, 1, -11.56, -11.53)"
              filter="url(#Path_113)"
            >
              <path
                id="Path_113-3"
                data-name="Path 113"
                d="M24.811,51.765c-39.433,16.485-14.57,62.872,15.339,61,4.477-.281,9.558-.39,14.9-.551-.289,1.608,9.23.5,9.73-.392,19.464-1.07,39.657-4.447,45.73-19.914C132.434,36.054,57.285,38.189,24.811,51.765Z"
                transform="translate(7.12 -32.18)"
                fill={isClicked ? "#EC938E" : "#9DCBDB"}
                stroke="#fff"
                strokeWidth="8"
              />
            </g>
            <path
              id="Path_150"
              data-name="Path 150"
              d="M199.856,57.8a.3.3,0,0,1-.145-.037c-16.27-8.908-33.38-6.547-33.55-6.522a.3.3,0,1,1-.087-.6c.173-.024,17.482-2.413,33.927,6.591a.3.3,0,0,1-.145.566Z"
              transform="translate(-106.333 -46.341)"
              fill="#fff"
              stroke="#fff"
              strokeWidth="1"
            />
            <path
              id="Path_151"
              data-name="Path 151"
              d="M234.252,67.4a.3.3,0,0,1-.28-.19c-.867-2.175-4.965-2.865-5.006-2.872a.3.3,0,0,1-.25-.346.3.3,0,0,1,.346-.249c.182.029,4.477.751,5.47,3.244a.3.3,0,0,1-.28.413Z"
              transform="translate(-141.595 -51.66)"
              fill="#fff"
              stroke="#fff"
              strokeWidth="1"
            />
            <path
              id="Path_152"
              data-name="Path 152"
              d="M60.964,173.585h-.011c-20.138-.733-29.521-13.15-29.614-13.275a.3.3,0,0,1,.485-.358c.09.123,9.317,12.308,29.15,13.03a.3.3,0,0,1-.011.6Z"
              transform="translate(-15.098 -107.604)"
              fill="#fff"
              stroke="#fff"
              strokeWidth="1"
            />
          </g>
          <g
            id="Group_43520"
            data-name="Group 43520"
            transform="translate(101.523 62.487)"
          >
            <g
              transform="matrix(1, 0, 0, 1, -113.08, -74.01)"
              filter="url(#Path_113-2)"
            >
              <path
                id="Path_113-4"
                data-name="Path 113"
                d="M6.671,44.591c-4.31,1.8-1.593,6.872,1.677,6.667.489-.031,1.045-.043,1.629-.06-.032.176,1.009.054,1.064-.043,2.127-.117,4.335-.486,5-2.177C18.435,42.873,10.221,43.107,6.671,44.591Z"
                transform="translate(108.64 30.3)"
                fill={isClicked ? "#EC938E" : "#9DCBDB"}
                stroke="#fff"
                strokeWidth="2"
              />
            </g>
          </g>
        </g>
        <text
          id="_12"
          data-name="12"
          transform="translate(56.243 38.588)"
          fill="#fff"
          fontSize="17"
          fontFamily="SegoeUI, Segoe UI"
          onClick={handleClick}
        >
          <tspan x={typeof num === "string" ? "-45" : "-9.164"} y="0">
            {num}
          </tspan>
        </text>
      </g>
    </svg>
  );
}
