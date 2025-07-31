import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import expensesReducer from "./slices/expensesSlice";
import budgetReducer from "./slices/budgetSlice";

export default configureStore({
  reducer: {
    expenses: expensesReducer,
    categories: categoriesReducer,
    budget: budgetReducer,
  },
});
