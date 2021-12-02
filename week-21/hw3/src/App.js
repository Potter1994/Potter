import React, { useState } from "react";
import styled from "styled-components";
import { questionArray } from "./utils";
import "./App.css";

const Title = styled.h1`
  margin-top: 35px;
`;
const SubmitButton = styled.input`
  height: 40px;
  width: 92px;
  background-color: #fad312;
  border: 0;
  border-radius: 3px;
  margin-bottom: 21px;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
  }
`;
const Info = styled.p`
  font-size: 14px;
`;

const Input = ({ type, placeholder, id, name, value, handleChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      id={`data_${id}`}
      value={value}
      onChange={(e) => handleChange(e)}
    />
  );
};
const Radio = ({ placeholder, id, name, value, checked, handleChange }) => {
  return (
    <input
      className="radio-style"
      type="radio"
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={(e) => handleChange(e)}
    />
  );
};

const Label = ({ text, htmlFor }) => (
  <label className="label" htmlFor={htmlFor}>
    {text} <span>*</span>
  </label>
);

function App() {
  const [questions, setQuestions] = useState(questionArray);

  const isValid = false;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newQuestions = questions.map((question) => {
      // 這個是為了讓他 questions 裡面其他不一樣的不做事直接 return
      // 因為我們是要對我們要的、點到的那個 Input 做事
      if (question.name !== name) return question;
      return {
        ...question,
        value,
        isValid,
      };
    });
    setQuestions(newQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkIsValid = questions.map((i) => {
      if (!i.required) return i;
      if (!i.value) return { ...i, isValid: false };

      return { ...i, isValid: true };
    });
    setQuestions(checkIsValid);

    const checkError = checkIsValid.find(
      (i) => i.required && i.isValid === false
    );
    if (!checkError) {
      alert(JSON.stringify(questions.map((i) => i.title + ":" + i.value)));
    } else {
      alert("請確實填寫表單");
    }
  };
  return (
    <div className="wrapper">
      <div className="top-block"></div>
      <Title>新拖延運動報名表</Title>
      <form className="form-group" onSubmit={(e) => handleSubmit(e)}>
        {questions.map((i, index) => (
          <div key={"textInput" + index} className="form">
            <Label text={i.title} />
            {i.type === "text" ? (
              <Input
                placeholder={i.placeholder}
                type="text"
                name={i.name}
                id={index}
                value={i.value}
                handleChange={(e) => handleChange(e)}
              />
            ) : (
              i.options.map((j) => (
                <div key={"radioInput" + j.id}>
                  <label className="description">{j.content}</label>
                  <Radio
                    id={j.id}
                    name={i.name}
                    handleChange={handleChange}
                    value={j.content}
                  />
                </div>
              ))
            )}
          </div>
        ))}

        <div className="submit">
          <SubmitButton type="submit" />
          <Info>請勿透過表單送出您的真實密碼</Info>
        </div>
      </form>
    </div>
  );
}

export default App;
