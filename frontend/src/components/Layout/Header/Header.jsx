import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <header className='padding'>
            <div className="header-left">
                <div className="logo">
                    <a href="#">Ecommerce</a>
                </div>
            </div>
            <div className="header-middle">
                <div className="search-bar">
                    <form action="#">
                        <div>
                        <input type="text" placeholder="search..." />
                        <input type="submit" value="search" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="header-right">
                <a href="#" id='login'>Login</a>
                <a href="#" id='cart'>Cart</a>
            </div>
        </header>
    )
}

export default Header
