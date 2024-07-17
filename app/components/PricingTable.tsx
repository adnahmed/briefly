"use client";

import { useState } from "react";
import Toggle from "react-toggle";
import { GlowingStar } from "./GlowingStar";
import { Pricing } from "./Pricing";

export const PricingTable = () => {
  const [yearlyPricing, setYearlyPricing] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-[.34rem] mt-[4rem]">
        <div className="flex stroke-blue-950 text-blue-950 -tracking-[.04rem] items-center text-[1rem]  justify-center">
          <GlowingStar />
          Pricing
        </div>
        <div className="flex flex-col gap-[1rem] tablet:flex-row items-start tablet:items-center max-w-max w-full tablet:max-w-[38rem] desktop:max-w-[78rem] screen:w-full screen:max-w-[108rem] justify-between screen:justify-around mx-auto">
          <div className="flex flex-col justify-center gap-[.5rem] tablet:gap-[1rem] ">
            <div className="text-start items-center font-serif desktop:text-[2.5rem] text-[1.75rem] tablet:text-[2.25rem] leading-[2.5625rem] -tracking-[.1rem] font-bold">
              Choose the right plan for you
            </div>
            <div className="text-[#5A6772] text-start text-[1.125rem] leading-[1.665rem] -tracking-[.03375rem]">
              Save 10% and get all credits upfront!
            </div>
          </div>
          <div className="ml-[2rem] tablet:ml-0">
            <label className="flex justify-center items-center gap-[.5rem]">
              <span className="min-w-max">Billed Monthly</span>
              <Toggle
                defaultChecked={yearlyPricing}
                icons={false}
                onChange={() => setYearlyPricing(!yearlyPricing)}
              />
              <span className="min-w-max">Billed Quarterly</span>
            </label>
          </div>
        </div>
      </div>
      <div className="flex gap-[2.69rem] flex-wrap justify-center mt-[2.88rem]">
        <Pricing quarterly={yearlyPricing} type="starter" />
        <Pricing quarterly={yearlyPricing} type="basic" />
        <Pricing quarterly={yearlyPricing} type="explorer" />
        <Pricing quarterly={yearlyPricing} type="pro" />
      </div>
    </>
  );
};
