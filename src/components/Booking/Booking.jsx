import React from 'react';

//local imports
import './Booking.scss';

const Booking = ({ booking }) => {
    return (
        <div className="booking">
            <div className="booking__image" style={{ backgroundImage: `url(${booking.imageUrl})`}} ></div>
            {/* <img src={booking.imageUrl} alt="" className="booking__image" /> */}
            <div className="booking__date">{booking.date}</div>
            <div className="booking__title">{booking.title}</div>
            <div className="booking__desc">{booking.desc}</div>
        </div>
    )
}

export default Booking;
