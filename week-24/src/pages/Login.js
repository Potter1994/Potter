import React, { useState } from "react";
// import { fetchLogin, fetchUserInfo } from "../useWebAPI";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../redux/reducers/userSlice";
import { useNavigate } from "react-router-dom";

// const BASE_URL = "https://student-json-api.lidemy.me";

function Login() {
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = userInput;
    dispatch(getUserInfo(navigate, username, password));
  };

  return (
    <div className="hole-page">
      <form onSubmit={(e) => handleSubmit(e)} className="form" method="POST">
        <h1>Login Form</h1>
        {user.errorMessage && <h3>ERROR: {user.errorMessage}</h3>}
        <div>
          <label>
            username:{" "}
            <input
              onChange={(e) =>
                setUserInput({
                  ...userInput,
                  username: e.target.value,
                })
              }
              value={userInput.username}
              type="text"
              name="username"
            />
          </label>
        </div>
        <div>
          <label>
            password:{" "}
            <input
              onChange={(e) =>
                setUserInput({
                  ...userInput,
                  password: e.target.value,
                })
              }
              value={userInput.password}
              type="password"
              name="password"
            />
          </label>
        </div>
        <div>
          <input className="confirm-button" type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}

export default Login;
