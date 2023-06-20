import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInRequest, signuPRequest } from "../../api/authService";
import { ISignIn, ISignUp } from "../../types/types";

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (payload: ISignUp, { rejectWithValue }) => {
    try {
      const response = await signuPRequest(payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const signIn = createAsyncThunk(
  "auth/signIn",
  async (payload: ISignIn, { rejectWithValue }) => {
    try {
      const response = await signInRequest(payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
