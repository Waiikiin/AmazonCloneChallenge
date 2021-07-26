import React from 'react'
import '../styles/Header.css'
import { useStateValue } from '../utils/StateProvider' 
import { auth } from '../utils/firebase'

import { Link, useHistory } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

function Header() {
    const history = useHistory();
    const [ { basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user){
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png">
                </img>
            </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text">

                </input>

                <SearchIcon className="header_searchIcon"> </SearchIcon>
            </div>

            <div className="header_nav">
                <Link to={!user && "/login" }>
                    <div className="header_nav_option">
                        <span
                            className="header_nav_optionLineOne">
                            {user? 'Hello ' + user.email : 'Hello Guest'}
                        </span>

                        <span
                            onClick={handleAuthentication}
                            className="header_nav_optionLineTwo">
                            {user? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>

                <Link to={!user ? "/login" : "/orders"}>
                    <div className="header_nav_option">
                        <span
                            className="header_nav_optionLineOne">
                            Returns
                        </span>

                        <span
                            className="header_nav_optionLineTwo">
                            & Orders
                        </span>
                    </div>
                </Link>

                <div className="header_nav_option">
                    <span
                        className="header_nav_optionLineOne">
                        Your
                    </span>

                    <span
                        className="header_nav_optionLineTwo">
                        Prime
                    </span>
                </div>

                <Link to="/checkout" id="basketLinkTo">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon ></ShoppingBasketIcon>
                        <span className="header_nav_optionLineTwo header_basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
