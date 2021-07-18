import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>
                <div className="payment_section">
                    {/*delivery address*/}
                    <div className="payment_title">
                        <h3> Delivery Address </h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p> 123 Pembina Hwy</p>
                        <p> Winnipeg, MB</p>
                    </div>
                </div>

                <div className="payment_section">
                    {/*review items*/}
                    <div className="payment_title">
                        <h3> Review items and delivery </h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                rating={item.rating}
                                price={item.price}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3> Payment Method </h3>
                    </div>

                    <div className="payment_details">
                        {/*stripe*/}
                    </div>
                    {/*payment method*/}
                </div>
            </div>
        </div>
    )
}

export default Payment
