import React from "react";

const BASE_URL = "https://student-json-api.lidemy.me";

export const getPosts = () => {
  return fetch(`${BASE_URL}/posts?_sort=createdAt&_order=desc`).then(
    (response) => response.json()
  );
};

export const getPost = (id) => {
  return fetch(`${BASE_URL}/posts?id=${id}`).then((response) =>
    response.json()
  );
};

export const getMe = () => {
  return fetch(`${BASE_URL}/me`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res) => res.json());
};

export const register = (nickname, username, password) => {
  return fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      nickname,
      username,
      password,
    }),
  }).then((res) => res.json());
};

export const login = (username, password) => {
  return fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};

export const newPost = (title, body) => {
  const token = localStorage.getItem("token");
  return fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      title,
      body,
    }),
  }).then((res) => res.json());
};
