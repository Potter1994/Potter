import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoTab from "./components/TodoTab";

function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <TodoInput />
      <TodoTab />
      <TodoList />
    </div>
  );
}

export default App;
