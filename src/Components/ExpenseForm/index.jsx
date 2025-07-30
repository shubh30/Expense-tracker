import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../../store/slices/expensesSlice";
import {
  card,
  cardHeader,
  cardTitle,
  cardContent,
  form,
  formGroup,
  formLabel,
  formInput,
  formSelect,
  formActions,
  btn,
  btnPrimary
} from "./style.js";

const ExpenseForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.categories.categories);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.date || !formData.description || !formData.category || !formData.amount) return

    const amount = Number.parseFloat(formData.amount)
    if (isNaN(amount) || amount <= 0) return

    dispatch(addExpense({
      ...formData,
      amount
    }))
  };

  return (
    <div css={card}>
      <div css={cardHeader}>
        <h3 css={cardTitle}>Add New Expense</h3>
      </div>
      <div css={cardContent}>
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
            <button
              type="submit"
              css={[btn, btnPrimary]}
            >
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
