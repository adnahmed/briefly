"use client";
import Image from "next/image";
import { tw } from "../lib/tailwindest";
import { useBreakpoint } from "../lib/useBreakpoint";
import { Cross } from "./Cross";
import { Tick } from "./Tick";

const table = tw.style({
  marginTop: "mt-[3.5rem]",
  marginBottom: "mb-[1.5rem]",
  "@tablet": {
    marginBottom: "tablet:-mb-[3rem]",
  },
  marginX: "mx-auto",
  display: "flex",
  justifyContent: "justify-center",
  gap: "gap-[1rem]",
  flexDirection: "flex-row",
  flexWrap: "flex-wrap",
  "@desktop": {
    marginBottom: "desktop:mb-[5.06rem]",
    flexDirection: "desktop:flex-row",
    gap: "desktop:gap-0",
  },
});
const tableColumn = tw.rotary({
  base: {
    display: "flex",
    flexDirection: "flex-col",
    justifyContent: "justify-evenly",
    color: "text-blue-dark-950",
    padding: "p-[1rem]",
    borderRadius: "rounded-2xl",
    "@desktop": {
      padding: "desktop:p-[0rem]",
    },
  },
  value: {
    textAlign: "text-center",
  },
  key: {
    textAlign: "text-left",
  },
});
const RowValue = tw.rotary({
  base: {
    maxHeight: "max-h-[4.5rem]",
    "@desktop": {
      borderTopColor: "desktop:border-t-gray-950",
      borderTopWidth: "desktop:border-t-[1px]",
      height: "desktop:h-[4.5rem]",
      paddingY: "desktop:py-[1rem]",
    },
  },
  key: {
    paddingRight: "pr-[2.44rem]",
    fontFamily: "font-serif",
    letterSpacing: "tracking-[-0.045rem]",
    fontSize: "text-[1.125rem]",
  },
  value: {
    display: "flex",
    fontFamily: "font-sans",
    justifyContent: "justify-start",
    "@desktop": {
      justifyContent: "desktop:justify-center",
      fontSize: "desktop:text-[1rem]",
      lineHeight: "desktop:leading-[1.48rem]",
      letterSpacing: "desktop:tracking-[-0.03rem]",
    },
    fontSize: "text-[.875rem]",
    alignItems: "items-center",
    lineHeight: "leading-[1.295rem]",
    letterSpacing: "tracking-[-0.02625rem]",
  },
});
const RowHead = tw.rotary({
  key: {
    fontFamily: "font-serif",
    textAlign: "text-start",
    width: "w-[20rem]",
    overflow: "overflow-hidden",
    height: "h-[2.5rem]",
    "@desktop": {
      textAlign: "desktop:text-center",
      overflow: "desktop:overflow-visible",
      width: "desktop:w-[13rem]",
      height: "desktop:h-[8.5rem]",
    },
    "@screen": {
      width: "screen:w-[17rem]",
    },
    fontSize: "text-[1.5rem]",
    fontWeight: "font-medium",
    lineHeight: "leading-[1.5625rem]",
    letterSpacing: "tracking-[-0.06rem]",
  },
  value: {},
  base: {
    color: "text-[#5A6772]",
    "@desktop": {
      paddingX: "desktop:px-[3.25rem]",
      paddingY: "desktop:py-[2.5rem]",
    },
  },
});
const tableColumnContainer = tw.toggle({
  base: {
    borderRadius: "rounded-2xl",
    padding: "p-[1px]",
  },
  truthy: {
    gradient: "bg-gradient-to-b",
    gradientStart: "from-blue-950",
    gradientEnd: "to-gray-100",
  },
  falsy: {
    borderColor: "border-gray-950",
    borderWidth: "border-[1px]",
  },
});

