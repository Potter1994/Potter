import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  // background-color: #aaa;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 560px;
  margin: 150px auto 0;
  padding: 40px;
`;
const TodoListWrapper = styled.div`
  width: 100%;
  border: 1px solid #faa;
  display: flex;
  flex-direction: column;
`;
const TodoListTitle = styled.div`
  background-color: #fff;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  padding: 10px 0;
`;
const TodoListInputGroup = styled.div`
  display: flex;
  padding: 20px;
  // background-color: #777;
  justify-content: center;
`;
const TodoListInput = styled.input`
  width: 200px;
  padding: 8px;
  &:focus {
    outline: none;
  }
`;
const AddButton = styled.button`
  padding: 8px;
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 5px;
  margin-left: 6px;
  cursor: pointer;
  font-size: 18px;
  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
`;
const TodoItemRoot = styled.div`
  padding: 20px;
`;
const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
  margin-bottom: 5px;
`;
const TodoTitle = styled.h3`
  margin-left: 10px;
  ${(props) =>
    props.$isDone ? "color: #aaa;text-decoration:line-through" : ""}
`;
const Button = styled.button`
  padding: 6px 15px;
  margin-right: 15px;
  font-size: 18px;
  cursor: pointer;
  ${(props) => (props.$isDone ? "background-color: #000;color: #fff" : "")}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const OptionTab = styled.div`
  justify-content: center;
  display: flex;
  list-style: none;
`;
const Tab = styled.li`
  border: 1px solid #faa;
  padding: 6px 10px;
  cursor: pointer;
  transition: all 0.1s;
  &:hover {
    background-color: #aaa;
    color: #fafafa;
  }
  & + li {
    margin-left: 5px;
  }
  &:active {
    transform: scale(1.1);
  }
  ${(props) => (props.$active ? "background-color:#faa;color:#fff;" : "")}
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ id: "", textContent: "", isDone: false });
  const [tab, setTab] = useState("all");

  const handleInputValue = (e) => {
    setTodo({
      id: new Date().getTime(),
      textContent: e.target.value,
      isDone: false,
    });
  };
  const handleTodoSubmit = () => {
    if (!todo.textContent) {
      return console.log("請輸入內容");
    }
    setTodos([todo, ...todos]);
    setTodo("");
  };
  const handleChangeDone = (e) => {
    const id = Number(e.target.dataset.id);
    const newTodos = todos.map((i) => {
      if (Number(i.id) === id) {
        return { ...i, isDone: i.isDone ? false : true };
      }
      return i;
    });
    setTodos(newTodos);
  };
  const handleDeleteTodo = (e) => {
    const id = Number(e.target.dataset.id);
    const newTodos = todos.filter((i) => {
      return Number(i.id) !== id;
    });
    setTodos(newTodos);
  };
  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      handleTodoSubmit();
    }
    return;
  };

  return (
    <Container>
      <TodoListWrapper>
        <TodoListTitle>TODO LIST</TodoListTitle>
        <TodoListInputGroup>
          <TodoListInput
            onKeyPress={(e) => handleKeypress(e)}
            value={todo.textContent || ""}
            onChange={(e) => handleInputValue(e)}
            type="text"
          />
          <AddButton onClick={() => handleTodoSubmit()}>Add Todo</AddButton>
        </TodoListInputGroup>
        <OptionTab onClick={(e) => setTab(e.target.dataset.tab)}>
          <Tab $active={tab === "all"} data-tab="all">
            全部事項
          </Tab>
          <Tab $active={tab === "uncomplete"} data-tab="uncomplete">
            未完成事項
          </Tab>
          <Tab $active={tab === "done"} data-tab="done">
            已完成事項
          </Tab>
        </OptionTab>
        <TodoItemRoot>
          {todos &&
            todos
              .filter((i) => (tab === "uncomplete" ? !i.isDone : true))
              .filter((i) => (tab === "done" ? i.isDone : true))
              .map((i) => (
                <TodoItem key={i.id}>
                  <TodoTitle $isDone={i.isDone}>{i.textContent}</TodoTitle>
                  <ButtonGroup>
                    <Button data-id={i.id} onClick={(e) => handleDeleteTodo(e)}>
                      刪除
                    </Button>
                    <Button
                      $isDone={i.isDone}
                      data-id={i.id}
                      onClick={(e) => handleChangeDone(e)}
                    >
                      {i.isDone ? "完成" : "未完成"}
                    </Button>
                  </ButtonGroup>
                </TodoItem>
              ))}
        </TodoItemRoot>
        <div style={{ display: "flex", justifyContent: "center", padding: 10 }}>
          <button style={{ padding: 10 }} onClick={(e) => setTodos("")}>
            清空
          </button>
        </div>
      </TodoListWrapper>
    </Container>
  );
}

export default App;
