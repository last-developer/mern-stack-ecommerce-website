import React, { Fragment, useEffect, useState } from 'react';
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, getProductDetails } from '../../actions/ProductAction';
import "./productdetails.css"
import Loader from '../Layout/Loader/Loader';
import { useParams } from 'react-router-dom';
import { Rating } from '@mui/material';
import ReviewCard from './ReviewCard';
import { useAlert } from 'react-alert';
import MetaData from '../Layout/MetaData';
import { addItemsToCart } from '../../actions/CartAction';

const ProductDetails = () => {
    const alert = useAlert()
    const dispatch = useDispatch();
    const { loading, product, error } = useSelector((state) => state.productDetails);
    const { id } = useParams();
    const options = {
        size: "large",
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
    };

    const [quantity, setQuantity] = useState(1);


    const increaseQuantity = () => {
        if (product.Stock <= quantity) return;

        const qty = quantity + 1;
        setQuantity(qty);
    };

    const decreaseQuantity = () => {
        if (1 >= quantity) return;

        const qty = quantity - 1;
        setQuantity(qty);
    };

    const addToCartHandler = () => {
        dispatch(addItemsToCart(id, quantity));
        alert.success("Item Added To Cart");
    };

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (id) {
            dispatch(getProductDetails(id));
        }
    }, [dispatch, id, error, alert]);

    return (
        <>
            {loading ? (<Loader />) : (
                <>
                    <MetaData title={product.name} />
                    <div className="ProductDetails">
                        {/* <div> */}
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
                        {/* </div> */}

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
                                <div className="detailsBlock-3-1">
                                    <div className="detailsBlock-3-1-1">
                                        <button onClick={decreaseQuantity}>-</button>
                                        <input readOnly type="number" value={quantity} />
                                        <button onClick={increaseQuantity}>+</button>
                                    </div>
                                    <button
                                        disabled={product.Stock < 1 ? true : false}
                                        onClick={addToCartHandler}
                                    >
                                        Add to Cart
                                    </button>
                                </div>

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
                    <h3 className="reviewsHeading">REVIEWS</h3>

                    {product.reviews && product.reviews[0] ? (
                        <div className="reviews">
                            {product.reviews &&
                                product.reviews.map((review) => (
                                    <ReviewCard key={review._id} review={review} />
                                ))}
                        </div>
                    ) : (
                        <p className="noReviews">No Reviews Yet</p>
                    )}



                </>
            )}
        </>
    );
};

export default ProductDetails;
