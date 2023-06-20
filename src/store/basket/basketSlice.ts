import { createSlice } from "@reduxjs/toolkit";
import { Meal } from "../../types/types";
import { getBasket } from "./basketThunk";

type BasketState = {
  items: Meal[];
};
const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBasket.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});
