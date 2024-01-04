import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="containerFooter">
      <div className="containerLinks">
        <div className="sectionImage">
          <img src="./Assets/Logo Anpro.png" alt="" />
        </div>
        <div className="sectionLinks">
          <ul>
            <div className="sectionTitle">LINKS</div>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
          </ul>
        </div>
        <div className="sectionContact">
          <ul>
            <div className="sectionTitle">CONTACT US</div>
            <li><Link to="/contactus">Location</Link></li>
          </ul>
        </div>
        <div className="sectionSocial">
          <ul>
            <div className="sectionTitle">SOCIAL</div>
            <li><a href="https://www.instagram.com/anpro.visa">Instagram</a></li>
            <li><a href="https://www.facebook.com/pages/PT.%20Anpro%20Solution/432990303457621/">Facebook</a></li>
            <li><a href="https://api.whatsapp.com/send?phone=6281267696668">Whats App</a></li>
          </ul>
        </div>
      </div>

      <div className="lineBreak"></div>

      <div className="copyrightText">Copyright © 2023 ANPRO VISA</div>
    </div>
  );
}
