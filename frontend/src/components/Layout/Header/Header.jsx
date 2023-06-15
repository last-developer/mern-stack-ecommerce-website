import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import Search from '../../Product/Search'
const Header = () => {
    return (
        <header className='padding'>
            <div className="header-left">
                <div className="logo">
                <Link to='/'>Ecommerce</Link>
                </div>
            </div>
            <div className="header-middle">
                <Link to='/search'>
                <i className="fa-solid fa-magnifying-glass"></i>
                </Link>
            </div>
            <div className="header-right">
                <Link to="/login" id='login'>Login</Link>
                <Link to="/cart" id='cart'>Cart</Link>
            </div>
        </header>
    )
}

export default Header
