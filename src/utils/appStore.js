
import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navStateSlice";

const appStore = configureStore({

    reducer:{
    
        nav: navReducer
    }
})

export default appStore;