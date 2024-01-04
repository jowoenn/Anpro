import React from "react";
import './Header.scss'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="containerHeader">
                <div className="itemLogo">
                    <Link to="/">
                        <img src="/Assets/Logo Anpro.png" alt="" />
                    </Link>
                </div>

                <ul className="itemList">
                    <li className="button"><Link to="/">HOME</Link></li>
                    <li className="button"><Link to="/services">SERVICES</Link></li>
                    <li className="button"><Link to="/aboutus">ABOUT US</Link></li>
                    <li className="button"><Link to="/contactus">CONTACT US</Link></li>
                </ul>

                <div className="itemBook">
                    <Link to="/contactus">BOOK CONSULTATION</Link>
                </div>
            </div>
        </div>
    )
}

export default Header

