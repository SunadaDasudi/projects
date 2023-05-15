import React from 'react'
import { Link } from 'react-router-dom'
import { getAuth } from 'firebase/auth';

import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import './Header.css'
import { useStateValue } from './StateProvider'

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleUserLogging = () => {
        if (user)
            getAuth().signOut();
    }
    return (
        <div className='header'>
            <Link to="/">
                <img className='header__logo' src="/assets/AMZN_BIG.D-8fb0be81.png" alt="" />
            </Link>
            <div className="header__deliveryLocation">
                <LocationOnIcon></LocationOnIcon>
                <div className="header__option">
                    <span className="header__optionLineOne">Deliver to</span>
                    <span className="header__optionLineTwo">{user?.email}</span>
                </div>
            </div>
            <div className="header__search">
                <input className='header__searchInput' type="text" name="" id="" />
                <SearchIcon className="header__serachIcon"></SearchIcon>
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"}>
                    <div className="header__option" onClick={handleUserLogging}>
                        <span className="header__optionLineOne">Hello {user ? user?.email : "Guest"}</span>
                        <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon>
                        <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header