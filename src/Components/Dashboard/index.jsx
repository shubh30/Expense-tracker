import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../Header";
import ExpenseForm from "../ExpenseForm";
import ExpenseList from "../ExpenseList";
import BudgetOverview from "../BudgetOverview";
import CategoryManager from "../CategoryManager";
import Analytics from "../Analytics";

import useLocalStorage from "../../hooks/useLocalStorage.js";
import { loadExpenses } from "../../store/slices/expensesSlice.js";

import { CATEGORIES_KEY, EXPENSES_KEY, TABS } from "../../constants";

import {
  appContainer,
  container,
  grid,
  budgetOverviewContainer,
  tabs,
  tabsList,
  tabCta,
} from "./style.js";
import { loadCategories } from "../../store/slices/categoriesSlice.js";

const Layout = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.expenses);
  const categories = useSelector((state) => state.categories.categories);

  const { setItems, getItems } = useLocalStorage();
  const [activeTab, setActiveTab] = useState(TABS[0] || "Expenses");
  const [categoriesHydrated, setCategoriesHydrated] = useState(false);

  useEffect(() => {
    const storedExpenses = getItems(EXPENSES_KEY);
    const storedCategories = getItems(CATEGORIES_KEY);

    if (storedExpenses && storedExpenses.length > 0) {
      dispatch(loadExpenses(storedExpenses));
    }
    if (storedCategories) {
      dispatch(loadCategories(storedCategories));
    }
    setCategoriesHydrated(true);
  }, [dispatch]);

  useEffect(() => {
    setItems(EXPENSES_KEY, expenses);
  }, [expenses]);

  useEffect(() => {
    if (categoriesHydrated) {
      setItems(CATEGORIES_KEY, categories);
    }
  }, [categories, categoriesHydrated]);

  const Components = {
    Expenses: (
      <div css={grid}>
        <ExpenseForm />
        <ExpenseList />
      </div>
    ),
    Categories: (
      <div>
        <CategoryManager />
      </div>
    ),
    Analytics: (
      <div>
        <Analytics />
      </div>
    ),
  };

  const TabContent = Components[activeTab];

  return (
    <div css={appContainer}>
      <Header />
      <main css={container}>
        <div css={budgetOverviewContainer}>
          <BudgetOverview />
        </div>
        <div css={tabs}>
          <div css={tabsList}>
            {TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  css={tabCta(isActive)}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
        {TabContent}
      </main>
    </div>
  );
};

export default Layout;
