"use client";
import Image from "next/image";
import { useRef } from "react";
import FlipTilt, { FlipTiltRef } from "react-flip-tilt";
export const Value = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  const ref = useRef<FlipTiltRef>(null);
  return (
    <div
      onMouseEnter={(e) => {
        if (ref?.current) ref?.current.flip();
        e.preventDefault();
      }}
      className="flex flex-col gap-[1rem] max-w-max"
    >
      <FlipTilt
        ref={ref}
        className="max-w-[56px] max-h-[56px] self-center"
        front={
          <Image
            className="self-center"
            src={icon}
            width={56}
            height={56}
            alt="value icon"
          />
        }
        back={
          <Image
            className="self-center"
            src={icon}
            width={56}
            height={56}
            alt="value icon"
          />
        }
      />

      {/* <Image
        className="self-center"
        src={icon}
        width={56}
        height={56}
        alt="value icon"
      /> */}
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
