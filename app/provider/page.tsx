import Image from "next/image";
import { GetStartedButton } from "../components/GetStartedButton";
import { SmallFeatures } from "../components/SmallFeatures";
import { TextField } from "../components/TextField";
import { Tick } from "../components/Tick";
import { tw } from "../lib/tailwindest";
const tableColumn = tw.rotary({
  base: {
    display: "flex",
    flexDirection: "flex-col",
    justifyContent: "justify-evenly",
    color: "text-blue-dark-950",
    fontSize: "text-[.875rem]",
    "@tablet": {
      fontSize: "tablet:text-[1.125rem]",
    },
  },
  value: {
    textAlign: "text-center",
  },
  key: {
    textAlign: "text-left",
  },
  end_key: {
    textAlign: "text-right",
  },
});
const Step = ({
  number,
  icon,
  title,
  description,
}: {
  number: number;
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div
      className="rounded-[2rem]
  bg-gray-400
  p-[1.5rem]
  flex flex-col gap-[2rem]
  "
    >
      <div className="flex flex-col gap-[.5rem]">
        <div className="bg-blue-950 text-white flex justify-center items-center w-[2rem] h-[2rem] rounded-[50%] text-center leading-[2.3125rem] -tracking-[.04rem]">
          {number}
        </div>
        <Image
          className="self-center"
          src={icon}
          width={80}
          height={80}
          alt={`${title} icon`}
        />
      </div>
      <div className="max-w-[19.5rem] tablet:max-w-[16rem] screen:max-w-[18.9375rem]">
        <div className="font-serif text-[1.25rem] font-bold leading-[2.3125rem] -tracking-[.05rem] text-blue-dark">
          {title}
        </div>
        <div className="leading-[1.295rem] text-[.875rem] -tracking-[.02625rem] text-[#5A6772]">
          {description}
        </div>
      </div>
    </div>
  );
};

const ProcessStep = ({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex gap-[1rem]">
      <div className="flex justify-center items-center text-center text-[1.75rem] font-bold leading-[1.61875rem] -tracking-[.07rem] text-blue-950 w-[3.5rem] h-[3.5rem] bg-gray-950 rounded-[1.75rem]">
        {number}
      </div>
      <div className="flex flex-col w-[16rem]">
        <div className="font-serif text-[1.25rem] font-bold leading-[2.3125rem] -tracking-[.05rem] text-white">
          {title}
        </div>
        <div className="leading-[1.295rem] text-[.875rem] text-gray-950 -tracking-[.02625rem]">
          {description}
        </div>
      </div>
    </div>
  );
};
const RowValue = tw.rotary({
  base: {
    paddingY: "py-[1rem]",
    borderTopColor: "border-t-[rgb(90, 103, 114)/.40]",
    borderTopWidth: "border-t-[1px]",
    "@tablet": {
      height: "tablet:h-[4.5rem]",
    },
    height: "h-[6rem]",
    display: "flex",
  },
  end_key: {
    justifyContent: "justify-end",
    "@tablet": {
      paddingRight: "tablet:pr-[3rem]",
    },
    paddingRight: "pr-[2rem]",
  },
  key: {
    "@tablet": {
      paddingLeft: "tablet:pl-[2.91rem]",
    },
    paddingLeft: "pl-[1rem]",
    fontFamily: "font-serif",
    letterSpacing: "tracking-[-0.045rem]",
    justifyContent: "justify-start",
    alignItems: "items-center",
  },
  value: {
    fontFamily: "font-sans",
    justifyContent: "justify-center",
    alignItems: "items-center",
    "@tablet": {
      lineHeight: "tablet:leading-[1.48rem]",
    },
    letterSpacing: "tracking-[-0.03rem]",
    textAlign: "text-center",
  },
});
const RowHead = tw.rotary({
  key: {
    textAlign: "text-left",
    "@tablet": {
      paddingLeft: "tablet:pl-[2.91rem]",
    },
    paddingLeft: "pl-[1rem]",
    borderLeftRadius: "rounded-l-[1.5rem]",
  },
  end_key: {
    textAlign: "text-left",
    "@tablet": {
      paddingRight: "tablet:pr-[2rem]",
    },
    paddingRight: "pr-[1rem]",
    justifyContent: "justify-end",
    borderRightRadius: "rounded-r-[1.5rem]",
  },
  value: {
    justifyContent: "justify-center",
    paddingX: "px-[4rem]",
    textAlign: "text-center",
  },
  base: {
    display: "flex",
    fontFamily: "font-serif",
    "@tablet": {
      fontSize: "tablet:text-[1.5rem]",
      letterSpacing: "tablet:tracking-[-0.06rem]",
    },
    letterSpacing: "tracking-[-0.0325rem]",
    lineHeight: "leading-[1.5625rem]",
    color: "text-blue-950",
    backgroundColor: "bg-gray-400",
    paddingY: "py-[1.5rem]",
  },
});

