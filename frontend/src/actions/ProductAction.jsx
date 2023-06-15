import axios from 'axios';
import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  CLEAR_ERRORS, PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL
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

export const getProduct = (keyword='') => async (dispatch) => {
  try {
    dispatch(getProductRequest());
    let link=`http://localhost:4000/api/v1/products?keyword=${keyword}`
    const { data } = await axios.get(link);
    dispatch(getProductSuccess(data.products, data.productsCount));
  } catch (error) {
    dispatch(getProductFail(error.response.data.message));
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    if (!id) {
      throw new Error('Invalid product ID');
    }
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`http://localhost:4000/api/v1/product/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
};

