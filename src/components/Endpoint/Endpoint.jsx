import React from "react";
import {Container} from 'react-bootstrap';
import Endpoint1 from "./assets/img/endpoint-1.webp";
import Endpoint2 from "./assets/img/endpoint-2.webp";
import Endpoint3 from "./assets/img/endpoint-3.webp";
import Endpoint4 from "./assets/img/endpoint-4.webp";
import Endpoint5 from "./assets/img/endpoint-5.webp";
import Endpoint6 from "./assets/img/endpoint-6.webp";
import "./assets/styles/_index.scss";

const Endpoint = () => {
    return(
        <div className="endpoint-section">
            <Container>
                <div className="endpoint-title text-center mx-auto" id="features">
                    Powerful endpoint management, built for the devices you choose
                </div>
                <div className="endpoint-grid">
                    <div className="endpoint-card">
                        <div className="endpoint-img-div"><img src={Endpoint1} alt="" className="endpoint-img"/></div>
                        <div className="endpoint-text-lg">Zero-touch Enrollment</div>
                        <div className="endpoint-text-sm">Onboard endpoints and users with minimal user intervention. Provision devices and set up configurations well before the user gets their hands on.</div>
                    </div>
                    <div className="endpoint-card">
                        <div className="endpoint-img-div"><img src={Endpoint2} alt="" className="endpoint-img"/></div>
                        <div className="endpoint-text-lg">Automation</div>
                        <div className="endpoint-text-sm">Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports.</div>
                    </div>
                    <div className="endpoint-card">
                        <div className="endpoint-img-div"><img src={Endpoint3} alt="" className="endpoint-img"/></div>
                        <div className="endpoint-text-lg">Remote Access Management</div>
                        <div className="endpoint-text-sm">Hexnode UEM enables the enterprise to manage every single device in the corporate ecosystem for optimal and secure operation.</div>
                    </div>
                    <div className="endpoint-card">
                        <div className="endpoint-img-div"><img src={Endpoint4} alt="" className="endpoint-img"/></div>
                        <div className="endpoint-text-lg">Endpoint Security and Compliance</div>
                        <div className="endpoint-text-sm">Hexnode helps you maintain compliance with international regulatory bodies and set up custom rules for compliance within your business for security purposes.</div>
                    </div>
                    <div className="endpoint-card">
                        <div className="endpoint-img-div"><img src={Endpoint5} alt="" className="endpoint-img"/></div>
                        <div className="endpoint-text-lg">Integrations</div>
                        <div className="endpoint-text-sm">Hexnode's various integrations make it easy to fit into your current endpoint ecosystem. These integrations include Azure AD, Okta, Android Enterprise, Apple School and Business manager, and many more enterprise and technology integrations.</div>
                    </div>
                    <div className="endpoint-card">
                        <div className="endpoint-img-div"><img src={Endpoint6} alt="" className="endpoint-img"/></div>
                        <div className="endpoint-text-lg">App Management</div>
                        <div className="endpoint-text-sm">Set up a bespoke app store, enable mandatory apps, and ensure endpoints come equipped with all the required applications, custom enterprise apps included.</div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Endpoint