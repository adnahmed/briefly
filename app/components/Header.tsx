"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { tw } from "../lib/tailwindest";
import { useBreakpoint } from "../lib/useBreakpoint";
import Button from "./Button";
import { HeroButton } from "./Hero";
import { Sidebar } from "./Sidebar";

const header = tw.style({
  display: "flex",
  paddingY: "py-[1rem]",
  justifyContent: "justify-between",
  maxWidth: "max-w-[1920px]",
  maxHeight: "max-h-[4.5rem]",
  "@tablet": {
    maxHeight: "tablet:max-h-[5.5rem]",
  },
  marginX: "mx-[1rem]",
  "@desktop": {
    paddingX: "desktop:px-[13rem]",
    marginX: "desktop:mx-auto",
  },
});

const headerLeft = tw.style({
  display: "flex",
  "@tablet": {},
  "@desktop": {
    flexGrow: "desktop:grow",
    gap: "desktop:gap-[3.0625rem]",
  },
  "@screen": {
    gap: "screen:gap-[5.0625rem]",
  },
});

const headerRight = tw.style({
  display: "flex",
  gap: "gap-[1rem]",
  alignItems: "items-center",
});

const heroButtons = tw.style({
  display: "flex",
  flexDirection: "flex-col",
  "@desktop": {
    display: "desktop:flex",
    flexDirection: "desktop:flex-row",
    justifyContent: "desktop:justify-center",
    alignItems: "desktop:items-center",
  },
});
export const HeroButtons = () => {
  const pathname = usePathname();
  return (
    <div className={heroButtons.class}>
      <a href="platforms">
        <HeroButton isActive={pathname === "/platforms"}>Platform</HeroButton>
      </a>
      <a href="plans">
        <HeroButton isActive={pathname === "/plans"}>Plans</HeroButton>
      </a>
      <a href="provider">
        <HeroButton isActive={pathname === "/provider"}>
          For providers
        </HeroButton>
      </a>
      <a href="about_us">
        <HeroButton isActive={pathname === "/about_us"}>About us</HeroButton>
      </a>
    </div>
  );
};
export const Header = () => {
  const tablet = useBreakpoint("tablet");
  return (
    <div className={header.class}>
      <div className={headerLeft.class}>
        <a href="/">
          <Image
            className="h-full"
            src={"/logo.svg"}
            width={tablet ? 176 : 126}
            height={56}
            alt="logo"
          />
        </a>
        <div className="hidden desktop:block">
          <HeroButtons />
        </div>
      </div>
      <div className={headerRight.class}>
        <div className="hidden desktop:block">
          <Button type="secondary">Launch app</Button>
        </div>
        <Button type="primary">Join Beta</Button>
        <Sidebar />
      </div>
    </div>
  );
};
