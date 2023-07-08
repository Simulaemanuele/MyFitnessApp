import React from 'react';
import VideoPlayer from 'react-native-video-controls';
import {VideoComponentProps} from 'react-native-video';

const Video = ({onClose, source}) => {
  return (
    <VideoPlayer
      onBack={() => onClose}
      onEnd={() => onClose}
      fullScreenOrientation="all"
      source={source}
    />
  );
};

export default Video;
