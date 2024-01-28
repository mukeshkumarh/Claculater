import TodoItem from "./TodoItem";
export default function Todoitems({ todoitems }) {
  return (
    <div>
      {todoitems.map((item) => (
        <TodoItem key={item} todoDate={item.dueDate} todoName={item.name} />
      ))}
    </div>
  );
}
