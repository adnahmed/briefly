"use client";
import Image from "next/image";
import { useState } from "react";
import { tw } from "../lib/tailwindest";
const select = tw.style({
  color: "text-blue-dark",
  outlineStyle: "outline-none",
  fontSize: "text-sm",
  display: "flex",
  justifyContent: "justify-between",
  alignItems: "items-center",
  borderRadius: "rounded-3xl",
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

const dropdown = tw.toggle({
  truthy: {
    opacity: "opacity-100",
    height: "h-auto",
    zIndex: "z-50",
    paddingY: "py-2",
  },
  falsy: {
    opacity: "opacity-0",
    height: "h-0",
    maxHeight: "max-h-0",
    zIndex: "-z-50",
    paddingY: "py-0",
  },
  base: {
    transition: "transition-all ease-in-out",
    transitionDuration: "duration-300",
    backgroundColor: "bg-white",
    borderRadius: "rounded-2xl",
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
    padding: "p-[1rem]",
    width: "w-[26rem]",
    position: "relative",
    overflow: "overflow-hidden",
    borderWidth: "border-2",
    borderRadius: "rounded-2xl",
    borderColor: "border-transparent",
    ":hover": {
      borderColor: "hover:border-blue-300",
    },
  },
  truthy: {
    borderColor: "border-blue-300",
  },
  falsy: {},
});

export function FeatureSmall({
  title,
  icon,
  description,
}: {
  title: string;
  icon: string;
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
            className="stroke-blue-950"
            src={icon}
            width={30.86}
            height={30.86}
            alt={`${title} icon`}
          />
          <span className="font-serif text-blue-950 font-medium leading-[2.3123rem] -tracking-[.045rem] text-[1.125rem]">
            {title}
          </span>
        </div>
      </button>
      <div className={dropdown.class(showFeature)}>
        <span className="leading-[0.875rem] -tracking-[.026rem] text-[.875rem]">
          {description}
        </span>
      </div>
    </div>
  );
}
