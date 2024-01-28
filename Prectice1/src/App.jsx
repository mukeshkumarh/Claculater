import "./App.css";
import AppName from "./Component/AppName";
import AddTodo from "./Component/AddTodo";
import "bootstrap/dist/css/bootstrap.min.css";
import Todoitems from "./Component/Todoitems";
function App() {
  const todoitems =[
    {
    name:'Buy Milk',
    dueDate:'4/10/2023',
  },
{
  name:'Go to collage',
  dueDate:'4/10/2023',
},

];
  return (
    <>
      <center className="todo-contain">
        <AppName />
        <AddTodo />
        <Todoitems key={todoitems} todoitems={todoitems}/>
                   
      </center>
    </>
  );
}

export default App;
