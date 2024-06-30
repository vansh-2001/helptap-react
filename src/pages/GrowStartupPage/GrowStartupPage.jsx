import React from 'react';

//local imports
import Features from '../../components/Features/Features';
import { IMG } from '../../utils/images.utils';
import './GrowStartupPage.scss'

const GrowStartupPage = () => {
    const color = "rgba(255, 205, 82, 1)";
    const featureList = [
        {
            title: "Build Your Brand",
            desc: "Run high converting email, sms, and ad campaigns to target your customers and build your brand effectively."
        },
        {
            title: "Advance Searching",
            desc: "Find new customers through advanced prospecting and native growth tactics ."
        },
        {
            title: "Partner Campaigns",
            desc: "On board an army of supporters & cheerleaders (investors, affiliates, employees and more) through partner campaigns."
        },
        {
            title: "Customer Activities",
            desc: "Get a comprehensive view of your customers and their activities through a powerful yet simple CRM."
        },
        {
            title: "Live Chat Support",
            desc: "Provide unparalleled, seamless support through live chat and unified inbox for your team."
        },
        {
            title: "User Portal",
            desc: "Raise funds and manage all stakeholders seamlessly through the native portal."
        }
    ]

    return (
        <div className="growStartupPage">
            <div className="growStartupPage__title">Grow your startup</div>
            <div className="growStartupPage__desc">Build an engine to sustain and improve your startup's growth.</div>
            <div className="growStartupPage__wrapper">
                <div className="launchStartupPage__listWrapper">
                    <Features featureList={featureList} color={color} />
                </div>
                {/* <div className="launchStartupPage__imgWrapper">
                    <img src={IMG.createStartupLg} alt="" className="growStartupPage__imgLg" />
                    <img src={IMG.createStartupSm} alt="" className="growStartupPage__imgSm" />
                    <img src={IMG.profile} alt="" className="growStartupPage__profileImg" />

                </div> */}
                <div className="launchStartupPage__imgWrapper">
                    <img src={IMG.growStartGp} alt="" className="launchStartupPage__img" />
                </div>
            </div>
        </div>
    )
}

export default GrowStartupPage
