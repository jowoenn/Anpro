import React from "react";
import "./Trust.scss";

function Card({name, position, description }) {
  return (
    <div className="containerCard">
      <div className="cardName">{name}</div>
      <div className="cardPosition">{position}</div>
      <div className="cardDescription">{description}</div>
    </div>
  );
}

export default function Trust() {
  return (
    <div className="containerTrust">
      <div className="trustTitle">
        Trusted from Young Startup to Large Listed Corporation
      </div>
      <div className="sectionRowCard">
        <Card
          name="Doris Heng"
          position="Managing Director of PT Singalift International"
          description="Anpro Solution has been our first choice when we need to get our necessary permits and licenses."
        />
        <Card
          name="Richard Denny"
          position="Managing Director of Richard Denny Consulting"
          description="We have with Anpro Solution from Company Setup, proper permits"
        />
        <Card
          name="Annie"
          position="HR Department Head of PT Asia Cocoa Indonesia"
          description="We have trusted our company's expat Visa and work permits to Anpro Solution from the established of Asia Cocoa Indonesia, They have shown good work ethic and professionalism"
        />
      </div>
    </div>
  );
}
