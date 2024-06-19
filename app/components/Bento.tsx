"use client";
import Image from "next/image";
import { tw } from "../lib/tailwindest";
import { useBreakpoint } from "../lib/useBreakpoint";
import { AIBrainChip } from "./AIBrainChip";
import { BankIcon } from "./BankIcon";
import { ReceiptIcon } from "./ReceiptIcon";
import { ShoppingBag } from "./ShoppingBag";
import { Shredder } from "./shred";
import { UpGraphCircle } from "./UpGraphCircle";

const square = tw.variants({
  base: {
    position: "relative",
    overflow: "overflow-hidden",
    // maxHeight: "max-h-[22.875rem]",
    "@desktop": {
      maxHeight: "desktop:max-h-[35rem]",
    },
    display: "flex",
    flexDirection: "flex-col",
    borderRadius: "rounded-2xl",
    justifyContent: "justify-between",
    alignItems: "items-center",
    backgroundColor: "bg-gray-100",
    borderWidth: "border-[1.5px]",
    gap: "gap-[.625rem]",
    width: "w-[18.5rem]",
  },
  variants: {
    type: {
      brief: {
        paddingX: "px-[1rem]",
        paddingY: "py-[1.5rem]",
        "@tablet": {
          width: "tablet:w-[30.9rem]",
          paddingX: "tablet:px-[2rem]",
        },
      },
      analytic: {
        paddingX: "px-[1rem]",
        paddingY: "py-[1.5rem]",
        "@tablet": {
          width: "tablet:w-[30rem]",
        },
        "@desktop": {
          width: "desktop:w-[30.9rem]",
          paddingX: "desktop:px-[2rem]",
        },
      },
      management: {
        paddingX: "px-[1.43rem]",
        paddingY: "py-[1.5rem]",
        gradient: "bg-gradient-to-bl",
        gradientStart: "from-orange-100",
        gradientEnd: "to-white",
        "@tablet": {
          width: "tablet:w-[42rem]",
        },
        "@desktop": {
          width: "desktop:w-[47.38rem]",
        },
      },
      marketplace: {
        paddingX: "px-[1.54rem]",
        paddingY: "py-[1rem]",
        gradient: "bg-gradient-to-bl",
        gradientStart: "from-pink-100",
        gradientEnd: "to-white",
        "@tablet": {
          width: "tablet:w-[42rem]",
        },
        "@desktop": {
          width: "desktop:w-[47.38rem]",
        },
      },
      piggy: {
        "@tablet": {
          width: "tablet:w-[38rem]",
          padding: "tablet:p-[2rem]",
          height: "tablet:h-[35rem]",
        },
        width: "w-[22.5rem]",
        height: "h-[24.5rem]",
        paddingY: "py-[1.5rem]",
        paddingX: "px-[1rem]",
      },
      cart: {
        "@tablet": {
          width: "tablet:w-[38rem]",
          padding: "tablet:p-[2rem]",
          height: "tablet:h-[35rem]",
        },
        width: "w-[22.5rem]",
        height: "h-[24.5rem]",
        paddingY: "py-[1.5rem]",
        paddingX: "px-[1rem]",
      },
    },
  },
});

