import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../Header";
import ExpenseForm from "../ExpenseForm";
import ExpenseList from "../ExpenseList";
import BudgetOverview from "../BudgetOverview";

import useLocalStorage from "../../hooks/useLocalStorage.js";
import { loadExpenses } from "../../store/slices/expensesSlice.js";

import { EXPENSES_KEY } from "../../constants";

import {
  appContainer,
  container,
  grid,
  budgetOverviewContainer,
} from "./style.js";

const Layout = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.expenses);
  const { setItems, getItems } = useLocalStorage();

  useEffect(() => {
    const storedExpenses = getItems(EXPENSES_KEY);
    if (storedExpenses.length > 0) {
      dispatch(loadExpenses(storedExpenses));
    }
  }, [dispatch]);

  useEffect(() => {
    setItems(EXPENSES_KEY, expenses);
  }, [expenses]);

  return (
    <div css={appContainer}>
      <Header />
      <main css={container}>
        <div css={budgetOverviewContainer}>
          <BudgetOverview />
        </div>
        <div css={grid}>
          <ExpenseForm />
          <ExpenseList />
        </div>
      </main>
    </div>
  );
};

export default Layout;
