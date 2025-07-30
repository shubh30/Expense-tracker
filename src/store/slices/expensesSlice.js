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
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
  },
});

export const { addExpense, deleteExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