export default function Page() {
  const table_data: Record<string, string[] | undefined> = {
    Services: [
      "Biz Dev & Sales team",
      "CRM",
      "Marketing BI & Analytics",
      "Booking & Appointments",
      "Payments & Collections",
      "Workflows Automation",
      "Marketing Accounts Access",
    ],
    Replaces: [
      "1 full-time employee",
      "Various CRM tools",
      "Multiple BI & analytics tools",
      "Various booking tools",
      "Payment processing tools",
      "Workflow automation tools",
      "Access to multiple marketing accounts",
    ],
    Costs: [
      "$6,000/mo",
      "$99/mo",
      "$400/mo",
      "$29/mo",
      "$250/mo",
      "$199/mo",
      "$199/mo",
    ],
  };
  return (
    <main>
      <div className="relative pt-[6rem] tablet:pt-[12.5rem] flex flex-col-reverse tablet:flex-row tablet:gap-[5rem] desktop:gap-[20rem] justify-center items-center">
        <div
          style={{
            background:
              "linear-gradient(91deg, #1E6EE2 0.79%, #FF97F0 33.71%, #FF8533 51.89%, #BBEFB6 84.36%)",
            filter: "blur(156.85000610351562px)",
          }}
          className="absolute right-[19.25rem] top-[11.375rem] w-[26rem] h-[15.6875rem] rounded-[1.5rem]"
        ></div>
        <div className="flex tablet:block flex-col justify-center items-center px-[1rem] tablet:px-0">
          <div className="flex mt-[5.13rem] tablet:mt-0  flex-col gap-[1.5rem]">
            <div className="tablet:w-[20rem]  desktop:w-[38rem] flex flex-col gap-[1rem]">
              <div
                className="
                text-[2rem]
                leading-[2.25rem]
                -tracking-[.08rem]
                tablet:text-[3rem]
                text-center tablet:text-start
          font-bold
          tablet:leading-[3.4375rem]
          tablet:-tracking-[.12rem]
          text-blue-dark
          "
              >
                <div className="inline tablet:block">
                  Market your business.{" "}
                </div>
                <div className="inline tablet:block">Grow faster. </div>
                <div className="inline tablet:block colorful-wave bg-clip-text text-transparent">
                  Build a winning reputation.
                </div>
              </div>
              <div
                className="
                tablet:text-start
                text-center
                text-[1rem]
                leading-[1.48rem]
                -tracking-[.03rem]
                tablet:text-[1.25rem]
          tablet:leading-[1.85rem]
          tablet:-tracking-[.0375rem]
          text-[#5A6772]
          "
              >
                Brieflly connects you with top clients who are eager to
                collaborate. Boost your brand reputation and accelerate your
                path to revenue!
              </div>
            </div>
          </div>
          <div className="flex mt-[1rem] gap-[.5rem]">
            <TextField isSmall placeholder="Enter your email" />
            <GetStartedButton />
          </div>
        </div>
        <div className="rounded-[2rem] shadow-2xl bg-white z-20  px-[1.5rem] py-[1.44rem] flex flex-col items-start">
          <div className="text-[1.25rem] leading-[1.85rem] -tracking-[.0375rem] text-[#5A6772]">
            Boost revenue up to
          </div>
          <div className="colorful-wave bg-clip-text text-transparent text-[3rem] font-serif font-bold -tracking-[.12rem] leading-[3.4375rem]">
            78%
          </div>
        </div>
      </div>
      <div className="flex flex-col px-[1rem] tablet:px-0 justify-center items-center gap-[.5rem] mb-[5.5rem] mt-[4.91rem] tablet:mt-[6rem]">
        <div className="font-serif -tracking-[.06rem] tablet:-tracking-[.08rem] leading-[1.6875rem] tablet:leading-[2.3125rem] font-bold text-[1.5rem] tablet:text-[2rem] text-center tablet:w-[45rem] flex flex-col">
           <div>Why list your business</div> <div>on Brieflly?</div>
        </div>
        <div className="tablet:w-[46rem] text-center leading-[1.295rem] tablet:leading-[1.85rem] -tracking-[.02625rem] tablet:-tracking-[.0375rem] text-[#5A6772] text-[.875rem] tablet:text-[1.25rem]">
          We make it easy for you to fast-track your revenue growth.
        </div>
      </div>
      <SmallFeatures />
      <div className="flex flex-col justify-center items-center gap-[.5rem] mb-[3.47rem]">
        <div className="font-serif -tracking-[.08rem] leading-[2.3125rem] font-bold text-[2rem] text-center desktop:w-[45rem] flex flex-col">
           <div>Here’s how it works</div>
        </div>
        <div className="tablet:w-[32.75rem] text-center leading-[1.85rem] -tracking-[.0375rem] text-[#5A6772]">
          Get started in these 4 easy steps.
        </div>
      </div>
      <div className="flex flex-wrap gap-[2rem] justify-center items-center mb-[6.53rem]">
        <Step
          number={1}
          icon={"/step1.svg"}
          title="Create a company profile"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ante veli"
        />
        <Step
          number={2}
          icon={"/step2.svg"}
          title="Collect reviews"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ante veli"
        />
        <Step
          number={3}
          icon={"/step3.svg"}
          title="Market your business"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ante veli"
        />
        <Step
          number={4}
          icon={"/step4.svg"}
          title="Get qualified leads"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ante veli"
        />
      </div>
      <div className="absolute w-full h-[72rem] tablet:h-[55rem] desktop:h-[55rem] screen:h-[45.5625rem] -z-50 bg-[#0377FF]"></div>
      <div className="flex flex-col gap-[3.72rem] py-[1.5rem] tablet:py-[5.56rem]">
        <div className="flex flex-col tablet:flex-row gap-[2rem] justify-center items-center">
          <div
            style={{
              backgroundImage: "url(/arrow.webp)",
            }}
            className="bg-no-repeat bg-contain bg-center w-[22.5rem] h-[20.5rem] desktop:w-[472px] desktop:h-[328px] px-[7.38rem] py-[2.94rem] rounded-[1.5rem] bg-white"
          ></div>
          <div className="flex flex-col gap-[.5rem] w-[22.5rem] tablet:w-[20rem] desktop:w-[30rem]">
            <div className="font-serif text-[2rem] font-bold leading-[2.3125rem] -tracking-[.08rem] text-white">
              Client reviews made easy
            </div>
            <div className="leading-[1.48rem] -tracking-[.03rem] text-gray-950">
              We know the struggle that 65% of B2B businesses rely on
              third-party reviews to evaluate and choose service providers.
              That&apos;s why we&apos;re here to collect reviews from your
              clients, so you get all the exposure you deserve.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[1.72rem] justify-center items-center">
          <div className="text-white text-center font-serif text-[2rem] leading-[2.3125rem] -tracking-[.08rem]">
            How we collect reviews
          </div>
          <div className="flex justify-center desktop:max-w-[60rem] screen:max-w-full flex-wrap gap-[2rem] tablet:gap-[3.5rem]">
            <ProcessStep
              number={1}
              title="Submit client references"
              description="You only need to provide us with your client references. We'll handle the rest!"
            />
            <ProcessStep
              number={2}
              title="Schedule interviews"
              description="We schedule phone interviews with your clients to gather their feedback."
            />
            <ProcessStep
              number={3}
              title="Verify reviews"
              description="Every review is carefully checked and polished for clarity and accuracy."
            />
            <ProcessStep
              number={4}
              title="Publish reviews"
              description="Verified reviews are posted to your profile, boosting your reputation and visibility."
            />
          </div>
        </div>
      </div>
      <div className="flex mt-[3.5rem] flex-col desktop:flex-row desktop:mt-[10.94rem] justify-around max-w-[78rem] desktop:mx-auto items-center">
        <div className="text-[2.5rem] font-serif text-blue-dark leading-[2.5625rem] -tracking-[.01rem] text-center">
          Do more, spend less
        </div>
        <div className="tablet:w-[29.6rem] text-balance text-center text-[#5A6772] text-[1.125rem] tablet:text-[1.25rem] leading-[1.665rem]  tablet:leading-[1.85rem] tablet:-tracking-[.0375rem] mt-[1rem] desktop:mt-0 desktop:text-start -tracking-[.03375rem]">
          Our analytics and management tools not only help your business grow
          but also save you some serious cash!
        </div>
      </div>
      <div className="mt-[4rem] flex justify-center items-center flex-col mb-[23.25rem] desktop:mb-[17.25rem]">
        <div className="grid grid-cols-4 desktop:grid-cols-[1fr,1.4fr,1.2fr,1fr] grid-rows-[1fr,5rem]">
          {Object.keys(table_data).map((key, h_index) => (
            <div
              key={h_index}
              className={tableColumn.class(h_index === 0 ? "key" : "value")}
            >
              <span className={RowHead.class(h_index === 0 ? "key" : "value")}>
                {key}
              </span>
              {table_data[key]?.map((value, index) => (
                <span
                  key={index}
                  className={RowValue.class(h_index === 0 ? "key" : "value")}
                >
                  {value}
                </span>
              ))}
            </div>
          ))}
          <div className={tableColumn.class("end_key")}>
            <span className={RowHead.class("end_key")}>Brieflly</span>
            <span className={RowValue.class("end_key")}>
              <Tick />
            </span>
            <span className={RowValue.class("end_key")}>
              <Tick />
            </span>
            <span className={RowValue.class("end_key")}>
              <Tick />
            </span>
            <span className={RowValue.class("end_key")}>
              <Tick />
            </span>
            <span className={RowValue.class("end_key")}>
              <Tick />
            </span>
            <span className={RowValue.class("end_key")}>
              <Tick />
            </span>
            <span className={RowValue.class("end_key")}>
              <Tick />
            </span>
          </div>
          <div className="col-start-1 col-end-3 tablet:col-start-3 tablet:col-end-4 bg-gray-700  rounded-l-[1.5rem] flex justify-center flex-col items-center">
            <div className="text-blue-dark text-[.875rem] text-center -tracking-[.035rem]">
              Total cost:
            </div>
            <div className="font-serif leading-[1.5625rem] -tracking-[.045rem] text-[1.125rem] text-blue-dark text-center">
              $6,970/mo
            </div>
          </div>
          <div className=" bg-gray-700 col-start-3 col-end-5 tablet:col-start-4 tablet:col-end-5 pr-[1.5rem] flex justify-end items-center rounded-r-[1.5rem]">
            <div className="flex flex-col items-center max-w-max">
              <div>
                <Tick />
              </div>
              <div className="font-srif text-[1.125rem] leading-[1.5625rem] -tracking-[.045rem] text-center text-blue-dark">
                All included
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
