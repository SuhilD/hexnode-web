import React from "react";
import {Col, Row, Container, InputGroup, Form} from 'react-bootstrap';
import "./assets/styles/_index.scss";
import bgimg from "./assets/img/banner_img.png";
import YellowTickIcon from "./assets/img/yellowtickicon.svg";
import BlueTickIcon from "./assets/img/bluetickicon.svg";
import GreenTickIcon from "./assets/img/greentickicon.svg";


const Banner = () => {
    return(
        <div className="banner-section">
            <Container>
                <Row>
                    <Col lg={5} md={12} className="p-0 d-flex justify-content-center order-lg-1 order-2">
                        <div className="banner-content d-lg-flex flex-column justify-content-lg-center">
                            <div className="banner-text-one">Unified Endpoint Management</div>
                            <div className="banner-text-two">Gain control and visibility over your endpoints</div>
                            <div className="banner-text-three">Hexnode's UEM solution allows you to simplify endpoint management and free up IT. Focus on the big picture while Hexnode works on the details.</div>
                            <div className="banner-form-row d-md-flex">                               
                                <InputGroup className="">                                    
                                    <Form.Control
                                    placeholder="Email"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <div className="banner-button">LET'S TRY IT OUT</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={1} className="order-lg-2"></Col>
                    <Col lg={6} md={12} className="order-lg-3 order-1 img-col">
                        <div className="banner-img-container">
                            <img src={bgimg} className="bg-img" alt="" />
                            <button className="btn-yellow btn-background-slide d-flex align-items-center">
                                <div className="icon-bg"><img src={YellowTickIcon} alt="" /></div>
                                <div className="btn-content">Password policy applied</div>
                            </button>
                            <button className="btn-blue btn-background-slide d-flex align-items-center">
                                <div className="icon-bg"><img src={BlueTickIcon} alt="" /></div>
                                <div className="btn-content">TvOS Kiosk Active</div>
                            </button>
                            <button className="btn-green btn-background-slide d-flex align-items-center">
                                <div className="icon-bg"><img src={GreenTickIcon} alt="" /></div>
                                <div className="btn-content">Device Enrolled</div>
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>            
        </div>
    )
}

export default Banner