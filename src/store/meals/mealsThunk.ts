import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllMealRequests } from "../../api/mealsService";

export const getAlMeals = createAsyncThunk(
  "meal/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllMealRequests();
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
