"use client";
import { Dispatch, SetStateAction } from "react";
import { useBreakpoint } from "../lib/useBreakpoint";
import { useImperativeDisableScroll } from "../lib/useImperativeDisableScroll";
import { SidebarCross } from "./SidebarCross";
import { MenuIcon } from "./SidebarMenuIcon";

export interface SidebarMenuButtonProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}
export default function SidebarMenuButton({
  menuOpen,
  setMenuOpen,
}: SidebarMenuButtonProps) {
  const desktop = useBreakpoint("desktop");
  useImperativeDisableScroll({
    element: window.document.scrollingElement,
    disabled: menuOpen && !desktop,
  });
  return (
    <div className="desktop:hidden justify-end ">
      {menuOpen ? (
        <SidebarCross onClick={() => setMenuOpen && setMenuOpen(false)} />
      ) : (
        <MenuIcon
          onClick={() => {
            setMenuOpen && setMenuOpen(true);
          }}
        />
      )}
    </div>
  );
}
