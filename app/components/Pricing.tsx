"use client";
import { useState } from "react";
import { Rect, useRect } from "react-use-rect";
import { capitalize } from "../lib/helpers";
import { tw } from "../lib/tailwindest";
import { useMousePosition } from "../lib/useMousePosition";
import { Arrow } from "./Arrow";
import { Tick } from "./Tick";

const corner = tw.variants({
  base: {
    position: "absolute",
    top: "-top-[4rem]",
    left: "left-[8rem]",
    zIndex: "-z-10",
    backgroundClip: "bg-clip-border",
    borderRadius: "rounded-[50%]",
    width: "w-[12.625rem]",
    height: "h-[12.625rem]",
    gradient: "bg-gradient-to-bl",
    gradientEnd: "to-gray-100",
    animation: "animate-spin-slow",
  },
  variants: {
    type: {
      starter: {
        gradientStart: "from-sky",
      },
      basic: {
        gradientStart: "from-orange",
      },
      explorer: {
        gradientStart: "from-green-light",
      },
      pro: {
        gradientStart: "from-purple",
      },
    },
  },
});
const pricing = tw.style({
  "@tablet": {
    height: "tablet:h-[31.5rem]",
  },
  position: "relative",
  zIndex: "z-[1]",
  overflow: "overflow-hidden",
  backgroundColor: "bg-gray-100",
  padding: "p-[1.5rem]",
  borderRadius: "rounded-2xl",
});
const pricingContainer = tw.variants({
  base: {
    borderRadius: "rounded-2xl",
    width: "w-max",
    padding: "p-[2px]",
    gradientEnd: "to-gray-950",
  },
  variants: {
    type: {
      starter: {
        gradientStart: "from-blue-950",
      },
      basic: {
        gradientStart: "from-orange",
      },
      explorer: {
        gradientStart: "from-green-light",
      },
      pro: {
        gradientStart: "from-purple",
      },
    },
  },
});
const tagButton = tw.variants({
  base: {
    borderRadius: "rounded-3xl",
    display: "flex",
    justifyContent: "justify-center",
    alignItems: "items-center",
    textAlign: "text-center",
    height: "h-[1.5rem]",
    width: "w-[6rem]",
    fontFamily: "font-serif",
    lineHeight: "leading-[2.5625rem]",
    letterSpacing: "tracking-[-0.0325rem]",
    fontSize: "text-[.8125rem]",
  },
  variants: {
    type: {
      starter: {},
      basic: {},
      explorer: {
        backgroundColor: "bg-green-light",
      },
      pro: {
        backgroundColor: "bg-purple",
        color: "text-white",
      },
    },
  },
});
const featuresList = tw.toggle({
  base: {
    display: "flex",
    flexDirection: "flex-col",
    gap: "gap-[.5rem]",
    transition: "transition ease-in-out",
    transitionProperty: "transition-all",
    transitionDuration: "duration-100",
  },
  truthy: {},
  falsy: {
    transformScale: "scale-0",
    height: "h-[0px]",
    opacity: "opacity-0",
    "@tablet": {
      transformScale: "tablet:scale-100",
      height: "tablet:h-[auto]",
      opacity: "tablet:opacity-100",
    },
  },
});
export const Pricing = ({
  type,
  quarterly = false,
}: {
  type: "starter" | "basic" | "explorer" | "pro";
  quarterly?: boolean;
}) => {
  let features: string[] = [];
  let price = 0;
  let tag;
  let credits: number = 0;
  let description;
  const { x, y } = useMousePosition();
  const [rect, setRect] = useState<Rect | null>(null);
  const [rectRef] = useRect(setRect);
  switch (type) {
    case "starter":
      credits = 100;
      description = "Get started with Brieflly";
      features = [
        "Brieflly AI : Prompt",
        "Project price structure",
      ];
      break;
    case "basic":
      credits = quarterly ? 12769 : 3999;
      price = quarterly ? 7497 : 2499;
      description = "Everything in Starter, plus:";
      features = [
        "Match with the top agencies",
        "Project management system",
        "Team Management",
        "Assets storage: 80 GB",
      ];
      break;
    case "explorer":
      tag = "Most popular";
      credits = quarterly ? 28389 : 9069;
      description = "Everything in Basic, plus:";
      price = quarterly ? 16497 : 5499;
      features = [
        "Performance reporting system",
        "Social analytics tool",
        "Campaign Management tool",
        "Assets storage: 200 GB",
      ];
      break;
    case "pro":
      tag = "Best value";
      credits = quarterly ? 65219 : 21099;
      price = quarterly ? 37497 : 12499;
      description = "Everything in Explorer, plus:";
      features = [
        "Dedicated account manager and project manager",
        "Premium matches",
        "Priorized briefs",
        "Assets storage: 1 TB",
      ];
      break;
    default:
      break;
  }
  const [showFeatures, setShowFeatures] = useState(false);
  return (
    <div
      ref={rectRef}
      style={{
        //@ts-ignore
        "--x": `${x - rect?.left}px`,
        //@ts-ignore
        "--y": `${y - rect?.top}px`,
      }}
      className={`${pricingContainer.class({ type })} bg-radient-[150%_50%_at_var(--x)_var(--y)] relative z-[1]`}
    >
      <div className={pricing.class}>
        <div className={corner.class({ type })}></div>
        <div className="w-[14.5rem] flex gap-[.5rem] flex-col">
          <div>
            <div className="flex justify-between">
              <div className="font-serif leading-[2.5625rem] -tracking-[.05rem] font-bold text-[1.25rem]">
                {capitalize(type)}
              </div>
              <div className={tagButton.class({ type })}>{tag}</div>
            </div>
            <div className="text-[.875rem] leading-[1.295rem] -tracking-[.02625rem]">
              {description}
            </div>
          </div>
          <div className="font-serif flex gap-[1rem] items-center">
            <span className="leading-[2.5625rem] -tracking-[.05rem] font-bold text-[1.25rem]">
              {price ? `$${price.toLocaleString()}` : "Free"}
            </span>
            {price ? (
               quarterly?
              <span className="text-[.8125rem] leading-[1.2025rem] -tracking-[.02438rem] text-[#5A6772B2] ">
               Billed quarterly
              </span>
              :
              <span className="text-[.8125rem] leading-[1.2025rem] -tracking-[.02438rem] text-[#5A6772B2] ">
               Billed monthly
              </span>
            ) : undefined}
          </div>
          <div>{credits.toLocaleString()} credits/month</div>
          <button
            onClick={() => setShowFeatures(!showFeatures)}
            className="flex tablet:hidden gap-[1rem] justify-start  items-center"
          >
            More Information <Arrow on={showFeatures} />
          </button>
          <button className="flex py-[1rem] mt-[1rem] px-[1rem] rounded-3xl border-2 items-center justify-center max-h-[48px]  gap-[.5rem] duration-300 text-white bg-blue-dark border-blue-dark  hover:border-blue-dark-500 hover:bg-blue-dark-500 hover:text-blue-dark  hover:font-medium active:bg-blue-dark-900 active:border-blue-dark-900 active:text-white -tracking-[.04rem]">
            <div className="w-full">Start 14-day {type} trial</div>
          </button>
          <div className={featuresList.class(showFeatures)}>
            {features.map((feature) => (
              <div
                className="text-[.875rem] text-left leading-[1.295rem] -tracking-[.02625rem] text-blue-dark"
                key={feature}
              >
                <Tick text={feature} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
