import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import expensesReducer from "./slices/expensesSlice";

export default configureStore({
  reducer: {
    expenses: expensesReducer,
    categories: categoriesReducer,
  },
});
