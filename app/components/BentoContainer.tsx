"use client";
import { tw } from "../lib/tailwindest";
import { useBreakpoint } from "../lib/useBreakpoint";
import { BentoSquare } from "./Bento";

const bento = tw.style({
  display: "flex",
  marginTop: "mt-[2rem]",
  gap: "gap-[1rem]",
  overflow: "overflow-x-auto",
  flexWrap: "flex-nowrap",
  marginX: "mx-[2rem]",
  "@tablet": {
    gap: "tablet:gap-[2rem]",
  },
  "@desktop": {
    marginTop: "desktop:mt-[4rem]",
    flexDirection: "desktop:flex-col",
  },
});
const bentoRow = tw.style({
  display: "flex",
  gap: "gap-[2rem]",
  justifyContent: "justify-center",
});

export const BentoContainer = () => {
  const desktop = useBreakpoint("desktop");
  if (desktop)
    return (
      <div className={bento.class}>
        <div className={bentoRow.class}>
          <BentoSquare type="brief" />
          <BentoSquare type="marketplace" />
        </div>
        <div className={bentoRow.class}>
          <BentoSquare type="management" />
          <BentoSquare type="analytic" />
        </div>
      </div>
    );

  return (
    <div
      style={{
        scrollSnapType: "x mandatory",
      }}
      className={bento.class}
    >
      <div className=" snap-center">
        <BentoSquare type="marketplace" />
      </div>
      <div className="snap-center">
        <BentoSquare type="brief" />
      </div>

      <div className=" snap-center">
        <BentoSquare type="management" />
      </div>
      <div className=" snap-center">
        <BentoSquare type="analytic" />
      </div>
    </div>
  );
};
