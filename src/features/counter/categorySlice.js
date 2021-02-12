import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    value: undefined,
  },
  reducers: {
    setCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;

export const selectCategory = (state) => state.category.value;

export default categorySlice.reducer;
