import styled from "@emotion/styled";
import MealItem from "./MealsItem";
import { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Meal } from "../../types/types";
import { getAlMeals } from "../../store/meals/mealsThunk";
import { useEffect } from "react";

export const Meals = () => {
  const { items } = useSelector((state: RootState) => state.meals);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAlMeals());
  }, [dispatch]);
  return (
    <Container>
      {items?.map((item: Meal) => (
        <main key={item._id}>
          <MealItem item={item} />
        </main>
      ))}
    </Container>
  );
};

const Container = styled("div")`
  background-color: #fff;
  margin: 135px 20%;
  padding: 40px;
  border-radius: 16px;
  main {
    border-bottom: 1px solid #d6d6d6;
    &:last-child {
      border-bottom: none;
    }
  }
`;
