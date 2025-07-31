import { useState, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteExpense } from "../../store/slices/expensesSlice";

import Card from "../Card";

import {
  emptyState,
  expenseList,
  expenseItem,
  expenseInfo,
  expenseCategoryDot,
  expenseDetails,
  expenseDescription,
  expenseMeta,
  expenseActions,
  expenseAmount,
} from "./style.js";

const EditForm = lazy(() => import("./EditForm"));

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses.expenses || []);
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  const [editingExpense, setEditingExpense] = useState(null);

  const getCategoryColor = (categoryName) => {
    const category = categories.find((cat) => cat.name === categoryName);
    return category?.color || "#6b7280";
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this expense?")) {
      dispatch(deleteExpense(id));
    }
  };

  const onModalClose = () => setEditingExpense(null);

  return (
    <>
      <Card title="Recent Expenses" extraInfo={expenses.length}>
        {expenses.length === 0 ? (
          <div css={emptyState}>
            <p>No expenses found for this month</p>
          </div>
        ) : (
          <div css={expenseList}>
            {expenses.map((expense) => {
              return (
                <div css={expenseItem} key={expense.id}>
                  <div css={expenseInfo}>
                    <div
                      css={expenseCategoryDot}
                      style={{
                        backgroundColor: getCategoryColor(expense.category),
                      }}
                    />
                    <div css={expenseDetails}>
                      <h4 css={expenseDescription}>{expense.description}</h4>
                      <p css={expenseMeta}>
                        {expense.category} • {formatDate(expense.date)}
                      </p>
                    </div>
                  </div>
                  <div css={expenseActions}>
                    <span css={expenseAmount}>
                      ${expense.amount.toFixed(2)}
                    </span>
                    <button
                      className="btn btn-ghost btn-icon"
                      onClick={() => setEditingExpense(expense)}
                      title="Edit expense"
                    >
                      ✏️
                    </button>
                    <button
                      className="btn btn-danger btn-icon"
                      onClick={() => handleDelete(expense.id)}
                      title="Delete expense"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Card>

      {editingExpense && (
        <Suspense fallback={<div />}>
          <EditForm
            onModalClose={onModalClose}
            editingExpense={editingExpense}
          />
        </Suspense>
      )}
    </>
  );
};

export default ExpenseList;
