import React from "react";

interface VideoPlayerProps {
  videoName: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoName }) => {
  return (
    <video
      autoPlay={true}
      muted={true}
      loop={true}
      playsInline={true}
      src={process.env.PUBLIC_URL + `/${videoName}`}
    />
  );
};

export default VideoPlayer;