const squareSplash = tw.variants({
  base: {
    position: "absolute",
    filterBlur: "blur-[70.2px]",
  },
  variants: {
    type: {
      brief: {
        width: "w-[7.625rem]",
        height: "h-[7.625rem]",
        backgroundColor: "bg-blue-950",
        "@tablet": {
          bottom: "tablet:bottom-[5.53rem]",
          right: "tablet:right-[3.28rem]",
          width: "tablet:w-[12.345rem]",
          height: "tablet:h-[12.345rem]",
        },
        "@desktop": {
          width: "desktop:w-[12.716rem]",
          height: "desktop:h-[12.716rem]",
        },
      },
      analytic: {
        backgroundColor: "bg-green-light",
        width: "w-[7.625rem]",
        height: "h-[7.625rem]",
        "@tablet": {
          bottom: "tablet:bottom-[4.97rem]",
          right: "tablet:right-[3.22rem]",
          width: "tablet:w-[12.345rem]",
          height: "tablet:h-[12.345rem]",
        },
        "@desktop": {
          width: "desktop:w-[12.716rem]",
          height: "desktop:h-[12.716rem]",
        },
      },
      management: {
        backgroundColor: "bg-orange",
        width: "w-[9.625rem]",
        height: "h-[9.625rem]",
        bottom: "bottom-[4.75rem]",
        right: "right-[1.3rem]",
        "@tablet": {
          bottom: "tablet:bottom-[5.75rem]",
          right: "tablet:right-[4.9rem]",
          width: "tablet:w-[12.75rem]",
          height: "tablet:h-[12.75rem]",
        },
        "@desktop": {
          width: "desktop:w-[14.225rem]",
          height: "desktop:h-[14.225rem]",
        },
      },
      marketplace: {
        backgroundColor: "bg-pink",
        width: "w-[7.625rem]",
        height: "h-[7.625rem]",
        "@tablet": {
          bottom: "tablet:bottom-[7.84rem]",
          right: "tablet:right-[5.53rem]",
          width: "tablet:w-[12.345rem]",
          height: "tablet:h-[12.345rem]",
        },
        "@desktop": {
          width: "desktop:w-[12.716rem]",
          height: "desktop:h-[12.716rem]",
        },
      },
      piggy: {
        backgroundColor: "bg-blue-950",
        width: "w-[9.5363rem]",
        height: "h-[9.5363rem]",
        bottom: "bottom-[10rem]",
        right: "right-[5.19rem]",
        "@tablet": {
          bottom: "tablet:bottom-[16rem]",
          right: "tablet:right-[11rem]",
        },
        "@desktop": {
          bottom: "desktop:bottom-[15rem]",
          right: "desktop:right-[10.19rem]",
          width: "desktop:w-[12.345rem]",
          height: "desktop:h-[12.345rem]",
        },
      },
      cart: {
        backgroundColor: "bg-blue-950",
        width: "w-[9.5363rem]",
        height: "h-[9.5363rem]",
        bottom: "bottom-[10rem]",
        right: "right-[5.19rem]",
        "@tablet": {
          bottom: "tablet:bottom-[15rem]",
          right: "tablet:right-[10rem]",
        },
        "@desktop": {
          bottom: "desktop:bottom-[15rem]",
          right: "desktop:right-[10.19rem]",
          width: "desktop:w-[12.345rem]",
          height: "desktop:h-[12.345rem]",
        },
      },
    },
  },
});

const bento_title = tw.variants({
  base: {
    position: "relative",
    display: "flex",
    justifyContent: "justify-center",
    alignItems: "items-center",
    gap: "gap-[.64rem]",
    fontWeight: "font-bold",
    borderRadius: "rounded-3xl",
    paddingX: "px-[1rem]",
    lineHeight: "leading-[2.56rem]",
    letterSpacing: "tracking-[-0.05rem]",
    fontFamily: "font-serif",
    paddingY: "py-[.5rem]",
    zIndex: "z-10",
    alignSelf: "self-start",
    "@tablet": {
      fontSize: "tablet:text-[1.25rem]",
      paddingX: "tablet:px-[1.3rem]",
    },
  },
  variants: {
    type: {
      brief: {
        color: "text-gray-950",
        stroke: "stroke-gray-950",
        backgroundColor: "bg-blue-950",
        "@screen": {
          top: "screen:top-[-3.5rem]",
        },
      },
      analytic: {
        color: "text-green-dark",
        stroke: "stroke-green-dark",
        backgroundColor: "bg-green-light",
        "@screen": {
          top: "screen:top-[-2rem]",
        },
      },
      management: {
        color: "text-white",
        stroke: "stroke-white",
        backgroundColor: "bg-orange",
        "@screen": {
          top: "screen:top-[-2rem]",
        },
      },
      marketplace: {
        backgroundColor: "bg-pink",
        stroke: "stroke-[#44003B]",
        color: "text-[#44003B]",
        top: "top-[-.5rem]",
        "@tablet": {
          top: "tablet:top-[-1rem]",
        },
        "@screen": {
          top: "screen:top-[-2rem]",
        },
      },
      piggy: {
        color: "text-gray-950",
        stroke: "stroke-gray-950",
        backgroundColor: "bg-blue-950",
      },
      cart: {
        color: "text-gray-950",
        stroke: "stroke-gray-950",
        backgroundColor: "bg-blue-950",
      },
    },
  },
});

const bentoContainer = tw.variants({
  base: {
    gradientEnd: "to-gray-100",
    gradient: "bg-gradient-to-b",
    padding: "p-[1px]",
    borderRadius: "rounded-2xl",
  },
  variants: {
    type: {
      brief: {
        gradientStart: "from-blue-950",
      },
      analytic: {
        gradientStart: "from-green-light",
      },
      management: {
        gradientStart: "from-orange",
      },
      marketplace: {
        gradientStart: "from-pink",
      },
      piggy: {
        gradientStart: "from-blue-950",
      },
      cart: {
        gradientStart: "from-blue-950",
      },
    },
  },
});

