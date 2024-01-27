import React from "react";

import * as St from "./LoadingVideo.styled";
import { useWindowSize } from "hooks/useWindowSize";

const LoadingVideo: React.FC = () => {
  const { windowWidth } = useWindowSize();
  const videoUrl = "/videos/PLEASEWAIT.mp4";

  return (
    <St.Video
      autoPlay
      height={
        windowWidth > 750
          ? "650"
          : windowWidth >= 412
            ? "412"
            : windowWidth >= 390
              ? "390"
              : "360"
      }
      loop
      width={windowWidth > 750 ? "650" : "390"}
    >
      <source src={videoUrl} type="video/mp4" />
      Sorry, your browser doesn&apos;t support embedded videos.
    </St.Video>
  );
};

export default LoadingVideo;
