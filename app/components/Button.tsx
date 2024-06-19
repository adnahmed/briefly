import { GetVariants, Tailwindest } from "tailwindest";
import { TailwindCustom, tw } from "../lib/tailwindest";
import { ChevronRight } from "./ChevronRight";
import { ProfileIcon } from "./Profile";
const button = tw.rotary({
  base: {
    width: "w-max",
    display: "flex",
    borderRadius: "rounded-3xl",
    borderWidth: "border-2",
    alignItems: "items-center",
    justifyContent: "justify-center",
    transition: "transition ease-in-out",
    maxHeight: "max-h-[48px]",
    gap: "gap-[0.5rem]",
    transitionDuration: "duration-300",
    stroke: "stroke-blue-950",
    color: "text-blue-950",
    letterSpacing: "tracking-[-0.04rem]",
    ":active": {
      color: "active:text-blue",
      stroke: "active:stroke-blue",
    },
    ":hover": {
      fontWeight: "hover:font-medium",
    },
    ":disabled": {
      color: "disabled:text-gray",
      stroke: "disabled:stroke-gray",
      fontWeight: "disabled:font-normal",
    },
  },
  join: {
    backgroundColor: "bg-orange-200",
    borderColor: "border-orange-200",
    color: "text-orange",
    stroke: "stroke-orange",
    ":active": {
      color: "active:text-orange",
      stroke: "active:stroke-orange",
    },
  },
  platform: {
    backgroundColor: "bg-orange",
    borderColor: "border-orange",
    color: "text-white",
    stroke: "stroke-white",
    ":active": {
      color: "active:text-white",
      stroke: "active:stroke-white",
    },
  },
  primary: {
    backgroundColor: "bg-blue-950",
    borderColor: "border-blue-950",
    color: "text-white",
    stroke: "stroke-white",
    ":active": {
      color: "active:text-white",
      stroke: "active:stroke-white",
      backgroundColor: "active:bg-blue",
      borderColor: "active:border-blue",
    },
    ":hover": {
      backgroundColor: "hover:bg-blue-700",
      borderColor: "hover:border-blue-700",
    },
    ":disabled": {
      backgroundColor: "disabled:bg-gray-300",
      borderColor: "disabled:border-gray-300",
    },
  },
  secondary: {
    backgroundColor: "bg-blue-100",
    ":active": {
      backgroundColor: "active:bg-blue-300",
    },
    ":hover": {
      backgroundColor: "hover:bg-blue-200",
    },
    ":disabled": {
      backgroundColor: "disabled:bg-gray-300",
    },
  },
  about_us: {
    backgroundColor: "bg-yellow",
    borderColor: "border-yellow",
    color: "text-blue-dark",
    stroke: "stroke-blue-dark",
    ":active": {
      color: "active:text-blue-dark",
      stroke: "active:stroke-blue-dark",
    },
  },
  outline: {
    borderColor: "border-blue-950",
    ":active": {
      borderColor: "active:border-blue",
    },
    ":hover": {
      borderColor: "hover:border-blue",
    },
    ":disabled": {
      borderColor: "disabled:border-gray",
    },
  },
  white_outline: {
    borderColor: "border-white",
    color: "text-white",
    ":active": {
      borderColor: "active:border-white",
      color: "active:text-white",
    },
    ":hover": {
      borderColor: "hover:border-white",
      color: "hover:text-white",
    },
  },
  text: {
    borderColor: "border-white",
  },
});
const buttonText = tw.style({
  fontFamily: "font-sans",
});

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  type?: GetVariants<typeof button>;
  icon?: boolean;
  leftIcon?: boolean;
  width?: Tailwindest["width"];
  custom?: TailwindCustom;
}

type TextButtonProps = Omit<ButtonProps, "icon" | "type"> & {
  type: "text";
  icon?: boolean;
  leftIcon?: boolean;
  children: React.ReactNode;
};

type TextButtonRightIcon = Omit<TextButtonProps | ButtonProps, "leftIcon"> & {
  icon?: true;
  leftIcon?: false;
};

type TextButtonLeftIcon = Omit<TextButtonProps | ButtonProps, "icon"> & {
  leftIcon?: true;
  icon?: false;
};

function Button(props: TextButtonLeftIcon | TextButtonRightIcon) {
  const {
    disabled = false,
    icon = false,
    leftIcon = false,
    children,
    type = "text",
    custom,
    width,
  } = props;
  return (
    <button
      disabled={disabled}
      className={tw.mergeProps(
        button
          .compose(
            children
              ? {
                  paddingX: icon || leftIcon ? undefined : "px-[1.5rem]",
                  paddingLeft: icon || leftIcon ? "pl-[1rem]" : undefined,
                  paddingRight: icon
                    ? "pr-[.5rem]"
                    : leftIcon
                      ? "pr-[1rem]"
                      : undefined,
                  paddingY: "py-[1rem]",
                  height: "h-[2.5rem]",
                  "@desktop": {
                    height: "desktop:h-full",
                  },
                }
              : {
                  borderRadius: "rounded-[1.75rem]",
                  height: "h-[3rem]",
                  width: "w-[3rem]",
                },
            custom ? custom : {},
          )
          .style(type),
        {
          width,
        },
      )}
    >
      {leftIcon && <ProfileIcon />}
      {children && <span className={buttonText.class}>{children}</span>}
      {icon && <ChevronRight />}
    </button>
  );
}

export default Button;
