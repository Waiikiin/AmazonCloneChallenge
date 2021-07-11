import React from 'react'
import './Home.css'
import Product from './Product'

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
                    id= "123123"
                    title={"The ultimate gaming PC"} 
                    price={1499.99}
                    image="https://www.downloadclipart.net/large/gaming-computer-png-hd.png"
                    rating={4}/>
                    <Product/>
                </div>

                <div className="home_row">
                    {/* Product */}
                </div>

                <div className="home_row">
                    {/* Product */}
                </div>
            </div>
        </div>
    )
}

export default Home

