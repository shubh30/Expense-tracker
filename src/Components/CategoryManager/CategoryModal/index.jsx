import React from "react";
import Modal from "../../Modal";
import { PRESET_COLORS } from "../../../constants";

import {
  updateCategory,
  addCategory,
} from "../../../store/slices/categoriesSlice";

import {
  form,
  formInput,
  formGroup,
  formLabel,
  colorPicker,
  colorOption,
  actions,
} from "./style";

const CategoryModal = ({
  onModalClose,
  editingCategory,
  setEditingCategory,
  formData,
  setFormData,
  dispatch,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) return;

    if (editingCategory) {
      dispatch(
        updateCategory({
          ...editingCategory,
          name: formData.name.trim(),
          color: formData.color,
        })
      );
    } else {
      dispatch(
        addCategory({
          name: formData.name.trim(),
          color: formData.color,
        })
      );
    }

    setFormData({ name: "", color: PRESET_COLORS[0] });
    setEditingCategory(null);
    onModalClose();
  };

  return (
    <Modal
      onClose={onModalClose}
      title={editingCategory ? "Edit Category" : "Add New Category"}
    >
      <form onSubmit={handleSubmit} css={form}>
        <div css={formGroup}>
          <label htmlFor="category-name" css={formLabel}>
            Category Name
          </label>
          <input
            id="category-name"
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="Enter category name"
            css={formInput}
            required
          />
        </div>
        <div css={formGroup}>
          <label css={formLabel}>Color</label>
          <div css={colorPicker}>
            {PRESET_COLORS.map((color) => (
              <button
                key={color}
                type="button"
                css={colorOption(formData.color === color, color)}
                onClick={() => setFormData((prev) => ({ ...prev, color }))}
              />
            ))}
          </div>
        </div>

        <div css={actions} style={{ display: "flex", gap: "0.5rem" }}>
          <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
            {editingCategory ? "Update Category" : "Add Category"}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onModalClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CategoryModal;
