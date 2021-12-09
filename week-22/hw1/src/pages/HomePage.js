import React, { useState, useEffect, createContext } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { getPosts } from "../WebAPI";

const Root = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding-top: 80px;
`;

const PostContainer = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostTitle = styled(Link)`
  font-size: 24px;
  color: #333;
  text-decoration: none;
`;

const PostDate = styled.div`
  color: rgba(0, 0, 0, 0.8);
`;

function PostList({ post }) {
  return (
    <PostContainer>
      <PostTitle to={`/posts/${post.id}`}>{post.title}</PostTitle>
      <PostDate>{new Date(post.createdAt).toLocaleDateString()}</PostDate>
    </PostContainer>
  );
}

function HomePage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <Root>
      {posts && posts.map((i, index) => <PostList key={index} post={i} />)}
    </Root>
  );
}

export default HomePage;
