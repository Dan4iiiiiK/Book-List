import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./Slices/filterSlice";
import booksReducer from "./Slices/booksSlice";
import errorReducer from "./Slices/errorSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducer,
    error: errorReducer,
  },
});

export default store;
