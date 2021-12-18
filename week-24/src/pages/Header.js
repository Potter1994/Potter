import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo } from "../redux/reducers/userSlice";

const HeaderContainer = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: #fff;
  box-shadow: 1px 1px 1px 1px #eee;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0px 32px;
  box-sizing: border-box;
`;
const Brand = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const NavbarList = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
`;
const Nav = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  width: 100px;
  cursor: pointer;
  color: black;
  text-decoration: none;
  ${(props) =>
    props.$active &&
    `
background: rgba(0,0,0,0.1)
`}
`;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  ${NavbarList} {
    margin-left: 64px;
  }
`;

function Header() {
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <LeftContainer>
        <Brand>
          <Nav to="/">我的部落格</Nav>
        </Brand>
        <NavbarList>
          <Nav to="/" $active={location.pathname === "/"}>
            Home
          </Nav>
          <Nav to="/about" $active={location.pathname === "/about"}>
            About
          </Nav>
          {user.userInfo && (
            <Nav to="/new-post" $active={location.pathname === "/new-post"}>
              New Post
            </Nav>
          )}
        </NavbarList>
      </LeftContainer>
      {!user.userInfo && (
        <NavbarList>
          <Nav to="/login" $active={location.pathname === "/login"}>
            登入
          </Nav>
          <Nav to="/register" $active={location.pathname === "/register"}>
            註冊
          </Nav>
        </NavbarList>
      )}
      {user.userInfo && (
        <NavbarList>
          {/* <Nav to="/login" $active={location.pathname === "/edit"}>
            Edit
          </Nav> */}
          <Nav
            onClick={() => {
              dispatch(setUserInfo(null));
              localStorage.setItem("token", null);
            }}
            to="/"
          >
            Logout
          </Nav>
        </NavbarList>
      )}
    </HeaderContainer>
  );
}

export default Header;
