import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { tw } from "../lib/tailwindest";
import Button from "./Button";
import { HeroButtons } from "./Header";
import { SidebarMenuButtonProps } from "./SidebarMenu";
const SidebarMenuButton = dynamic<SidebarMenuButtonProps>(
  () => import("./SidebarMenu"),
  { ssr: false },
);

const sidebar = tw.toggle({
  truthy: {
    display: "flex",
    position: "absolute",
    zIndex: "z-[900]",
    right: "-right-[1rem]",
    top: "top-[52px]",
    "@tablet": {
      top: "tablet:top-[60px]",
    },
    height: "h-[100vh]",
    width: "w-max",
    maxWidth: "max-w-[80vw]",
    padding: "p-[24px]",
    overflow: "overflow-hidden",
  },
  falsy: {
    // display: "hidden",
  },
  base: {
    // transition: "transition-all ease-out",
    transitionDuration: "duration-300",
    // transitionProperty: "transition-all",
    transitionTimingFunction: "ease-in-out",
    backgroundColor: "bg-gray-300",
    boxShadow: "shadow-2xl",
    flexDirection: "flex-col",
    gap: "gap-[24px]",
    width: "w-0",
    height: "h-0",
    overflow: "overflow-hidden",
    // display: "hidden",
  },
});
export function SidebarMenu({ menuOpen }: { menuOpen: boolean }) {
  const pathname = usePathname();
  return (
    <div>
      <div
        style={{
          transitionProperty: "height",
        }}
        className={sidebar.class(menuOpen)}
      >
        <Button type="secondary">Launch app</Button>
        <HeroButtons />
      </div>
    </div>
  );
}
const sidebarContainer = tw.style({
  position: "relative",
  zIndex: "z-[110]",
  display: "flex",
  flexDirection: "flex-col",
  alignItems: "items-end",
  "@desktop": {
    display: "desktop:hidden",
  },
});
export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={sidebarContainer.class}>
      <SidebarMenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <SidebarMenu menuOpen={menuOpen} />
    </div>
  );
}
