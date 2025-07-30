import { createSlice } from "@reduxjs/toolkit";

const defaultCategories = [
  { id: "1", name: "Food", color: "#ef4444", isDefault: true },
  { id: "2", name: "Travel", color: "#3b82f6", isDefault: true },
  { id: "3", name: "Bills", color: "#f59e0b", isDefault: true },
  { id: "4", name: "Entertainment", color: "#8b5cf6", isDefault: true },
  { id: "5", name: "Shopping", color: "#06b6d4", isDefault: true },
  { id: "6", name: "Health", color: "#10b981", isDefault: true },
];

const initialState = {
  categories: defaultCategories,
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
  },
});

export const { addCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
