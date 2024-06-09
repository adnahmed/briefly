import Image from "next/image";
import Button from "../components/Button";
import { Logos } from "../components/Logos";
import { TextArea, TextField } from "../components/TextField";

const Value = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-[1rem]">
      <Image
        className="self-center"
        src={icon}
        width={56}
        height={56}
        alt="value icon"
      />
      <div className="w-[19rem] flex flex-col gap-[.625rem]">
        <div className="leading-[1.25rem] -tracking-[.05rem] font-serif text-center font-bold text-blue-dark">
          {title}
        </div>
        <div className="leading-[1.295rem] -tracking-[.02625rem] text-[.875rem] text-[#5A6772] text-center">
          {description}
        </div>
      </div>
    </div>
  );
};
export default function Page() {
  return (
    <main>
      <div className=" w-full h-[47.5rem]">
        <div
          className="
         bg-[image:url(/about_us_hero_bg.svg)]
         flex 
         justify-center
         items-center
         gap-[8.12rem] 
         w-full
         px-[15.25rem]"
        >
          <div
            className="
            py-[8.94rem]
          flex 
          flex-col 
          text-white 
          text-[3rem] 
          leading-[3.625rem] 
          -tracking-[.12rem] 
          font-serif"
          >
            Connecting
            <span className="text-yellow">the right partners</span>
          </div>
          <div
            className="
          w-[30rem]
          flex
          flex-col
          items-left
          gap-[.5rem]"
          >
            <span
              className="
            text-white
            text-[1.25rem]
            leading-[1.85rem]
            -tracking-[.0375rem]"
            >
              Leave the struggle behind and find your dream team. We connect you
              with the perfect partners, along with the tools you need to
              achieve business success.
            </span>
            <div className="flex gap-[.5rem]">
              <Button type="about_us">Get Started</Button>
              <Button type="white_outline">Contact Us</Button>
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
        pb-[6.5rem]
        pt-[4.5rem]"
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
          <div className="w-[36rem] text-[#5A6772] text-center leading-[1.48rem] -tracking-[.03rem]">
            Finding reliable and skilled service providers can be a challenge
            for businesses. The traditional hiring process is often
            time-consuming, expensive, and uncertain, resulting in project
            delays and missed opportunities.
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-[2rem] items-center mb-[6.5rem]">
        <Image
          className="rounded-[1rem]"
          src="/family.png"
          width={480}
          height={328}
          alt="solution"
        />
        <div className="w-[30rem] flex flex-col gap-[.5rem] items-start justify-center ">
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
        <div className="flex gap-[2.5rem] justify-between mb-[6.87rem]">
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
      <div className="absolute w-full h-[35rem] -z-50 bg-[#0377FF]"></div>
      <div className="flex justify-center items-center py-[2rem] gap-[3.56rem]">
        <div className="w-[30rem] flex flex-col gap-[.5rem]">
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
          src={"/rocket.webp"}
          width={371}
          height={371}
          alt="rocket icon"
        />
      </div>

      <div
        className="
      flex
      gap-[2rem]
      w-[46rem] 
      mx-auto 
      rounded-[1.5rem] 
      border-[1px] 
      border-blue-dark 
      h-[33.0625rem] 
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
              <div className="flex gap-[1rem] mt-[1.75rem]">
                <Logos type="instagram" />
                <Logos type="x" />
                <Logos type="discord" />
                <Logos type="linkedin" />
              </div>
            </div>
            <div>
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
      <div className="flex flex-col justify-center items-center gap-[.5rem] mb-[7.03rem]">
        <div className="font-serif -tracking-[.12rem] leading-[3rem] font-bold text-[3rem] text-center w-[38rem]">
          Ready to level up your business game?
        </div>
        <div className="w-[47rem] text-center leading-[1.85rem] -tracking-[.0375rem] text-[#5A6772] text-[1.25rem]">
          Brieflly can help you hit your business goals. Whether you're looking
          for an expert or want to sign up as a service provider, join us today
          and start your journey to success!
        </div>
        <div className="flex gap-[1rem] justify-center items-center">
          <Button type="primary">I’m looking for an expert</Button>
          <Button type="secondary">I’m a service provider</Button>
        </div>
      </div>
    </main>
  );
}
