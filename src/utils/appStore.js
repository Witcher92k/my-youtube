
import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navStateSlice";
import searchReducer from "./searchSlice"
import chatReducer from "./chatSlice"

const appStore = configureStore({

    reducer:{
    
        nav: navReducer,
        search:searchReducer,
        chat:chatReducer

    }
})

export default appStore;