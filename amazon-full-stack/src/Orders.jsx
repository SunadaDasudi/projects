import React, { useEffect, useState } from 'react'
import { useStateValue } from './StateProvider'
import { collection, getDocs, query, where } from 'firebase/firestore' //use getDocs to fetch documents
import { db } from './firebase_configuration'

import './Orders.css'
import Order from './Order'

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [userOrders, setuserOrders] = useState([]);

    const getUserOrders = async () => {
        if (user) {
            try {
                const ordersRef = collection(db, 'orders');
                const _query = query(ordersRef, where('userId', '==', user?.uid));
                const querySnapshot = await getDocs(_query);

                setuserOrders(querySnapshot.docs.map(doc => doc.data()))

            } catch (error) {
                console.error('Error getting documents:', error);
            }
        }
        else
            setuserOrders([]);
    };

    useEffect(() => {
        getUserOrders();
    }, []);

    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            {userOrders?.map(order => (
                <Order order={order} />
            ))}
        </div>
    )
}

export default Orders