import React from 'react';
import '../styles/Home.css';
import Product from '../components/Product';
import productsList from '../resources/productsList';

function Home(props) {
    return (
        <div className="home">
            <div className="home_container"> 
                <img
                className="home_image" 
                src="https://images-na.ssl-images-amazon.com/images/G/15/electronics/otu-21/XCM_Manual_1337947_1737016_CA_ca_ce_herotator_fr_3913825_1500x600_2X_EN_CA._CB666852959_.jpg" 
                alt=""></img>

                <div className="home_row">
                    <Product
                        title={productsList[0].title}
                        image={productsList[0].image}
                        price={productsList[0].price}
                        rating={productsList[0].rating}
                    />
                    <Product
                        title={productsList[1].title}
                        image={productsList[1].image}
                        price={productsList[1].price}
                        rating={productsList[1].rating}
                    />
                </div>
                <div className="home_row">
                    <Product
                        title={productsList[2].title}
                        image={productsList[2].image}
                        price={productsList[2].price}
                        rating={productsList[2].rating}
                    />
                    <Product
                        title={productsList[3].title}
                        image={productsList[3].image}
                        price={productsList[3].price}
                        rating={productsList[3].rating}
                    />
                    <Product
                        title={productsList[4].title}
                        image={productsList[4].image}
                        price={productsList[4].price}
                        rating={productsList[4].rating}
                    />
                </div>
                <div className="home_row">
                    <Product
                        title={productsList[5].title}
                        image={productsList[5].image}
                        price={productsList[5].price}
                        rating={productsList[5].rating}
                    />
                    <Product
                        title={productsList[6].title}
                        image={productsList[6].image}
                        price={productsList[6].price}
                        rating={productsList[6].rating}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home