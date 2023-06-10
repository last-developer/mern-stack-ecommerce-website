import axios from 'axios';
import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    CLEAR_ERRORS
} from '../constants/ProductConstants';

export const getProductRequest = () => ({
    type: ALL_PRODUCT_REQUEST
});

export const getProductSuccess = (products, productsCount) => ({
    type: ALL_PRODUCT_SUCCESS,
    payload: { products, productsCount }
});

export const getProductFail = (error) => ({
    type: ALL_PRODUCT_FAIL,
    payload: error
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
});

export const getProduct = () => async (dispatch) => {
    try {
        dispatch(getProductRequest());
        const { data } = await axios.get('http://localhost:4000/api/v1/products/');
        dispatch(getProductSuccess(data.products, data.productsCount));
    } catch (error) {
        dispatch(getProductFail(error.response.data.message));
    }
};
