import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../Features/cart';

const store = configureStore(
  {
    reducer : {
      cart :cartReducer
    }
  }
)
export default store;