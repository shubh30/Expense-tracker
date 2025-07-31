import React, { useState } from "react";

import Card from "../Card";

import { PRESET_COLORS } from "../../constants";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../store/slices/categoriesSlice";

import {
  categoryItem,
  categoryInfo,
  categoryColor,
  h4Style,
  pStyle,
  badge,
  cardStyle,
  addCategoryCta,
  categoryActions,
} from "./style";
import CategoryModal from "./CategoryModal";

const CategoryManager = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const expenses = useSelector((state) => state.expenses.expenses);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    color: PRESET_COLORS[0],
  });

  const getCategoryUsage = (categoryName) => {
    return expenses.filter((expense) => expense.category === categoryName)
      .length;
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      color: category.color,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    if (category && !category.isDefault) {
      if (
        confirm(
          `Are you sure you want to delete the "${category.name}" category?`
        )
      ) {
        dispatch(deleteCategory(categoryId));
      }
    }
  };

  const openAddModal = () => {
    setEditingCategory(null);
    setFormData({ name: "", color: PRESET_COLORS[0] });
    setIsModalOpen(true);
  };

  const onModalClose = () => setIsModalOpen(false);

  return (
    <>
      <Card title="Add Category" style={cardStyle}>
        <>
          <button
            className="btn btn-primary"
            css={addCategoryCta}
            onClick={openAddModal}
          >
            Add Category
          </button>
          <div className="grid grid-3">
            {categories.map((category) => {
              const usage = getCategoryUsage(category.name);
              return (
                <div key={category.id} css={categoryItem}>
                  <div css={categoryInfo}>
                    <div css={categoryColor(category.color)} />
                    <div>
                      <h4 css={h4Style}>{category.name}</h4>
                      <p css={pStyle}>
                        {usage} expense{usage !== 1 ? "s" : ""}
                        {category.isDefault && <span css={badge}>Default</span>}
                      </p>
                    </div>
                  </div>

                  <div css={categoryActions}>
                    <button
                      className="btn btn-ghost btn-icon"
                      onClick={() => handleEdit(category)}
                      title="Edit category"
                    >
                      ✏️
                    </button>
                    {!category.isDefault && usage <= 0 && (
                      <button
                        className="btn btn-danger btn-icon"
                        onClick={() => handleDelete(category.id)}
                        title={"Delete category"}
                      >
                        🗑️
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      </Card>
      {isModalOpen && (
        <CategoryModal
          onModalClose={onModalClose}
          editingCategory={editingCategory}
          setEditingCategory={setEditingCategory}
          formData={formData}
          setFormData={setFormData}
          dispatch={dispatch}
        />
      )}
    </>
  );
};

export default CategoryManager;
