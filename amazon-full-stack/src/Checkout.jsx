import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import BasketItem from './BasketItem'
import { useStateValue } from './StateProvider'

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    const basketItemHTML = basket.map(item => {
        return <BasketItem
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
        ></BasketItem>
    });

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <h3>Hello {user?.email}!</h3>
                <h2 className='checkout__title'>Shopping Cart</h2>
                {basketItemHTML}
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout