import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../../store/slices/expensesSlice";
import "./style.css";

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
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Add New Expense</h3>
      </div>
      <div className="card-content">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, date: e.target.value }))
              }
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="form-label">
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
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              id="category"
              value={formData.category}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, category: e.target.value }))
              }
              className="form-select"
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

          <div className="form-group">
            <label htmlFor="amount" className="form-label">
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
              className="form-input"
              required
            />
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="btn btn-primary"
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
