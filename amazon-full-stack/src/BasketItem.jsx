import React from 'react'
import { useStateValue } from './StateProvider'
import './BasketItem.css'

function BasketItem({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = (id) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET', payload: id
        });
    };

    return (
        <div className='basketItem'>
            <img src={image} alt="" />
            <div className="item__details">
                <p className="item_title">
                    {title}
                </p>
                <div className="item__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </div>
                <div className="item__rating">
                    {Array(rating)
                        .fill()
                        .map(() => (
                            <p>⭐</p>
                        ))}
                </div>
                <button onClick={() => removeFromBasket(id)}>Remove from basket</button>
            </div>
        </div>
    )
}

export default BasketItem