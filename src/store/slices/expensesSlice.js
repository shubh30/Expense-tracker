import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
  selectedMonth: new Date().toISOString().slice(0, 7),
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const newExpense = {
        ...action.payload,
        id: Date.now().toString(),
      };
      state.expenses.push(newExpense);
    },
  },
});

export const { addExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
