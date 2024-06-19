"use client";
import { useState } from "react";
import { tw } from "../lib/tailwindest";
import { useBreakpoint } from "../lib/useBreakpoint";
import Button from "./Button";
import { FeatureSmall } from "./Features Small";

const featureImage = tw.style({
  transition: "transition-all ease-in-out",
  overflow: "overflow-hidden",
  borderRadius: "rounded-[1rem]",
  backgroundRepeat: "bg-no-repeat",
  backgroundSize: "bg-cover",
  width: "w-[22.5rem]",
  height: "h-[16rem]",
});
const featureContainer = tw.style({
  display: "flex",
  justifyContent: "justify-center",
  alignItems: "items-center",
  flexDirection: "flex-col",
});
export const SmallFeatures = () => {
  const tablet = useBreakpoint("tablet");
  const [image, setImage] = useState<string>("provider1.png");
  if (tablet)
    return (
      <div className="flex flex-col-reverse desktop:flex-row justify-center items-center gap-[2rem] mb-[7.97rem]">
        <div className="flex flex-col tablet:h-[22rem] desktop:h-[27rem] justify-between">
          <div>
            <FeatureSmall
              myFeature="provider1.png"
              currentFeature={image}
              onClick={() => setImage("provider1.png")}
              title="Client matchmaking"
              description="We connect you with ideal clients who perfectly fit your skills and preferences. Collaborate, create fantastic results, and reach success together."
              icon={"/matchmaking.svg"}
            />
            <FeatureSmall
              currentFeature={image}
              myFeature="provider2.png"
              onClick={() => setImage("provider2.png")}
              title="On-time payments"
              description="Stop worrying about payments. Automated system guarantees you get paid on time, every time. "
              icon={"/payment.svg"}
            />
            <FeatureSmall
              currentFeature={image}
              myFeature="provider3.png"
              onClick={() => setImage("provider3.png")}
              title="Advanced project manager platform"
              description="Approve projects, review briefs, track income, send updates and reports effortlessly all in one platform. We simplify your workflow so you can focus on your best work."
              icon={"/star.svg"}
            />
          </div>
          <Button type="primary">Get started</Button>
        </div>
        <div
          style={{
            backgroundImage: `url(/${image})`,
          }}
          className={`transition-[background] overflow-hidden rounded-[1rem] tablet:w-[28rem] tablet:h-[20rem] desktop:w-[38rem] desktop:h-[27rem] bg-no-repeat tablet:bg-cover`}
        ></div>
      </div>
    );
  return (
    <div className="flex flex-col gap-[1rem] items-center justify-center">
      <div className={featureContainer.class}>
        <div
          style={{
            backgroundImage: `url(/provider1.png)`,
          }}
          className={featureImage.class}
        ></div>
        <FeatureSmall
          myFeature="provider1.png"
          currentFeature={image}
          onClick={() => setImage("provider1.png")}
          title="Client matchmaking"
          description="We connect you with ideal clients who perfectly fit your skills and preferences. Collaborate, create fantastic results, and reach success together."
          icon={"/matchmaking.svg"}
        />
      </div>
      <div className={featureContainer.class}>
        <div
          style={{
            backgroundImage: `url(/provider2.png)`,
          }}
          className={featureImage.class}
        ></div>
        <FeatureSmall
          currentFeature={image}
          myFeature="provider2.png"
          onClick={() => setImage("provider2.png")}
          title="On-time payments"
          description="Stop worrying about payments. Automated system guarantees you get paid on time, every time. "
          icon={"/payment.svg"}
        />
      </div>
      <div className={featureContainer.class}>
        <div
          style={{
            backgroundImage: `url(/provider3.png)`,
          }}
          className={featureImage.class}
        ></div>
        <FeatureSmall
          currentFeature={image}
          myFeature="provider3.png"
          onClick={() => setImage("provider3.png")}
          title="Advanced project manager platform"
          description="Approve projects, review briefs, track income, send updates and reports effortlessly all in one platform. We simplify your workflow so you can focus on your best work."
          icon={"/star.svg"}
        />
      </div>
    </div>
  );
};
