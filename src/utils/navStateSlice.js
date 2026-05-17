
import { createSlice } from "@reduxjs/toolkit"; 
const navStateSlice = createSlice({


    name: "nav",
    initialState: {
        toggle: false
    },
    reducers: {

        toggleNav: (state, action)=>{

            state.toggle = !state.toggle;

        }


    }




})

export const {toggleNav} = navStateSlice.actions;
export default navStateSlice.reducer;