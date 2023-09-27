import React from "react";
import { ViewerContainer, ViewerWrapper } from "./Styles/StyledViewer";
import viewerdisney from "../../assets/images/viewers-disney.png";
import viewermarvel from "../../assets/images/viewers-marvel.png";
import viewpixar from "../../assets/images/viewers-pixar.png";
import viewernat from "../../assets/images/viewers-national.png";
import viewerstar from "../../assets/images/viewers-starwars.png";
import VideoPlayer from "./video";
function HomeViewers() {
  return (
    <ViewerContainer>
      <ViewerWrapper>
        <a href="/">
          <img src={viewerdisney} alt="disney" />
          <VideoPlayer videoName="disney.mp4" />
        </a>
      </ViewerWrapper>
      <ViewerWrapper>
        <a href="/">
          <img src={viewpixar} alt="pixar" />
          <VideoPlayer videoName="pixar.mp4" />
        </a>
      </ViewerWrapper>
      <ViewerWrapper>
        <a href="/">
          <img src={viewermarvel} alt="marvel" />
          <VideoPlayer videoName="marvel.mp4" />
        </a>
      </ViewerWrapper>
      <ViewerWrapper>
        <a href="/">
          <img src={viewernat} alt="national geographic" />
          <VideoPlayer videoName="national.mp4" />
        </a>
      </ViewerWrapper>
      <ViewerWrapper>
        <a href="/">
          <img src={viewerstar} alt="star wars" />
          <VideoPlayer videoName="star-wars.mp4" />
        </a>
      </ViewerWrapper>
    </ViewerContainer>
  );
}

export default HomeViewers;
