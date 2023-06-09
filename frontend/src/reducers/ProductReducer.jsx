import { createReducer } from '@reduxjs/toolkit';
import { ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, CLEAR_ERRORS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from '../constants/ProductConstants';

const initialState = {
    loading: false,
    products: [],
    productsCount: 0,
    resultPerPage: 0,
    error: null
};

export const ProductReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(ALL_PRODUCT_REQUEST, (state) => {
            state.loading = true;
            state.products = [];
            state.error = null;
        })
        .addCase(ALL_PRODUCT_SUCCESS, (state, action) => {
            state.loading = false;
            state.products = action.payload.products;
            state.productsCount = action.payload.productsCount;
            state.error = null;
            state.resultPerPage = action.payload.resultPerPage
        })
        .addCase(ALL_PRODUCT_FAIL, (state, action) => {
            state.loading = false;
            state.products = [];
            state.productsCount = 0;
            state.error = action.payload;
        })
        .addCase(CLEAR_ERRORS, (state) => {
            state.error = null;
        });
});

const initialProductDetailsState = {
    loading: false,
    product: {},
    error: null
};

export const productDetailsReducer = createReducer(initialProductDetailsState, (builder) => {
    builder
        .addCase(PRODUCT_DETAILS_REQUEST, (state) => {
            state.loading = true;
            state.product = {};
            state.error = null;
        })
        .addCase(PRODUCT_DETAILS_SUCCESS, (state, action) => {
            state.loading = false;
            state.product = action.payload;
            state.error = null;
        })
        .addCase(PRODUCT_DETAILS_FAIL, (state, action) => {
            state.loading = false;
            state.product = {};
            state.error = action.payload;
        })
        .addCase(CLEAR_ERRORS, (state) => {
            state.error = null;
        });
});
