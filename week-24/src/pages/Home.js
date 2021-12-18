import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import {
//   fetchPostList,
//   fetchPost,
//   fetchAuthToken,
//   fetchUserInfo,
//   fetchCommentList,
//   fetchCreateNewComment,
//   fetchCreateNewPost,
// } from "../useWebAPI";
import { useSelector, useDispatch } from "react-redux";
import { getPostList, setPostPage } from "../redux/reducers/postSlice"; //這邊不太算是拿 action 而是拿裡面經過 middleware 的函式直接在那邊幫你處理邏輯， action 也都在那邊就action 結束了。
// 好處是邏輯就都是在 postSlice 這隻檔案，跟你的 component 無關，以後方便修正Bug。
import { setUserIsLoading } from "../redux/reducers/userSlice";

function Home() {
  const posts = useSelector((state) => state.posts.postList);
  const page = useSelector((state) => state.posts.postPage);
  const currentPage = page[0];
  const totalPage = page[1];
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const changePage = (e) => {
    if (!e.target.value || Number(e.target.value) === Number(currentPage))
      return;
    dispatch(setPostPage({ currentPage: Number(e.target.value, totalPage) }));
  };

  useEffect(() => {
    dispatch(getPostList(currentPage));
  }, [dispatch, currentPage]);

  const pageButton = () => {
    let arr = [];
    if (Number(totalPage) > Number(currentPage) + 5) {
      for (let i = currentPage; i < Number(currentPage) + 6; i++) {
        arr.push(Number(i));
      }
    } else if (Number(totalPage) <= Number(currentPage)) {
      return;
    } else {
      for (let i = Number(currentPage); i < Number(totalPage); i++) {
        arr.push(Number(i));
      }
    }
    return arr;
  };

  return (
    <div className="hole-page">
      <h1>Home</h1>
      {posts &&
        posts.map((i) => (
          <div key={i.id} className="article-item">
            <div>
              <NavLink to={`/posts/${i.id}`}>{i.title}</NavLink>
            </div>
            <div className="article-date">
              {new Date(i.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}
      <div onClick={(e) => changePage(e)} className="pagenation">
        <button value={1}>第一頁</button>
        {currentPage && currentPage < totalPage ? (
          pageButton().map((i) => (
            <button value={i} key={"a" + i}>
              {i}
            </button>
          ))
        ) : (
          <button value={1}>1</button>
        )}
        <span>.....</span>
        <button value={totalPage}>{totalPage}</button>
      </div>
    </div>
  );
}

export default Home;
