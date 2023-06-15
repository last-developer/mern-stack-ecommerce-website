import React, { useEffect } from 'react'
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/ProductAction";
import Loader from '../Layout/Loader/Loader'
import MetaData from '../Layout/MetaData'
import ProductCard from '../Home/ProductCard';

const Products = () => {
    const dispatch = useDispatch();
    // const alert = useAlert();
    const {
        products,
        loading,
        error,
        productsCount
    } = useSelector((state) => state.products);

    useEffect(() => {
        // if (error) {
        //     alert.error(error);
        //     dispatch(clearErrors());
        // }

        dispatch(getProduct());
    }, [dispatch]);



    return (
        <>
            {loading ? <Loader /> :
                (
                    <>
                        <MetaData title="PRODUCTS -- ECOMMERCE" />
                        <h2 className="productsHeading">Products</h2>

                        <div className="products">
                            {products &&
                                products.map((product) => (
                                    <ProductCard key={product._id} product={product} />
                                ))}
                        </div>


                    </>
                )}



        </>
    )
}

export default Products
