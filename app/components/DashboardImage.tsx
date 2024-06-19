"use client";
import Image from "next/image";
import { useBreakpoint } from "../lib/useBreakpoint";
export const DashboardImage = () => {
  const screen = useBreakpoint("screen");
  const desktop = useBreakpoint("desktop");
  let width = 467.33;
  let height = 352.79;
  if (screen) {
    width = 798;
    height = 567.467;
  } else if (desktop) {
    width = 500;
    height = 355.56;
  }

  return (
    <Image
      className="rounded-2xl  mobile:rounded-r-none tablet:rounded-r-2xl desktop:rounded-r-none min-w-[467.33px] max-h-[352.79px] desktop:max-h-[355.56px] screen:max-h-[567.467px] ml-[7rem] desktop:min-w-[500px] screen:min-w-[798px] desktop:mx-0 mt-[2.5rem] desktop:mt-0 mobile:border-r-0 tablet:border-r-[1rem]  border-orange-200 border-[1rem] desktop:border-r-0"
      src={"/Dashboard.png"}
      width={width}
      height={height}
      alt="dashboard"
    />
  );
};
