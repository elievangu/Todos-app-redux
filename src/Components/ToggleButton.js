//npm import
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

//local import

library.add(faCheck);

const ToggleButton = ({ handleToggle }) => {
  return (
    <td className='icon toggle'><button onClick={handleToggle}><FontAwesomeIcon icon='check' size='3x'/></button></td>
  )
}

export default ToggleButton;