import React from "react";

const TodoCard = (props) => {
  const { children, handleDeleteTodo , index, handleEditTodo } = props;
  return (
    <li li className="todoItem">
      {children}
      <div className="actionsContainer">
        {" "}
        <button >
          {" "}
          <i onClick={() => handleEditTodo(index)} className="fa-solid fa-pen-to-square"></i>
        </button>
        <button>
          {" "}
          <i className="fa-solid fa-trash" onClick={() => handleDeleteTodo(index)}></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
