import React from "react";

import images from "./porfolioImages";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Portfolio.module.css";

function Portfolio(props) {
  
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container data-aos={props.animation} fluid className={`${styles.container} ${styles.portfolio}`}>
      <h2>Portfolio</h2>
      <hr />
      <Container className={styles["slider-container"]}>
        <Slider {...settings}>
          {images.map((img, i) => (
            <div key={i} className={styles["slider-images"]}>
              <img alt="mayur tade portfolio images" src={img.imgURL} />
            </div>
          ))}
        </Slider>
      </Container>
    </Container>
  );
}

export default Portfolio;
