import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

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
  font-size: 32px;
  font-weight: bold;
`;
const NavbarList = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
`;
const Nav = styled(Link)`
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
  const history = useNavigate();

  return (
    <HeaderContainer>
      <LeftContainer>
        <Brand>
          <Link to="/">我的部落格</Link>
        </Brand>
        <NavbarList>
          <Nav to="/" $active={location.pathname === "/"}>
            首頁
          </Nav>
          <Nav to="/new-post" $active={location.pathname === "/new-post"}>
            發布文章
          </Nav>
        </NavbarList>
      </LeftContainer>
      <NavbarList>
        <Nav to="/login" $active={location.pathname === "/login"}>
          登入
        </Nav>
        <Nav to="/register" $active={location.pathname === "/register"}>
          註冊
        </Nav>
      </NavbarList>
    </HeaderContainer>
  );
}

export default Header;
