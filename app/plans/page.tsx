import Image from "next/image";
import { BentoSquare } from "../components/Bento";
import Button from "../components/Button";
import { GlowingStar } from "../components/GlowingStar";
import { HeroInputEmail } from "../components/Hero";
import { Pricing } from "../components/Pricing";
import { tw } from "../lib/tailwindest";
const squareSplash = tw.variants({
  base: {
    position: "absolute",
    filterBlur: "blur-[70.2px]",
    zIndex: "-z-50",
  },
  variants: {
    type: {
      tag: {
        top: "top-[14rem]",
        right: "right-[35rem]",
        backgroundColor: "bg-blue-950",
        width: "w-[12.345rem]",
        height: "h-[12.345rem]",
      },
    },
  },
});
export default function Page() {
  return (
    <main>
      <div className="absolute w-full h-[40rem] -z-50 bg-gradient-to-b from-sky to-white "></div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col w-[46rem] mt-[7.31rem] gap-[1rem] items-start">
          <div className="text-dark-blue font-serif text-[3rem] font-bold leading-[3.0625rem] -tracking-[.12rem]">
            The subscription for all your business plans
          </div>
          <div className="text-[#5A6772] text-[1.125rem] leading-[1.665rem] -tracking-[.03375rem]">
            We understand that your needs are always evolving. So whether you're
            searching for specific expertise now or might need something
            different down the road, we've got your back with ongoing support
            for your business through our subscription-based credits.
          </div>
          <Button type="primary" icon>
            Get Started
          </Button>
        </div>
        <div className={squareSplash.class({ type: "tag" })}></div>
        <Image src="/tag.webp" width={350} height={350} alt="tag icon" />
      </div>
      <div className=" w-full flex justify-center items-center mt-[6.19rem]  gap-[2rem]">
        <BentoSquare type="piggy" />
        <BentoSquare type="cart" />
      </div>
      <div className="flex flex-col gap-[.34rem] mt-[4rem]">
        <div className="flex stroke-blue-950 text-blue-950 -tracking-[.04rem] items-center text-[1rem]  justify-center">
          <GlowingStar />
          Pricing
        </div>
        <div className="flex flex-col justify-center gap-[1rem] ">
          <div className="text-center items-center font-serif text-[2.5rem] leading-[2.5625rem] -tracking-[.1rem] font-bold">
            Choose the right plan for you
          </div>
          <div className="text-[#5A6772] text-center text-[1.125rem] leading-[1.665rem] -tracking-[.03375rem]">
            Save 10% and get all credits upfront!
          </div>
        </div>
      </div>
      <div className="flex gap-[2.69rem] justify-center mt-[2.88rem]">
        <Pricing type="starter" />
        <Pricing type="basic" />
        <Pricing type="explorer" />
        <Pricing type="pro" />
      </div>
      <div className="font-serif text-[3rem] text-bold mt-[4.5rem] leading-[3rem] text-center -tracking-[.12rem]">
        Achieve
        <span className="text-orange ml-[1rem]">business success</span>
        <div>with Brieflly</div>
      </div>
      <div className="px-[4rem] max-w-[46rem] mt-[1rem] mx-auto text-[#5A6772] text-[1.25rem] leading-[1.85rem] -tracking-[.0375rem] text-center">
        Join now and experience how Brieflly caters to your unique business
        needs, providing the flexibility you require.
      </div>
      <div className="mt-[1.5rem] mb-[4.56rem] flex justify-center items-center gap-[1rem] w-max mx-auto">
        <HeroInputEmail />
        <Button icon type="join">
          Join now
        </Button>
      </div>
    </main>
  );
}
