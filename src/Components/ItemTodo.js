//npm import
import React from 'react'

//local import

const ItemTodo = ({ toggleTodo }) => {
  return (
    <td class='text' onClick={toggleTodo}>Test</td>
  )
}

export default ItemTodo;