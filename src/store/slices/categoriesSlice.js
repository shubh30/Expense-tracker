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
  },
});

export const { addCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
