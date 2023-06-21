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

const categories = [
    "Laptop",
    "mp",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "Smartphones",
];

const Products = () => {
    const { keyword } = useParams();
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0, 100000]);
    const [category, setCategory] = useState("");
    const [ratings, setRatings] = useState(0);

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

        dispatch(getProduct(keyword, currentPage, price, category, ratings));
    }, [dispatch, keyword, currentPage, price, category, ratings]);




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

                        <div className="filterBox">

                            <div className="priceFilter"> Price
                                <Slider
                                    value={price}
                                    onChange={handlePriceChange}
                                    aria-labelledby="range-slider"
                                    min={0}
                                    max={100000}
                                    track='normal'
                                    valueLabelDisplay='auto'
                                />
                            </div>

                            <h4>Categories</h4>
                            <ul className="categoryBox">
                                {categories.map((category) => (
                                    <li
                                        className="category-link"
                                        key={category}
                                        onClick={() => setCategory(category)}
                                    >
                                        {category}
                                    </li>
                                ))}
                            </ul>

                            <fieldset>
                                <h4>Ratings Above</h4>
                                <Slider
                                    value={ratings}
                                    onChange={(e, newRating) => {
                                        setRatings(newRating);
                                    }}
                                    aria-labelledby="continuous-slider"
                                    valueLabelDisplay="auto"
                                    min={0}
                                    max={5}
                                />
                            </fieldset>
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
