import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_CATEGORIES } from "../../constants";

const initialState = {
  categories: DEFAULT_CATEGORIES,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      const newCategory = {
        ...action.payload,
        id: Date.now().toString(),
        isDefault: false,
      };

      state.categories.push(newCategory);
    },
    updateCategory: (state, action) => {
      const index = state.categories.findIndex(
        (category) => category.id === action.payload.id
      );
      if (index !== -1) {
        state.categories[index] = action.payload;
      }
    },
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      );
    },
    loadCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { addCategory, updateCategory, deleteCategory, loadCategories } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
