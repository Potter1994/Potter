import { getAuthToken } from "./utils";
const BASE_URL = "https://student-json-api.lidemy.me";

export const fetchPostList = async (page) => {
  const data = await fetch(
    `${BASE_URL}/posts?_limit=5&_page=${page}&_sort=createdAt&_order=desc`
  );
  const totalPage = data.headers.get("x-total-count");
  const pageList = await data.json();
  return { totalPage, pageList };
};

export const fetchPost = (id) => {
  return fetch(`${BASE_URL}/posts/${id}`).then((res) => res.json());
};

export const fetchCreateNewPost = (title, body) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      body,
    }),
  }).then((res) => res.json());
};

export const fetchAuthToken = (username, password) => {
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

export const fetchCommentList = () => {
  return fetch(`${BASE_URL}/comments`).then((res) => res.json());
};

export const fetchCreateNewComment = (nickname, body) => {
  return fetch(`${BASE_URL}/comments`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      nickname,
      body,
    }),
  }).then((res) => res.json());
};

export const fetchUserInfo = (token) => {
  return fetch(`${BASE_URL}/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

export const fetchLogin = (username, password) => {
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

export const fetchRegister = (username, nickname, password) => {
  return fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      nickname,
      password,
    }),
  }).then((res) => res.json());
};
