import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
};

const SliderCard = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  }, []);

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <img
            className="slider-image"
            src="public/jewellery.jpg"
            alt="Jewellery"
          />
        </div>
        <div>
          <img
            className="slider-image"
            src="public/jewellery.jpg"
            alt="Jewellery"
          />
        </div>
        <div>
          <img
            className="slider-image"
            src="public/jewellery.jpg"
            alt="Jewellery"
          />
        </div>
        <div>
          <img
            src="public/jewellery.jpg"
            className="slider-image"
            alt="Jewellery"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderCard;
