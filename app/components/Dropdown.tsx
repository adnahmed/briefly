"use client";
import { useState } from "react";
import { tw } from "../lib/tailwindest";
import { Arrow } from "./Arrow";
const select = tw.toggle({
  base: {
    outlineStyle: "outline-none",
    fontSize: "text-sm",
    paddingY: "py-[13px]",
    paddingX: "px-[24px]",
    display: "flex",
    justifyContent: "justify-between",
    alignItems: "items-center",
    borderRadius: "rounded-3xl",
  },
  truthy: {
    borderColor: "border-blue-dark-300",
    backgroundColor: "bg-white",
    borderWidth: "border-[1px]",
    color: "text-[#5A6772]",
    cursor: "cursor-default",
  },
  falsy: {
    color: "text-blue-dark-300",
    backgroundColor: "bg-gray-300",
    ":active": {
      borderColor: "active:border-sky",
      borderWidth: "active:border-[1.5px]",
      borderStyle: "active:border-solid",
      backgroundColor: "active:bg-white",
      color: "active:text-blue-dark-600",
    },
    ":focus": {
      borderColor: "focus:border-sky",
      borderWidth: "focus:border-[1.5px]",
      borderStyle: "focus:border-solid",
      backgroundColor: "focus:bg-white",
      color: "focus:text-blue-dark-600",
    },
  },
});

const selectedItem = tw.style({
  fontSize: "text-[15px]",
  paddingLeft: "pl-1",
});

const dropdown = tw.style({
  marginTop: "mt-[.5rem]",
  overflow: "overflow-hidden",
  transition: "transition ease-in-out",
  width: "w-full",
  backgroundColor: "bg-white",
  boxShadow: "shadow-lg",
  filterDropShadow: "drop-shadow-sm",
  borderRadius: "rounded-2xl",
});

const dropdownList = tw.style({
  paddingY: "py-2",
  display: "flex",
  flexDirection: "flex-col",
  gap: "gap-[.5rem]",
  color: "text-blue-dark-600",
});

const dropdownListItem = tw.style({
  borderRadius: "rounded-lg",
  width: "w-full",
  display: "flex",
  justifyContent: "justify-between",
  alignItems: "items-center",
  paddingX: "px-[.5em]",
});

const selectContainer = tw.toggle({
  base: {
    display: "grid",
    minHeight: "min-h-max",
  },
  truthy: {
    gridTemplateRows: "grid-rows-[min-content_1fr]",
  },
  falsy: {
    gridTemplateRows: "grid-rows-[min-content_0fr]",
  },
});

export function Dropdown({
  onChange,
  options,
  unit,
  defaultOption,
  disabled = false,
}: {
  onChange?: (option: string) => void;
  defaultOption?: string;
  disabled: boolean;
  options: string[];
  unit?: string;
}) {
  const [selected, setSelected] = useState<string>(defaultOption ?? options[0]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const handleClickItem = (selected: string) => {
    setShowDropdown(false);
    setSelected(selected);
    if (onChange) onChange(selected);
  };
  return (
    <div
      style={{
        transitionProperty: "grid-template-rows",
        transitionDuration: "300ms",
      }}
      className={selectContainer.class(showDropdown)}
    >
      <button
        onClick={() => {
          if (disabled) return;
          setShowDropdown(!showDropdown);
        }}
        className={select.class(disabled)}
      >
        <span className={selectedItem.class}>
          {`${selected}${unit ? " " + unit : ""}`}
        </span>
        <Arrow on={showDropdown} disabled={disabled} />
      </button>

      <div className={dropdown.class}>
        <ul className={dropdownList.class}>
          {options.map((o) => (
            <li
              onClick={(e) => {
                e.preventDefault();
                handleClickItem(o);
              }}
              className={dropdownListItem.class}
              key={o}
            >
              <a
                className={`block py-2 hover:bg-gray-300 ${o === selected ? "!bg-sky-400 text-blue-dark" : ""}  rounded-lg w-full px-[.5em]`}
              >
                {`${o}${unit ? " " + unit : ""}`}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
