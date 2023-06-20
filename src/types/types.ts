import { ROLES } from "../utils/constants";

export interface UiButtonStyleProps {
  variant: string;
  borderRadius: string;
}
export interface ISignInRespose {
  data: {
    token: string;
    user: {
      email: string;
      name: string;
      role: string;
    };
  };
}

export interface ISignUp {
  name: string;
  email: string;
  role: ROLES;
  password: string;
}

export interface Meal {
  readonly _id: string;
  price: number;
  title: string;
  amount: number;
  description: string;
}

export type BasketData = {
  id: string;
  price: number;
  title: string;
  amount: number;
};
export type ISignIn = Omit<ISignUp, "name" | "role">;
