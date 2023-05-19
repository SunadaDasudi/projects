import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Payment.css'
import BasketItem from './BasketItem';
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom'
import { getBasketTotal } from './reducer'
import axios from './axios'
import { collection, addDoc } from 'firebase/firestore' //use getDocs to fetch documents
import { db } from './firebase_configuration'

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { ConstructionOutlined } from '@mui/icons-material';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    let totalPrice = 0;
    basket.map((item) => (
        totalPrice = totalPrice + parseFloat(typeof (item.price) === 'string' ? item.price.replace(',', "") : item.price)
    ))

    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('')
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true)

    //runs when this components loads as well as anything mentioned changes in the application
    useEffect(() => {
        //generate the stripe secret key which allows us to chanrge the customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //stripe expects the total in a currency subunit
                url: `/payments/create?total=${totalPrice * 100}`
            })
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [basket])

    console.log('clientSecret', clientSecret)

    const handlePayment = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation

            //Push orders into db
            const usersRef = collection(db, 'orders');
            addDoc(usersRef, {
                userId: user?.uid,
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })
                .then(response => {
                    console.log(response);
                    const users = response.docs;
                    console.log(users)
                })
                .catch(error => console.log(error))

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: "EMPTY_BASKET"
            })

            navigate("/orders")
        })

    }
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
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
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
                            <CardElement onChange={handleCardElementChange} />
                            <div className="payment__priceConatainer">
                                Order Total: <small> $</small> <strong>{totalPrice}</strong>

                            </div>
                            <button disabled={disabled || processing || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                            {error && <div>{error} </div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment