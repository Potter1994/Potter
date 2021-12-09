import React, { useState, useContext } from "react";
import styled from "styled-components";
import { register, getMe } from "../WebAPI";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [user, setUser] = useState({
    username: "",
    nickname: "",
    password: "",
  });
  const navigation = useNavigate();
  const handleChange = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { nickname, username, password } = user;
    register(nickname, username, password).then((data) => {
      if (!data.ok) {
        return alert(data.message);
      }
      localStorage.setItem("token", data.token);
      getMe().then((res) => {
        if (!res.ok) {
          localStorage.setItem("token", null);
          return alert(res.message);
        }
        navigation("/");
      });
    });
  };
  return (
    <div style={{ paddingTop: "150px" }}>
      <form
        onSubmit={(e) => handleSubmit(e)}
        method="POST"
        style={{ border: "1px solid #aaa", padding: "30px" }}
      >
        <h1 style={{ paddingBottom: "10px" }}>註冊會員</h1>
        <div>
          <label>
            帳號:
            <input
              name="username"
              onChange={(e) => handleChange(e)}
              type="text"
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <div>
          <label>
            暱稱:
            <input
              name="nickname"
              onChange={(e) => handleChange(e)}
              type="text"
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <div>
          <label>
            密碼:
            <input
              name="password"
              onChange={(e) => handleChange(e)}
              type="password"
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>

        <div>
          <input type="submit" value="註冊" />
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
