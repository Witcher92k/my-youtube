
import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navStateSlice";
import searchReducer from "./searchSlice"

const appStore = configureStore({

    reducer:{
    
        nav: navReducer,
        search:searchReducer

    }
})

export default appStore;