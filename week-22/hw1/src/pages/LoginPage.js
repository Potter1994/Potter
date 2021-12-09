import React, { useState } from "react";
import styled from "styled-components";
import { login, getMe } from "../WebAPI";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = user;
    login(username, password).then((res) => {
      if (!res.ok) {
        return alert(res.message);
      }
      console.log(res);
      localStorage.setItem("token", res.token);
      getMe().then((res) => {
        if (!res.ok) {
          return alert(res.message);
        }
        navigate("/");
      });
    });
  };

  return (
    <div style={{ paddingTop: "150px" }}>
      <form
        onSubmit={(e) => handleSubmit(e)}
        method="POST"
        style={{ padding: "30px", border: "1px solid #aaa" }}
      >
        <h1 style={{ paddingBottom: "10px" }}>登入會員</h1>
        <div>
          <label>
            帳號:
            <input
              onChange={(e) => handleChange(e)}
              name="username"
              type="text"
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <div>
          <label>
            密碼:
            <input
              onChange={(e) => handleChange(e)}
              name="password"
              type="password"
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <div>
          <input type="submit" value="登入" style={{ marginTop: "20px" }} />
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
