import React from "react";
import { Link } from "gatsby";
import {Container} from 'react-bootstrap';
import "./assets/styles/_index.scss";

const Footer = () => {
    return(
        <div className="footer-section">
            <Container className="p-0">                
                <div className="footer-div d-md-flex justify-content-md-between text-center">
                    <div className="footer-left">                        
                    <ul className="list-inline">                        
                            <li className="list-inline-item"><Link to="https://www.hexnode.com/legal/terms-of-use/" >Terms of Use</Link></li>
                            <div className="list-inline-item footer-dash">-</div>
                            <li className="list-inline-item"><Link to="https://www.hexnode.com/legal/privacy-policy/" >Privacy</Link></li>
                            <div className="list-inline-item footer-dash">-</div>
                            <li className="list-inline-item"><Link to="https://www.hexnode.com/legal/cookies-policy/" >Cookies</Link></li>                       
                        </ul>
                    </div>
                    <div className="footer-right">
                        Copyright © 2024 Mitsogo Inc. All Rights Reserved.
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer