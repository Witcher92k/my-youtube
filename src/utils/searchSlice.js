import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({


    name:"search",
    initialState:{
        
    },
    reducers:{


        cacheResult: (state, action) => {

            const {key,value} = action.payload;

            state[key]=value;

        }





    }



})

    export const {cacheResult} = searchSlice.actions;

    export default searchSlice.reducer;

    