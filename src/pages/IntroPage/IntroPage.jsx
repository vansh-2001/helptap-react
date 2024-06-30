import React from "react";

//local imports
import { IMG } from '../../utils/images.utils'
import "./IntroPage.scss";

const IntroPage = () => {
  return (
    <div className="introPage">
      <div className="introPage__title">Agency Ideas Are Born and Raised Here</div>
      <span className="introPage__subTitle">HelpTap is an all-in-one startup [incubation] platform to [easily] launch, grow and manage your business, from one place. We're on a mission to make it ridiculously easy for people to build and back ideas they love.</span>
      <button className="introPage__btn">Bring your idea/startup 🌱 to life for free</button>

      <div className="introPage__stats">
        <div className="introPage__startupCount">
          <img src={IMG.celebrating1} className="introPage__icon" />
          <span className="introPage__count">1000+</span>
          <div className="introPage__desc">Happy Founders & Entrepreneurs</div>
        </div>
        <div className="introPage__rating">
          <img src={IMG.satisfied} className="introPage__icon" />
          <span className="introPage__count">4.9/5</span>
          <div className="introPage__desc">Satisfaction Rating From 500+ Reviews</div>
        </div>
        <div className="introPage__value">
          <img src={IMG.celebrating} className="introPage__icon" />
          <span className="introPage__count">$25</span>
          <div className="introPage__desc">Combined Valuation of Startups</div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
