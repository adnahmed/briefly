import Button from "../components/Button";
import { DashboardImage } from "../components/DashboardImage";
import { Feature } from "../components/Features";
export default function Page() {
  return (
    <main>
      <div className="relative  h-[45rem] bg-[#FFF9F4] w-full flex items-start justify-start py-[16rem]">
        <div className="w-[38rem] z-10 tablet:w-[30rem] ml-[21rem] flex flex-col gap-[1rem]">
          <div className="font-serif font-bold leading-[2.9375rem] -tracking-[.1rem] text-[2.5rem]">
            <span>One powerful platfrom.</span>
            <div>
              <span className="text-orange mr-[1rem]">Endless</span>
              <span>possibilities.</span>
            </div>
          </div>
          <div className="leading-[1.48rem] -tracking-[.03rem] text-[#5A6772]">
            Brieflly isn’t just about connecting you with service providers.
            It’s where work flows between you, your partners, and the tools you
            need to fuel your business’s success.
          </div>
          <Button type="platform">Get Started</Button>
        </div>
        <div className="absolute w-full top-0 flex justify-end items-center h-full">
          <DashboardImage />
        </div>
      </div>
      <div className="w-full flex justify-center items-center bg-gray-950 gap-[8rem]">
        <div className="w-[30rem] h-full py-[9.38rem] tablet:w-[25rem] ml-[21rem] flex flex-col gap-[1rem]">
          <div className="font-serif font-bold leading-[2.9375rem] -tracking-[.1rem] text-[2.5rem]">
            <span>All features</span>
            <span className="ml-[1rem] text-blue-950 mr-[1rem]">working</span>
            <div>
              <span className="text-blue-950 mr-[1rem]">together</span>
              <span>for you</span>
            </div>
          </div>
          <div className="leading-[1.48rem] -tracking-[.03rem] text-[#5A6772]">
            Brieflly isn’t just about connecting you with service providers.
            It’s where work flows between you, your partners, and the tools you
            need to fuel your business’s success.
          </div>
          <Button type="primary" icon>
            Get early access
          </Button>
        </div>
        <div className="flex flex-col gap-[1rem] mt-[9.37rem] mb-[4.69rem]">
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
      </div>
    </main>
  );
}
