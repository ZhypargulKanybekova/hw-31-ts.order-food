import { axiosInstance } from "../config/axiosInstance";
import { ISignIn, ISignInRespose, ISignUp } from "../types/types";

export const signuPRequest = (data: ISignUp) => {
  return axiosInstance.post<ISignInRespose>("auth/register", data);
};

export const signInRequest = (data: ISignIn) => {
  return axiosInstance.post<ISignInRespose>("auth/login", data);
};
