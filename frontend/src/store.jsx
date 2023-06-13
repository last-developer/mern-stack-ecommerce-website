import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer, productDetailsReducer } from "./reducers/ProductReducer";

const store = configureStore({
    reducer: {
      products: ProductReducer,
      productDetails: productDetailsReducer
    }
  });

export default store;