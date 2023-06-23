import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer, productDetailsReducer } from "./reducers/ProductReducer";
import { profileReducer, userReducer } from "./reducers/UserReducer";

const store = configureStore({
    reducer: {
      products: ProductReducer,
      productDetails: productDetailsReducer,
      user:userReducer,
      profile:profileReducer
    }
  });

export default store;