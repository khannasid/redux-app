import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import productReducer from './productSlice';

// in case of adding new new features 
// like products etc we can then easily
// add a new reducer below and create a 
// seperate Slice file like the cartSlice
// with its defined action functions.
// It helps in easily scalling and providing new
// facilities to the project in a structured way.

const store = configureStore({
    reducer:{
        cart:cartReducer,
        product: productReducer,
    },
});

export default store;