import React, { useState } from "react";
import { newPost } from "../WebAPI";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Root = styled.div`
  width: 50%;
  margin: 100px auto;
`;

const PostContainer = styled.div`
  position: relative;
`;

const NewPostTitle = styled.input`
  width: 20em;
  padding: 8px;
`;

const NewPostTextarea = styled.textarea`
  width: 100%;
  height: 400px;
  margin-top: 8px;
  padding: 8px;
  box-sizing: border-box;
`;

const NewPostButton = styled.button`
  position: absolute;
  right: 0;
  bottom: -48px;
  padding: 8px 32px;
`;

function NewPostPage() {
  const [newPostData, setNewPostData] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewPostData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNewPostSubmit = (e) => {
    e.preventDefault();
    const { title, content } = newPostData;
    newPost(title, content).then((data) => {
      console.log(data);
      if (!data) {
        return alert(data.message);
      }
      navigate("/");
    });
  };

  return (
    <div style={{ paddingTop: "150px" }}>
      <Root>
        <PostContainer>
          <form onSubmit={(e) => handleNewPostSubmit(e)}>
            <NewPostTitle
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="文章標題..."
              name="title"
            ></NewPostTitle>
            <NewPostTextarea
              onChange={(e) => {
                handleChange(e);
              }}
              name="content"
              placeholder="文章內文..."
            ></NewPostTextarea>
            <NewPostButton>送出</NewPostButton>
          </form>
        </PostContainer>
      </Root>
    </div>
  );
}

export default NewPostPage;
