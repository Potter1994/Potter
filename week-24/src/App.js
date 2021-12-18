import React from "react";
import "./App.css";
import { Home, About, Header, Article, Login, Post, Register } from "./pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/new-post" element={<Article />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
