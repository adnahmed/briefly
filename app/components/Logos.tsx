import { MouseEventHandler } from "react";
import { Airbnb } from "./Airbnb";
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
