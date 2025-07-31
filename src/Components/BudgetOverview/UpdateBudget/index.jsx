import React, { useState } from "react";

import Modal from "../../Modal";

import { setMonthlyBudget } from "../../../store/slices/budgetSlice";
import { useSelector } from "react-redux";

import { form, formGroup, formInput, formLabel, action } from "./style";

const UpdateBudget = ({ onModalClose, dispatch }) => {
  const monthlyBudget = useSelector((state) => state.budget.monthlyBudget);
  const [newBudget, setNewBudget] = useState(monthlyBudget.toString());

  const handleBudgetUpdate = () => {
    const budget = Number.parseFloat(newBudget);
    if (!isNaN(budget) && budget > 0) {
      dispatch(setMonthlyBudget(budget));
      onModalClose();
    }
  };

  return (
    <Modal onClose={onModalClose} title="Update Monthly Budget">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleBudgetUpdate();
        }}
        css={form}
      >
        <div css={formGroup}>
          <label htmlFor="budget" css={formLabel}>
            Budget Amount
          </label>
          <input
            id="budget"
            type="number"
            value={newBudget}
            onChange={(e) => setNewBudget(e.target.value)}
            placeholder="Enter budget amount"
            css={formInput}
            required
          />
          <div css={action}>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ flex: 1 }}
            >
              Update Budget
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onModalClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default UpdateBudget;
