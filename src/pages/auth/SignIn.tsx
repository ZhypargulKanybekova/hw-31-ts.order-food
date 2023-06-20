import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch } from "../../store";
import { signIn } from "../../store/auth/auth.thunk";
import { useDispatch } from "react-redux";

export const SignIn = () => {
  const [gmail, setGmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();
  function submitHandler() {
    const data = {
      email: gmail,
      password,
    };

    dispatch(signIn(data));
    navigate("/");
  }

  return (
    <Container>
      <form onSubmit={submitHandler}>
        <div>
          <TextField
            type="email"
            label="Email"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
          />
          <TextField
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit">SignIn</Button>
      </form>
      <Link to="/signup">You dont have an account?</Link>
    </Container>
  );
};
const Container = styled("div")`
  background-color: #fff;
  border-radius: 15px;
  padding: 30px;
  height: 300px;
  width: 400px;
  margin: 200px auto;
  text-align: center;
  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    input {
      width: 100%;
      text-align: center;
    }
  }
  button {
    margin: 30px;
  }
  a {
    text-decoration: none;
    color: #000000;
    font-size: 19px;
  }
`;
