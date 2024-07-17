"use client";
import Image from "next/image";
import { MouseEventHandler } from "react";
import { useBreakpoint } from "../lib/useBreakpoint";
import Button from "./Button";
import { Discord } from "./Discord";
import { Instagram } from "./Instagram";
import { Linkedin } from "./Linkedin";
import { Microsoft } from "./Microsoft";
import { XTwitter } from "./XTwitter";
type LogoType =
  | "microsoft"
  | "instagram"
  | "versal"
  | "x"
  | "discord"
  | "linkedin";
export const Logos = ({
  type,
  onClick,
}: {
  type: LogoType;
  onClick?: MouseEventHandler<SVGSVGElement>;
}) => {
  switch (type) {
    case "microsoft":
      return <Microsoft onClick={onClick} />;
    case "instagram":
      return <Instagram onClick={onClick} />;
    case "x":
      return <XTwitter onClick={onClick} />;
    case "discord":
      return <Discord onClick={onClick} />;
    case "linkedin":
      return <Linkedin onClick={onClick} />;
    default:
      return (
        <div
          style={{
            backgroundImage: `url(/${type}.png)`,
          }}
          className="flex justify-center items-center bg-contain bg-no-repeat bg-center w-[156px]  min-h-[105px]"
        ></div>
      );
  }
};

export const TargetLogo = ({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action: string;
}) => {
  const tablet = useBreakpoint("tablet");
  const desktop = useBreakpoint("desktop");
  const screen = useBreakpoint("screen");
  let width = 194;
  let height = 194;
  if (screen) {
    width = 385;
    height = 385;
  } else if (desktop) {
    width = 372;
    height = 372;
  } else if (tablet) {
    width = 250;
    height = 250;
  }
  return (
    <div className="px-[1.5rem] relative flex flex-col-reverse desktop:flex-col items-center desktop:items-start overflow-hidden bg-[#99CCFF] desktop:w-[62rem] screen:w-[63.86rem] desktop:h-[18.9rem] desktop:px-[3rem] screen:px-[3.09rem] py-[2.375rem] desktop:py-[2.44625rem] gap-[.625rem] rounded-[2rem] desktop:rounded-[2.06rem]">
      <div className="flex flex-col gap-[1rem] items-start desktop:h-[5rem] desktop:w-[26rem]">
        <span className="text-[1.5rem] leading-[2.5625rem] -tracking-[.06rem] tablet:text-[2.5rem] desktop:text-[2.575rem] desktop:leading-[2.63938rem]  font-serif font-bold tablet:leading-[2.5625rem] desktop:-tracking-[.103rem] tablet:-tracking-[.1rem]">
          {title}
        </span>
        <span className="font-sans text-[.875rem] leading-[1.295rem] desktop:leading-[1.71494rem] -tracking-[.02625rem] tablet:leading-[1.665rem] tablet:-tracking-[.03375rem] desktop:-tracking-[.03475rem] tablet:text-[1.125rem] desktop:text-[1.15875rem]">
          {description}
        </span>
        <Button icon type="primary">
          {action}
        </Button>
      </div>
      <Image
        className="desktop:absolute top-0 right-0"
        src="/target.webp"
        width={width}
        height={height}
        alt="target icon"
      />
    </div>
  );
};
