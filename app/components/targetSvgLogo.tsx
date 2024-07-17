
"use client";
import Image from "next/image";
import { useBreakpoint } from "../lib/useBreakpoint";
import Button from "./Button";
import React from "react";

export const SvgLogos = ({
  src,
  alt = 'Logo'
}: {
  src: string;
  alt?: string;
}) => {
  return (
    <div className="flex justify-center items-center w-[156px] h-[156px]">
    <Image 
      src={src} 
      alt={alt} 
      width={156} 
      height={156} 
      className="object-contain" 
    />
  </div>
  );
};
