// /src/App.js
import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import styled from "styled-components";
import {
  HomePage,
  PostPage,
  RegisterPage,
  LoginPage,
  NewPostPage,
} from "../../pages/";

import Header from "../Header";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/new-post" element={<NewPostPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </HashRouter>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
