import React from "react";
import TodoCard from "./TodoCard";

const TodoList = () => {
  let todos = [
    "Go to the gym",
    "Eat more fruits and vegies",
    "Pick up the kids from school",
  ];
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
        <TodoCard key={todoIndex}>
          <p>{todo}</p>
        </TodoCard>
        );
      })}
    </ul>
  );
};

export default TodoList;
