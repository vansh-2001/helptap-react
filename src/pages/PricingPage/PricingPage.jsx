import React from 'react';

//local imports
import { IMG } from '../../utils/images.utils';
import './PricingPage.scss';

const PricingPage = () => {
    return (
        <div className="pricingPage">
            <div className="pricingPage__bgBlue">
                <div className="pricingPage__title">The best part? It's all free!</div>
                <div className="pricingPage__subTitle">Ease your workflow, manage things faster, for free — what more do you want?! We make money when you do!</div>
                <div className="pricingPage__pricing">$9/month</div>
                <div className="pricingPage_charge">+ 2.5% per transaction</div>
            </div>
            <div className="pricingPage__adWrapper">
                <img src={IMG.dot} alt="" className="pricingPage__bgBefore" />
                <div className="pricingPage__ads">Stop wasting time & spending thousands of $$$ on zillions of fragmented apps and services</div>
                <div className="pricingPage__btn">Start Using Helptap Now</div>
                <img src={IMG.dot} alt="" className="pricingPage__bgAfter" />
            </div>
        </div >
    )
}

export default PricingPage
