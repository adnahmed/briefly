import Image from "next/image";
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
  return (
    <div className={header.class}>
      <div className={headerLeft.class}>
        <Image src={"/logo.svg"} width={176} height={56} alt="logo" />
        <div className={heroButtons.class}>
          <a href="platforms">
            <HeroButton>Platform</HeroButton>
          </a>
          <a href="plans">
            <HeroButton>Plans</HeroButton>
          </a>
          <a href="provider">
            <HeroButton>For providers</HeroButton>
          </a>
          <a href="about_us">
            <HeroButton>About us</HeroButton>
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
