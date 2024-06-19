import { tw } from "../lib/tailwindest";

const arrow = tw.toggle({
  truthy: {
    transformRotate: "rotate-180",
  },
  falsy: {},
  base: {
    stroke: "stroke-blue-dark",
    transition: "transition ease-out",
    width: "w-2.5",
    height: "h-2.5",
  },
});

export const Arrow = ({
  on,
  disabled = false,
}: {
  on: boolean;
  disabled?: boolean;
}) => {
  return (
    <svg
      className={`${arrow.class(on)} ${disabled ? "stroke-[#5A6772]" : ""}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  );
};
