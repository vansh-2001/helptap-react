import React from 'react';

//local imports
import { IMG } from '../../utils/images.utils'
import "./CustomerReview.scss";

const CustomerReview = ({ desc, imageUrl, name, role, bgColor, textColor }) => {
    return (
        <div className="customerReview" style={{ backgroundColor: bgColor }}>
            <div className="customerReview__singleCode">
            <svg width="20" height="34" viewBox="0 0 20 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7992 19.831C17.5929 17.6886 15.6062 16.1273 13.2045 15.4362C12.2193 15.1526 11.2341 15.0087 10.2762 15.0087C8.79635 15.0087 7.5611 15.3468 6.60361 15.761C7.52669 12.3816 9.74418 6.55063 14.162 5.89398C14.5711 5.83314 14.9059 5.53733 15.0179 5.13915L15.9834 1.68595C16.0648 1.39392 16.0165 1.08133 15.8499 0.827896C15.6838 0.574466 15.4161 0.405372 15.1157 0.364253C14.7901 0.319777 14.4578 0.297119 14.128 0.297119C8.82572 0.297119 3.57465 5.83146 1.35842 13.7558C0.0581339 18.4048 -0.323265 25.3943 2.88108 29.7945C4.67353 32.2557 7.28963 33.5707 10.6551 33.7016C10.6689 33.7021 10.6824 33.7025 10.6966 33.7025C14.8492 33.7025 18.5323 30.9055 19.6526 26.9014C20.321 24.5077 20.0181 21.9969 18.7992 19.831Z" fill={textColor} fill-opacity="0.3"/>
            </svg>
            <svg width="20" height="34" viewBox="0 0 20 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7992 19.831C17.5929 17.6886 15.6062 16.1273 13.2045 15.4362C12.2193 15.1526 11.2341 15.0087 10.2762 15.0087C8.79635 15.0087 7.5611 15.3468 6.60361 15.761C7.52669 12.3816 9.74418 6.55063 14.162 5.89398C14.5711 5.83314 14.9059 5.53733 15.0179 5.13915L15.9834 1.68595C16.0648 1.39392 16.0165 1.08133 15.8499 0.827896C15.6838 0.574466 15.4161 0.405372 15.1157 0.364253C14.7901 0.319777 14.4578 0.297119 14.128 0.297119C8.82572 0.297119 3.57465 5.83146 1.35842 13.7558C0.0581339 18.4048 -0.323265 25.3943 2.88108 29.7945C4.67353 32.2557 7.28963 33.5707 10.6551 33.7016C10.6689 33.7021 10.6824 33.7025 10.6966 33.7025C14.8492 33.7025 18.5323 30.9055 19.6526 26.9014C20.321 24.5077 20.0181 21.9969 18.7992 19.831Z" fill={textColor} fill-opacity="0.3"/>
            </svg>

                {/* <img src={IMG.singlecode} alt="" style={{ color : textColor, fill: textColor }} />
                <img src={IMG.singlecode} alt="" style={{ color: textColor, fill: textColor }} /> */}
            </div>
            <div className="customerReview__desc" style={{ color: textColor }} >
                {desc}
            </div>
            <div className="customerReview__userInfo">
                <img src={imageUrl} alt="" className="customerReview__userAvatar" />
                <div>
                    <div className="customerReview__username" style={{ color: textColor }} >{name}</div>
                    <div className="customerReview__userrole" style={{ color: textColor }} >{role}</div>
                </div>
            </div>
        </div>
    )
}

export default CustomerReview
