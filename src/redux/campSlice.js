import { createSlice } from "@reduxjs/toolkit";

const campSlice = createSlice({
    name: "cart",
    initialState: {
        campList: [],
        isFetching: false,
        error: false
    },
    reducers: {
        getCampStart: state => {
            state.isFetching = true;
        },
        getCampSuccess: (state, action) => {
            state.isFetching = false;
            state.campList = action.payload;
        },
        getCampFailure: state => {
            state.isFetching = false;
            state.error = true;
        }
    }
});

export const { getCampStart, getCampSuccess, getCampFailure } = campSlice.actions;
export default campSlice.reducer;
