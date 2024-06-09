"use client";
import Image from "next/image";
import { MouseEventHandler } from "react";
import { useBreakpoint } from "../lib/useBreakpoint";
import { Airbnb } from "./Airbnb";
import Button from "./Button";
import { Discord } from "./Discord";
import { Instagram } from "./Instagram";
import { Linkedin } from "./Linkedin";
import { Microsoft } from "./Microsoft";
import { Spotify } from "./Spotify";
import { XTwitter } from "./XTwitter";
type LogoType =
  | "microsoft"
  | "airbnb"
  | "spotify"
  | "instagram"
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
    case "airbnb":
      return <Airbnb onClick={onClick} />;
    case "spotify":
      return <Spotify onClick={onClick} />;
    case "instagram":
      return <Instagram onClick={onClick} />;
    case "x":
      return <XTwitter onClick={onClick} />;
    case "discord":
      return <Discord onClick={onClick} />;
    case "linkedin":
      return <Linkedin onClick={onClick} />;
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
  return (
    <div className="relative flex flex-col items-start overflow-hidden bg-[#99CCFF] w-[62rem] tablet:w-[63.86rem] h-[18.9rem] px-[3rem] tablet:px-[3.09rem] py-[2.375rem] tablet:py-[2.44625rem] gap-[.625rem] rounded-[2rem] tablet:rounded-[2.06rem]">
      <div className="flex flex-col gap-[1rem] items-start h-[5rem] w-[26rem]">
        <span className="text-[2.5rem] tablet:text-[2.575rem] tablet:leading-[2.63938rem]  font-serif font-bold leading-[2.5625rem] tablet:-tracking-[.103rem] -tracking-[.1rem]">
          {title}
        </span>
        <span className="font-sans tablet:leading-[1.71494rem] leading-[1.665rem] -tracking-[.03375rem] tablet:-tracking-[.03475rem] text-[1.125rem] tablet:text-[1.15875rem]">
          {description}
        </span>
        <Button icon type="primary">
          {action}
        </Button>
      </div>
      <Image
        className="absolute top-0 right-0"
        src="/target.webp"
        width={tablet ? 385 : 372}
        height={tablet ? 385 : 372}
        alt="target icon"
      />
    </div>
  );
};
