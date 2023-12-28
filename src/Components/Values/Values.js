import React from "react";
import "./Values.scss";

export default function Values() {
  return (
    <div className="containerValues">
      <div className="sectionColumnValues">
        <div className="sectionRowValues">
          <div className="valuesImage">
            <img src="./Assets/StockPhoto.png" alt="" />
          </div>

          <div className="valuesText">
            <div className="textOne">We are here to help!</div>
            <div className="textTwo">
              If you are looking for a reliable agency with whom you can trust
              to represent you or your company to apply for Visa, Permit legally
              or setup your business, we are here. With more than 10 years of
              experience in supporting Expat and Foreigner, we’ve build strong
              network of key persons both in public and private sector to
              helping you cope up with the latest regulation.
            </div>
          </div>
        </div>

        <div className="sectionRowValues">

          <div className="valuesText2">
            <div className="textOne">Why choose us?</div>
            <div className="textThree">
              We are well established Visa Agency with decade of experiences
            </div>
          </div>

          <div className="valuesImage2">
            <img src="./Assets/StockPhoto.png" alt="" />
          </div>

          <div className="valuesText3">
            <div className="textOne">Our values</div>
            <div className="textTwo">
              1. Trust and Commitment <br />
              2. Honesty and Openness <br />
              3. Dedication from the team <br />
              4. Practical approach
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
