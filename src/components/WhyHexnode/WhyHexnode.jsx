    import React from "react";
    import {Container} from 'react-bootstrap';
    import { Link } from "gatsby";
    import "./assets/styles/_index.scss";
    import adapticon from "./assets/img/adapt.svg";
    import geticon from "./assets/img/get.svg";
    import unifiedicon from "./assets/img/unified.svg";
    import zeroicon from "./assets/img/zero.svg";
    import hexnode from "./assets/img/hexnode.svg";

    const WhyHexnode = () => {
        return(
            <div className="whyhexnode-wrapper">
                <Container>
                    <div className="whyhexnode-title text-center mx-auto" id="why-hexnode">
                        Why Hexnode?
                    </div>
                    <div className="whyhexnode-grid">
                        <div className="whyhexnode-card-top">
                            <div className="whyhexnode-card">
                                <div className="whyhexnode-card-title d-flex align-items-center">
                                    <div className="whyhexnode-card-img-div"><img src={adapticon} alt="" className=""/></div>
                                    <div className="whyhexnode-card-title-text">Adapt to the new normal</div> 
                                </div>                                               
                                <div className="whyhexnode-content">Hybrid, remote or onsite, you can trust Hexnode UEM to deliver. Create policies that cater to your organization’s protocols. Whether it be BYOD, COPE, or platform limited, Hexnode can manage it all.</div>
                                <div className="whyhexnode-text"><Link to="https://www.hexnode.com/mobile-device-management/cloud/signup/"> Try Hexnode on your endpoints</Link></div>
                            </div>
                        </div>
                        <div className="whyhexnode-card-top">
                            <div className="whyhexnode-card"> 
                                <div className="whyhexnode-card-title d-flex align-items-center">
                                    <div className="whyhexnode-card-img-div"><img src={zeroicon} alt="" className=""/></div>
                                    <div className="whyhexnode-card-title-text">Zero compromise security</div> 
                                </div>                                               
                                <div className="whyhexnode-content">Enable full-fledged device encryption, data loss prevention, and all-rounded device security with Hexnode UEM. Be at the bleeding edge of device security without any compromises.</div>
                                <div className="whyhexnode-text"><Link to="https://www.hexnode.com/mobile-device-management/cloud/signup/"> Try Hexnode on your endpoints</Link></div>
                            </div>
                        </div>
                        <div className="whyhexnode-card-top">
                            <div className="whyhexnode-card"> 
                                <div className="whyhexnode-card-title d-flex align-items-center">
                                    <div className="whyhexnode-card-img-div"><img src={geticon} alt="" className=""/></div>
                                    <div className="whyhexnode-card-title-text">Get more done with automation</div> 
                                </div>                                               
                                <div className="whyhexnode-content">Hexnode UEM automation features help free up IT’s time spent on mundane and repetitive tasks. Do hours’ worth of work in a few minutes.</div>
                                <div className="whyhexnode-text"><Link to="https://www.hexnode.com/mobile-device-management/cloud/signup/"> Try Hexnode on your endpoints</Link></div>
                            </div>
                        </div>
                        <div className="whyhexnode-card-top">
                            <div className="whyhexnode-card"> 
                                <div className="whyhexnode-card-title d-flex align-items-center">
                                    <div className="whyhexnode-card-img-div"><img src={unifiedicon} alt="" className=""/></div>
                                    <div className="whyhexnode-card-title-text">Unified Policy Management</div> 
                                </div>                                               
                                <div className="whyhexnode-content">Create a single policy through Hexnode and apply it on all the devices in your organization. Any platform or form factor, achive single pane of glass management with Hexnode.</div>
                                <div className="whyhexnode-text"><Link to="https://www.hexnode.com/mobile-device-management/cloud/signup/"> Try Hexnode on your endpoints</Link></div>
                            </div>
                        </div>                                    
                    </div>
                    <div className="line-wrapper">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="line-animation left-top">
                                <svg xmlns="http://www.w3.org/2000/svg" width="177" height="134.928" viewBox="0 0 177.49 134.928">
                                    <path 
                                    id="path" 
                                    d="M-18870.2-4879.633v-95.043c0-26.781-22.783-38.885-35.471-38.885h-141.02" 
                                    transform="translate(19047.193 5014.062)" 
                                    fill="none" 
                                    stroke="#020a19" 
                                    strokeLinecap="round" 
                                    strokeWidth="1" 
                                    />
                                </svg>
                            </div>
                            <div className="line-animation right-top">
                                <svg xmlns="http://www.w3.org/2000/svg" width="177" height="134.928" viewBox="0 0 177.49 134.928">
                                    <path 
                                    id="path" 
                                    d="M-19046.7-4879.633v-95.043c0-26.781,22.783-38.885,35.471-38.885h141.02" 
                                    transform="translate(19047.195 5014.062)" 
                                    fill="none" 
                                    stroke="#020a19" 
                                    strokeLinecap="round" 
                                    strokeWidth="1" 
                                    />
                                </svg>
                            </div>
                            <div className="line-animation hexnode-icon">
                                <img src={hexnode} alt="" />
                            </div>
                            <div className="line-animation left-bottom">
                                <svg xmlns="http://www.w3.org/2000/svg" width="177" height="134.928" viewBox="0 0 177.49 134.928">
                                    <path 
                                    id="path" 
                                    d="M-18870.2-5013.562v95.043c0,26.781-22.783,38.885-35.471,38.885h-141.02" 
                                    transform="translate(19047.193 5014.062)" 
                                    fill="none" 
                                    stroke="#020a19" 
                                    strokeLinecap="round" 
                                    strokeWidth="1" 
                                    />
                                </svg>
                            </div>
                            <div className="line-animation right-bottom">
                                <svg xmlns="http://www.w3.org/2000/svg" width="177" height="134.928" viewBox="0 0 177.49 134.928">
                                    <path 
                                    id="path" 
                                    d="M-19046.7-5013.562v95.043c0,26.781,22.783,38.885,35.471,38.885h141.02" 
                                    transform="translate(19047.195 5014.062)" 
                                    fill="none" 
                                    stroke="#020a19" 
                                    strokeLinecap="round" 
                                    strokeWidth="1" 
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>                    
                </Container>                
            </div>
        )
    }
    export default WhyHexnode