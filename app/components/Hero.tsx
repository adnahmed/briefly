import { MouseEventHandler } from "react";
import { tw } from "../lib/tailwindest";
import { useBreakpoint } from "../lib/useBreakpoint";
import { ChevronRight } from "./ChevronRight";

const heroGetStarted = tw.style({
  borderRadius: "rounded-3xl",
  display: "flex",
  alignItems: "items-center",
  justifyContent: "justify-center",
  gap: "gap-1",
  backgroundColor: "bg-blue-dark",
  color: "text-sky",
  stroke: "stroke-sky",
  padding: "p-[1rem]",
  paddingRight: "pr-[.5rem]",
  height: "h-[3rem]",
  ":hover": {
    backgroundColor: "hover:bg-[#25517E]",
    color: "hover:text-gray-950",
    stroke: "hover:stroke-gray-950",
  },
  margin: "m-2",
});

export const HeroGetStarted = () => {
  return (
    <button type="submit" className={heroGetStarted.class}>
      Get Started
      <ChevronRight />
    </button>
  );
};

const heroInputEmail = tw.style({
  borderRadius: "rounded-3xl",
  maxWidth: "max-w-[256px]",
  height: "h-[3rem]",
  padding: "p-[1rem]",
  "::placeholder": {
    color: "placeholder:text-blue-dark-300",
  },
  ":invalid": {
    borderColor: "invalid:border-red-900",
    borderWidth: "invalid:border-2",
  },
  backgroundColor: "bg-[#F6F6F6]",
  color: "text-blue-dark-300",
  outlineWidth: "outline-0",
  ":focus": {
    backgroundColor: "focus:bg-blue-100",
    color: "focus:text-[#5A6772]",
  },
});

export const HeroInputEmail = () => {
  return (
    <input
      className={heroInputEmail.class}
      placeholder="Enter your email"
      type="email"
      name="email"
    />
  );
};

const heroButton = tw.style({
  color: "text-[#5A6772]",
  padding: "p-[1rem]",
  height: "h-[3rem]",
  width: "w-max",
  fontWeight: "font-medium",
  ":hover": {
    color: "hover:text-blue-950",
  },
  ":active": {
    color: "active:text-blue-950",
  },
});

export const HeroButton = ({
  children,
  onClick,
}: {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={onClick} className={heroButton.class}>
      {children}
    </button>
  );
};

const stickyButton = tw.style({
  backgroundColor: "bg-blue-950/20",
  backdropBlur: "backdrop-blur-2xl",
  stroke: "stroke-blue-dark",
  color: "text-blue-dark",
  display: "flex",
  padding: "p-[1rem]",
  borderRadius: "rounded-3xl",
  gap: "gap-[0.5rem]",
  margin: "m-5",
  "@tablet": {
    backgroundColor: "tablet:bg-transparent",
    color: "tablet:text-blue-950",
    stroke: "tablet:stroke-blue-950",
  },
});

const stickyButtonContainer = tw.style({
  "@tablet": {
    display: "tablet:flex",
    justifyItems: "tablet:justify-items-center",
    justifyContent: "tablet:justify-center",
    backgroundColor: "tablet:bg-blue-950/20",
    alignItems: "tablet:items-center",
    width: "tablet:w-full",
    borderColor: "tablet:border-amber-950",
    borderWidth: "tablet:border-2",
    position: "tablet:sticky",
  },
});

export const StickyButton = () => {
  const tablet = useBreakpoint("tablet");
  return (
    <div className={stickyButtonContainer.class}>
      <span className="font-medium hidden tablet:block leading-[1.48rem]">
        {tablet && "Hire top vetted agencies"}
      </span>
      <button className={stickyButton.class}>
        <span className="gap-[0.5rem] flex">
          <span>Find an expert</span>
        </span>
        <ChevronRight />
      </button>
    </div>
  );
};
