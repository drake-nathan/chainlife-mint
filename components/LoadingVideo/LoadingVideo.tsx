import React from 'react';
import { useWindowSize } from 'hooks/useWindowSize';
import * as St from './LoadingVideo.styled';

const LoadingVideo: React.FC = () => {
  const { windowWidth } = useWindowSize();
  const videoUrl = '/videos/PLEASEWAIT.mp4';

  return (
    <St.Video
      autoPlay
      loop
      height={
        windowWidth > 750
          ? '650'
          : windowWidth >= 412
          ? '412'
          : windowWidth >= 390
          ? '390'
          : '360'
      }
      width={windowWidth > 750 ? '650' : '390'}
    >
      <source src={videoUrl} type="video/mp4" />
      Sorry, your browser doesn&apos;t support embedded videos.
    </St.Video>
  );
};

export default LoadingVideo;
