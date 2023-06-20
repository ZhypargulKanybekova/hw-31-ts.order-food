import { createSlice } from "@reduxjs/toolkit";
import { Meal } from "../../types/types";
import { getAlMeals } from "./mealsThunk";

type MealsState = {
  items: Meal[];
};
const initialState: MealsState = {
  items: [],
};

export const MealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAlMeals.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});
