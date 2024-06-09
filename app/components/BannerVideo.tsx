"use client";

import { useEffect, useRef, useState } from "react";
import PlayButton from "./PlayButton";

export const BannerVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [play, setPlay] = useState(false);
  useEffect(() => {
    if (play) videoRef.current?.play();
    else videoRef.current?.pause();
  }, [play]);
  return (
    <>
      {!play && (
        <PlayButton
          onClick={() => {
            setPlay(true);
          }}
        />
      )}
      {play && (
        <video
          onClick={() => {
            setPlay(false);
          }}
          ref={videoRef}
          className="w-full h-full rounded-2xl z-[99] "
          width={1248}
          height={616}
          preload="metadata"
          src="/banner.mp4"
        />
      )}
    </>
  );
};
