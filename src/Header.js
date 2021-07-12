import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom'

function Header() {
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
                <div className="header_nav_option">
                    <span
                        className="header_nav_optionLineOne">
                        Hello Guest
                    </span>

                    <span
                        className="header_nav_optionLineTwo">
                        Sign In
                    </span>
                </div>

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
                            0
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
