import React from "react";
import "./About.scss";

function Card({ image, name, position, description }) {
  return (
    <div className="containerCard">
      <div className="cardImage">
        <img src={image} alt="" />
      </div>
      <div className="cardName">{name}</div>
      <div className="cardPosition">{position}</div>
      <div className="cardDescription">{description}</div>
    </div>
  );
}

export default function About() {
  return (
    <div className="containerAbout">
      <div className="aboutTitle">ABOUT US</div>

      <div className="stockImage">
        <img src="/Assets/StockPhoto.png" alt="" />
      </div>

      <div className="containerOne">
        <div className="imageOne">
          <img src="/Assets/StockPhoto.png" alt="" />
        </div>
        <div className="containerTwo">
          <div className="textOne">
            Let us help you to get your Visa and Permit so you can focus on run
            your business and simply just more peace of mind.
          </div>
          <div className="textTwo">
            With 10 years of experience in helping businesses grow, we’ve
            mastered the skills of understanding business requirements
            irrespective of the industry they serve. Our clients vary from tiny
            start-ups to larger corporations who wish to take their business
            higher.
          </div>

          <div className="textTwo">
            We’ve helped entrepreneurs set up a business, build productive teams
            and make the most of the available resources.
          </div>
        </div>
      </div>

      <div className="containerThree">
        <div className="containerMV">
          <div className="titleMV">-Mission-</div>
          <div className="contentMV">
            Bring clarity to the priorities, strategies and opportunities within
            businesses or roles to help them achieve the exceptional results
            they desire.
          </div>
        </div>
        <div className="containerMV">
          <div className="titleMV">-Vision-</div>
          <div className="contentMV">
            We strive to enable our clients to have clear direction, focus and
            achieve success in all the areas of their business.
          </div>
        </div>
      </div>

      <div className="containerFour">
        <div className="sectionColumnCard">
            <div className="teamTitle">OUR TEAM</div>
            <div className="sectionRowCard">
                <Card
                image="./Assets/StockPhoto.png"
                name="Anna Lee"
                position="Founder / CEO"
                description="Anna is the company founder, she has long working experience in HR before founding Anpro Solution, she understand what the industry need and the requirements to work and to run company in Indonesia legally "
                />
                <Card
                image="./Assets/StockPhoto.png"
                name="Manto A. S"
                position="Founder / CEO"
                description="Anna is the company founder, she has long working experience in HR before setup Anpro Solution, she understand what industry need and requirements to work and to run company in Indonesia legally "
                />
                <Card
                image="./Assets/StockPhoto.png"
                name="Angriani Dian"
                position="Founder / CEO"
                description="Anna is the company founder, she has long working experience in HR before setup Anpro Solution, she understand what industry need and requirements to work and to run company in Indonesia legally "
                />
            </div>
        </div>
      </div>
    </div>
  );
}
