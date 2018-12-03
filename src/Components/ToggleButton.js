//npm import
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

//local import

library.add(faCheck);

const ToggleButton = ({ toggleTodo }) => {
  return (
    <td className='icon toggle'><button onClick={toggleTodo}><FontAwesomeIcon icon='check' size='3x'/></button></td>
  )
}

export default ToggleButton;