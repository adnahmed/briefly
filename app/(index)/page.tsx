import Image from "next/image";
import { BannerVideo } from "../components/BannerVideo";
import { BentoSquare } from "../components/Bento";
import { Cross } from "../components/Cross";
import { GlowingStar } from "../components/GlowingStar";
import { GroupIcon } from "../components/GroupIcon";
import { HeroGetStarted, HeroInputEmail } from "../components/Hero";
import { HeroBackground } from "../components/heroBackground";
import { Logos } from "../components/Logos";
import { Tick } from "../components/Tick";
import { tw } from "../lib/tailwindest";

const hero = tw.style({
  width: "w-full",
  position: "relative",
  marginBottom: "mb-[4.34rem]",
});

const heroTitle = tw.style({
  marginX: "mx-auto",
  maxWidth: "max-w-max",
  paddingTop: "pt-[7.62rem]",
  display: "flex",
  flexDirection: "flex-col",
  alignItems: "items-center",
  gap: "gap-[1rem]",
});

const heroVideo = tw.style({
  marginTop: "mt-[4.5rem]",
  overflow: "overflow-hidden",
  zIndex: "z-[10]",
  position: "relative",
  borderRadius: "rounded-[2rem]",
  borderWidth: "border-[1px]",
  borderColor: "border-white",
  boxShadow: "shadow-2xl",
  "@desktop": {
    maxWidth: "desktop:max-w-max",
    width: "desktop:w-max",
    marginX: "desktop:mx-auto",
  },
  "@tablet": {
    marginX: "tablet:mx-[3rem]",
  },
  marginX: "mx-[1rem]",
});
const bento = tw.style({
  display: "flex",
  flexDirection: "flex-col",
  gap: "gap-[2rem]",
  marginTop: "mt-[4rem]",
});
const bentoRow = tw.style({
  display: "flex",
  gap: "gap-[2rem]",
  justifyContent: "justify-center",
});

const tableHeader = tw.style({
  width: "w-[78rem]",
  marginTop: "mt-[8.5rem]",
  marginX: "mx-auto",
  display: "flex",
  justifyContent: "justify-around",
  alignItems: "items-center",
});

const table = tw.style({
  marginTop: "mt-[3.5rem]",
  marginBottom: "mb-[5.06rem]",
  marginX: "mx-auto",
  display: "flex",
});
const tableColumn = tw.rotary({
  base: {
    display: "flex",
    flexDirection: "flex-col",
    justifyContent: "justify-evenly",
    maxWidth: "max-w-max",
    color: "text-blue-dark-950",
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
    paddingY: "py-[1rem]",
    borderTopColor: "border-t-[rgb(90, 103, 114)/.40]",
    borderTopWidth: "border-t-[1px]",
    height: "h-[4.5rem]",
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
    justifyContent: "justify-center",
    alignItems: "items-center",
    lineHeight: "leading-[1.48rem]",
    letterSpacing: "tracking-[-0.03rem]",
  },
});
const RowHead = tw.rotary({
  key: {
    fontFamily: "font-serif",
    width: "w-[17rem]",
    height: "h-[8.5rem]",
    fontSize: "text-[1.5rem]",
    fontWeight: "font-medium",
    lineHeight: "leading-[1.5625rem]",
    letterSpacing: "tracking-[-0.06rem]",
  },
  value: {},
  base: {
    color: "text-[#5A6772]",
    paddingX: "px-[3.25rem]",
    paddingY: "py-[2.5rem]",
  },
});
const tableColumnContainer = tw.style({
  width: "w-max",
  borderRadius: "rounded-2xl",
  padding: "p-[1px]",
  gradient: "bg-gradient-to-b",
  gradientStart: "from-blue-950",
  gradientEnd: "to-gray-100",
});

