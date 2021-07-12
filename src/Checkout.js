import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" 
                src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg"
                alt=""></img>
                <div>
                    <h2 className="checkout_title">
                        Shopping Cart </h2>
                       {/*Basket Item*/} 
                </div>
            </div>    
            <div className="checkout_subtotal">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
