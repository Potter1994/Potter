import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../redux/reducers/postSlice";

function Post() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.post);
  const test = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  return (
    <div className="hole-page">
      <div className="article-item">
        <div>{post && post.title}</div>
        <div>{post && new Date(post.createdAt).toLocaleDateString()}</div>
      </div>
      <div>{post && post.body}</div>
    </div>
  );
}

export default Post;
