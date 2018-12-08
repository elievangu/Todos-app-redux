//npm import
import React from 'react';

//local import
import ItemTodo from '../Components/ItemTodo';
import ButtonToggle from '../Containers/ButtonToggle';
import ButtonTrash from '../Containers/ButtonTrash'

const ListItems = ({ onHandleToggle, onHandleTrash, todos }) => {
  
  const todosList = todos.map(todo => 
    <tr>
      <ItemTodo 
        key={todo.id} 
        {...todo} 
        onClick={() => onHandleToggle(todo.id)} />
      <ButtonToggle onClick={() => onHandleToggle(todo.id)} />
      <ButtonTrash onClick={() => onHandleTrash(todo.id)} />
    </tr>);

  return (

    <tbody>
      {todosList} 
    </tbody>
  )
}

export default ListItems;