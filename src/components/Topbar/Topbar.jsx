import React from "react";

//local imports
import { ReactComponent as Logo } from "../../assets/images/IntroPageImages/logo 3.svg";
import { ReactComponent as Arrow } from "../../assets/images/IntroPageImages/arrow-right-square.svg";
import "./Topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <Logo className="topbarLeft__logo" />
      </div>
      <div className="topbarRight">
        <div className="topbarRight__item">Features</div>
        <div className="topbarRight__item">Pricing</div>
        <div className="topbarRight__item">Resources</div>
        <div className="topbarRight__arrow topbarRight__item">Get Started <Arrow className="topbarRight__backIcon" /></div>
      </div>
    </div>
  );
};

export default Topbar;
