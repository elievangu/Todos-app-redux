//npm import
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

//local import

library.add(faTrashAlt);

const TrashButton = ({ trashTodo }) => {
  return (
    <td className='icon'><button onClick={trashTodo}><FontAwesomeIcon icon='trash-alt' size='3x'/></button></td>
  )
}

export default TrashButton;