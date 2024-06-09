import { capitalize } from "../lib/helpers";
import { tw } from "../lib/tailwindest";
import { Dropdown } from "./Dropdown";
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
  height: "h-[31.5rem]",
  position: "relative",
  zIndex: "z-[3]",
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
    gradient: "bg-gradient-to-b",
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
export const Pricing = ({
  type,
}: {
  type: "starter" | "basic" | "explorer" | "pro";
}) => {
  let features = [];
  let price = 0;
  let tag;
  let credits = [];
  let description;
  switch (type) {
    case "starter":
      credits = ["100"];
      description = "Get started with Brieflly and explore its integrations.";
      features = [
        "Unlimited users",
        "Access to 50+ data providers",
        "AI message writing",
        "Up to 100 per people/company search",
      ];
      break;
    case "basic":
      credits = ["100", "2000"];
      price = 149;
      description = "Perfect for individuals and professional recruiters.";
      features = [
        "Unlimited users",
        "Export to CSV",
        "Create unlimited tables",
        "Use your own API keys",
        "Up to 5,000 per people/company search",
      ];
      break;
    case "explorer":
      tag = "Most popular";
      credits = ["100", "2000", "10000"];
      description = "Best for early-stage startups and growth agencies.";
      price = 349;
      features = [
        "Unlimited users",
        "Email tool integrations",
        "Get data from anywhere",
        "Send data anywhere",
        "Up to 25,000 per people/company search",
      ];
      break;
    case "pro":
      tag = "Best value";
      credits = ["100", "2000", "10000"];
      price = 800;
      description = "Best for growth teams and expanding companies.";
      features = [
        "Unlimited users",
        "CRM integrations",
        "Up to 50,000 per people/company search",
      ];
      break;
    default:
      break;
  }
  return (
    <div className={pricingContainer.class({ type })}>
      <div className={pricing.class}>
        <div className={corner.class({ type })}></div>
        <div className="w-[14.5rem] flex gap-[.5rem] flex-col">
          <div>
            <div className="font-serif leading-[2.5625rem] -tracking-[.05rem] font-bold text-[1.25rem]">
              {capitalize(type)}
            </div>
            <div className="text-[.875rem] leading-[1.295rem] -tracking-[.02625rem]">
              {description}
            </div>
          </div>
          <div className="font-serif flex gap-[1rem] items-center">
            <span className="leading-[2.5625rem] -tracking-[.05rem] font-bold text-[1.25rem]">
              {price ? `$${price}` : "Free"}
            </span>
            {price ? (
              <span className="text-[.8125rem] leading-[1.2025rem] -tracking-[.02438rem] text-[#5A6772B2] ">
                Billed monthly
              </span>
            ) : undefined}
          </div>
          <Dropdown
            disabled={credits.length === 1}
            defaultOption={credits[credits.length - 1]}
            options={credits}
          />
          <button className="flex py-[1rem] mt-[1rem] px-[1rem] rounded-3xl border-2 items-center justify-center max-h-[48px]  gap-[.5rem] duration-300 text-white bg-blue-dark border-blue-dark  hover:border-blue-dark-500 hover:bg-blue-dark-500 hover:text-blue-dark  hover:font-medium active:bg-blue-dark-900 active:border-blue-dark-900 active:text-white -tracking-[.04rem]">
            <div className="w-full">Start 14-day pro trial</div>
          </button>
          <div className="flex flex-col gap-[.5rem]">
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
