import React from 'react';
import '../styles/Product.css';
import Card from './Card.js';
import { useStateValue } from '../utils/StateProvider';

import nextId from "react-id-generator";

function Product({title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();
    const newId = nextId();

    const addToBasket = () => {
        //dispatch item to data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: newId,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

    const productRating =  (
        <div style={{display: "flex", justifyContent: "center", padding: "10px"}}>
            {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>⭐</p> 
                ))}
        </div> 
    )

    return (
        <div className="product">
            <Card
                id={newId}
                image={image}
                action={addToBasket}
                button={'Add to Cart'}
                title={title}
                description={'$' + price}
                extra={productRating}
            />
        </div>
    )
}

export default Product