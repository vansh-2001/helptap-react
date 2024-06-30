import React from 'react';

//local imports
import { featureList, resourceList, serviceList, productlist, comparisonList, socialList } from '../../utils/constants'
import { ReactComponent as Logo } from '../../assets/images/IntroPageImages/logo 3.svg'
import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__wrapper">
                    <Logo />
                    {
                        productlist.list.map((item, index) => (
                            <div key={index} className="footer__item">
                                {item}
                            </div>
                        ))
                    }
                </div>

                <div className="footer__wrapper">
                    <div className="footer__title">{featureList.title}</div>
                    {
                        featureList.list.map((item, index) => (
                            <div key={index} className="footer__item">
                                {item}
                            </div>
                        ))
                    }
                </div>

                <div className="footer__wrapper">
                    <div className="footer__title">{resourceList.title}</div>
                    {
                        resourceList.list.map((item, index) => (
                            <div key={index} className="footer__item">
                                {item}
                            </div>
                        ))
                    }
                </div>

                <div className="footer__wrapper">
                    <div className="footer__title">{serviceList.title}</div>
                    {
                        serviceList.list.map((item, index) => (
                            <div key={index} className="footer__item">
                                {item}
                            </div>
                        ))
                    }
                </div>

                <div className="footer__wrapper">
                    <div className="footer__title">{comparisonList.title}</div>
                    {
                        comparisonList.list.map((item, index) => (
                            <div key={index} className="footer__item">
                                {item}
                            </div>
                        ))
                    }
                </div>

                <div className="footer__wrapper">
                    <div className="footer__title">{socialList.title}</div>
                    {
                        socialList.list.map((item, index) => (
                            <div key={index} className="footer__item">
                                {item}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer
