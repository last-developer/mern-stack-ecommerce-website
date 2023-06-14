import React, { Fragment, useEffect } from 'react';
import Carousel from "react-material-ui-carousel";

import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../../actions/ProductAction';
import "./productdetails.css"
import Loader from '../Layout/Loader/Loader';

import { useParams } from 'react-router-dom';
import { Rating } from '@mui/material';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const { loading, product, error } = useSelector((state) => state.productDetails);
    const { id } = useParams();
    const options = {
        size: "large",
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
    };

    useEffect(() => {
        if (id) {
            dispatch(getProductDetails(id));
        }
    }, [dispatch, id]);

    return (
        <>
            <div className="ProductDetails">
                <div>
                    <Carousel>
                        {product.images &&
                            product.images.map((item, i) => (
                                <img
                                    className="CarouselImage"
                                    key={i}
                                    src={item.url}
                                    alt={`${i} Slide`}
                                />
                            ))}
                    </Carousel>
                </div>

                <div>
                    <div className="detailsBlock-1">
                        <h2>{product.name}</h2>
                        <p>Product # {product._id}</p>
                    </div>
                    <div className="detailsBlock-2">
                        <Rating {...options} />
                        <span className="detailsBlock-2-span">
                            {" "}
                            ({product.numOfReviews} Reviews)
                        </span>
                    </div>
                    <div className="detailsBlock-3">
                        <h1>{`₹${product.price}`}</h1>
                        {/* <div className="detailsBlock-3-1"> */}
                        {/* <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly type="number" value={quantity} />
                    <button onClick={increaseQuantity}>+</button>
                  </div> */}
                        {/* <button
                    disabled={product.Stock < 1 ? true : false}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </button> */}
                        {/* </div> */}

                        <p>
                            Status:
                            <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                                {product.Stock < 1 ? "OutOfStock" : "InStock"}
                            </b>
                        </p>
                    </div>

                    <div className="detailsBlock-4">
                        Description : <p>{product.description}</p>
                    </div>

                    {/* <button onClick={submitReviewToggle} className="submitReview">
                Submit Review
              </button> */}
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
