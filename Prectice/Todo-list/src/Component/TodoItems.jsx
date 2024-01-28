import TodoItem from "./TodoItem";

export default function TodoItems({ todoItems }) {
  return (
    <>
      <div className="items-container">
      {todoItems.map((item, index) => (
          <TodoItem
            key={index}  // Add a unique key
            todoDate={item.dueDate}
            todoName={item.name}
          ></TodoItem>
        ))}
      </div>
    </>
  );
}
