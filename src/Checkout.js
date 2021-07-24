import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { motion, AnimatePresence} from 'framer-motion'

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
                            <AnimatePresence>     
                                    {basket.map(item => (                                       
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0.2 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ x: -200, opacity: 0 }}
                                            transition={ { type: "spring", stiffness: 500, damping: 60, duration: 0.5 } }
                                        >
                                            <CheckoutProduct
                                                id={item.id}
                                                title={item.title}
                                                image={item.image}
                                                rating={item.rating}
                                                price={item.price}
                                            />
                                        </motion.div>  
                                    ))}
                            </AnimatePresence>
                    </div>
                </div>    
                <div className="checkout_subtotal">
                    <Subtotal/>
                </div>
            </div>
    )
}

export default Checkout
