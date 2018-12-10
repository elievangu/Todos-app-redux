//npm import
import React from 'react';

//local import

const ItemTodo = ({ text, completed, handleToggle }) => {
  return (
    <td className={completed ? 'text completed' : 'text ongoing'} onClick={handleToggle}>{text}</td>
  )
}

export default ItemTodo;