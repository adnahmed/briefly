import Button from "../components/Button";
import { DashboardImage } from "../components/DashboardImage";
import { Feature } from "../components/Features";
export default function Page() {
  return (
    <main>
      <div className=" justify-center items-center desktop:h-[45rem] gap-[1.45rem] bg-[#FFF9F4] w-full flex flex-col-reverse desktop:flex-row desktop:py-[16rem]">
        <div className="desktop:w-[38rem] mb-[2.75rem] desktop:mb-0 mt-[1.45rem] desktop:mt-0 text-center desktop:text-start mx-[.5rem]  z-10 tablet:w-[30rem] desktop:mx-auto flex flex-col gap-[1rem]">
          <div className="font-serif font-bold leading-[2.5rem] desktop:leading-[2.9375rem] -tracking-[.09rem] desktop:-tracking-[.1rem] text-[2.25rem] desktop:text-[2.5rem]">
            <span>One powerful platfrom.</span>
            <div>
              <span className="text-orange mr-[1rem]">Endless</span>
              <span>possibilities.</span>
            </div>
          </div>
          <div className="desktop:leading-[1.48rem] text-[.875rem] leading-[1.295rem] -tracking-[.02625rem]  desktop:-tracking-[.03rem] text-[#5A6772]">
            Brieflly isn’t just about connecting you with service providers.
            It’s where work flows between you, your partners, and the tools you
            need to fuel your business’s success.
          </div>
          <div className="w-full">
            <Button
              custom={{
                width: "w-full",
                "@desktop": {
                  width: "desktop:w-max",
                },
                // minWidth: "min-w-full",
                // fontSize: "text-[9.125rem]",
              }}
              type="platform"
            >
              Get Started
            </Button>
          </div>
        </div>
        <DashboardImage />
      </div>
      <div className="w-full px-[1rem] flex flex-col desktop:flex-row justify-center  desktop:justify-around items-center screen:justify-center bg-gray-950 screen:gap-[8rem]">
        <div className="screen:w-[30rem] mt-[4rem] h-full  screen:py-[9.38rem] w-[25rem] flex flex-col gap-[1rem]">
          <div className="font-serif font-bold desktop:text-start text-center leading-[2.9375rem] -tracking-[.1rem] text-[2.5rem]">
            <span>All features </span>
            <span className="text-blue-950">working</span>
            <div>
              <span className="text-blue-950 ">together</span>
              <span> for you</span>
            </div>
          </div>
          <div className="desktop:leading-[1.48rem] text-center desktop:text-left text-balance leading-[1.295rem] -tracking-[.02625rem] text-[.875rem] desktop:text-[1rem] desktop:-tracking-[.03rem] text-[#5A6772]">
            Every feature on Brieflly works in harmony, simplifying your work
            and unlocking amazing results. Get your early access now and be the
            first to experience this powerful synergy!
          </div>
          <Button
            custom={{
              display: "hidden",
              alignSelf: "self-center",
              "@tablet": {
                display: "tablet:flex",
              },
              "@desktop": {
                alignSelf: "desktop:self-start",
              },
            }}
            type="primary"
            icon
          >
            Get early access
          </Button>
        </div>
        <div className="flex flex-col gap-[1rem] mt-[1rem] desktop:mt-[9.37rem] tablet:mb-[4.06rem] mb-[1rem] desktop:mb-[4.69rem]">
          <Feature
            icon="/f_1.png"
            title="Matchmaking marketplace"
            description="Every business is unique. That's why we're here to match you with the exact expertise you need to nail your goals, no matter your business size or budget."
          />
          <Feature
            icon="/f_2.png"
            title="Research vetting"
            description="With our strict vetting and high standards, rest assured you’ll only collaborate with the best to achieve the results you’re aiming for. No fluff, just real outcomes."
          />
          <Feature
            icon="/f_3.png"
            title="Secure payment"
            description="We take great care to protect your payment details. We are committed to employ payment security measures to safeguard your transactions and private data."
          />
          <Feature
            icon="/f_4.png"
            title="Monitoring performance"
            description="The dashboard that truly works for you. See everything in real-time and get data-driven insights at your fingertips. You’ll hit every milestone and achieve success."
          />
          <Feature
            icon="/f_5.png"
            title="Reporting"
            description="We've got your back with insightful reports that guide you in creating the perfect strategies and making informed decisions. Pave the way to success confidently."
          />
          <Feature
            icon="/f_6.png"
            title="Unified management solution"
            description="Brieflly empowers your growth with top-notch business intelligence and on-demand scalability. Effortlessly expand your team with elite professionals, streamline your operations, and drive success with confidence."
          />
        </div>
        <Button
          custom={{
            width: "w-full",
            marginBottom: "mb-[4.06rem]",
            "@tablet": {
              display: "tablet:hidden",
            },
          }}
          type="primary"
          icon
        >
          Get early access
        </Button>
      </div>
    </main>
  );
}
