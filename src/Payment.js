import React, { useState, useEffect } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link, useHistory, Redirect } from 'react-router-dom'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import axios from './axios'
import { db } from './firebase'
import { motion, AnimatePresence} from 'framer-motion'

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError ] = useState(null);
    const [succeeded, setSucceeded ] = useState(false);
    const [processing, setProcessing ] = useState(false);
    const [disabled, setDisabled ] = useState(true);

    const handleSubmit = async event => {
        // stipe processing
        event.preventDefault();
        setProcessing(true);
        
        // get the client's secret from API
        const response = await axios ({
            method: 'post',
            // Stripe expects the total in a currencies subunits
            url: `/payments/create?total=${getBasketTotal(basket)* 100}`

        }).then( async (response) => {
            return await stripe.confirmCardPayment(response.data.clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            })
        }).then(async ( {paymentIntent}) => {
            // paymentIntent = payment confirmation
            await db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
            })

            setSucceeded(true);
            setProcessing(false);
            setError(null);
            
            dispatch({
                type: 'EMPTY_BASKET'
            })
            
            history.replace('/orders')
        }).catch(err => {
            console.log(err)
        });
    }
        

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    if(!user){
        return <Redirect to="/login" />
    }else{
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
                            <h3> Review items and <br />delivery </h3>
                        </div>
                        <div className="payment_items">
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

                    <div className="payment_section">
                        <div className="payment_title">
                            <h3> Payment Method </h3>
                        </div>

                        <div className="payment_details">
                            {/*stripe*/}

                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange} />

                                <div className="payment_priceContainer">
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3> Order Total: {value} </h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button disabled={processing || disabled ||
                                    succeeded}>
                                        <span> {processing ? <p>Processing</p> 
                                        : "Buy Now"} </span>
                                    </button>
                                </div>
                                
                                {/* Errors */}
                                {error && <div>{error}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Payment