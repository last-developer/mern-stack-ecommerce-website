import React, { useEffect, useState } from 'react'
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/ProductAction";
import Loader from '../Layout/Loader/Loader'
import MetaData from '../Layout/MetaData'
import ProductCard from '../Home/ProductCard';
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import Slider from '@mui/material/Slider';


const Products = () => {
    const { keyword } = useParams();
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0, 100000]);
    // const alert = useAlert();

    const {
        products,
        loading,
        error,
        productsCount,
        resultPerPage,
    } = useSelector((state) => state.products);

    const setCurrentPageNo = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePriceChange = (event, newValue) => {
        setPrice(newValue);
    };

    useEffect(() => {
        // if (error) {
        //     alert.error(error);
        //     dispatch(clearErrors());
        // }

        dispatch(getProduct(keyword, currentPage, price));
    }, [dispatch, keyword, currentPage, price]);




    return (
        <>
            {loading ? <Loader /> :
                (
                    <>
                        <MetaData title="PRODUCTS -- ECOMMERCE" />
                        <h2 className="productsHeading">Products</h2>

                        <div className="products">
                            {products && products.length > 0 ? (
                                products.map((product) => (
                                    <ProductCard key={product._id} product={product} />
                                ))
                            ) : (
                                <p>No products found.</p>
                            )}
                        </div>


                        <div className="priceFilter"> Price
                            <Slider
                                value={price}
                                onChange={handlePriceChange}
                                aria-labelledby="range-slider"
                                min={0}
                                max={100000}
                                track='false'
                                valueLabelDisplay='auto'
                            />
                        </div>


                        {resultPerPage < productsCount && (
                            <div className="paginationBox">
                                <Pagination
                                    activePage={currentPage}
                                    itemsCountPerPage={resultPerPage}
                                    totalItemsCount={productsCount}
                                    onChange={setCurrentPageNo}
                                    nextPageText="Next"
                                    prevPageText="Prev"
                                    firstPageText="1st"
                                    lastPageText="Last"
                                    itemClass="page-item"
                                    linkClass="page-link"
                                    activeClass="pageItemActive"
                                    activeLinkClass="pageLinkActive"
                                />
                            </div>
                        )}
                    </>
                )
            }
        </>
    )
}

export default Products
