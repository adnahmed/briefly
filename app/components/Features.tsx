"use client";
import Image from "next/image";
import { useState } from "react";
import { tw } from "../lib/tailwindest";
const select = tw.toggle({
  base: {
    color: "text-blue-dark",
    transitionProperty: "transition-all",
    transitionDuration: "duration-300",
    outlineStyle: "outline-none",
    padding: "p-[1rem]",
    fontSize: "text-sm",
    display: "flex",
    justifyContent: "justify-between",
    alignItems: "items-center",
    backgroundColor: "bg-white",
  },
  truthy: {
    borderTopRadius: "rounded-t-3xl",
    transitionTimingFunction: "ease-out",
  },
  falsy: {
    borderRadius: "rounded-3xl",
    transitionTimingFunction: "ease-in",
  },
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
const featureImage = tw.variants({
  base: {
    backgroundSize: "bg-contain",
    backgroundPosition: "bg-center",
    backgroundRepeat: "bg-no-repeat",
    width: "w-full",
    maxWidth: "max-w-[100cvw]",
    height: "h-full",
    minHeight: "min-h-[200px]",
  },
  variants: {
    type: {
      research: {
        marginBottom: "mb-[1rem]",
      },
      market: {
        marginLeft: "ml-[2rem]",
      },
      payment_secure: {},
      monitoring: {
        marginBottom: "mb-[1rem]",
        marginLeft: "ml-[2rem]",
      },
      reporting: {},
      management: {
        marginLeft: "ml-[2rem]",
      },
      [""]: {},
    },
  },
});
const dropdown = tw.style({
  backgroundColor: "bg-white",
  width: "w-full",
  "@tablet": {
    width: "tablet:w-[25rem]",
  },
  "@desktop": {
    width: "desktop:w-full",
  },
  display: "flex",
  flexDirection: "flex-col",
  // gap: "gap-[1.75rem]",
  alignItems: "items-center",
  justifyContent: "justify-center",
  color: "text-blue-dark-600",
  borderBottomRadius: "rounded-b-3xl",
  overflow: "overflow-hidden",
});

const selectContainer = tw.toggle({
  base: {
    display: "grid",
    flexDirection: "flex-col",
    "@desktop": {
      width: "desktop:w-[40rem]",
    },
    maxHeight: "max-h-[24rem]",
    width: "w-[20rem]",
    "@tablet": {
      width: "tablet:w-auto",
    },
    borderRadius: "rounded-2xl",
  },
  truthy: {
    gridTemplateRows: "grid-rows-[min-content_1fr]",
  },
  falsy: {
    gridTemplateRows: "grid-rows-[min-content_0fr]",
  },
});

export function Feature({
  title,
  icon,
  description,
  type,
}: {
  title: string;
  icon: string;
  feature_image?: string;
  description: string;
  type?:
    | "market"
    | "research"
    | "payment_secure"
    | "monitoring"
    | "reporting"
    | "management";
}) {
  const [showFeature, setShowFeature] = useState<boolean>(false);
  let feature_image = "default_feature_image.png";
  switch (type) {
    case "market":
      feature_image = "match_market_feature.png";
      break;
    case "research":
      feature_image = "research.png";
      break;
    case "payment_secure":
      feature_image = "payment_secure.png";
      break;
    case "monitoring":
      feature_image = "monitoring.png";
      break;
    case "reporting":
      feature_image = "reporting.png";
      break;
    case "management":
      feature_image = "management.png";
      break;
    default:
      feature_image = "default_feature_image.png";
  }
  return (
    <div
      style={{
        transitionProperty: "grid-template-rows",
        transitionDuration: "300ms",
      }}
      className={selectContainer.class(showFeature)}
    >
      <button
        onClick={() => setShowFeature(!showFeature)}
        className={select.class(showFeature)}
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
      <div className="overflow-hidden">
        <div className={dropdown.class}>
          <span className="leading-[1.48rem] -tracking-[.03rem] p-[1rem] pt-0">
            {description}
          </span>
          <div
            className={featureImage.class({ type: type ?? "" })}
            style={{
              backgroundImage: `url(/${feature_image ? feature_image : "/default_feature_image.png"})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
