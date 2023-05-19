import React from 'react'
import BasketItem from './BasketItem'

function Order({ order }) {
    console.log('order in Order component:', order)
    const timestamp = order.created;
    const date = new Date(timestamp * 1000);
    const dateString = date.toISOString(); // Convert to string format

    const basketItemHTML = order.basket.map(item => {
        return <BasketItem
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
        ></BasketItem>
    });
    return (
        <div>
            <p>Order Placed: {dateString}</p>
            <p>Total: ${order.amount / 100}</p>
            {basketItemHTML}
        </div>
    )
}

export default Order