import Image from "next/image";
import { BannerVideo } from "./components/BannerVideo";
import { BentoSquare } from "./components/Bento";
import { GlowingStar } from "./components/GlowingStar";
import { HeroGetStarted, HeroInputEmail } from "./components/Hero";
import { HeroBackground } from "./components/heroBackground";
import { tw } from "./lib/tailwindest";

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
  width: "w-max",
  marginX: "mx-auto",
  position: "relative",
  borderRadius: "rounded-[2rem]",
  borderWidth: "border-[1px]",
  borderColor: "border-white",
});
const bento = tw.style({
  display: "flex",
  flexDirection: "flex-col",
  gap: "gap-[2rem]",
});
const bentoRow = tw.style({
  display: "flex",
  gap: "gap-[2rem]",
  justifyContent: "justify-center",
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
        <div className="flex text-orange -tracking-[.04rem] items-center text-[1rem]  justify-center">
          <GlowingStar />
          Built for you
        </div>
        <div className="flex flex-col justify-center items-center text-[2.5rem] leading-[2.5625rem] -tracking-[.1rem]">
          <h3>Your business essentials,</h3>
          <h3 className="bg-colorful-wave bg-clip-text text-transparent">
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
      </div>
    </main>
  );
}
