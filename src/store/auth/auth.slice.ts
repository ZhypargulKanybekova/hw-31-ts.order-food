import { createSlice } from "@reduxjs/toolkit";
import { ROLES } from "../../utils/constants";

interface AuthState {
  isAuthorization: boolean;
  token: string;

  user: {
    name: string;
    email: string;
    role: ROLES;
    id?: string;
  };
}

const getInitialState = () => {
  const json = localStorage.getItem("AUTH");
  if (json) {
    const userData = JSON.parse(json) as Omit<AuthState, "isAuthorization">;
    return {
      isAuthorization: true,
      token: userData.token,
      user: {
        name: userData.user.name,
        email: userData.user.email,
        role: userData.user.role,
      },
    };
  }
  return {
    isAuthorization: false,
    token: "",

    user: {
      name: "",
      email: "",
      role: ROLES.GUEST,
    },
  };
};

const initialState: AuthState = getInitialState();

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const authActions = authSlice.actions;
