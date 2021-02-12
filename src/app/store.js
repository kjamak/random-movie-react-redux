import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/counter/categorySlice";

export default configureStore({
  reducer: {
    category: categoryReducer,
  },
});
