import React from 'react'

const TodoList = () => {
  let todos = [
    "Go to the gym",
    "Eat more fruits and vegies",
    "Pick up the kids from school"

  ]
  return (
    <ul className="main">
      {
        todos.map((todo, todoIndex) => {
          return <li className="todoItem" key={todoIndex}>{todo}</li>
        })
      }
    </ul>
  )
}

export default TodoList