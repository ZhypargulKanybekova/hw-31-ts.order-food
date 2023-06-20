import { axiosInstance } from "../config/axiosInstance";
import { BasketData } from "../types/types";

export const getBasketRequest = () => {
  return axiosInstance.get("basket");
};

export const addToBasketRequest = (newItem: BasketData) => {
  return axiosInstance.post(`foods/${newItem.id}/addToBasket`, {
    amount: newItem.amount,
  });
};

export const updateBasketItemRequest = (id: string, amount: number) => {
  return axiosInstance.put(`basketItem/${id}/update`, { amount });
};

export const deleteBasketItemRequest = (id: string) => {
  return axiosInstance.delete(`/basketItem/${id}/delete`);
};
