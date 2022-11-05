import React from 'react';
import { IToken } from 'services/azureApi/types';
import * as St from './LoadingVideo.styled';

const LoadingVideo: React.FC = () => {
  const videoUrl = '/videos/PLEASEWAIT.mp4';

  return (
    <St.Video autoPlay loop>
      <source src={videoUrl} type="video/mp4" />
      Sorry, your browser doesn&apos;t support embedded videos.
    </St.Video>
  );
};

export default LoadingVideo;
