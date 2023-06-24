import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer, productDetailsReducer } from "./reducers/ProductReducer";
import { forgotPasswordReducer, profileReducer, userReducer } from "./reducers/UserReducer";

const store = configureStore({
    reducer: {
      products: ProductReducer,
      productDetails: productDetailsReducer,
      user:userReducer,
      profile:profileReducer,
      forgotPassword:forgotPasswordReducer,
    }
  });

export default store;