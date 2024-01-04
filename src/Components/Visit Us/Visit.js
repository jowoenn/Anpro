import React from "react";
import './Visit.scss'
import { Link } from "react-router-dom";

export default function Visit() {
    return (
        <div>
            <div className="containerVisit">
                <div className="containerText">
                    <div className="textOne">Begin Your Business in Indonesia With Our Services and Support</div>
                    <div className="buttonOne"><Link to="/contactus">CONTACT US</Link></div>
                </div>
                <div className="image">
                    <img src="/Assets/Image1.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

