import React, { useState, useEffect, useRef  } from "react";
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "gatsby";
import "./assets/styles/_index.scss";
import Img1 from "../../images/android.webp";
import Img2 from "../../images/ios.webp";
import Img3 from "../../images/macos.webp";
import Img4 from "../../images/windows.webp";
import Img5 from "../../images/tvos.webp";
import Img6 from "../../images/fireos.webp";

const MultiPlatform = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: false,
        autoplay: false,
    };

    const navSettings = {
        dots: false,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: false,
        autoplay: false,
    };

    return (
        <section className="multi-platform-wrapper" id="multi-platform">
            <div className="multi-platform-title">
                <div className="multi-platform-title-lg">Multi-platform Endpoint Management</div>
                <div className="multi-platform-title-sm">Devices of varying platforms? Hexnode thrives in a diverse environment.</div>
            </div>
            <Container className="d-md-block d-none">
                <Row>
                    <Col xl={6} md={6}>
                        <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} {...settings} className="multi-platform-slider">
                            <div className="multi-img-wrapper img-wrapper">
                                <img src={Img1} className="img-fluid" />
                            </div>
                            <div className="multi-img-wrapper img-wrapper">
                                <img src={Img2} className="img-fluid" />
                            </div>
                            <div className="multi-img-wrapper img-wrapper">
                                <img src={Img3} className="img-fluid" />
                            </div>
                            <div className="multi-img-wrapper img-wrapper">
                                <img src={Img4} className="img-fluid" />
                            </div>
                            <div className="multi-img-wrapper img-wrapper">
                                <img src={Img5} className="img-fluid" />
                            </div>
                            <div className="multi-img-wrapper img-wrapper">
                                <img src={Img6} className="img-fluid" />
                            </div>
                        </Slider>
                    </Col>
                    <Col xl={6} md={6}>
                        <Slider
                            asNavFor={nav1}
                            ref={slider => (sliderRef2 = slider)}
                            slidesToShow={6}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            {...navSettings}
                            className="multi-content-slider"
                        >
                            <div className="multi-content">
                                <h3>Android</h3>
                                <div className="multi-content-text-wrapper">
                                    <div className="multi-content-text">Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to it’s full capabilities.</div>
                                    <div className="multi-content-btn">
                                        <Link to="https://www.hexnode.com/mobile-device-management/cloud/signup/">Try Hexnode on your endpoints</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="multi-content">
                                <h3>iOS</h3>
                                <div className="multi-content-text-wrapper">
                                    <div className="multi-content-text">Manage, secure, and monitor iOS devices in your organization. With Hexnode’s ABM and ASM integration, deploy devices and apps with ease.</div>
                                    <div className="multi-content-btn">
                                        <Link to="https://www.hexnode.com/mobile-device-management/cloud/signup/">Try Hexnode on your endpoints</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="multi-content">
                                <h3>macOS</h3>
                                <div className="multi-content-text-wrapper">
                                    <div className="multi-content-text">Leverage Hexnode’s desktop management capabilities to their fullest. Securely deploy and manage macOS devices in bulk with Hexnode UEM.</div>
                                    <div className="multi-content-btn">
                                        <Link to="https://www.hexnode.com/mobile-device-management/cloud/signup/">Try Hexnode on your endpoints</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="multi-content">
                                <h3>Windows</h3>
                                <div className="multi-content-text-wrapper">
                                    <div className="multi-content-text">Spearhead modern PC management in your organization with Hexnode. Set limit’s and monitor PC health and compliance remotely with Hexnode UEM.</div>
                                    <div className="multi-content-btn">
                                        <Link to="https://www.hexnode.com/mobile-device-management/cloud/signup/">Try Hexnode on your endpoints</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="multi-content">
                                <h3>tvOS</h3>
                                <div className="multi-content-text-wrapper">
                                    <div className="multi-content-text">Remotely manage and secure tvOS devices with Hexnode. Display your brand aesthetics and custom messages on tvOS devices with Hexnode UEM.</div>
                                    <div className="multi-content-btn">
                                        <Link to="https://www.hexnode.com/mobile-device-management/cloud/signup/">Try Hexnode on your endpoints</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="multi-content">
                                <h3>FireOS</h3>
                                <div className="multi-content-text-wrapper">
                                    <div className="multi-content-text">Enroll Amazon Fire tablets, phones and e-readers in Hexnode UEM to manage them all from a single console.</div>
                                    <div className="multi-content-btn">
                                        <Link to="https://www.hexnode.com/mobile-device-management/cloud/signup/">Try Hexnode on your endpoints</Link>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
            <Container className="d-md-none mobile-accordion">
                <Row>
                    <Col>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Android</Accordion.Header>
                                <Accordion.Body>   
                                    <div className="accordion-img"><img src={Img1} className="img-fluid" alt="" /></div>                                 
                                    <div className="accordion-body-text">Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to it’s full capabilities.</div>
                                    <div className="tryhexnode-mobile-link"><Link to="https://www.hexnode.com/mobile-device-management/cloud/signup/">Try Hexnode on your endpoints</Link></div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>iOS</Accordion.Header>
                                <Accordion.Body>   
                                    <div className="accordion-img"><img src={Img2} className="img-fluid" alt="" /></div>                                 
                                    <div className="accordion-body-text">Manage, secure, and monitor iOS devices in your organization. With Hexnode’s ABM and ASM integration, deploy devices and apps with ease.</div>
                                    <div className="tryhexnode-mobile-link"><Link to="https://www.hexnode.com/mobile-device-management/cloud/signup/">Try Hexnode on your endpoints</Link></div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>macOS</Accordion.Header>
                                <Accordion.Body>   
                                    <div className="accordion-img"><img src={Img3} className="img-fluid" alt="" /></div>                                 
                                    <div className="accordion-body-text">Leverage Hexnode’s desktop management capabilities to their fullest. Securely deploy and manage macOS devices in bulk with Hexnode UEM.</div>
                                    <div className="tryhexnode-mobile-link"><Link to="https://www.hexnode.com/mobile-device-management/cloud/signup/">Try Hexnode on your endpoints</Link></div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Windows</Accordion.Header>
                                <Accordion.Body>   
                                    <div className="accordion-img"><img src={Img4} className="img-fluid" alt="" /></div>                                 
                                    <div className="accordion-body-text">Spearhead modern PC management in your organization with Hexnode. Set limit’s and monitor PC health and compliance remotely with Hexnode UEM.</div>
                                    <div className="tryhexnode-mobile-link"><Link to="https://www.hexnode.com/mobile-device-management/cloud/signup/">Try Hexnode on your endpoints</Link></div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>tvOS</Accordion.Header>
                                <Accordion.Body>   
                                    <div className="accordion-img"><img src={Img5} className="img-fluid" alt="" /></div>                                 
                                    <div className="accordion-body-text">Remotely manage and secure tvOS devices with Hexnode. Display your brand aesthetics and custom messages on tvOS devices with Hexnode UEM.</div>
                                    <div className="tryhexnode-mobile-link"><Link to="https://www.hexnode.com/mobile-device-management/cloud/signup/">Try Hexnode on your endpoints</Link></div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>FireOS</Accordion.Header>
                                <Accordion.Body>   
                                    <div className="accordion-img"><img src={Img6} className="img-fluid" alt="" /></div>                                 
                                    <div className="accordion-body-text">Enroll Amazon Fire tablets, phones and e-readers in Hexnode UEM to manage them all from a single console.</div>
                                    <div className="tryhexnode-mobile-link"><Link to="https://www.hexnode.com/mobile-device-management/cloud/signup/">Try Hexnode on your endpoints</Link></div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MultiPlatform