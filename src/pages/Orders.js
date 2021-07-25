import React, { useState, useEffect } from 'react';
import '../styles/Orders.css';
import Order from '../components/Order';
import { useStateValue } from '../utils/StateProvider';
import { db } from '../utils/firebase';

import  { Redirect } from 'react-router-dom';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [{ basket , user }, dispatch] = useStateValue();

    useEffect(() => {
        if (user){
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => {
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                })
            } else {
                setOrders([]);
            }
    }, [user])
    
    if(!user){
        return <Redirect to="/login" />
    }else{
        return (
            <div className="orders">
                <h1>Your Orders</h1>

                <div className="orders_order">
                    {orders?.map(order => (
                        <Order order={order} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Orders