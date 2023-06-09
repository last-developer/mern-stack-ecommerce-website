import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='padding'>
            <div className="footer-top padding">
                <div className="footer-left">
                    <h4>Get to know Us</h4>
                    <p>About Us</p>
                    <p>Carrers</p>
                    <p>Press Releases</p>
                </div>
                <div className="footer-right">
                    <h4>Connect with Us</h4>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
            </div>

            <div className="footer-bottom ">
                <div className="footer-bottom-content">
                    <p>Ecommerce | 2023</p>
                    <p>Last Developer</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer
