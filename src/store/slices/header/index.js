import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
    name: 'header',
    initialState: {
        header: 'home'
    },
    reducers: {
        setHeaderData: (state, action) => {
            state.header = action.payload;
        }
    }
});

export const {setHeaderData} = headerSlice.actions;

export default headerSlice.reducer;

export const setHeaderItem = (item) => {
    return (dispatch) => {
       dispatch(setHeaderData(item)) 
    }
}
