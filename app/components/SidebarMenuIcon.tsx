import { MouseEventHandler } from "react";

export const MenuIcon = ({
  onClick,
}: {
  onClick: MouseEventHandler<SVGSVGElement>;
}) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M5.75977 25.3H26.2398"
        stroke="#001428"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.75977 7.37999H26.2398"
        stroke="#001428"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.75977 16.34H26.2398"
        stroke="#001428"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
