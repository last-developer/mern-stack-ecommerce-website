import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer, productDetailsReducer } from "./reducers/ProductReducer";
import { forgotPasswordReducer, profileReducer, userReducer } from "./reducers/UserReducer";
import { cartReducer } from "./reducers/CartReducer";

let initialState = {
  cart:
  {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const store = configureStore({
  reducer: {
    products: ProductReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
  },
  preloadedState: initialState,
});

export default store;