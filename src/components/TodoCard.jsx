import React from "react";

const TodoCard = (props) => {
  const {children} = props
  return (
    <li li className="todoItem">
      {children}
      <div className="actionsContainer">
        {" "}
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash"></i>
      </div>
    </li>
  );
};

export default TodoCard;
