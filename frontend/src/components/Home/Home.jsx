import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Home.css'
import ProductCard from './ProductCard'
import MetaData from '../Layout/MetaData'
import { clearErrors, getProduct } from '../../actions/ProductAction'
import Loader from '../Layout/Loader/Loader';
import { useAlert } from 'react-alert'
import { Link } from "react-router-dom";



const Home = () => {
    const alert = useAlert()
    const dispatch = useDispatch();
    const { loading, products, error } = useSelector((state) => state.products);

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }

        dispatch(getProduct());
    }, [dispatch, error, alert]);

    return (
        <>
            <MetaData title='Ecommerce - Home' />
            <div className="categories ">
                <ul>
                    {/* <li>
                        <a href="#">Electronics</a>
                    </li>
                    <li>
                        <a href="#">Fashion</a>
                    </li>
                    <li>
                        <a href="#">Beauty</a>
                    </li>
                    <li>
                        <a href="#">Decor</a>
                    </li>
                    <li>
                        <a href="#">Furniture</a>
                    </li> */}
                    <li>
                        <Link to="/products">View All Products</Link>
                    </li>
                </ul>
            </div>

            <div className='featured-h2 padding'>
                <h2>Featured Products</h2>
            </div>

            {loading ? <Loader /> :
                (
                    <div className="featured-products padding">
                        {products && products.map((product) => <ProductCard product={product} />)}
                    </div>
                )
            }

        </>
    )
}

export default Home