const bento_desc = tw.variants({
  base: {
    position: "relative",
    alignSelf: "self-start",
    color: "text-[#5A6772]",
    maxWidth: "max-w-[36.5rem]",
    fontSize: "text-[.875rem]",
    lineHeight: "leading-[1.295rem]",
    letterSpacing: "tracking-[-0.02625rem]",
    "@tablet": {
      lineHeight: "tablet:leading-[1.66rem]",
      letterSpacing: "tablet:tracking-[-.033rem]",
      fontSize: "tablet:text-[1.125rem]",
    },
    "@desktop": {
      lineHeight: "desktop:leading-[1.71rem]",
      fontSize: "desktop:text-[1.159rem]",
    },
  },
  variants: {
    type: {
      brief: {
        "@screen": {
          top: "screen:top-[-3rem]",
        },
      },
      analytic: {
        "@screen": {
          top: "screen:top-[-1.9rem]",
        },
      },
      management: {
        "@screen": {
          top: "screen:top-[-2.5rem]",
        },
      },
      marketplace: {
        top: "top-[-.5rem]",
        "@tablet": {
          top: "tablet:top-[-1rem]",
        },
        "@screen": {
          top: "screen:top-[-2.5rem]",
        },
      },
      piggy: {
        "@tablet": {
          fontSize: "tablet:text-[1.125rem]",
          lineHeight: "tablet:leading-[1.66rem]",
        },
      },
      cart: {
        "@tablet": {
          lineHeight: "tablet:leading-[1.66rem]",
          fontSize: "tablet:text-[1.125rem]",
        },
      },
    },
  },
});

export const BentoSquare = ({
  type = "brief",
}: {
  type: "brief" | "analytic" | "management" | "marketplace" | "piggy" | "cart";
}) => {
  const tablet = useBreakpoint("tablet");
  const screen = useBreakpoint("screen");
  let image_src = "";
  let width = 184;
  let height = 184;
  let title;
  let icon;
  let description;
  switch (type) {
    case "brief":
      image_src = "/notepad@2x.png";
      if (screen) {
        width = 298.6;
        height = 298.6;
      } else if (tablet) {
        width = 240;
        height = 240;
      }
      title = "AI Brief";
      icon = <AIBrainChip />;
      description =
        "Let our AI craft your project briefs, so you can focus on the work that matters most.";
      break;
    case "analytic":
      image_src = "/bars.webp";
      if (screen) {
        width = 308.8;
        height = 308.8;
      } else if (tablet) {
        width = 240;
        height = 240;
      }
      title = "Analytic Analysis";
      icon = <UpGraphCircle />;
      description =
        "Gain the insights you need to drive actionable outcomes and make smarter decisions.";
      break;
    case "management":
      image_src = "/suitcase@2x.png";
      if (screen) {
        width = 308.8;
        height = 308.8;
      } else if (tablet) {
        width = 240;
        height = 240;
      }
      title = "Management Tool";
      icon = <Shredder />;
      description =
        "Achieve more with our tools. Seamless project management and progress tracking made easy.";
      break;
    case "marketplace":
      image_src = "/bag.png";
      if (screen) {
        width = 308.8;
        height = 308.8;
      } else if (tablet) {
        width = 276;
        height = 276;
      }
      title = "Open Marketplace";
      icon = <ShoppingBag />;
      description =
        "Connect with experts in marketing, development, creative, and business services, all carefully curated to perfectly match your needs.";
      break;
    case "piggy":
      image_src = "/piggy.webp";
      if (tablet) {
        width = 285.594;
        height = 285.594;
      }
      title = "What are credits?";
      icon = <BankIcon />;
      description =
        "Brieflly credits give you full control to tackle all your business needs, from quick consultations to full-scale projects and everything in between. Use them however you like to fit your unique requirements.";
      break;
    case "cart":
      image_src = "/cart.webp";
      if (tablet) {
        width = 285.59;
        height = 285.59;
      }
      title = "How credits work?";
      icon = <ReceiptIcon />;
      description =
        "Brieflly credits are the key to accessing any service you need. The number of credits required depends on the scope and complexity of the task, so you only pay for what you use.";
      break;
  }
  return (
    <div className={bentoContainer.class({ type })} dir="ltr">
      <div className={square.class({ type })}>
        <div className={squareSplash.class({ type })}></div>
        <Image
          className="z-10"
          alt="bento"
          width={width}
          height={height}
          src={image_src}
        />
        <div className="flex justify-start gap-[1rem] flex-col">
          <div className={bento_title.class({ type })}>
            <span>{icon}</span>
            <span>{title}</span>
          </div>
          <span className={bento_desc.class({ type })}>{description}</span>
        </div>
      </div>
    </div>
  );
};
