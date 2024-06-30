import React from 'react';

//local imports
import Features from '../../components/Features/Features';
import { featureListLaunch } from '../../utils/constants';
import { IMG } from '../../utils/images.utils';
import './LaunchStartupPage.scss';

const LaunchStartupPage = () => {
    const color = "rgba(234, 95, 102, 1)";
    return (
        <div className="launchStartPage">
            <div className="launchStartPage__title">Launch your startup</div>
            <div className="launchStartPage__desc">Don't just think, make it happen — introduce your idea to the world in minutes, all with a custom brand! </div>
            <div className="launchStartPage__wrapper">
                <div className="launchStartupPage__listWrapper">
                    <Features featureList={featureListLaunch} color={color} />
                </div>
                {/* <div className="launchStartupPage__imgWrapper">
                    <img src={IMG.createStartupLg} alt="" className="launchStartPage__imgLg" />
                    <img src={IMG.createStartupSm} alt="" className="launchStartPage__imgSm" />
                    <img src={IMG.profile} alt="" className="launchStartPage__profileImg" />

                </div> */}
                <div className="launchStartupPage__imgWrapper">
                    <img src={IMG.startupGp} alt="" className="launchStartupPage__img" />
                </div>
            </div>
        </div>
    )
}

export default LaunchStartupPage
