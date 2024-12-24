import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/styles/_index.scss";
import Product1 from "./assets/img/slider-img-1.svg";
import Product2 from "./assets/img/slider-img-2.svg";
import Product3 from "./assets/img/slider-img-3.svg";
import Product4 from "./assets/img/slider-img-4.svg";
import Product5 from "./assets/img/slider-img-5.svg";
import Product6 from "./assets/img/slider-img-6.svg";
import Product7 from "./assets/img/slider-img-7.svg";
import Product8 from "./assets/img/slider-img-8.svg";
import Product9 from "./assets/img/slider-img-9.svg";

const ProductSlider = () => {
    var settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 7,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 820,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              initialSlide: 2,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      };
    
    return(
        <div className="productslider-wrapper">
            <Container>
                <div className="slider-container">
                    <Slider {...settings}>
                    <div>
                        <img src={Product1} className="slider-image" alt="" />
                    </div>
                    <div>
                        <img src={Product2} className="slider-image" alt="" />
                    </div>                    
                    <div>
                        <img src={Product3} className="slider-image" alt="" />
                    </div>
                    <div>
                        <img src={Product4} className="slider-image" alt="" />
                    </div>
                    <div>
                        <img src={Product5} className="slider-image" alt="" />
                    </div>
                    <div>
                        <img src={Product6} className="slider-image" alt="" />
                    </div>
                    <div>
                        <img src={Product7} className="slider-image" alt="" />
                    </div>
                    <div>
                        <img src={Product8} className="slider-image" alt="" />
                    </div>
                    <div>
                        <img src={Product9} className="slider-image" alt="" />
                    </div>
                    </Slider>
                </div>
            </Container>
        </div>        
    )
}

export default ProductSlider

