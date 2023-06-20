import { axiosInstance } from "../config/axiosInstance";
import { Meal } from "../types/types";

type AllMealsResponse = {
  data: Meal[];
};
export const getAllMealRequests = () => {
  return axiosInstance.get<AllMealsResponse>("foods");
};
