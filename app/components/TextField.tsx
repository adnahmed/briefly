import { ChangeEventHandler, forwardRef } from "react";
import { tw } from "../lib/tailwindest";
const input = tw.variants({
  variants: {
    type: {
      normal: {
        ":active": {
          borderColor: "active:border-sky",
          borderWidth: "active:border-[1.5px]",
          borderStyle: "active:border-solid",
          color: "active:text-blue-dark-700",
          backgroundColor: "active:bg-white",
        },
        ":focus": {
          color: "focus:text-blue-dark-700",
          borderColor: "focus:border-sky",
          borderWidth: "focus:border-[1.5px]",
          borderStyle: "focus:border-solid",
          backgroundColor: "focus:bg-white",
        },
        "::placeholder": {
          color: "placeholder:text-[#B2B8BE]",
        },
      },
      error: {
        color: "text-blue-dark-700",
        borderColor: "border-red",
        borderWidth: "border-[1.5px]",
        borderStyle: "border-solid",
        backgroundColor: "bg-white",
      },
    },
  },
  base: {
    outlineStyle: "outline-none",
    color: "text-blue-dark-300",
    backgroundColor: "bg-gray-300",
    borderRadius: "rounded-3xl",
    padding: "p-[1rem]",
    height: "h-[3rem]",
    fontSize: "text-[15px]",
  },
});

const inputContainer = tw.style({
  display: "flex",
  flexDirection: "flex-col",
  gap: "gap-1",
});

const message = tw.style({
  color: "text-red",
  fontSize: "text-[14px]",
});

export const TextArea = forwardRef<
  HTMLTextAreaElement,
  {
    isError?: boolean;
    value?: string;
    placeholder?: string;
    errorMessage?: string;
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  }
>(({ isError = false, placeholder, errorMessage, onChange, value }, ref) => {
  return (
    <div className={inputContainer.class}>
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={input
          .compose({
            minHeight: "min-h-[10.5rem]",
            maxHeight: "max-h-[10.5rem]",
            width: "w-[20.5rem]",
            resize: "resize-none",
          })
          .class({
            type: isError ? "error" : "normal",
          })}
        ref={ref}
      />
      {isError && errorMessage && (
        <span className={message.class}>{errorMessage}</span>
      )}
    </div>
  );
});

export const TextField = forwardRef<
  HTMLInputElement,
  {
    isError?: boolean;
    isSmall?: boolean;
    value?: string;
    placeholder?: string;
    errorMessage?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
  }
>(
  (
    {
      isError = false,
      isSmall = false,
      placeholder,
      errorMessage,
      onChange,
      value,
    },
    ref,
  ) => {
    return (
      <div className={inputContainer.class}>
        <input
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={input
            .compose({
              width: isSmall ? "w-[256px]" : "w-[20.5rem]",
            })
            .class({
              type: isError ? "error" : "normal",
            })}
          ref={ref}
        />
        {isError && errorMessage && (
          <span className={message.class}>{errorMessage}</span>
        )}
      </div>
    );
  },
);

TextField.displayName = "TextField";
TextArea.displayName = "TextArea";
