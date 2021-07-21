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
                    id= "1"
                    title={"[2021 Upgraded Version] Wireless Switch Controller for N-Switch/ Switch Lite, RegeMoudal Switch Controller Gamepad Remote Gamepad Joystick"} 
                    price={24.59}
                    image="https://m.media-amazon.com/images/I/71BSd-0e5OL._AC_SL1500_.jpg"
                    rating={5}/>
                    <Product 
                    id= "2"
                    title={"Canon PowerShot G7 X Mark II Digital Camera, Black"} 
                    price={645.99}
                    image="https://m.media-amazon.com/images/I/416b8xNfDJL._AC_.jpg"
                    rating={4}/>
                </div>

                <div className="home_row">
                    <Product 
                    id= "3"
                    title={"All-new Echo Dot (4th Gen) | Smart speaker with Alexa | Charcoal"} 
                    price={69.99}
                    image="https://m.media-amazon.com/images/I/71fnXKyRa4L._AC_SL1000_.jpg"
                    rating={4}/>
                    <Product 
                    id= "4"
                    title={"Garmin Vivofit 3 Activity Tracker, Regular Fit-Black"} 
                    price={89.95}
                    image="https://m.media-amazon.com/images/I/81re7MNoK5L._AC_SL1500_.jpg"
                    rating={3}/>
                    <Product 
                    id= "5"
                    title={"BedStory Mattress Topper, Gel-Infused Memory Foam Pillow Top Fiber Mattress"} 
                    price={127.49}
                    image="https://m.media-amazon.com/images/I/71YbChxzE-L._AC_SL1500_.jpg"
                    rating={4}/>
                </div>

                <div className="home_row">
                <Product 
                    id= "6"
                    title={"AICOOK Bread Maker, 2LB Stainless Steel Bread Machine with Gluten-Free Setting, Fruit Nut Dispenser, Large LCD display, Nonstick Pan, 3 Crust Colors & Keep Warm Set, Recipes"} 
                    price={109.99}
                    image="https://m.media-amazon.com/images/I/717qVZN2VwL._AC_SL1493_.jpg"
                    rating={4}/>
                    <Product 
                    id= "7"
                    title={"Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones, Black, One Size (WH1000XM4/B)"} 
                    price={398.00}
                    image="https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg"
                    rating={4}/>
                </div>
            </div>
        </div>
    )
}

export default Home

