import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider'

import './Subtotal.css'

function Subtotal() {

    const navigate = useNavigate();
    const [{ basket }, dispatch] = useStateValue();
    let totalPrice = 0;
    basket.map((item) => (
        totalPrice = totalPrice + parseFloat(typeof (item.price) === 'string' ? item.price.replace(',', "") : item.price)
    ))

    return (
        <div className='subtotal'>
            <>
                <p>
                    Subtotal ({basket.length} items):
                    <small>$</small> <strong>{totalPrice}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
            </>

            <button onClick={e => {
                navigate("/payment")
            }}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal