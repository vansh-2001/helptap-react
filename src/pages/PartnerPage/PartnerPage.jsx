import React from 'react';

//local imports
import { IMG } from '../../utils/images.utils';
import { reviewList } from '../../utils/constants';
import CustomerReview from '../../components/CustomerReview';
import './PartnerPage.scss';

const PartnerPage = () => {

    return (
        <div className="partnerPage">
            <div className="partnerPage__bgGray">
                <div className="partnerPage__title">The ultimate startup operating system</div>
                <div className="partnerPage__desc">Cluttered apps and services mean messy business — with HelpTap, access the tools, experts, knowledge, and capital you need to launch, grow, and manage your startup, from one place! It's like your startup's skin/control panel!</div>
            </div>
            <img src={IMG.desktop} className="partnerPage__desktopImg" alt="desktop" />

            <div className="partnerPage__partners">
                <div className="partnerPage__line"></div>
                <div className="partnerPage__text">Proud to Support the Achievers</div>
                <div className="partnerPage__line"></div>
            </div>
            <div className="partnerPage__partnerLogos">
                <img src={IMG.clickup} className="partnerPage__partnerLogo" alt="" />
                <img src={IMG.facebook} className="partnerPage__partnerLogo" alt="" />
                <img src={IMG.asana} className="partnerPage__partnerLogo" alt="" />
                <img src={IMG.amazon} className="partnerPage__partnerLogo" alt="" />
                <img src={IMG.mailchimp} className="partnerPage__partnerLogo" alt="" />

            </div>
            <div className="partnerPage__partnersBtm">
                <div className="partnerPage__line"></div>
                <button className="partnerPage__button">Start Using Helptap Now</button>
                <div className="partnerPage__line"></div>
            </div>

            <div className="partnerPage__customerReview">
                {
                    reviewList.map((review, index) => (
                        <CustomerReview {...review} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default PartnerPage
