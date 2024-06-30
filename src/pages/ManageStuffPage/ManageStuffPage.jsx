import React from 'react';

//local imports
import Features from '../../components/Features/Features';
import { IMG } from '../../utils/images.utils';
import './ManageStuffPage.scss';

const ManageStuffPage = () => {
    const color = "rgba(160, 197, 83, 1)";
    const featureList = [
        {
            title: "Integrated Stats",
            desc: "Stay on top of you business's health with deeply integrated stats, no more installing boring scripts, tags, & creating events."
        },
        {
            title: "Tasks and Activities",
            desc: "Have a shared view of your business' tasks & activities to keep everyone aligned and drive towards same objectives."
        },
        {
            title: "Legal US Entity",
            desc: "Set up a legal US entity in minutes using in built incorporation tool."
        },
        {
            title: "Legal Documents",
            desc: "Access thousands of legal documents for your needs."
        },
        {
            title: "File Tax Automatically",
            desc: "Collect and file taxes automatically"
        }
    ]
    return (
        <div className="manageStuffPage">
            <div className="manageStuffPage__title">Manage all other not so fun stuff...</div>
            <div className="manageStuffPage__desc">From legal to taxation, manage your back office work from one place. A control panel of the startup to neatly organize and run your business, without lifting a finger.</div>
            <div className="manageStuffPage__wrapper">
                <div className="launchStartupPage__listWrapper">
                    <Features featureList={featureList} color={color} />
                </div>
                {/* <div className="launchStartupPage__imgWrapper">
                    <img src={IMG.createStartupLg} alt="" className="manageStuffPage__imgLg" />
                    <img src={IMG.createStartupSm} alt="" className="manageStuffPage__imgSm" />
                    <img src={IMG.profile} alt="" className="manageStuffPage__profileImg" />

                </div> */}
                <div className="launchStartupPage__imgWrapper">
                    <img src={IMG.manageGp} alt="" className="launchStartupPage__img" />
                </div>
            </div>
        </div>
    )
}

export default ManageStuffPage
