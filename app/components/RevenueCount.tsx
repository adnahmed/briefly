"use client";
import { CountUp } from "use-count-up";

export const RevenueCount = () => {
  return (
    <div className="colorful-wave bg-clip-text text-transparent text-[3rem] font-serif font-bold -tracking-[.12rem] leading-[3.4375rem]">
      <CountUp
        isCounting
        easing={"easeOutCubic"}
        end={78}
        duration={2.2}
        formatter={(v) => `${v.toFixed(0).toLocaleString()}%`}
      />
    </div>
  );
};
