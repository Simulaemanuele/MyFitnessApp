import React from 'react';
import VideoPlayer from 'react-native-video-controls';
import {VideoComponentProps} from 'react-native-video';

const Video = ({onClose, source, rate, volume, isMuted, style}) => {
  return (
    <VideoPlayer
      onBack={() => onClose}
      onEnd={() => onClose}
      fullScreenOrientation="all"
      source={source}
      rate={rate}
      volume={volume}
      isMuted={isMuted}
      resizeMode="cover"
      shouldPlay
      isLooping
      style={style}
    />
  );
};

export default Video;
