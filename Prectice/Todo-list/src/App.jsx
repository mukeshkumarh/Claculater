import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppName from "./Component/AppName";
import AddTodo from "./Component/AddTodo";
import TodoItems from "./Component/TodoItems";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to collage",
      dueDate: "4/10/2023",
    },
  ];
  return (
    <>
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />

      
    </>
  );
}

export default App;
