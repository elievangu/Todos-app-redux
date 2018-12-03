//npm import
import React from 'react';

//local import
import ItemTodo from '../Components/ItemTodo';
import ToggleButton from '../Components/ToggleButton';
import TrashButton from '../Components/TrashButton'

const ListItems = () => {

  return (
    <tbody>
      <tr>
        <ItemTodo />
        <ToggleButton />
        <TrashButton />
      </tr>
    </tbody>
  )
}

export default ListItems;