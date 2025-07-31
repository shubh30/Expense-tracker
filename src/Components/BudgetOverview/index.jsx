import React, { useEffect, useMemo, useState } from "react";
import Card from "../Card";
import UpdateBudget from "./UpdateBudget";

import {
  budgetStats,
  budgetAmount,
  budgetSubTitle,
  editBtnStyle,
  cardStyle,
} from "./style";
import useLocalStorage from "../../hooks/useLocalStorage.js";
import { useDispatch, useSelector } from "react-redux";
import { loadBudget } from "../../store/slices/budgetSlice";
import { BUDGET_KEY } from "../../constants";

const BudgetOverview = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.expenses);
  const selectedMonth = useSelector((state) => state.expenses.selectedMonth);
  const monthlyBudget = useSelector((state) => state.budget.monthlyBudget);

  const { setItems, getItems } = useLocalStorage();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedBudget = getItems(BUDGET_KEY);
    if (storedBudget !== null) {
      dispatch(loadBudget(storedBudget));
    }
    setIsInitialized(true);
  }, [dispatch, getItems]);

  useEffect(() => {
    if (isInitialized) {
      setItems(BUDGET_KEY, monthlyBudget);
    }
  }, [monthlyBudget, isInitialized, setItems]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const monthlyStats = useMemo(() => {
    const monthExpenses = expenses.filter((expense) =>
      expense.date.startsWith(selectedMonth)
    );
    const totalSpent = monthExpenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );
    const remaining = monthlyBudget - totalSpent;

    const today = new Date();
    const currentMonth = today.toISOString().slice(0, 7);
    const isCurrentMonth = selectedMonth === currentMonth;

    let daysRemaining = 0;
    if (isCurrentMonth) {
      const lastDay = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0
      ).getDate();
      daysRemaining = lastDay - today.getDate();
    }

    const dailyAllowance = daysRemaining > 0 ? remaining / daysRemaining : 0;

    return {
      totalSpent,
      remaining,
      dailyAllowance: Math.max(0, dailyAllowance),
      isOverBudget: totalSpent > monthlyBudget,
      daysRemaining,
      isCurrentMonth,
    };
  }, [expenses, selectedMonth, monthlyBudget]);

  const onModalClose = () => setIsModalOpen(false);

  return (
    <>
      <div className="grid grid-4">
        <Card title="Monthly Budget" style={cardStyle}>
          <div css={budgetStats}>
            <button
              className="btn btn-ghost btn-small"
              onClick={() => setIsModalOpen(true)}
              css={editBtnStyle}
            >
              ✏️
            </button>
            <p css={budgetAmount()}>${monthlyBudget.toFixed(2)}</p>
          </div>
        </Card>
        <Card title="Total Spent">
          <div css={budgetStats}>
            <p css={budgetAmount(monthlyStats.isOverBudget)}>
              ${monthlyStats.totalSpent.toFixed(2)}
            </p>
            <p css={budgetSubTitle}>
              {monthlyStats.isOverBudget ? "Over budget" : "Within budget"}
            </p>
          </div>
        </Card>
        <Card title="Remaining">
          <div css={budgetStats}>
            <p css={budgetAmount(monthlyStats.remaining < 0, "#10b981")}>
              ${monthlyStats.remaining.toFixed(2)}
            </p>
            <p css={budgetSubTitle}>
              {monthlyStats.remaining < 0 ? "Over budget" : "Left to spend"}
            </p>
          </div>
        </Card>
        <Card title="Daily Allowance">
          <div css={budgetStats}>
            <p css={budgetAmount()}>
              ${monthlyStats.dailyAllowance.toFixed(2)}
            </p>
            <p css={budgetSubTitle}>
              {monthlyStats.isCurrentMonth
                ? `${monthlyStats.daysRemaining} days left`
                : "Not current month"}
            </p>
          </div>
        </Card>
      </div>
      {isModalOpen && (
        <UpdateBudget onModalClose={onModalClose} dispatch={dispatch} />
      )}
    </>
  );
};

export default BudgetOverview;
