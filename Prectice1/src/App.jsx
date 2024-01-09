import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppName from "./Component/AppName";
import AddTodo from "./Component/AddTodo";
import TodoItem1 from "./Component/TodoItem1";
import TodoItem2 from "./Component/TodoItem2";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <center className="todo-contain">
        <AppName />
        <AddTodo />
        <TodoItem1 />
        <TodoItem2 />
      </center>
    </>
  );
}

export default App;
