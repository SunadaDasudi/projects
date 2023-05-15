import React, { useState } from 'react'
import './Payment.css'
import BasketItem from './BasketItem';
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom'

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const handlePayment = event => { }
    const handleCardElementChange = event => {
        //listen for changes in the CardElement
        //display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    }

    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout"><a href="">{basket?.length} items</a></Link>)
                </h1>
                {/* Payment section - delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Vildandsvägen 18D, LGH 1201</p>
                        <p>Lund 22734</p>
                    </div>
                </div>
                {/* Payment section - review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items & Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <BasketItem
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            ></BasketItem>
                        ))}
                    </div>
                </div>
                {/* Payment section - payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe */}
                        <form onSubmit={handlePayment}>
                            <CardElement onChange={handleCardElementChange}></CardElement>
                            <div className="payment__priceConatiner">

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment