import React from "react";
import { Link } from "gatsby";
import "./assets/styles/_index.scss";

const TryHexnode = () => {
    return(
        <div className="tryhexnode-section  d-flex justify-content-center align-items-center">
            <div className="tryhexnode-content">
                <div className="tryhexnode-text text-center">Get Hexnode UEM and start securing your endpoints</div>
                <div className=" d-flex justify-content-center tryhexnode-button-wrapper"><Link to="https://www.hexnode.com/mobile-device-management/cloud/signup/"><div className="button button-trybutton tryhexnode-button">TRY HEXNODE FOR FREE</div></Link></div>
            </div>
        </div>
    )
}

export default TryHexnode