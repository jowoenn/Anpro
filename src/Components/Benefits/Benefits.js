import React from "react";
import './Benefits.scss'

const Benefits = () => {
    return (
        <div>
            <div className="containerBenefits">
                <div className="benefitsTitle">We help foreigners to work, stay and setup business in Indonesia</div>
                
                <div className="benefitsList">
                    <ul>
                        <li>Business Visa
                        <p>When you begin your journey to start your business in Indonesia, Business Visa can be your first option to meet your prospects.</p>
                        </li>
                        <li>Work Permit
                        <p>To work legally in Indonesia you need to apply for work permit, a sponsor company is required.</p>                      
                        </li>
                        <li>Company Setup
                        <p>Setting up a company in Indonesia. There plenty of opportunities in this beautiful country, Indonesia government is welcome everyone to invest.</p>                
                        </li>
                    </ul>
                </div>
                
                <div className="containerButtonBenefits">
                    <div className="benefitsButton"><a href="">VIEW SERVICES</a></div>
                </div>
            </div>
        </div>
    )
}

export default Benefits

