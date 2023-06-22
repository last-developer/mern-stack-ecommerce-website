import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import UserOptions from './UserOptions'
import { useSelector } from 'react-redux'

const Header = () => {
    const { isAuthenticated, user } = useSelector((state) => state.user);
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
                {isAuthenticated ? <UserOptions user={user} /> : <Link to="/login" id='login'>Login/Signup</Link>}
            </div>
        </header>
    )
}

export default Header
