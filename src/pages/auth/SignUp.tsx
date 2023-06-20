import styled from "@emotion/styled";
import React from "react";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch } from "../../store";
import { ROLES } from "../../utils/constants";
import { signUp } from "../../store/auth/auth.thunk";

export const SignUp = () => {
  const [gmail, setGmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  function submitHandler(event: React.FormEvent<HTMLFormElement>): void {
    event?.preventDefault();

    const data = {
      email: gmail,
      password,
      role: ROLES.USER,
      name,
      token: "",
    };

    dispatch(signUp(data));
    navigate("/");
  }

  return (
    <Container>
      <form onSubmit={submitHandler}>
        <div>
          <TextField
            type="name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            type="email"
            label="Gmail"
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
        <Button type="submit">SignUp</Button>
      </form>
      <Link to="/signin">You have an account?</Link>
    </Container>
  );
};
const Container = styled("div")`
  background-color: #fff;
  border-radius: 15px;
  padding: 30px;
  height: 400px;
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
