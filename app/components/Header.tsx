"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { tw } from "../lib/tailwindest";
import Button from "./Button";
import { HeroButton } from "./Hero";

const header = tw.style({
  display: "flex",
  width: "w-full",
  paddingY: "py-[1rem]",
  paddingX: "px-[13rem]",
  justifyContent: "justify-between",
  gap: "gap-[26rem]",
});

const headerLeft = tw.style({
  display: "flex",
  width: "w-[46rem]",
  gap: "gap-[5.0625rem]",
});

const headerRight = tw.style({
  display: "flex",
  gap: "gap-[.5rem]",
});

const heroButtons = tw.style({
  display: "flex",
  justifyContent: "justify-center",
  alignItems: "items-center",
});

export const Header = () => {
  const pathname = usePathname();
  return (
    <div className={header.class}>
      <div className={headerLeft.class}>
        <a href="/">
          <Image src={"/logo.svg"} width={176} height={56} alt="logo" />
        </a>
        <div className={heroButtons.class}>
          <a href="platforms">
            <HeroButton isActive={pathname === "/platforms"}>
              Platform
            </HeroButton>
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
            <HeroButton isActive={pathname === "/about_us"}>
              About us
            </HeroButton>
          </a>
        </div>
      </div>
      <div className={headerRight.class}>
        <Button type="secondary">Launch app</Button>
        <Button type="primary">Join Beta</Button>
      </div>
    </div>
  );
};