export const BrieflyTable = () => {
  const desktop = useBreakpoint("desktop");
  if (desktop)
    return (
      <div className={table.class}>
        <div className={tableColumn.class("key")}>
          <span className={RowHead.class("key")}></span>
          <span className={RowValue.class("key")}>
            Service provider vetting
          </span>
          <span className={RowValue.class("key")}>Time to hire</span>
          <span className={RowValue.class("key")}>Dedicated support</span>
          <span className={RowValue.class("key")}>Comprehensive services</span>
          <span className={RowValue.class("key")}>Pricing</span>
        </div>

        <div className={tableColumnContainer.class(true)}>
          <div className={`!bg-gray-100 ${tableColumn.class("value")}`}>
            <span className={RowHead.class("key")}>
              <Image
                className="min-w-[176px]"
                src={"/logo.svg"}
                width={176}
                height={56}
                alt="logo"
              />
            </span>
            <span className={RowValue.class("value")}>
              <Tick text={"Strict"} />
            </span>
            <span className={RowValue.class("value")}>Fast (3-4 days)</span>
            <span className={RowValue.class("value")}>
              <Tick text="Yes" />
            </span>
            <span className={RowValue.class("value")}>
              <Tick text="Marketing, development, creative, and business services" />
            </span>
            <span className={RowValue.class("value")}>Competitive</span>
          </div>
        </div>

        <div className={tableColumn.class("value")}>
          <span className={RowHead.class("key")}>Traditional agencies</span>
          <span className={RowValue.class("value")}>
            <Cross text={"Minimal"} />
          </span>
          <span className={RowValue.class("value")}>Slow (2-4 weeks)</span>
          <span className={RowValue.class("value")}>
            <Cross text="No" />
          </span>
          <span className={RowValue.class("value")}>Limited</span>
          <span className={RowValue.class("value")}>Expensive</span>
        </div>

        <div className={tableColumn.class("value")}>
          <span className={RowHead.class("key")}>In-house teams</span>
          <span className={RowValue.class("value")}>
            <Cross text={"Minimal"} />
          </span>
          <span className={RowValue.class("value")}>Slow (8+ weeks)</span>
          <span className={RowValue.class("value")}>
            <Cross text="No" />
          </span>
          <span className={RowValue.class("value")}>Limited</span>
          <span className={RowValue.class("value")}>Expensive</span>
        </div>
        <div className={tableColumn.class("value")}>
          <span className={RowHead.class("key")}>Freelance marketplaces</span>
          <span className={RowValue.class("value")}>
            <Cross text={"Minimal"} />
          </span>
          <span className={RowValue.class("value")}>Fast (3-4 days)</span>
          <span className={RowValue.class("value")}>
            <Cross text="No" />
          </span>
          <span className={RowValue.class("value")}>Limited</span>
          <span className={RowValue.class("value")}>Affordable</span>
        </div>
      </div>
    );

  return (
    <div className={table.class}>
      <div className={tableColumnContainer.class(true)}>
        <div className={`${tableColumn.class("value")} !bg-gray-100`}>
          <span className={RowHead.class("key")}>
            <Image
              className="min-w-[136px]"
              src={"/logo.svg"}
              width={126}
              height={40}
              alt="logo"
            />
          </span>
          <span className={RowValue.class("value")}>
            <Tick text={"Strict service provider vetting"} />
          </span>
          <span className={RowValue.class("value")}>
            <Tick text="Fast (3-4 days) time to hire" />
          </span>
          <span className={RowValue.class("value")}>
            <Tick text="Dedicated support" />
          </span>
          <span className={RowValue.class("value")}>
            <Tick text="Comprehensive services such as marketing, development, creative and business services" />
          </span>
          <span className={RowValue.class("value")}>
            <Tick text="Competitive Pricing" />
          </span>
        </div>
      </div>
      <div className={tableColumnContainer.class(false)}>
        <div className={tableColumn.class("value")}>
          <span className={RowHead.class("key")}>Traditional agencies</span>
          <span className={RowValue.class("value")}>
            <Cross text={"Minimal service provider vetting"} />
          </span>
          <span className={RowValue.class("value")}>
            <Cross text="Slow (2-4 weeks) time to hire" />
          </span>
          <span className={RowValue.class("value")}>
            <Cross text="No dedicated support" />
          </span>
          <span className={RowValue.class("value")}>
            <Cross text="Limited comprehensive services" />
          </span>
          <span className={RowValue.class("value")}>
            <Cross text="Expensive Pricing" />
          </span>
        </div>
      </div>
      <div className={tableColumnContainer.class(false)}>
        <div className={tableColumn.class("value")}>
          <span className={RowHead.class("key")}>In-house teams</span>
          <span className={RowValue.class("value")}>
            <Cross text={"Minimal service provider vetting"} />
          </span>
          <span className={RowValue.class("value")}>
            <Cross text="Slow (8+ weeks) time to hire" />
          </span>
          <span className={RowValue.class("value")}>
            <Cross text="No dedicated support" />
          </span>
          <span className={RowValue.class("value")}>
            <Cross text="Limited comprehensive services" />
          </span>
          <span className={RowValue.class("value")}>
            <Cross text="Expensive Pricing" />
          </span>
        </div>
      </div>
      <div className={tableColumnContainer.class(false)}>
        <div className={tableColumn.class("value")}>
          <span className={RowHead.class("key")}>Freelance marketplaces</span>
          <span className={RowValue.class("value")}>
            <Cross text={"Minimal service provider vetting"} />
          </span>
          <span className={RowValue.class("value")}>
            <Tick text="Minimal service provider vetting" />
          </span>
          <span className={RowValue.class("value")}>
            <Cross text="No dedicated support" />
          </span>
          <span className={RowValue.class("value")}>
            <Cross text="Limited comprehensive services" />
          </span>
          <span className={RowValue.class("value")}>
            <Tick text="Affordable pricing" />
          </span>
        </div>
      </div>
    </div>
  );
};
