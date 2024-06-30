import React from 'react';

//local imports
import Booking from '../../components/Booking';
import { bookingList } from '../../utils/constants'
import './BookSessionPage.scss';

const BookSessionPage = () => {
    return (
        <div className="bookSessionPage">
            <div className="bookSessionPage__title">But that's not all...</div>
            <div className="bookSessionPage__subTitle">Check out our detailed topic guides, get 1-1 support from your startup coach and help from domain experts at every step of your journey!</div>

            <div className="bookSessionPage__btnGroup">
                <button className="bookSessionPage__btn">Guides</button>
                <button className="bookSessionPage__btn">Services</button>
            </div>

            <div className="bookSessionPage__rightGradient">
                <div className="bookSessionPage__list hide-scrollbar">
                    {
                        bookingList.map((booking, index) => <Booking booking={booking} key={index} />)
                    }
                </div>
            </div>

            <button className="bookSessionPage__btnBook">Book a Session With Us!</button>
        </div>
    )
}

export default BookSessionPage
