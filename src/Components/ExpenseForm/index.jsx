import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, updateExpense } from "../../store/slices/expensesSlice";

import Card from "../Card";

import {
  form,
  formGroup,
  formLabel,
  formInput,
  formSelect,
  formActions,
} from "./style.js";

const ExpenseForm = ({ editingExpense, onCancel }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const selectedMonth = useSelector((state) => state.categories.selectedMonth);

  const [formData, setFormData] = useState({
    date:
      editingExpense?.date ||
      (selectedMonth
        ? `${selectedMonth}-01`
        : new Date().toISOString().split("T")[0]),
    description: editingExpense?.description || "",
    category: editingExpense?.category || "",
    amount: editingExpense?.amount?.toString() || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.date ||
      !formData.description ||
      !formData.category ||
      !formData.amount
    )
      return;

    const amount = Number.parseFloat(formData.amount);
    if (isNaN(amount) || amount <= 0) return;

    if (editingExpense) {
      dispatch(
        updateExpense({
          ...editingExpense,
          ...formData,
          amount,
        })
      );
      onCancel();
    } else {
      dispatch(
        addExpense({
          ...formData,
          amount,
        })
      );
      setFormData({
        date: selectedMonth
          ? `${selectedMonth}-01`
          : new Date().toISOString().split("T")[0],
        description: "",
        category: "",
        amount: "",
      });
    }
  };

  return (
    <Card title={editingExpense ? "Edit Expense" : "Add New Expense"}>
      <form onSubmit={handleSubmit} css={form}>
        <div css={formGroup}>
          <label htmlFor="date" css={formLabel}>
            Date
          </label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, date: e.target.value }))
            }
            css={formInput}
            required
          />
        </div>
        <div css={formGroup}>
          <label htmlFor="description" css={formLabel}>
            Description
          </label>
          <input
            id="description"
            type="text"
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            placeholder="Enter expense description"
            css={formInput}
            required
          />
        </div>
        <div css={formGroup}>
          <label htmlFor="category" css={formLabel}>
            Category
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, category: e.target.value }))
            }
            css={formSelect}
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div css={formGroup}>
          <label htmlFor="amount" css={formLabel}>
            Amount
          </label>
          <input
            id="amount"
            type="number"
            step="0.01"
            min="0"
            value={formData.amount}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, amount: e.target.value }))
            }
            placeholder="0.00"
            css={formInput}
            required
          />
        </div>

        <div css={formActions}>
          <button type="submit" className="btn btn-primary">
            {editingExpense ? "Update Expense" : "Add Expense"}
          </button>
          {editingExpense && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </Card>
  );
};

export default ExpenseForm;
