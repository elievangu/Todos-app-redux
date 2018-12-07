//npm import
import React from 'react';

//local import
import ItemTodo from '../Components/ItemTodo';
import ToggleButton from '../Components/ToggleButton';
import TrashButton from '../Components/TrashButton'

const ListItems = ({ onHandleToggle, onHandleTrash, todos }) => {
  
  const todosList = todos.map((todo, id) => 
    <tr>
      <ItemTodo 
        key={id} 
        {...todo} 
        onClick={() => onHandleToggle(id)} />
      <ToggleButton onClick={() => onHandleToggle(id)} />
      <TrashButton onClick={() => onHandleTrash(id)} />
    </tr>);

  return (

    <tbody>
      {todosList} 
    </tbody>
  )
}

export default ListItems;