//npm import
import React from 'react';

//local import
import ItemTodo from './ItemTodo';
import ButtonToggle from '../Containers/ButtonToggle';
import ButtonTrash from '../Containers/ButtonTrash'

const ListItems = ({ todos, onHandleToggle, onHandleTrash }) => {
  
  const todosList = todos.map(todo => 
    <tr>
      <ItemTodo 
        key={todo.id} 
        {...todo} 
        onClick={onHandleToggle} />
      <ButtonToggle onClick={onHandleToggle} />
      <ButtonTrash onClick={onHandleTrash} />
    </tr>);

  return (

    <tbody>
      {todosList} 
    </tbody>
  )
}

export default ListItems;