import Image from "next/image";
import { tw } from "../lib/tailwindest";
import { useBreakpoint } from "../lib/useBreakpoint";
import { AIBrainChip } from "./AIBrainChip";
import { ShoppingBag } from "./ShoppingBag";
import { Shredder } from "./shred";
import { UpGraphCircle } from "./UpGraphCircle";

const square = tw.variants({
  base: {
    position: "relative",
    overflow: "overflow-hidden",
    height: "h-[28.5rem]",
    display: "flex",
    flexDirection: "flex-col",
    borderRadius: "rounded-2xl",
    justifyContent: "justify-start",
    alignItems: "items-center",
    backgroundColor: "bg-gray-100",
    borderWidth: "border-[1.5px]",
    gap: "gap-[.625rem]",
  },
  variants: {
    type: {
      brief: {
        width: "w-[30rem]",
        paddingX: "px-[2rem]",
        paddingY: "py-[1.5rem]",
        "@tablet": {
          width: "tablet:w-[30.9rem]",
        },
      },
      analytic: {
        width: "w-[30rem]",
        paddingX: "px-[1.43rem]",
        paddingY: "py-[1.5rem]",
        "@tablet": {
          width: "tablet:w-[30.9rem]",
        },
      },
      management: {
        width: "w-[46rem]",
        paddingX: "px-[1.43rem]",
        paddingY: "py-[1.5rem]",
        gradient: "bg-gradient-to-bl",
        gradientStart: "from-orange-100",
        gradientEnd: "to-white",
        "@tablet": {
          width: "tablet:w-[47.38rem]",
        },
      },
      marketplace: {
        paddingX: "px-[1.54rem]",
        paddingY: "py-[1rem]",
        width: "w-[46rem]",
        gradient: "bg-gradient-to-bl",
        gradientStart: "from-pink-100",
        gradientEnd: "to-white",
        "@tablet": {
          width: "tablet:w-[47.38rem]",
        },
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
        bottom: "bottom-[4.53rem]",
        right: "right-[3.28rem]",
        backgroundColor: "bg-blue-950",
        width: "w-[12.345rem]",
        height: "h-[12.345rem]",
        "@tablet": {
          width: "tablet:w-[12.716rem]",
          height: "tablet:h-[12.716rem]",
        },
      },
      analytic: {
        bottom: "bottom-[4.97rem]",
        right: "right-[3.22rem]",
        backgroundColor: "bg-green-light",
        width: "w-[12.345rem]",
        height: "h-[12.345rem]",
        "@tablet": {
          width: "tablet:w-[12.716rem]",
          height: "tablet:h-[12.716rem]",
        },
      },
      management: {
        bottom: "bottom-[3.75rem]",
        right: "right-[4.9rem]",
        backgroundColor: "bg-orange",
        width: "w-[15.75rem]",
        height: "h-[15.75rem]",
        "@tablet": {
          width: "tablet:w-[16.225rem]",
          height: "tablet:h-[16.225rem]",
        },
      },
      marketplace: {
        bottom: "bottom-[7.84rem]",
        right: "right-[5.53rem]",
        backgroundColor: "bg-pink",
        width: "w-[12.345rem]",
        height: "h-[12.345rem]",
        "@tablet": {
          width: "tablet:w-[12.716rem]",
          height: "tablet:h-[12.716rem]",
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
    fontSize: "text-[1.25rem]",
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
      paddingX: "tablet:px-[1.3rem]",
    },
  },
  variants: {
    type: {
      brief: {
        color: "text-gray-950",
        stroke: "stroke-gray-950",
        backgroundColor: "bg-blue-950",
        top: "top-[-1rem]",
        "@tablet": {
          top: "tablet:top-[-3.5rem]",
        },
      },
      analytic: {
        color: "text-green-dark",
        stroke: "stroke-green-dark",
        backgroundColor: "bg-green-light",
        "@tablet": {
          top: "tablet:top-[-2rem]",
        },
      },
      management: {
        color: "text-white",
        stroke: "stroke-white",
        backgroundColor: "bg-orange",
        top: "top-[-2rem]",
        "@tablet": {
          top: "tablet:top-[-3rem]",
        },
      },
      marketplace: {
        backgroundColor: "bg-pink",
        stroke: "stroke-[#44003B]",
        color: "text-[#44003B]",
        top: "top-[-2rem]",
        "@tablet": {
          top: "tablet:top-[-3rem]",
        },
      },
    },
  },
});

const bentoContainer = tw.variants({
  base: {
    maxWidth: "max-w-min",
    gradientEnd: "to-gray-100",
    gradient: "bg-gradient-to-b",
    padding: "p-[.1rem]",
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
    },
  },
});

const bento_desc = tw.variants({
  base: {
    lineHeight: "leading-[1.66rem]",
    alignSelf: "self-start",
    position: "relative",
    color: "text-[#5A6772]",
    maxWidth: "max-w-[36.5rem]",
    letterSpacing: "tracking-[-.033rem]",
    fontSize: "text-[1.125rem]",
    "@tablet": {
      color: "tablet:text-black",
      lineHeight: "tablet:leading-[1.71rem]",
      fontSize: "tablet:text-[1.159rem]",
    },
  },
  variants: {
    type: {
      brief: {
        "@tablet": {
          top: "tablet:top-[-3rem]",
        },
      },
      analytic: {
        "@tablet": {
          top: "tablet:top-[-1.9rem]",
        },
      },
      management: {
        top: "top-[-1.5rem]",
        "@tablet": {
          top: "tablet:top-[-2.5rem]",
        },
      },
      marketplace: {
        top: "top-[-1.5rem]",
        "@tablet": {
          top: "tablet:top-[-2.5rem]",
        },
      },
    },
  },
});

export const BentoSquare = ({
  type = "brief",
}: {
  type: "brief" | "analytic" | "management" | "marketplace";
}) => {
  const tablet = useBreakpoint("tablet");
  let image_src = "";
  let width;
  let height;
  let title;
  let icon;
  let description;
  switch (type) {
    case "brief":
      image_src = "/notepad@2x.png";
      width = tablet ? 298.6 : 240;
      height = tablet ? 298.6 : 240;
      title = "AI Brief";
      icon = <AIBrainChip />;
      description =
        "Empower your projects with AI-driven briefs that streamline communication and ensure clarity, accuracy, and efficiency.";
      break;
    case "analytic":
      image_src = "/bars-chart@2x.png";
      width = tablet ? 308.8 : 240;
      height = tablet ? 308.8 : 240;
      title = "Analytic Analysis";
      icon = <UpGraphCircle />;
      description =
        "Harness data with advanced analytics for actionable insights to drive better decision-making.";
      break;
    case "management":
      image_src = "/suitcase@2x.png";
      width = tablet ? 308.8 : 276;
      height = tablet ? 308.8 : 276;
      title = "Management Tool";
      icon = <Shredder />;
      description =
        "Utilize cutting-edge tools to manage your projects and track progress seamlessly.";
      break;
    case "marketplace":
      image_src = "/bag.png";
      width = tablet ? 308.8 : 276;
      height = tablet ? 308.8 : 276;
      title = "Open Marketplace";
      icon = <ShoppingBag />;
      description =
        "Explore a curated marketplace of experts in marketing, development, creative, and business services.";
      break;
  }
  return (
    <div className={bentoContainer.class({ type })}>
      <div className={square.class({ type })}>
        <div className={squareSplash.class({ type })}></div>
        <Image
          className="z-10"
          alt="bento"
          width={width}
          height={height}
          src={image_src}
        />
        <div className={bento_title.class({ type })}>
          <span>{icon}</span>
          <span>{title}</span>
        </div>
        <span className={bento_desc.class({ type })}>{description}</span>
      </div>
    </div>
  );
};
