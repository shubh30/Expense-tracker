import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  monthlyBudget: 2000,
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    setMonthlyBudget: (state, action) => {
      state.monthlyBudget = action.payload;
    },
    loadBudget: (state, action) => {
      state.monthlyBudget = action.payload;
    },
  },
});

export const { setMonthlyBudget, loadBudget } = budgetSlice.actions;
export default budgetSlice.reducer;
