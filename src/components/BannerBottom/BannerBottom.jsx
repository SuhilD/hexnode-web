import React from "react";
import {Container} from 'react-bootstrap';
import { Link } from "gatsby";
import "./assets/styles/_index.scss";
import Img1 from "./assets/img/bannerbottom_img_1.webp";
import Img2 from "./assets/img/bannerbottom_img_2.webp";
import Img3 from "./assets/img/bannerbottom_img_3.webp";

const BannerBottom = () => {
    return(
        <div className="bannerbottom-wrapper">
            <Container>         
                <div className="bannerbottom-section d-md-flex justify-content-md-between align-items-center">                    
                    <div className="bannerbottom-content ">
                        <Link to="https://www.hexnode.com/blogs/mitsogo-hexnode-named-a-leader-in-idc-marketscape-worldwide-uem-software-for-apple-devices-2024-vendor-assessment/" target="_blank">
                            <div className="bannerbottom-img">
                                <img src={Img1} alt="Accolade 1" />
                            </div>
                            <div className="bannerbottom-text">
                                Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.
                            </div>
                        </Link>                        
                    </div>
                    <div className="bannerbottom-content-border"></div>
                    <div className="bannerbottom-content ">
                        <Link to="https://www.hexnode.com/blogs/hexnode-listed-as-a-notable-vendor-in-gartner-midmarket-context-magic-quadranttm-for-unified-endpoint-management-tools/" target="_blank">
                            <div className="bannerbottom-img">
                                <img src={Img2} alt="Accolade 2" />
                            </div>
                            <div className="bannerbottom-text">
                                Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for Unified Endpoint Management tools 2022.
                            </div>
                        </Link>                        
                    </div>
                    <div className="bannerbottom-content-border"></div>
                    <div className="bannerbottom-content ">
                        <Link to="https://www.hexnode.com/blogs/hexnode-included-in-the-unified-endpoint-management-landscape-report/" target="_blank">
                            <div className="bannerbottom-img">
                                <img src={Img3} alt="Accolade 3" />
                            </div>
                            <div className="bannerbottom-text">
                                Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.
                            </div>
                        </Link>                        
                    </div>
                </div>
            </Container>            
        </div>
    )
}

export default BannerBottom