const topCompanies = tw.style({
  marginTop: "mt-[4.44rem]",
  marginX: "mx-auto",
  display: "flex",
  flexDirection: "flex-col",
  alignItems: "items-center",
  justifyContent: "justify-center",
  gap: "gap-[4.5rem]",
  marginBottom: "mb-[15.5rem]",
});
export default function Home() {
  return (
    <main>
      <div className={`${hero.class}`}>
        <HeroBackground />
        <div className={heroTitle.class}>
          <h1 className="text-[4rem] -tracking-[.16rem] leading-[3.75rem] max-w-[38rem] flex justify-center text-center text-gray-950">
            Grow your business to the next level
          </h1>
          <p className="text-gray-950 font-sans text-[1.25rem] leading-[1.85rem] -tracking-[.0375rem]">
            We connect you with the top expertise, so you only work with the
            best.
          </p>
          <div className="pt-[1.2rem]">
            {/* TODO: reimplement this to signup user use: https://github.com/TheEdoRan/next-safe-action for RSC. */}
            <form
              method={"post"}
              name="get-started"
              action="get-started"
              className="flex justify-center items-center gap-[.5rem]"
              target="hiddenFrame"
            >
              <HeroInputEmail />
              <HeroGetStarted />
            </form>
            <iframe
              name="hiddenFrame"
              width={0}
              height={0}
              className="hidden"
            ></iframe>
          </div>
        </div>
        <div className={`${heroVideo.class} bg-hero-video`}>
          <Image
            src={"/hero-video.png"}
            width={1248}
            height={616}
            alt="hero video"
          />
          <div className="w-full h-full flex justify-center items-center overflow-hidden absolute z-20 top-0">
            <BannerVideo />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[.34rem]">
        <div className="flex stroke-orange text-orange -tracking-[.04rem] items-center text-[1rem]  justify-center">
          <GlowingStar />
          Built for you
        </div>
        <div className="flex font-serif flex-col justify-center items-center text-[2.5rem] leading-[2.5625rem] -tracking-[.1rem]">
          <h3>Your business essentials,</h3>
          <h3 className="colorful-wave bg-clip-text text-transparent">
            all in one place
          </h3>
        </div>
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
        <div className={tableHeader.class}>
          <div>
            <p className="flex gap-1 items-center">
              <GroupIcon />
              <span className="text-blue-950">What sets us apart</span>
            </p>
            <h2>Brieflly vs Others</h2>
          </div>
          <span className="max-w-[29.68rem] text-[#5A6772]">
            We're changing the game! Brieflly offers a whole new approach to
            driving business growth.
          </span>
        </div>

        <div className={table.class}>
          <div className={tableColumn.class("key")}>
            <span className={RowHead.class("key")}></span>
            <span className={RowValue.class("key")}>
              Service provider vetting
            </span>
            <span className={RowValue.class("key")}>Time to hire</span>
            <span className={RowValue.class("key")}>Dedicated support</span>
            <span className={RowValue.class("key")}>
              Comprehensive services
            </span>
            <span className={RowValue.class("key")}>Pricing</span>
          </div>

          <div className={tableColumnContainer.class}>
            <div
              className={`${tableColumn.class("value")} rounded-2xl bg-gray-50`}
            >
              <span className={RowHead.class("key")}>
                <Image src={"/logo.svg"} width={176} height={56} alt="logo" />
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

        <div className={topCompanies.class}>
          <div className="flex items-center justify-center gap-[5rem]">
            <div className="w-[30rem]">
              <div className="flex flex-col font-serif text-[2.5rem] font-bold leading-[2.625rem] -tracking-[.1rem]">
                <div className="text-blue-dark-950">Top companies are</div>
                <div className="text-blue-950">growing with Brieflly</div>
              </div>
              <div className="text-[#5A6772] leading-[1.48rem] -tracking-[.03rem] max-w-[25rem]">
                Join the top companies who count on Brieflly for all their
                business needs!
              </div>
            </div>
            <Logos type="microsoft" />
            <Logos type="spotify" />
            <Logos type="airbnb" />
          </div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col">
              <div className="text-[2.25rem] leading-[2.375rem] -tracking-[.09rem] font-bold font-serif text-blue-950 text-center">
                40M
              </div>
              <span className="leading-[1.48rem] -tracking-[.03rem]">
                Lorem ipsum dolor sit amet, 
              </span>
            </div>
            <div className="flex flex-col">
              <div className="text-[2.25rem] leading-[2.375rem] -tracking-[.09rem] font-bold font-serif text-blue-950 text-center">
                40M
              </div>
              <span className="leading-[1.48rem] -tracking-[.03rem]">
                Lorem ipsum dolor sit amet, 
              </span>
            </div>

            <div className="flex flex-col">
              <div className="text-[2.25rem] leading-[2.375rem] -tracking-[.09rem] font-bold font-serif text-blue-950 text-center">
                40M
              </div>
              <span className="leading-[1.48rem] -tracking-[.03rem]">
                Lorem ipsum dolor sit amet, 
              </span>
            </div>

            <div className="flex flex-col">
              <div className="text-[2.25rem] leading-[2.375rem] -tracking-[.09rem] font-bold font-serif text-blue-950 text-center">
                40M
              </div>
              <span className="leading-[1.48rem] -tracking-[.03rem]">
                Lorem ipsum dolor sit amet, 
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
