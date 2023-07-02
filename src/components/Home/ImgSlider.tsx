import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, CarouselWrapper } from "./Styles/StyledCarousel";
import slider1 from "../../assets/images/slider-badag.jpg";
import slider2 from "../../assets/images/slider-badging.jpg";
import slider3 from "../../assets/images/slider-scale.jpg";
import slider4 from "../../assets/images/slider-scales.jpg";

function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Carousel {...settings}>
        <CarouselWrapper>
          <a>
            <img src={slider1} alt="sld1" />
          </a>
        </CarouselWrapper>
        <CarouselWrapper>
          <a>
            <img src={slider2} alt="sld2" />
          </a>
        </CarouselWrapper>
        <CarouselWrapper>
          <a>
            <img src={slider3} alt="sld3" />
          </a>
        </CarouselWrapper>
        <CarouselWrapper>
          <a>
            <img src={slider4} alt="sld4" />
          </a>
        </CarouselWrapper>
      </Carousel>
    </div>
  );
}

export default ImgSlider;
