
import { createSlice } from "@reduxjs/toolkit"; 
const navStateSlice = createSlice({


    name: "nav",
    initialState: {
        toggle: false
    },
    reducers: {

        toggleNav: (state, action)=>{

            state.toggle = !state.toggle;

        },

        closeMenu :(state)=>{
            state.toggle = false;
        }


    }




})

export const {toggleNav,closeMenu} = navStateSlice.actions;
export default navStateSlice.reducer;