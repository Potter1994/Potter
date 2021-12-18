import React, { useState, useEffect } from "react";
import { getRegister } from "../redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Register() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    username: "",
    nickname: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setRegister({
      ...register,
      [e.target.getAttribute("name")]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, nickname, password } = register;
    dispatch(getRegister(navigate, username, nickname, password));
  };

  useEffect(() => {
    if (user.isLogin) {
      navigate("/");
    }
  }, []);

  return (
    <div className="hole-page">
      <form onSubmit={(e) => handleSubmit(e)} className="form" method="POST">
        <h1>Register Form</h1>
        {user.errorMessage && <h3>{user.errorMessage}</h3>}
        <div>
          <label>
            username:{" "}
            <input
              onChange={(e) => handleInputChange(e)}
              value={register.username}
              name="username"
              type="text"
            />
          </label>
        </div>
        <div>
          <label>
            nickname:{" "}
            <input
              onChange={(e) => handleInputChange(e)}
              value={register.nickname}
              name="nickname"
              type="text"
            />
          </label>
        </div>
        <div>
          <label>
            password:{" "}
            <input
              onChange={(e) => handleInputChange(e)}
              value={register.password}
              name="password"
              type="password"
            />
          </label>
        </div>
        <div>
          <input className="confirm-button" type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
}

export default Register;
