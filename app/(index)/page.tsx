import Image from "next/image";
import { BannerVideo } from "../components/BannerVideo";
import { BentoContainer } from "../components/BentoContainer";
import { BrieflyTable } from "../components/BrieflyTable";
import { GlowingStar } from "../components/GlowingStar";
import { GroupIcon } from "../components/GroupIcon";
import { HeroGetStarted, HeroInputEmail } from "../components/Hero";
import { LogoSlider } from "../components/LogoSlider";
import { tw } from "../lib/tailwindest";

const hero = tw.style({
  width: "w-full",
  position: "relative",
  marginBottom: "mb-[4.34rem]",
});

const heroTitle = tw.style({
  "@tablet": {
    marginX: "tablet:mx-auto",
  },
  marginX: "mx-[.5rem]",
  maxWidth: "max-w-max",
  paddingTop: "pt-[7.62rem]",
  display: "flex",
  flexDirection: "flex-col",
  alignItems: "items-center",
  gap: "gap-[1rem]",
});

const heroVideo = tw.style({
  "@tablet": {
    marginTop: "tablet:mt-[4.5rem]",
    marginX: "tablet:mx-[3rem]",
  },
  marginTop: "mt-[2.5rem]",
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
  marginX: "mx-[1rem]",
});

const tableHeader = tw.style({
  "@desktop": {
    marginX: "desktop:mx-auto",
    width: "desktop:w-[70rem]",
    flexDirection: "desktop:flex-row",
  },
  "@screen": {
    width: "screen:w-[78rem]",
  },
  marginTop: "mt-[8.5rem]",
  marginX: "mx-[1rem]",
  display: "flex",
  justifyContent: "justify-around",
  alignItems: "items-center",
  flexDirection: "flex-col",
});

const topCompanies = tw.style({
  marginTop: "mt-[4.44rem]",
  marginX: "mx-auto",
  display: "flex",
  flexDirection: "flex-col",
  alignItems: "items-center",
  justifyContent: "justify-center",
  gap: "gap-[4.5rem]",
  marginBottom: "mb-[23rem]",
  "@desktop": {
    marginBottom: "desktop:mb-[15.5rem]",
  },
});
export default function Home() {
  return (
    <main>
      <div
        className="absolute bg-white -z-10 h-[448px] tablet:h-[648px]  desktop:h-[848px] w-full bg-cover overflow-hidden"
        style={{
          backgroundImage: "url(/heroBackground.svg)",
        }}
      ></div>
      <div className={`${hero.class}`}>
        <div className={heroTitle.class}>
          <h1 className="tablet:text-[4rem] text-[2.5rem] tablet:-tracking-[.16rem] -tracking-[.09rem] leading-[2.25rem] tablet:leading-[3.75rem] max-w-[38rem] flex justify-center text-center text-gray-950">
            Grow your business to the next level
          </h1>
          <p className="text-gray-950 text-center font-sans text-[1.25rem] leading-[1.665rem] tablet:leading-[1.85rem] -tracking-[.0375rem]">
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
          <div className="w-full h-full flex hover:bg-black hover:bg-opacity-30 transition-all duration-200  justify-center items-center overflow-hidden absolute z-20 top-0">
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
        <BentoContainer />
        <div className={tableHeader.class}>
          <div className="flex flex-col items-center desktop:items-start">
            <p className="flex gap-1 items-center">
              <GroupIcon />
              <span className="text-blue-950 ">What sets us apart</span>
            </p>
            <h2>Brieflly vs Others</h2>
          </div>
          <span className="max-w-[29.68rem] text-[#5A6772] desktop:text-start text-center">
            We&apos;re changing the game! Brieflly offers a whole new approach
            to driving business growth.
          </span>
        </div>
        <BrieflyTable />
        <div className={topCompanies.class}>
          <div className="flex flex-col text-center tablet:text-start items-center justify-center gap-[5rem]">
            <div className="mx-[1rem] desktop:mx-auto max-w-max">
              <div className="font-serif text-[2rem] desktop:text-[2.5rem] font-bold leading-[2.125rem] desktop:leading-[2.625rem] desktop:-tracking-[.1rem] -tracking-[.08rem]">
                <div className="tablet:inline text-blue-dark-950">
                  Top companies are{" "}
                </div>
                <div className="tablet:inline text-blue-950">
                  growing with Brieflly
                </div>
              </div>
              <div className="text-[#5A6772] desktop:leading-[1.48rem] leading-[1.33rem] -tracking-[.03rem]">
              As we evolve, we align our growth with industry leaders. Join us and grow together with the best in the business.
              </div>
            </div>
          </div>
          <LogoSlider />
        </div>
      </div>
    </main>
  );
}
