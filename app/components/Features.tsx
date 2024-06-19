"use client";
import Image from "next/image";
import { useState } from "react";
import { tw } from "../lib/tailwindest";
const select = tw.style({
  color: "text-blue-dark",
  outlineStyle: "outline-none",
  padding: "p-[1rem]",
  fontSize: "text-sm",
  display: "flex",
  justifyContent: "justify-between",
  alignItems: "items-center",
  borderTopRadius: "rounded-t-3xl",
  position: "relative",
  backgroundColor: "bg-white",
});

const featureHeader = tw.style({
  display: "flex",
  alignItems: "items-center",
  minWidth: "min-w-max",
  gap: "gap-[.5rem]",
  fontSize: "text-[15px]",
  paddingLeft: "pl-1",
});

const arrow = tw.toggle({
  truthy: {
    transformRotate: "rotate-180",
  },
  falsy: {},
  base: {
    stroke: "stroke-blue-dark",
    transition: "transition ease-out",
    width: "w-[2rem]",
    height: "h-[2rem]",
  },
});
const dropdown = tw.toggle({
  truthy: {
    opacity: "opacity-100",
    height: "h-auto",
    padding: "p-[1rem]",
    zIndex: "-z-[0]",
    "@desktop": {
      width: "desktop:w-full",
    },
  },
  falsy: {
    opacity: "opacity-0",
    height: "h-0",
    paddingY: "py-0",
    zIndex: "-z-[1]",
  },
  base: {
    position: "relative",
    transition: "transition-all ease-in-out",
    transitionDuration: "duration-300",
    backgroundColor: "bg-white",
    width: "w-[20rem]",
    "@tablet": {
      width: "tablet:w-[25rem]",
    },
    "@desktop": {
      width: "desktop:w-[37rem]",
    },
    display: "flex",
    flexDirection: "flex-col",
    gap: "gap-[1.75rem]",
    alignItems: "items-center",
    justifyContent: "justify-center",
    color: "text-blue-dark-600",
  },
});

const selectContainer = tw.toggle({
  base: {
    display: "flex",
    flexDirection: "flex-col",
    "@desktop": {
      width: "desktop:w-[40rem]",
    },
    width: "w-[20rem]",
    "@tablet": {
      width: "tablet:w-auto",
    },
    borderRadius: "rounded-2xl",
    position: "relative",
    overflow: "overflow-hidden",
  },
  truthy: {
    height: "h-[24rem]",
  },
  falsy: {},
});

export function Feature({
  title,
  icon,
  description,
  feature_image,
}: {
  title: string;
  icon: string;
  feature_image?: string;
  description: string;
}) {
  const [showFeature, setShowFeature] = useState<boolean>(false);
  return (
    <div className={selectContainer.class(showFeature)}>
      <button
        onClick={() => setShowFeature(!showFeature)}
        className={select.class}
      >
        <div className={featureHeader.class}>
          <Image
            src={icon}
            width={30.86}
            height={30.86}
            alt={`${title} icon`}
          />
          <span className="font-serif font-bold leading-[2.3123rem] -tracking-[.045rem] desktop:-tracking-[.05rem] desktop:text-[1.25rem] text-[1rem]">
            {title}
          </span>
        </div>
        <svg
          className={arrow.class(showFeature)}
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M25.3337 11.3348L16.0003 20.6682L6.66699 11.3348"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className={dropdown.class(showFeature)}>
        <span className="leading-[1.48rem] -tracking-[.03rem]">
          {description}
        </span>
        <Image
          className="drop-shadow-xl rounded-[1.4rem]"
          src={feature_image ? feature_image : "/default_feature_image.png"}
          alt="feature image"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
