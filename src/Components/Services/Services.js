import React from "react";
import "./Services.scss";

export default function Services() {
  return (
    <div className="containerServices">
      <div className="serviceTitle">OUR SERVICES</div>

      <div className="serviceList">
        <div className="list">
          <div className="listItem">
            <div className="listTitle">Business Visa Application</div>
            <div className="listContent">
              To begin your business journey in Indonesia, Business Visa is your
              key to open the door of opportunities, we will be your best Agency
              partner for the key.
            </div>
          </div>
        </div>

        <div className="list">
          <div className="listItem">
            <div className="listTitle">Work Permit</div>
            <div className="listContent">
              For corporations who employ expatriates, we will be your agency of
              choice, with our long experiences, we keep ourselves up to date
              with the latest government rules and regulations, so you will
              always meet the requirement.
            </div>
          </div>
        </div>

        <div className="list">
          <div className="listItem">
            <div className="listTitle">Company Setup</div>
            <div className="listContent">
              We have served all sizes of companies to set up a business entity
              in Indonesia, from a young startup to large listed corporations
              that would like to branch a new entity in Indonesia. We always
              welcome new investment, there are plenty of business categories
              that are open to foreign investment, some can be 100% foreign
              ownership while some may need a local partner.
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
