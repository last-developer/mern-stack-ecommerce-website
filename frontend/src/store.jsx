import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer, productDetailsReducer } from "./reducers/ProductReducer";
import { userReducer } from "./reducers/UserReducer";

const store = configureStore({
    reducer: {
      products: ProductReducer,
      productDetails: productDetailsReducer,
      user:userReducer,
    }
  });

export default store;