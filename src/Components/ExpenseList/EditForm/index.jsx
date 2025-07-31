import React from "react";

import ExpenseForm from "../../ExpenseForm";
import Modal from "../../Modal";

const EditForm = ({ onModalClose, editingExpense }) => {
  return (
    <Modal onClose={onModalClose} title="Edit Expense">
      <ExpenseForm editingExpense={editingExpense} onCancel={onModalClose} />
    </Modal>
  );
};

export default EditForm;
