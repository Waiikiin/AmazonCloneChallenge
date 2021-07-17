import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const [ { basket, user }, dispatch] = useStateValue(); 

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" 
                src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg"
                alt=""></img>
                <div>
                    <h3> {user?.email} </h3>
                    <h2 className="checkout_title">
                        Your Shopping Cart </h2>
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
            <div className="checkout_subtotal">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
