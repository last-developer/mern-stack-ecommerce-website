import React from 'react'
import './Home.css'


const Home = () => {
  return (
    <>
    <div className="categories padding">
        <ul>
            <li>
                <a href="#">Phones</a>
            </li>
            <li>
                <a href="#">Phones</a>
            </li>
            <li>
                <a href="#">Phones</a>
            </li>
            <li>
                <a href="#">Phones</a>
            </li>
            <li>
                <a href="#">Phones</a>
            </li>
        </ul>
    </div>

    <div className="featured-products padding">
        <h2>Featured Products</h2>
        <div className="products-box">
            <div className="product">
                <div className="image">
                    <img src="" alt="" />
                </div>
                <div className="content">
                    <div className="name">
                        Cannon Eos DSLR Camera
                    </div>
                    <div className="ratings">

                    </div>
                    <div className="price">
                        <p>Rs.4999/-</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default Home
