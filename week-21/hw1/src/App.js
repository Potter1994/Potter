import React, { useState } from "react";
import styled from "styled-components";
import { TodoItem, Button } from "./components/TodoItem";

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 100px 200px;
`;

const TodoItemWrapper = styled.div`
  border: 1px solide #d2d2d2;
  border-radius: 12px;
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 10px;
`;

const Title = styled.div`
  margin: 0;
  font-size: 36px;
  font-weight: bolder;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  width: 50%;
  font-size: 20px;
  border: 1px solid #d2d2d2;
`;

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const addTodo = (e) => {
    if (!input || /^s*$/.test(input)) {
      return;
    }
    setTodos([
      { id: new Date().getTime(), text: input, isDone: false },
      ...todos,
    ]);
    setInput("");
  };

  const handleToggleIsDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      })
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((i) => i.id !== id));
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") return addTodo();
  };

  return (
    <TodoWrapper className="App">
      <Title>TODO LIST</Title>
      <div>
        <Input
          type="text"
          placeholder="todo"
          value={input}
          onChange={handleChangeInput}
          onKeyPress={handleKeypress}
        />
        <Button disabled={!input} type="submit" onClick={addTodo}>
          Add
        </Button>
      </div>
      <FilterWrapper>
        <Button onClick={() => setFilter("all")}>全部</Button>
        <Button onClick={() => setFilter("complete")}>已完成</Button>
        <Button onClick={() => setFilter("unDone")}>未完成</Button>
        <Button>清空</Button>
      </FilterWrapper>
      <TodoItemWrapper>
        {/* 這邊 */}
        {todos
          .filter((todo) => (filter === "complete" ? todo.isDone : true))
          .filter((todo) => (filter === "unDone" ? !todo.isDone : true))
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleToggleIsDone={handleToggleIsDone}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))}
      </TodoItemWrapper>
    </TodoWrapper>
  );
}
export default App;
