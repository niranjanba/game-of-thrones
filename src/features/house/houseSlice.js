import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    houses: [],
    page: 1,
};

export const fetchHouses = createAsyncThunk(
    "houses/fetchHouses",
    async (page, thunkApi) => {
        try {
            const res = await axios.get(
                `https://anapioficeandfire.com/api/houses/?page=${page}`
            );
            return res.data;
        } catch (error) {
            thunkApi.rejectWithValue("something went wrong");
        }
    }
);

const characterSlice = createSlice({
    name: "character",
    initialState,
    reducers: {
        getCharacters: (state) => {
            return state;
        },
        incPage: (state) => {
            state.page = state.page + 1;
        },
        decPage: (state) => {
            state.page = state.page - 1;
        },
    },
    extraReducers: {
        [fetchHouses.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchHouses.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.houses = payload;
        },
        [fetchHouses.rejected]: (state) => {
            state.isLoading = false;
        },
    },
});

export const { getCharacters, decPage, incPage } = characterSlice.actions;
export default characterSlice.reducer;
