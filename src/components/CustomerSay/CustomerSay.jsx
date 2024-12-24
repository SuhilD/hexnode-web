import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/styles/_index.scss";
import CustImg1 from "../../images/customer-1.webp";
import CustImg2 from "../../images/customer-2.webp";
import CustImg3 from "../../images/customer-3.webp";

const CustomerSay = () => {
    var settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    arrows: true,
                    dots: false,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    arrows: true,
                    dots: false,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    arrows: true,
                    dots: false,
                },
            },
        ],
    };

    return (
        <section className="customer-say-wrapper" id="customers">
            <Container>
                <Row>
                    <Col className="text-center">
                        <div className="customer-say-title">What our customers say</div>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col xl={8}>
                        <Slider className="customer-say-slider" {...settings}>
                            <div className="customer-say-slide d-md-flex">
                                <div className="customer-say-img-wrapper img-wrapper">
                                    <img src={CustImg1} className="img-fluid" />
                                </div>
                                <div className="customer-say-content-wrapper d-flex align-content-between flex-wrap">
                                    <div className="customer-say-text">"Hexnode is of great value. Works great with Android and iOS!"</div>
                                    <div className="customer-say-people">
                                        <div className="customer-say-people-lg">Justin Modrak</div>
                                        <div className="customer-say-people-sm">Technology Coordinator</div>
                                    </div>
                                </div>
                            </div>
                            <div className="customer-say-slide d-md-flex">
                                <div className="customer-say-img-wrapper img-wrapper">
                                    <img src={CustImg2} className="img-fluid" />
                                </div>
                                <div className="customer-say-content-wrapper d-flex align-content-between flex-wrap">
                                    <div className="customer-say-text">"Most complete MDM solution I found, and I tested many of them, including major names"</div>
                                    <div className="customer-say-people">
                                        <div className="customer-say-people-lg">Dalibor Kruljac</div>
                                        <div className="customer-say-people-sm">KAMELEYA LTD</div>
                                    </div>
                                </div>
                            </div>
                            <div className="customer-say-slide d-md-flex">
                                <div className="customer-say-img-wrapper img-wrapper">
                                    <img src={CustImg3} className="img-fluid" />
                                </div>
                                <div className="customer-say-content-wrapper d-flex align-content-between flex-wrap">
                                    <div className="customer-say-text">"It seemed to be in-line with everything we were looking at."</div>
                                    <div className="customer-say-people">
                                        <div className="customer-say-people-lg">Chris Robinson</div>
                                        <div className="customer-say-people-sm">Executive Account Manager, NCS</div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CustomerSay