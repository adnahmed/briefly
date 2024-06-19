import Image from "next/image";
import { tw } from "../lib/tailwindest";
const footer = tw.toggle({
  base: {
    paddingTop: "pt-[4rem]",
    paddingBottom: "pb-[1rem]",
    gap: "gap-[1.53rem]",
    display: "flex",
    flexDirection: "flex-col",
    backgroundColor: "bg-blue-950",
    width: "w-full",
    paddingLeft: "pl-[3rem]",
    paddingRight: "pr-[3.06rem]",
    borderTopRadius: "rounded-t-[1rem]",
    "@desktop": {
      borderTopRadius: "desktop:rounded-t-[5rem]",
      paddingLeft: "desktop:pl-[14rem]",
      paddingRight: "desktop:pr-[14.06rem]",
    },
    "@screen": {
      paddingLeft: "screen:pl-[21rem]",
      paddingRight: "screen:pr-[21.06rem]",
    },
  },
  truthy: {
    height: "h-[28.9375rem]",
    justifyContent: "justify-end",
  },
  falsy: {
    height: "h-[16rem]",
  },
});

const footerStart = tw.style({
  display: "flex",
  gap: "gap-[3.5rem]",
  flexDirection: "flex-col-reverse",
  marginX: "mx-auto",
  maxWidth: "max-w-[1444px]",
  "@desktop": {
    gap: "desktop:gap-[7.5rem]",
    flexDirection: "desktop:flex-row",
    alignItems: "desktop:items-center",
    justifyContent: "desktop:justify-center",
  },
  height: "h-[9.438rem]",
  width: "w-full",
});

const footerEnd = tw.style({
  display: "flex",
  alignItems: "items-start",
  justifyContent: "justify-start",
  borderTopWidth: "border-t-[1px]",
  borderTopColor: "border-t-white",
  paddingY: "py-[1rem]",
});

const business_logo = tw.style({
  display: "flex",
  flexDirection: "flex-col",
  justifyContent: "justify-around",
});
const heroButtons = tw.style({
  display: "flex",
  flexWrap: "flex-wrap",
  "@desktop": {
    flexWrap: "desktop:flex-nowrap",
  },
  justifyContent: "justify-between",
  alignItems: "items-center",
  width: "w-full",
});

const heroButton = tw.style({
  color: "text-white",
  padding: "p-[1rem]",
  height: "h-[3rem]",
  width: "w-max",
  fontWeight: "font-medium",
  ":hover": {
    color: "hover:text-sky",
  },
  ":active": {
    color: "active:text-sky",
  },
});
export const Footer = ({ target = false }: { target?: boolean }) => {
  return (
    <div className={footer.class(target)}>
      <div className={footerStart.class}>
        <a href="/">
          <div className={business_logo.class}>
            <Image src={"/named_logo.svg"} width={176} height={56} alt="logo" />
            <div className="-tracking-[.03rem] leading-[1.48rem] min-w-max text-white">
              Your platform to grow your business.
            </div>
          </div>
        </a>
        <div className={heroButtons.class}>
          <a href="platforms">
            <div className={heroButton.class}>Platform</div>
          </a>

          <a href="plans">
            <div className={heroButton.class}>Plans</div>
          </a>
          <a href="provider">
            <div className={heroButton.class}>For providers</div>
          </a>
          <a href="about_us">
            <div className={heroButton.class}>About us</div>
          </a>
        </div>
      </div>
      <div className={footerEnd.class}>
        <span className="min-w-max leading-[1.2025rem] -tracking-[.02438rem] text-[.8125rem] text-[#AFD0FF]">
          2024 Brieflly, All rights reserved
        </span>
      </div>
    </div>
  );
};
