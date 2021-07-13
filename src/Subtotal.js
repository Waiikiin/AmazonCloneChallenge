import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'

function Subtotal() {
    const [ { basket }, dispatch] = useStateValue();
    const numberOfItems = basket.length;
    const subTotalPrice = basket.reduce((total, item) => {
        return total + item['price'];
    }, 0 );
    
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({numberOfItems} items) <strong> ${subTotalPrice}</strong>
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
