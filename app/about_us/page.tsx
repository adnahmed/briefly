import Image from "next/image";
import Button from "../components/Button";
import { Logos } from "../components/Logos";
import { TextArea, TextField } from "../components/TextField";

const Value = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-[1rem] max-w-max">
      <Image
        className="self-center"
        src={icon}
        width={56}
        height={56}
        alt="value icon"
      />
      <div className="tablet:w-[19rem] flex flex-col gap-[.625rem]">
        <div className="leading-[1.25rem] -tracking-[.05rem] font-serif text-center font-bold text-blue-dark">
          {title}
        </div>
        <div className="leading-[1.295rem] max-w-[10.5rem] tablet:max-w-max -tracking-[.02625rem] text-[.875rem] text-[#5A6772] text-center">
          {description}
        </div>
      </div>
    </div>
  );
};
export default function Page() {
  return (
    <main>
      <div className=" w-full tablet:h-[47.5rem]">
        <div
          className="
         bg-[image:url(/about_us_hero_bg.svg)]
         flex 
         flex-col
         tablet:flex-row
         justify-center
         items-center
         tablet:gap-[8.12rem] 
         w-full
         text-center
         bg-cover
         tablet:text-start
         tablet:px-[15.25rem]"
        >
          <div
            className="
            pt-[7.06rem]
            tablet:py-[8.94rem]
          flex 
          flex-col 
          text-white 
          tablet:text-[3rem] 
          text-[2.5rem]
          tablet:leading-[3.625rem] 
          leading-[2.3125rem]
          -tracking-[.12rem] 
          font-serif"
          >
            Connecting
            <span className="text-yellow">the right partners</span>
          </div>
          <div
            className="
          mt-[1rem]
          tablet:mt-0
          tablet:w-[30rem]
          flex
          flex-col
          items-left
          px-[1rem]
          tablet:px-0
          gap-[.5rem]"
          >
            <span
              className="
            text-white
            tablet:text-[1.25rem]
            text-[.875rem]
            tablet:leading-[1.85rem]
            leading-[1.295rem]
            -tracking-[.02625rem]
            tablet:-tracking-[.0375rem]"
            >
              Leave the struggle behind and find your dream team. We connect you
              with the perfect partners, along with the tools you need to
              achieve business success.
            </span>
            <div className="flex gap-[.5rem] mt-[1rem] tablet:mt-0 mb-[7rem] tablet:mb-0">
              <Button
                custom={{
                  width: "w-[10.75rem]",
                  "@tablet": {
                    width: "tablet:w-max",
                  },
                }}
                type="about_us"
              >
                Get Started
              </Button>
              <Button
                custom={{
                  width: "w-[10.75rem]",
                  "@tablet": {
                    width: "tablet:w-max",
                  },
                }}
                type="white_outline"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        <div
          className="
        w-full
        flex 
        flex-col 
        justify-center 
        items-center 
        gap-[.5rem] 
        px-[1rem]
        tablet:px-0
        pt-[3rem]
        tablet:pt-[4.5rem]"
        >
          <div
            className="
          text-[2rem]
          font-serif 
          leading-[2.3125rem] 
          -tracking-[.08rem] 
          font-bold 
          text-center 
          text-blue-dark"
          >
            The challenge
          </div>
          <div className="text-[.875rem] leading-[1.295rem] -tracking-[.02625rem] tablet:w-[36rem] text-[#5A6772] text-center tablet:leading-[1.48rem] tablet:-tracking-[.03rem]">
            Finding reliable and skilled service providers can be a challenge
            for businesses. The traditional hiring process is often
            time-consuming, expensive, and uncertain, resulting in project
            delays and missed opportunities.
          </div>
        </div>
      </div>
      <div className="pt-[3.44rem] flex w-full flex-col tablet:flex-row justify-center gap-[2rem] items-center mb-[6.5rem]">
        <Image
          className="rounded-[1rem] max-w-[22.5rem] max-h-[20rem] desktop:max-w-[480px] desktop:max-h-[328px]"
          src="/family.png"
          width={480}
          height={328}
          alt="solution"
        />
        <div className="max-w-[22.5rem] tablet:max-w-[20.5rem] desktop:max-w-[30rem] flex flex-col gap-[.5rem] items-start justify-center ">
          <div className="text-blue-dark text-[2rem] leading-[2.3125rem] -tracking-[.08rem] text-bold font-serif">
            Our solution
          </div>
          <div className="text-[#5A6772] leading-[1.48rem] -tracking-[.03rem]">
            At Brieflly, we’ve built a seamless platform that connects you with
            the best professionals who’ve been thoroughly vetted for quality and
            reliability. We get that your business needs are always evolving,
            which is why we offer subscription-based credits. With these
            credits, you can access expertise for any project, big or small. And
            with our powerful tools providing insights, you’ll unlock amazing
            results every time.
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[2rem] justify-center items-center">
        <div className="w-full flex flex-col gap-[.5rem] items-center justify-center ">
          <div className="text-blue-dark text-[2rem] leading-[2.3125rem] -tracking-[.08rem] text-bold font-serif">
            Our values
          </div>
          <div className="text-[#5A6772] leading-[1.48rem] -tracking-[.03rem]">
            The heart of everything we do.
          </div>
        </div>
        <div className="flex flex-wrap gap-[2.5rem] mx-[.5rem] justify-evenly mb-[6.87rem]">
          <Value
            icon={"/integrity.svg"}
            title={"Integrity"}
            description={
              "Maintaining the highest standards in everything we do builds trust and reliability."
            }
          />
          <Value
            icon={"/excellence.svg"}
            title={"Excellence"}
            description={
              "Delivering premium services with a dedication to excellence."
            }
          />
          <Value
            icon={"/innovation.svg"}
            title={"Innovation"}
            description={
              "Embracing cutting-edge solutions to meet evolving business needs."
            }
          />
          <Value
            icon={"/collab.svg"}
            title={"Collaboration"}
            description={
              "Believing in the power of teamwork to achieve shared goals."
            }
          />
        </div>
      </div>
      <div className="absolute w-full h-[49rem] tablet:h-[35rem] -z-50 bg-[#0377FF]"></div>
      <div className="flex flex-col-reverse tablet:flex-row justify-center items-center py-[2rem] desktop:gap-[3.56rem]">
        <div className="max-w-[22.5rem] tablet:max-w-[20.5rem] desktop:max-w-[30rem] flex flex-col gap-[.5rem]">
          <div className="font-serif text-[2rem] font-bold leading-[2.3125rem] -tracking-[.08rem] text-gray-950">
            Our mission
          </div>
          <div className="leading-[1.48rem] -tracking-[.03rem] text-sky">
            We’re on a mission to change the game in how businesses connect with
            service providers. We're committed to making high quality services
            accessible, affordable, and efficient, so businesses can reach their
            goals and thrive.
          </div>
        </div>
        <Image
          className="tablet:max-w-[371px] tablet:max-h-[371px]"
          src={"/rocket.webp"}
          width={371}
          height={371}
          alt="rocket icon"
        />
      </div>

      <div
        className="
      flex
      flex-col
      tablet:flex-row
      gap-[2rem]
      tablet:w-[46rem] 
      tablet:mx-auto 
      rounded-[1.5rem] 
      border-[1px] 
      border-blue-dark 
      mx-[1rem]
      tablet:h-[33.0625rem] 
      bg-white 
      drop-shadow-2xl 
      shadow-2xl 
      mb-[12.72rem]
px-[1.5rem] py-[1.41rem]"
      >
        <div className="w-[20.5rem] ">
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex flex-col gap-[1rem]">
                <div className="text-blue-dark font-serif text-[2rem] font-bold leading-[2.3125rem] -tracking-[.08rem]">
                  Let's talk!
                </div>
                <div className="leading-[1.48rem] text-[#5A6772]">
                  We’re happy to answer your questions and introduce you to
                  Brieflly.
                </div>
              </div>
              <div className="hidden tablet:flex gap-[1rem] mt-[1.75rem]">
                <Logos type="instagram" />
                <Logos type="x" />
                <Logos type="discord" />
                <Logos type="linkedin" />
              </div>
            </div>
            <div className="hidden tablet:block">
              <div className="text-blue-dark -tracking-[.045rem] leading-[2.3125rem] font-medium text-[1.125rem] font-serif">
                Email us at:
              </div>
              <div className="leading-[1.295rem] -tracking-[.02625rem] text-[.875rem] text-[#5A6772]">
                Info@Brieflly.com
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <div className="flex flex-col gap-[.5rem] justify-center">
            <div className="font-serif text-[1.125rem] font-medium -tracking-[.045rem] text-start text-blue-dark">
              Name
            </div>
            <TextField placeholder="Enter your name" />
          </div>
          <div className="flex flex-col gap-[.5rem] justify-center">
            <div className="font-serif text-[1.125rem] font-medium -tracking-[.045rem] text-start text-blue-dark">
              Email
            </div>
            <TextField placeholder="Enter your email" />
          </div>
          <div className="flex flex-col gap-[.5rem] justify-center">
            <div className="font-serif text-[1.125rem] font-medium -tracking-[.045rem] text-start text-blue-dark">
              Message
            </div>
            <TextArea placeholder="Enter your message" />
          </div>
          <Button width="w-full" type="primary">
            Submit
          </Button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[.5rem] mb-[3.69rem] tablet:mb-[7.03rem]">
        <div className="font-serif tablet:-tracking-[.12rem] -tracking-[.09rem] leading-[2.375rem] tablet:leading-[3rem] font-bold text-[2.25rem] tablet:text-[3rem] text-center tablet:w-[38rem]">
          Ready to level up your business game?
        </div>
        <div className="mx-[1rem] tablet:mx-0 tablet:w-[47rem] text-center leading-[1.295rem] tablet:leading-[1.85rem] -tracking-[.02625rem] tablet:-tracking-[.0375rem] text-[#5A6772] text-[.875rem] tablet:text-[1.25rem]">
          Brieflly can help you hit your business goals. Whether you're looking
          for an expert or want to sign up as a service provider, join us today
          and start your journey to success!
        </div>
        <div className="flex mt-[.5rem] gap-[1rem] justify-center items-center">
          <Button
            custom={{
              fontSize: "text-[.875rem]",
            }}
            type="primary"
          >
            I’m looking for an expert
          </Button>
          <Button
            custom={{
              fontSize: "text-[.875rem]",
            }}
            type="secondary"
          >
            I’m a service provider
          </Button>
        </div>
      </div>
    </main>
  );
}
