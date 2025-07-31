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
    updateExpense: (state, action) => {
      const index = state.expenses.findIndex(
        (expense) => expense.id === action.payload.id
      );
      if (index !== -1) {
        state.expenses[index] = action.payload;
      }
    },
  },
});

export const { addExpense, deleteExpense, updateExpense } =
  expensesSlice.actions;
export default expensesSlice.reducer;
