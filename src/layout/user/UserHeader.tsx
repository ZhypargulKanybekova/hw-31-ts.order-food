import styled from "styled-components";
import OrderBasket from "../../components/UI/basket/OrderBasket";
import { Button } from "../../components/UI/button/Button";
import { useNavigate } from "react-router-dom";

interface UserHeaderProps {
  onToggle: () => void;
}

export const UserHeader = ({ onToggle }: UserHeaderProps) => {
  const navigate = useNavigate();
  function signUp() {
    navigate("/signup");
  }
  function signIn() {
    navigate("/signin");
  }

  return (
    <Container>
      <h1>ReactMeals</h1>
      <OrderBasket onToggle={onToggle} totalAmount={12}>
        Your Cart
      </OrderBasket>
      <Button onClick={signUp}>SignUp</Button>
      <Button onClick={signIn}>SignIn</Button>
    </Container>
  );
};

const Container = styled.header`
  height: 101px;
  background: #8a2b06;
  padding: 0 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;
