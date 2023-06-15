import React, { useEffect, useState } from 'react'
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/ProductAction";
import Loader from '../Layout/Loader/Loader'
import MetaData from '../Layout/MetaData'
import ProductCard from '../Home/ProductCard';
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";


const Products = () => {
    const { keyword } = useParams();

    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    };
    // const alert = useAlert();
    const {
        products,
        loading,
        error,
        productsCount,
        resultPerPage
    } = useSelector((state) => state.products);

    useEffect(() => {
        // if (error) {
        //     alert.error(error);
        //     dispatch(clearErrors());
        // }

        dispatch(getProduct(keyword, currentPage));
    }, [dispatch, keyword, currentPage]);



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
                )}



        </>
    )
}

export default Products
