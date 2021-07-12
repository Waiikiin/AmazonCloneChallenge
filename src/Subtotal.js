import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

function getBasketTotal(basket){

}

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal (0 items) <strong>0</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />
                                This order contains a subtotal_gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
