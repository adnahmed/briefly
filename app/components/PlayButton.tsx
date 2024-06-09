import { MouseEventHandler } from "react";
import { tw } from "../lib/tailwindest";

const playButton = tw.style({
  backgroundColor: "bg-white/30",
  backdropBlur: "backdrop-blur-[11.550px]",
  borderRadius: "rounded-[1.75rem]",
  color: "text-white",
  height: "h-[4.43rem]",
  width: "w-[11rem]",
  fontSize: "text-xl",
  alignItems: "items-center",
  justifyContent: "justify-center",
  display: "inline-flex",
  flexShrink: "shrink-0",
  gap: "gap-[.5rem]",
  "@tablet": {
    width: "tablet:w-[12.75rem]",
    fontSize: "tablet:text-2xl",
  },
});

export default function PlayButton({
  onClick,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className={playButton.class} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="27"
        viewBox="0 0 24 27"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.2936 18.3991C17.8286 21.5375 13.4986 24.3608 8.73359 26.2808C4.67851 27.8791 1.28184 25.8858 0.78351 21.8891C0.176843 15.9975 0.190177 10.3575 0.78351 5.09246C1.32684 0.939125 5.06851 -0.824208 8.73359 0.719125C13.4253 2.64079 17.6336 5.24913 21.2936 8.60079C24.4203 11.4325 24.4936 15.4575 21.2936 18.3991Z"
          fill="white"
        />
      </svg>
      <span>Watch now</span>
    </button>
  );
}
