//npm import
import React from 'react';

//local import
import ItemTodo from './ItemTodo';
import ButtonToggle from '../Containers/ButtonToggle';
import ButtonTrash from '../Containers/ButtonTrash'

const ListItems = ({ todos, onHandleDelete, onHandleToggle }) => {
  
  const todosList = todos.map(todo => 
    <tr>
      <ItemTodo 
        key={`Item ${todo.id}`} 
        {...todo} 
        handleToggle={() => onHandleToggle(todo.id)} />
      <ButtonToggle key={`Toggle ${todo.id}`} handleToggle={() => onHandleToggle(todo.id)} />
      <ButtonTrash key={`Trash ${todo.id}`} handleDelete={() => onHandleDelete(todo.id)} />
     
    </tr>);

  return (

    <tbody>
      {todosList} 
    </tbody>
  )
}

export default ListItems;