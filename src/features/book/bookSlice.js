import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: true,
    books: [],
    page: 1,
};

export const fetchBooks = createAsyncThunk(
    "book/fetchBooks",
    async (page, thunkApi) => {
        try {
            const res = await axios.get(
                `https://anapioficeandfire.com/api/books/?page=${page}`
            );
            return res.data;
        } catch (error) {
            thunkApi.rejectWithValue("something went wrong");
        }
    }
);

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        getBooks: (state) => {
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
        [fetchBooks.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchBooks.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.books = payload;
        },
        [fetchBooks.rejected]: (state) => {
            state.isLoading = false;
        },
    },
});

export const { getBooks, incPage, decPage } = bookSlice.actions;
export default bookSlice.reducer;
