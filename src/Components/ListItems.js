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
        key={`Item ${todo.id}`} 
        {...todo} 
        handleToggle={() => onHandleToggle(todo.id)} />
      <ButtonToggle key={`Toggle ${todo.id}`} handleToggle={(id) => onHandleToggle(todo.id)} />
      <ButtonTrash key={`Trash ${todo.id}`} handleTrash={(id) => onHandleTrash(todo.id)} />
    </tr>);

  return (

    <tbody>
      {todosList} 
    </tbody>
  )
}

export default ListItems;