"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useRef } from "react";
import { useBreakpoint } from "../lib/useBreakpoint";
import { Logos } from "./Logos";
import { SvgLogos } from "./targetSvgLogo";

export const LogoSlider = () => {
  const splide = useRef<Splide | null>(null);
  const tablet = useBreakpoint("tablet");
  const desktop = useBreakpoint("desktop");
  return (
    <div className="relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-40 before:bg-gradient-to-r before:from-neutral-50 before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-40 after:bg-gradient-to-l after:from-neutral-50 after:content-['']">
      <Splide
        extensions={{
          AutoScroll,
        }}
        ref={splide}
        hasTrack={false}
        options={{
          perPage: desktop ? 6 : tablet ? 3 : 2,
          pagination: false,
          width: "100vw",
          gap: ".5rem",
          arrows: false,
          type: "loop",
          drag: "free",
          focus: "center",
          autoScroll: {
            pauseOnFocus: false,
            pauseOnHover: false,
          },
        }}
      >
        <div className="relative">
          <SplideTrack>
            <SplideSlide>
            <SvgLogos src="/google.svg" alt="Google Logo" />
            </SplideSlide> 
            <SplideSlide>
            <SvgLogos src="/microsoft.svg" alt="Mircrosoft Logo" />
            </SplideSlide>
            <SplideSlide>
            <SvgLogos src="/atlassian.svg" alt="Atlassian Logo" />
            </SplideSlide> 
             <SplideSlide>
            <SvgLogos src="/monday.svg" alt="Monday.com Logo" />
            </SplideSlide> 
             <SplideSlide>
            <SvgLogos src="/adobe.svg" alt="Adobe Logo" />
            </SplideSlide>   
            <SplideSlide>
            <SvgLogos src="/stripe.svg" alt="Stripe Logo" />
            </SplideSlide>
          </SplideTrack>
        </div>
      </Splide>
    </div>
  );
};
