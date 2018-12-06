//npm import
import React from 'react';

//local import

const ItemTodo = ({ text, completed, toggleTodo }) => {
  return (
    <td class={completed ? 'text completed' : 'text ongoing'} onClick={toggleTodo}>{text}</td>
  )
}

export default ItemTodo;