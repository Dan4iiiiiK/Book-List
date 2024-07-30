import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
  onlyFavorite: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      return { ...state, title: action.payload };
      //state.title = action.payload <---- можно так тоже именно в Redux Toolkit, не возвращая новый объект, а изменяя имеющийся, но я предпочитаю тот вариант
    },
    setAuthorFilter: (state, action) => {
      return { ...state, author: action.payload };
    },
    resetFilters: () => {
      return initialState;
    },
    setOnlyFavoriteFilters: (state) => {
      return { ...state, onlyFavorite: !state.onlyFavorite };
    },
  },
});

export const {
  setTitleFilter,
  resetFilters,
  setAuthorFilter,
  setOnlyFavoriteFilters,
} = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite;

export default filterSlice.reducer;
