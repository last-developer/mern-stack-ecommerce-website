import React from 'react'
import './Home.css'
import ProductCard from './ProductCard'
import MetaData from '../Layout/MetaData'

const product={
    name:"myphone",
    images:[{url:"images/concept-discounts-online-banking-cashback-happy-guy-showing-shopping-bag-looking-satisfied-mobile-screen-yellow-background (1).jpg"}],
    price:'2000',
    _id:"mpppp12"
}
const Home = () => {
  return (
    <>
    <MetaData title='Ecommerce - Home'/>
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

    <div className='featured-h2 padding'>
        <h2>Featured Products</h2>
    </div>

    <div className="featured-products padding">
        <ProductCard product={product}/>
        <ProductCard product={product}/>
        <ProductCard product={product}/>
        <ProductCard product={product}/>
        <ProductCard product={product}/>
        <ProductCard product={product}/>
        <ProductCard product={product}/>
        <ProductCard product={product}/>
    </div>
    
    
    
    </>
  )
}

export default Home
