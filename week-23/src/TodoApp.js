import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoTab from "./components/TodoTab";
import TodoList from "./components/TodoList";

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
