import React from 'react';

//local imports
import "./Features.scss";

const Features = ({ featureList, color }) => {
    return (
        <div className="features">
            {
                featureList.map(
                    (feature, index) => (
                        <div className="features__item" key={index} style={{
                            borderLeft: index === 0 && `4px solid ${color}`,
                            backgroundColor: index === 0 && "white"
                        }}>
                            <div className="features__title" style={{
                                color: index === 0 && color
                            }}>{feature.title}</div>
                            <div className="features__desc">{feature.desc}</div>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Features
