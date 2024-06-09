"use client";
import Image from "next/image";
import { useBreakpoint } from "../lib/useBreakpoint";
export const DashboardImage = () => {
  const screen = useBreakpoint("screen");
  return (
    <Image
      className="rounded-2xl my-auto border-orange-200 border-[1rem]"
      src={"/Dashboard.png"}
      width={screen ? 798 : 500}
      height={screen ? 567.467 : 355.56}
      alt="dashboard"
    />
  );
};
