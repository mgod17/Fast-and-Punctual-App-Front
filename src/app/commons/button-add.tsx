import React from "react";

const ButtonAdd: React.FC = () => {
  return (
    <button className="rounded-full ...">
      <svg
        width="58"
        height="58"
        viewBox="0 0 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_189_1977)">
          <circle cx="29" cy="25" r="23" fill="#00EA77" />
        </g>
        <path
          d="M37 25.0001L29 25.0001M29 25.0001L21 25.0001M29 25.0001L29 17M29 25.0001L29 33"
          stroke="#3D1DF3"
          stroke-width="2"
          stroke-linecap="round"
        />
        <defs>
          <filter
            id="filter0_d_189_1977"
            x="0"
            y="0"
            width="58"
            height="58"
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
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_189_1977"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_189_1977"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </button>
  );
};

export default ButtonAdd;
